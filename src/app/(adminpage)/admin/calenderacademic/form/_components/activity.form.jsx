'use client'
import {
    Label,
    Textarea,
} from "flowbite-react";

const CalenderAcademicActivityForm = ({formChangeHandler, language, payload}) => {
    return <>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="activity" value={language == "ID" ? "Aktivitas" : "Activity"} />
            </div>
            <Textarea value={payload[`activity[${language}]`]} id="activity" name={`activity[${language}]`} required rows={4} onChange={formChangeHandler}/>
        </div>
    </>
}

export default CalenderAcademicActivityForm;