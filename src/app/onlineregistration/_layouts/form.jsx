'use client'
import EducationalBackgroundForm from "./educationalbackgroundform";
import EmergencyContactForm from "./emergencycontactform";
import SchoolInformationForm from "./schoolinformationform";
import StudentDetailForm from "./studentdetailform";

const OnlineRegistrationForm = () => {
    return <>
        <div className="max-w-full grid gap-3">
            <SchoolInformationForm/>
            <StudentDetailForm/>
            <EducationalBackgroundForm/>
            {/* Parents / Guardian Information */}
            <EmergencyContactForm/>
        </div>
    </>
}

export default OnlineRegistrationForm;