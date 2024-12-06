'use client'
import {
    Label,
    Button,
    Spinner,
    TextInput,
    Textarea,
} from "flowbite-react";
import { Suspense, useEffect, useState } from "react";
import NavbarSidebarLayout from '../../_layouts/navigation';
import Swal from "sweetalert2";
import AdminHeader from '../../_components/header'
import Loader from '../../../../_components/loader';
import { checkPermission } from '../../../../../../services/auth.service';
import { GetEmailConfig, GetInstagramConfig, GetRecaptchaConfig, UpdateEmailConfig, UpdateInstagramonfig, UpdateRecaptchaConfig } from "../../../../../../services/secretkey.service";

const SecretKeyForm = () => {
    const [isAuthorized, setIsAuthorized] = useState(null);
    
    const [isLoadingPage, setIsLoadingPage] = useState(true);
    const [isLoadingMail, setIsLoadingMail] = useState(false);
    const [isLoadingRecaptcha, setIsLoadingRecaptcha] = useState(false);
    const [isLoadingInstagram, setIsLoadingInstagram] = useState(false);

    const [payloadMail, setPayloadMail] = useState({})
    const [payloadRecaptcha, setPayloadRecaptcha] = useState({})
    const [payloadInstagram, setPayloadInstagram] = useState({})

    useEffect(() => {
        fetchData(fetchAllContent);
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

    const fetchAllContent = async () => {
        try {
            const results = await Promise.allSettled([
                fetchEmailConfigContent(),
                fetchRecaptchaConfigContent(),
                fetchInstagramConfigContent(),
            ]);

            const rejectedPromises = results.filter(result => result.status === 'rejected');

            if (rejectedPromises.length > 0) {
                const errors = rejectedPromises.map(result => result.reason);
                throw new Error(errors.join(', '));
            }
        } catch (error) {
            Swal.fire({
                allowOutsideClick: false,
                title: 'Error Notification!',
                text: error.toString(),
                icon: 'error',
            });
        }
    };

    const fetchRecaptchaConfigContent = async () => new Promise(async (resolve, reject) => {
        try {
            const recaptchaConfig = await GetRecaptchaConfig();
            setPayloadRecaptcha(recaptchaConfig?.data);
            return resolve(true);
        } catch (error) {
            return reject(error);
        }
    })

    const fetchEmailConfigContent = async () => new Promise(async (resolve, reject) => {
        try {
            const emailConfig = await GetEmailConfig();
            setPayloadMail(emailConfig?.data);
            return resolve(true);
        } catch (error) {
            return reject(error);
        }
    })

    const fetchInstagramConfigContent = async () => new Promise(async (resolve, reject) => {
        try {
            const emailConfig = await GetInstagramConfig();
            setPayloadInstagram(emailConfig?.data);
            return resolve(true);
        } catch (error) {
            return reject(error);
        }
    })

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

    const formChangeHandlerInstagram = (e) => {
        const { name, value, type, files } = e.target;
        if(type == 'file'){
            Object.keys(files).map((val) => {
                setPayloadInstagram(prevState => ({
                    ...prevState,
                    [name]: prevState[name] ? [...prevState[name], files[val]] : [files[val]]
                }));
            });
        } else if(type == 'checkbox'){
            if(e.target.checked){
                setPayloadInstagram(prevState => ({
                    ...prevState,
                    [name]: prevState[name] ? [...prevState[name], value] : [value]
                }));
            } else{
                setPayloadInstagram(prevState => ({
                    ...prevState,
                    [name]: prevState[name].filter(val => val !== value)
                }));
            }
        }
        else{
            setPayloadInstagram(prevState => ({
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
            await fetchEmailConfigContent();
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
            await fetchRecaptchaConfigContent();
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

    const submitHandlerInstagram = async (e) => {
        try {
            if(!payloadInstagram.token){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "Instagram token is mandatory",
                    icon: 'error',
                });
                return;
            }

            setIsLoadingInstagram(true);
            await UpdateInstagramonfig({...payloadInstagram, "type": "instagramtoken"});
            await fetchInstagramConfigContent();
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
            setIsLoadingInstagram(false);
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
                    <AdminHeader title="Secret Key Setting Form"/>
                </div>
                
                <div className="mt-4 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                    Email Notification Config
                </div>
                <div>
                    <p className="mt-1 text-sm text-gray-500">Please contact your email provider to get those SMTP Settings such as SMTP Host And Port.</p>
                    <p className="mt-1 text-sm text-gray-500">Make sure the configuration is not blocked by the email provider.</p>
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
                    <p className="mt-1 text-sm text-gray-500">SMTP Port. Example: 465. Commonly used: 25/465/587.</p>
                    <p className="mt-1 text-sm text-gray-500">Port 587 is the preferred port for sending emails securely with STARTTLS.</p>
                    <p className="mt-1 text-sm text-gray-500">Port 25 should generally be avoided for sending email from clients, but may still be used for server-to-server communication.</p>
                    <p className="mt-1 text-sm text-gray-500">Port 465 is less commonly used and considered deprecated, but it can be an alternative if your mail server supports it.</p>
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
                    <p className="mt-2 text-sm text-gray-600">
                        Please configure your reCAPTCHA settings <a 
                            href="https://www.google.com/recaptcha/admin/create" 
                            className="text-blue-600 hover:text-blue-800 underline" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Go to Google reCAPTCHA configuration page">
                            here
                        </a>.
                    </p>
                    <p className="mt-1 text-sm text-gray-500">Please ensure you are using reCAPTCHA v2 and add both your main and testing domains for proper integration.</p>
                    <p className="mt-1 text-sm text-gray-500">You can find those key at settings</p>
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

                <div className="mt-4 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                    Instagram Config
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label value="Token" />
                    </div>
                    <Textarea value={payloadInstagram.token || ''} id="token" name="token"  type="text" onChange={formChangeHandlerInstagram} required rows={4} />
                    <p className="mt-1 text-sm text-gray-500">Instagram Basic API Token</p>
                </div>

                <div className="mt-1 grid grid-cols-1 font-sm gap-[0.625rem] md:grid-cols-3 md:gap-x-0.75">
                    <div className="flex">
                        <div className="mt-1 py-1.25 px-0.75 items-center text-center w-1/2 md:w-full">
                            <Button type="submit" id="btnSaveAndSendInstagram" name="btnSaveAndSendInstagram" className="w-full lg:w-auto" disabled={isLoadingInstagram} onClick={submitHandlerInstagram}>
                                {
                                    isLoadingInstagram ? <>
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