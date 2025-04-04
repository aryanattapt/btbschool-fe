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

    const type = 'admincms.alumnisubmission.mailcontent'
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
        console.log(matches.length);
        return matches && matches.length === 13;
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
                    text: "Mail Content should have 13 %s character which represent data from alumni. You can check the rule on the notes below.",
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
                    <AdminHeader title="Alumni Submission Mail Setting Form"/>
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
                    <p className="mt-1 text-sm text-gray-500">Notes:</p>
                    <p className="mt-1 text-sm text-gray-500">
                        a. It represent the mail content that will be send to email Recepient after user submit data from pendaftaran alumni form (/alumni). <br/> 
                        You can customize the mail content (non %s variable). <br/>
                        The %s variable is mandatory variable which represent data/value from pendaftaran alumni form. <br/>
                        After email is sent to email Recepient the %s variabel will be replaced by value from pendaftaran alumni form.
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        b. Variable %s Explanation<br/>
                        Mail Content should have 13 %s character which represent value from pendaftaran alumni form as follows:</p>
                    <ol class="space-y-1 list-decimal pl-5 text-sm text-gray-500">
                        <li>%s (Name) - Replaced with the first name of the alumni who filled out the form.</li>
                        <li>%s (Email) - Replaced with the alumni's email address.</li>
                        <li>%s (Phone Number) - Replaced with the alumni's phone number.</li>
                        <li>%s (Address) - Replaced with the alumni's address.</li>
                        <li>%s (Gender) - Replaced with the alumni's gender (Male/Female).</li>
                        <li>%s (Undergraduate University) - Replaced with the name of the alumni’s undergraduate university.</li>
                        <li>%s (Postgraduate University) - Replaced with the name of the alumni’s postgraduate university (if applicable).</li>
                        <li>%s (Major) - Replaced with the alumni's major/field of study.</li>
                        <li>%s (Year of Graduation) - Replaced with the year the alumni graduated.</li>
                        <li>%s (Career Pathway & Current Activities) - Replaced with the alumni’s current career pathway and activities.</li>
                        <li>%s (Moments in BTB) - Replaced with the most memorable moments the alumni had during their time at BTB.</li>
                        <li>%s (Social Media) - Replaced with the alumni's social media account information.</li>
                        <li>%s (Photo Link) - Replaced with the link to the alumni’s uploaded photo.</li>
                    </ol>
                    <p className="mt-1 text-sm text-gray-500">c. Example:</p>
                    <p className="mt-1 text-sm text-gray-500">--- Rule ---</p>
                    <p className="mt-1 text-sm text-gray-500">Dear Mr/Mrs. %s,</p>
                    <p className="mt-1 text-sm text-gray-500">--- Mail content received ---</p>
                    <p className="mt-1 text-sm text-gray-500">Dear Mr/Mrs. Name,</p>
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