'use client'
import SignaturePad from "@/app/_components/signaturepad";
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
import { useState } from "react";
import { Button } from "flowbite-react";

const OnlineRegistrationForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [onlineRegisPayload, setOnlineRegisPayload] = useState({});

    const formChangeHandler = (e) => {
        const { name, value, type, files } = e.target;
        if(type == 'file'){
            setOnlineRegisPayload(prevState => ({
                ...prevState,
                [name]: files
            }));
        } else{
            setOnlineRegisPayload(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const submitHandler = (e) => {
        setIsLoading(true);
        console.log(onlineRegisPayload);

        /* Call API in here... */
        
        setIsLoading(false);
    }

    return <>
        <div className="max-w-full grid gap-3">
            {/* Page 1 */}
            <SchoolInformationForm formChangeHandler={formChangeHandler}/>
            <StudentDetailForm formChangeHandler={formChangeHandler}/>
            <EducationalBackgroundForm formChangeHandler={formChangeHandler}/>
            <ParentsInformationForm formChangeHandler={formChangeHandler}/>
            <EmergencyContactForm formChangeHandler={formChangeHandler}/>
            <DetailOfSiblingForm formChangeHandler={formChangeHandler}/>
            <SignaturePad formChangeHandler={formChangeHandler} name="ttd"/>

            {/* Page 2 */}
            {/* Peraturan dan Persyaratan Static Page */}

            {/* Page 3 */}
            <PersonalHealthInformationForm currentData={onlineRegisPayload} formChangeHandler={formChangeHandler}/>
            <MedicalProblemForm formChangeHandler={formChangeHandler}/>
            {/* Sign */}

            {/* Page 4 */}
            <RecomendedForm formChangeHandler={formChangeHandler}/>
            <AttachmentForm formChangeHandler={formChangeHandler}/>

            <div>
                <Button type="submit" className="w-full lg:w-auto" disabled={isLoading} onClick={submitHandler}>
                    {
                        isLoading ? <>
                            <Spinner aria-label="Spinner button example" size="sm" />
                            <span className="pl-3">Please Wait...</span>
                        </> : <>
                            Kirim  
                        </>
                    }
                </Button>
            </div>
        </div>
    </>
}

export default OnlineRegistrationForm;