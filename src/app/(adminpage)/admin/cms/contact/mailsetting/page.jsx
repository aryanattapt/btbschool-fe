'use client'
import {
    Label,
    Button,
    Spinner,
    TextInput,
} from "flowbite-react";
import { Suspense, useEffect, useState } from "react";
import NavbarSidebarLayout from '../../../_layouts/navigation';
import Swal from "sweetalert2";
import AdminHeader from '../../../_components/header'
import CustomEditor from '../../../../../_components/customformeditor';
import { GetConfig, SubmitConfig } from "../../../../../../../services/config.service";
import { detransformJsonLanguage, transformJsonLanguage } from "../../../../../../../helpers/jsontransform.helper";
import Loader from '../../../../../_components/loader';
import { checkPermission } from '../../../../../../../services/auth.service';

const MailForm = () => {
    const [isLoadingPage, setIsLoadingPage] = useState(true);
	const [isAuthorized, setIsAuthorized] = useState(null);

    const type = 'admincms.contact.mailcontent'
    const configName = 'general';
    const [isLoading, setIsLoading] = useState(false);
    const [payload, setPayload] = useState({})

    useEffect(() => {
        fetchData(fetchMailContent);
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

    const fetchMailContent = async () => {
        try {
            const data = await GetConfig(configName, {"type": type});
            const deTransformJson = detransformJsonLanguage(data[0]);
            setPayload(deTransformJson);
        } catch (error) {
            Swal.fire({
                allowOutsideClick: false,
                title: 'Error Notification!',
                text: error.toString(),
                icon: 'error',
            });
        }
    };

    const formChangeHandler = (e) => {
        const { name, value, type, files } = e.target;
        if(type == 'file'){
            Object.keys(files).map((val) => {
                setPayload(prevState => ({
                    ...prevState,
                    [name]: prevState[name] ? [...prevState[name], files[val]] : [files[val]]
                }));
            });
        } else if(type == 'checkbox'){
            if(e.target.checked){
                setPayload(prevState => ({
                    ...prevState,
                    [name]: prevState[name] ? [...prevState[name], value] : [value]
                }));
            } else{
                setPayload(prevState => ({
                    ...prevState,
                    [name]: prevState[name].filter(val => val !== value)
                }));
            }
        }
        else{
            setPayload(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const validateData = (str) => {
        const matches = str.match(/%s/g);
        return matches && matches.length === 3;
    }

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validateEmails = (emailsString) => {
        const emails = emailsString.trim().split(';').map(email => email.trim());
        return emails.every(validateEmail);
    };    

    const submitHandler = async (e) => {
        try {
            if(!validateEmails(payload?.emailrecepient || '')){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "Must Be Valid Email Format. If there is multiple Recepient split using \";\". Example: test@test.com;test1@test1.com",
                    icon: 'error',
                });
                return;
            }
            if(!validateData(payload?.content || '')){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "Mail Content should have 3 %s character. First %s is First name. Second %s is Last Name. Last %s is Message.",
                    icon: 'error',
                });
                return;
            }

            setIsLoading(true);
            const finalPayload = {...payload, "type": type};
            const transformedPayload = [transformJsonLanguage(finalPayload)];
            
            await SubmitConfig(configName, transformedPayload);
            await fetchMailContent();
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
            setIsLoading(false);
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
                    <AdminHeader title="Contact Mail Setting Form"/>
                </div>
                
                <div className="mt-4 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                    Email Recepient
                </div>
                <div>
                    <TextInput value={payload.emailrecepient || ''} id="emailrecepient" name="emailrecepient"  type="text" autoFocus={true} onChange={formChangeHandler} placeholder="test@test.com;test1@test1.com"/>
                    <p className="mt-1 text-sm text-gray-500">Must Be Valid Email Format. If there is multiple Recepient split using ";". Example: test@test.com;test1@test1.com</p>
                </div>
                <div className="mt-4 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                    Mail Content
                </div>
                <div>
                    <CustomEditor name='content' onChange={formChangeHandler} value={payload.content || ''} />
                    <p className="mt-1 text-sm text-gray-500">Mail Content should have 3 %s character. First %s is First name. Second %s is Last Name. Last %s is Message.</p>
                </div>
                <div className="mt-1 grid grid-cols-1 font-sm gap-[0.625rem] md:grid-cols-3 md:gap-x-0.75">
                    <div className="flex">
                        <div className="mt-1 py-1.25 px-0.75 items-center text-center w-1/2 md:w-full">
                            <Button type="submit" id="btnSaveAndSend" name="btnSaveAndSend" className="w-full lg:w-auto" disabled={isLoading} onClick={submitHandler}>
                                {
                                    isLoading ? <>
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

const ContactMailSettingPage = () => {
    return <Suspense>
        <MailForm/>
    </Suspense>
}

export default ContactMailSettingPage;