'use client'
import {
    Button,
    Spinner,
    TextInput,
    Textarea,
} from "flowbite-react";
import { Suspense, useEffect, useRef, useState } from "react";
import NavbarSidebarLayout from '../../../_layouts/navigation';
import Swal from "sweetalert2";
import AdminHeader from '../../../_components/header'
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
    const [payload, setPayload] = useState({});

    const mappingButtonValue = [
        { "key": "firstname", "text": "First Name" },
        { "key": "lastname", "text": "Last Name" },
        { "key": "birthdate", "text": "Birth Date" },
        { "key": "gender", "text": "Gender" },
        { "key": "laststudentyear", "text": "Last Year At BTB" },
        { "key": "edukasiOptions", "text": "Education" },
        { "key": "undergraduateuniversityname", "text": "Undergraduate University Name" },
        { "key": "postgraduateuniversityname", "text": "Postgraduate University Name" },
        { "key": "major", "text": "Major" },
        { "key": "yeargraduation", "text": "Year Of Graduation" },
        { "key": "statusKerjaOptions", "text": "Working Status" },
        { "key": "professionname", "text": "Profession Name" },
        { "key": "currentlocation", "text": "Current Location" },
        { "key": "phoneno", "text": "Phone No" },
        { "key": "email", "text": "Email" },
        { "key": "address", "text": "Address" },
        { "key": "careerpathwayandactivities", "text": "Career Pathway & what is your Activities now?" },
        { "key": "momentatbtb", "text": "Moments at BTB" },
        { "key": "socialmedia", "text": "Social Media" }
    ];    
    const editorRef = useRef(null);

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

            /* if(!validateData(payload?.content || '')){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "Mail Content should have 13 %s character which represent data from alumni. You can check the rule on the notes below.",
                    icon: 'error',
                });
                return;
            } */

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

    const insertTextAtCursor = (textToInsert) => {
        const textarea = editorRef.current;
        if (textarea) {
            const cursorPosition = textarea.selectionStart;
            const currentValue = textarea.value;

            const newValue = currentValue.slice(0, cursorPosition) + textToInsert + currentValue.slice(cursorPosition);

            setPayload((prevState) => ({
                ...prevState,
                content: newValue,
            }));

            setTimeout(() => {
                textarea.selectionStart = textarea.selectionEnd = cursorPosition + textToInsert.length;
                textarea.focus();
            }, 0);
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
                    <div>
                        <Textarea ref={editorRef} rows={4} cols={4} name="content" onChange={formChangeHandler} value={payload.content || ''} />
                    </div>

                    <div className="mt-4">
                        <div className="mt-4 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                            Insert value from the alumni page Using This Button
                        </div>
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {
                                mappingButtonValue.map((val) => {
                                    return <Button onClick={() => insertTextAtCursor(`{${val.key}}`)} className="w-full">
                                        {val.text}
                                    </Button>
                                })
                            }
                        </div>
                    </div>

                    <p className="mt-1 text-sm text-gray-500">Notes:</p>
                    <p className="mt-1 text-sm text-gray-500">
                        a. It represent the mail content that will be send to email Recepient after user submit data from pendaftaran alumni form (/alumni). <br/> 
                        You can customize the mail content. To Insert Value From Alumni Page Please Use The Button Above <br/>
                        b. If you want to remove the value from mail content just delete this pattern {"{...any}"} <br/>
                        Example: {"test {nama} -> test"}
                    </p>
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