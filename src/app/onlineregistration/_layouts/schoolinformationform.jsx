'use client'
import { 
    HR, 
    Label, 
    Select 
} from "flowbite-react";
import moment from "moment";

const SchoolInformationForm = () => {
    return <>
        <div>
            <HR.Text text="School Information"/>
            <div className="mb-2 block">
                <Label htmlFor="schoolyear" value="School Year"/>
            </div>
            <Select id="schoolyear" required defaultValue={""}>
                <option value="">Select School Year</option>
                <option value={`${moment().add("-1", "years").format("yyyy")}-${moment().format("yyyy")}}`}>{moment().add("-1", "years").format("yyyy")}-{moment().format("yyyy")}</option>
                <option value={`${moment().format("yyyy")}-${moment().add("1", "years").format("yyyy")}}`}>{moment().format("yyyy")}-{moment().add("1", "years").format("yyyy")}</option>
            </Select>
        </div>
    </>
};

export default SchoolInformationForm;