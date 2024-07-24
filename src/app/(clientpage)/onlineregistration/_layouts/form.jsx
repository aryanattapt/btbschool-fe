'use client'
import SignaturePad from "../../../_components/signaturepad";
import AttachmentForm from "./attachment.form";
import DetailOfSiblingForm from "./detailofsibling.form";
import EducationalBackgroundForm from "./educationalbackgroundform";
import EmergencyContactForm from "./emergencycontactform";
import MedicalProblemForm from "./medicalproblem.form";
import ParentsInformationForm from "./parentinformation.form";
import PersonalHealthInformationForm from "./personalhealthinformation.form";
import RecomendedForm from "./recomended.form";
import SchoolInformationForm from "./schoolinformationform";
import StudentDetailForm from "./studentdetailform";
import DraftNoForm from './draft.form';
import { useState } from "react";
import { Button, Spinner } from "flowbite-react";
import { UploadAttachment } from "../../../../../services/attachment.service";
import { SubmitStudentRegistration } from "../../../../../services/onlineregistration.service";
import Swal from "sweetalert2";

const OnlineRegistrationForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingSaveAsDraft, setIsLoadingSaveAsDraft] = useState(false);
    const [isLoadingSaveAndSend, setIsLoadingSaveAndSend] = useState(false);
    const [registrationPayload, setRegistrationPayload] = useState({});

    const formChangeHandler = (e) => {
        const { name, value, type, files } = e.target;
        if(type == 'file'){
            Object.keys(files).map((val) => {
                setRegistrationPayload(prevState => ({
                    ...prevState,
                    [name]: prevState[name] ? [...prevState[name], files[val]] : [files[val]]
                }));
            });
        } else if(type == 'checkbox'){
            if(e.target.checked){
                setRegistrationPayload(prevState => ({
                    ...prevState,
                    [name]: prevState[name] ? [...prevState[name], value] : [value]
                }));
            } else{
                setRegistrationPayload(prevState => ({
                    ...prevState,
                    [name]: prevState[name].filter(val => val !== value)
                }));
            }
        }
        else{
            setRegistrationPayload(prevState => ({
                ...prevState,
                [name]: (name == 'phoneno') ? `+62${value}` : value
            }));
        }
    };

    const datePickerHandler = (name, value) => {
        setRegistrationPayload(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const submitHandler = (isFinal, setStateCallBack) => {
        console.log(`Masuk Submit Handler`);
        console.log(registrationPayload);
        setStateCallBack(true);

        /* Collect Attachment */
        var formData = new FormData();
        registrationPayload?.birthcertificateattachment.map((val) => {
            formData.append('birthcertificate', val);
        });
        registrationPayload?.familycardattachment.map((val) => {
            formData.append('familycardattachment', val);
        });
        registrationPayload?.reportcardattachment.map((val) => {
            formData.append('reportcardattachment', val);
        });

        /* Call API in here... */
        UploadAttachment('studentregistration', formData)
        .then((res) => {
            const studentRegistrationPayload = {...registrationPayload};
            delete studentRegistrationPayload.birthcertificateattachment;
            delete studentRegistrationPayload.familycardattachment;
            delete studentRegistrationPayload.reportcardattachment;
            
            studentRegistrationPayload.attachment = res.data;
            studentRegistrationPayload._id = studentRegistrationPayload.draftregistrationno;
            studentRegistrationPayload.status = isFinal ? 'send' : 'draft';
            delete studentRegistrationPayload.draftregistrationno;
            
            SubmitStudentRegistration(studentRegistrationPayload)
            .then(_ => {
                setStateCallBack(false);
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Student Submission Notification!',
                    text: "Success submit student data!",
                    icon: 'info',
                });
            })
            .catch((err) => {
                setStateCallBack(false);
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Student Submission Notification!',
                    text: err,
                    icon: 'error',
                });
            })
        })
        .catch((err) => {
            setStateCallBack(false);
            Swal.fire({
                allowOutsideClick: false,
                title: 'Student Submission Notification!',
                text: err,
                icon: 'error',
            });
        });
    }

    const saveAndSendHandler = (e) => {
        submitHandler(true, setIsLoadingSaveAndSend);
    }

    const saveAsDraftHandler = (e) => {
        submitHandler(false, setIsLoadingSaveAndSend);
    }

    return <>
        <div className="max-w-full grid gap-3">
            {/* Page Draft Registration No */}
            <DraftNoForm payload={registrationPayload} formChangeHandler={formChangeHandler}/>

            {/* Page 1 */}
            <SchoolInformationForm payload={registrationPayload} formChangeHandler={formChangeHandler}/>
            <StudentDetailForm payload={registrationPayload} formChangeHandler={formChangeHandler} datePickerHandler={datePickerHandler}/>
            <EducationalBackgroundForm payload={registrationPayload} formChangeHandler={formChangeHandler}/>
            <ParentsInformationForm payload={registrationPayload} formChangeHandler={formChangeHandler} datePickerHandler={datePickerHandler}/>
            <EmergencyContactForm payload={registrationPayload} formChangeHandler={formChangeHandler}/>
            <DetailOfSiblingForm payload={registrationPayload} formChangeHandler={formChangeHandler} name="siblinglist"/>
            <SignaturePad payload={registrationPayload} formChangeHandler={formChangeHandler} name="ttd"/>

            {/* Page 2 */}
            {/* Peraturan dan Persyaratan Static Page */}

            {/* Page 3 */}
            <PersonalHealthInformationForm payload={registrationPayload} formChangeHandler={formChangeHandler}/>
            <MedicalProblemForm payload={registrationPayload} formChangeHandler={formChangeHandler}/>
            {/* Sign */}

            {/* Page 4 */}
            <RecomendedForm payload={registrationPayload} formChangeHandler={formChangeHandler}/>
            <AttachmentForm formChangeHandler={formChangeHandler}/>

            <div className="mt-1 grid grid-cols-1 font-sm gap-[0.625rem] md:grid-cols-3 md:gap-x-0.75">
                <div>
                    <span className=" font-bold">Some text that goes here </span>
                    <div className="flex">
                        <div className="mt-1 py-1.25 px-0.75 items-center text-center w-1/2 md:w-full">
                            <Button type="submit" id="btnSaveAndSend" name="btnSaveAndSend" className="w-full lg:w-auto" disabled={isLoadingSaveAndSend} onClick={saveAndSendHandler}>
                                {
                                    isLoadingSaveAndSend ? <>
                                        <Spinner aria-label="Spinner button example" size="sm" />
                                        <span className="pl-3">Please Wait...</span>
                                    </> : <>
                                        Save And Send  
                                    </>
                                }
                            </Button>
                        </div>
                        <div className="mt-1 py-1.25 px-0.75 items-center text-center w-1/2 md:w-full">
                            <Button type="submit" className="w-full lg:w-auto" disabled={isLoadingSaveAsDraft} onClick={saveAsDraftHandler}>
                                {
                                    isLoadingSaveAsDraft ? <>
                                        <Spinner aria-label="Spinner button example" size="sm" />
                                        <span className="pl-3">Please Wait...</span>
                                    </> : <>
                                        Save As Draft
                                    </>
                                }
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
}

export default OnlineRegistrationForm;