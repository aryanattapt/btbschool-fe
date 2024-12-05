'use client'
import {
    Label,
    Button,
    Spinner,
    TextInput,
} from "flowbite-react";
import { Suspense, useEffect, useState } from "react";
import NavbarSidebarLayout from '../../_layouts/navigation';
import Swal from "sweetalert2";
import AdminHeader from '../../_components/header'
import Loader from '../../../../_components/loader';
import { checkPermission } from '../../../../../../services/auth.service';
import { GetEmailConfig, GetRecaptchaConfig, UpdateEmailConfig, UpdateRecaptchaConfig } from "../../../../../../services/secretkey.service";

const SecretKeyForm = () => {
    const [isLoadingPage, setIsLoadingPage] = useState(true);
	const [isAuthorized, setIsAuthorized] = useState(null);

    const [isLoadingMail, setIsLoadingMail] = useState(false);
    const [isLoadingRecaptcha, setIsLoadingRecaptcha] = useState(false);
    const [payloadMail, setPayloadMail] = useState({})
    const [payloadRecaptcha, setPayloadRecaptcha] = useState({})

    useEffect(() => {
        fetchData(fetchContent);
    }, []);

    const fetchData = async (callback) => {
		setIsLoadingPage(true);
		try {
			await checkPermission('manage_content');
			setIsAuthorized(true);
			await callback();
		} catch (error) {
			console.log(error);
			if(error.status != '401'){
				try {
					await callback();
				} catch (error) {console.log(error);}
			}
		} finally {
			setIsLoadingPage(false);
		}
	};

    const fetchContent = async () => {
        try {
            let [emailConfig, recaptchaConfig] = await Promise.allSettled([
                GetEmailConfig(),
                GetRecaptchaConfig()
            ]);

            emailConfig = emailConfig.status === 'fulfilled' ? emailConfig.value?.data : {};
            recaptchaConfig = recaptchaConfig.status === 'fulfilled' ? recaptchaConfig.value?.data : {};

            setPayloadMail(emailConfig); 
            setPayloadRecaptcha(recaptchaConfig);
        } catch (error) {
            Swal.fire({
                allowOutsideClick: false,
                title: 'Error Notification!',
                text: error.toString(),
                icon: 'error',
            });
        }
    };    

    const formChangeHandlerMail = (e) => {
        const { name, value, type, files } = e.target;
        if(type == 'file'){
            Object.keys(files).map((val) => {
                setPayloadMail(prevState => ({
                    ...prevState,
                    [name]: prevState[name] ? [...prevState[name], files[val]] : [files[val]]
                }));
            });
        } else if(type == 'checkbox'){
            if(e.target.checked){
                setPayloadMail(prevState => ({
                    ...prevState,
                    [name]: prevState[name] ? [...prevState[name], value] : [value]
                }));
            } else{
                setPayloadMail(prevState => ({
                    ...prevState,
                    [name]: prevState[name].filter(val => val !== value)
                }));
            }
        }
        else{
            setPayloadMail(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const formChangeHandlerRecaptcha = (e) => {
        const { name, value, type, files } = e.target;
        if(type == 'file'){
            Object.keys(files).map((val) => {
                setPayloadRecaptcha(prevState => ({
                    ...prevState,
                    [name]: prevState[name] ? [...prevState[name], files[val]] : [files[val]]
                }));
            });
        } else if(type == 'checkbox'){
            if(e.target.checked){
                setPayloadRecaptcha(prevState => ({
                    ...prevState,
                    [name]: prevState[name] ? [...prevState[name], value] : [value]
                }));
            } else{
                setPayloadRecaptcha(prevState => ({
                    ...prevState,
                    [name]: prevState[name].filter(val => val !== value)
                }));
            }
        }
        else{
            setPayloadRecaptcha(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const submitHandlerMail = async (e) => {
        try {
            if(!payloadMail.smtpemail){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "SMTP Email is mandatory",
                    icon: 'error',
                });
                return;
            } if(!payloadMail.smtppassword){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "SMTP Password is mandatory",
                    icon: 'error',
                });
                return;
            } if(!payloadMail.smtphost){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "SMTP Host is mandatory",
                    icon: 'error',
                });
                return;
            } if(!payloadMail.smtpport){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "SMTP Port is mandatory",
                    icon: 'error',
                });
                return;
            }

            setIsLoadingMail(true);
            await UpdateEmailConfig({...payloadMail, "type": "emailconfig"});
            await fetchContent();
            Swal.fire({
                allowOutsideClick: false,
                title: 'Submit Notification!',
                text: "Success!",
                icon: 'info',
            });
        } catch (error) {
            Swal.fire({
                allowOutsideClick: false,
                title: 'Submit Notification!',
                text: error.toString(),
                icon: 'error',
            });
        } finally{
            setIsLoadingMail(false);
        }
    };

    const submitHandlerRecaptcha = async (e) => {
        try {
            if(!payloadRecaptcha.recaptchasecretkey){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "Recaptcha Secret Key is mandatory",
                    icon: 'error',
                });
                return;
            } if(!payloadRecaptcha.recaptchasitekey){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "Recaptcha Site Key is mandatory",
                    icon: 'error',
                });
                return;
            }

            setIsLoadingRecaptcha(true);
            await UpdateRecaptchaConfig({...payloadRecaptcha, "type": "recaptcha"});
            await fetchContent();
            Swal.fire({
                allowOutsideClick: false,
                title: 'Submit Notification!',
                text: "Success!",
                icon: 'info',
            });
        } catch (error) {
            Swal.fire({
                allowOutsideClick: false,
                title: 'Submit Notification!',
                text: error.toString(),
                icon: 'error',
            });
        } finally{
            setIsLoadingRecaptcha(false);
        }
    };
    

    if(isLoadingPage){
        return <Loader/>
    } else
        return <NavbarSidebarLayout >
        {
            isAuthorized ? 
            <div className="max-w-full grid gap-3 md:px-8">
                <div className="mt-4 mb-4">
                    <AdminHeader title="Key Setting Form"/>
                </div>
                
                <div className="mt-4 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                    Email Config
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label value="Email" />
                    </div>
                    <TextInput value={payloadMail.smtpemail || ''} id="smtpemail" name="smtpemail"  type="text" autoFocus={true} onChange={formChangeHandlerMail} placeholder="noreply@host.com"/>
                    <p className="mt-1 text-sm text-gray-500">Email For Sending Message. Example: noreply@host.com</p>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label value="Password" />
                    </div>
                    <TextInput value={payloadMail.smtppassword || ''} id="smtppassword" name="smtppassword"  type="text" onChange={formChangeHandlerMail} placeholder="password"/>
                    <p className="mt-1 text-sm text-gray-500">Email's Password</p>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label value="SMTP Host" />
                    </div>
                    <TextInput value={payloadMail.smtphost || ''} id="smtphost" name="smtphost"  type="text" onChange={formChangeHandlerMail} placeholder="smtp.host.com"/>
                    <p className="mt-1 text-sm text-gray-500">SMTP Host. Example: smtp.host.com</p>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label value="SMTP Port" />
                    </div>
                    <TextInput value={payloadMail.smtpport || ''} id="smtpport" name="smtpport"  type="text" onChange={formChangeHandlerMail} placeholder="465"/>
                    <p className="mt-1 text-sm text-gray-500">SMTP Port. Example: 465</p>
                </div>
                <div className="mt-1 grid grid-cols-1 font-sm gap-[0.625rem] md:grid-cols-3 md:gap-x-0.75">
                    <div className="flex">
                        <div className="mt-1 py-1.25 px-0.75 items-center text-center w-1/2 md:w-full">
                            <Button type="submit" id="btnSaveAndSendMail" name="btnSaveAndSendMail" className="w-full lg:w-auto" disabled={isLoadingMail} onClick={submitHandlerMail}>
                                {
                                    isLoadingMail ? <>
                                        <Spinner aria-label="Spinner button example" size="sm" />
                                        <span className="pl-3">Please Wait...</span>
                                    </> : <>
                                        Save  
                                    </>
                                }
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mt-4 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                    Google Recaptcha V2 Config
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label value="Secret Key" />
                    </div>
                    <TextInput value={payloadRecaptcha.recaptchasecretkey || ''} id="recaptchasecretkey" name="recaptchasecretkey"  type="text" onChange={formChangeHandlerRecaptcha} placeholder=""/>
                    <p className="mt-1 text-sm text-gray-500">Google Recaptcha Secret Key</p>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label value="Site Key" />
                    </div>
                    <TextInput value={payloadRecaptcha.recaptchasitekey || ''} id="recaptchasitekey" name="recaptchasitekey"  type="text" onChange={formChangeHandlerRecaptcha} placeholder=""/>
                    <p className="mt-1 text-sm text-gray-500">Google Recaptcha Site Key</p>
                </div>

                <div className="mt-1 grid grid-cols-1 font-sm gap-[0.625rem] md:grid-cols-3 md:gap-x-0.75">
                    <div className="flex">
                        <div className="mt-1 py-1.25 px-0.75 items-center text-center w-1/2 md:w-full">
                            <Button type="submit" id="btnSaveAndSendRecaptcha" name="btnSaveAndSendRecaptcha" className="w-full lg:w-auto" disabled={isLoadingRecaptcha} onClick={submitHandlerRecaptcha}>
                                {
                                    isLoadingRecaptcha ? <>
                                        <Spinner aria-label="Spinner button example" size="sm" />
                                        <span className="pl-3">Please Wait...</span>
                                    </> : <>
                                        Save  
                                    </>
                                }
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            : <div>Unauthorized</div>
        }
        </NavbarSidebarLayout>
}

const SecretKeyPageSetting = () => {
    return <Suspense>
        <SecretKeyForm/>
    </Suspense>
}

export default SecretKeyPageSetting;