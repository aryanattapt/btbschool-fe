'use client'
import SignaturePad from "signature_pad";
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

const OnlineRegistrationForm = () => {
    return <>
        <div className="max-w-full grid gap-3">
            {/* Page 1 */}
            <SchoolInformationForm/>
            <StudentDetailForm/>
            <EducationalBackgroundForm/>
            <ParentsInformationForm/>
            <EmergencyContactForm/>
            <DetailOfSiblingForm/>
            <SignaturePad/>

            {/* Page 2 */}
            {/* Peraturan dan Persyaratan Static Page */}

            {/* Page 3 */}
            <PersonalHealthInformationForm/>
            <MedicalProblemForm/>
            {/* Sign */}

            {/* Page 4 */}
            <RecomendedForm/>
            <AttachmentForm/>
        </div>
    </>
}

export default OnlineRegistrationForm;