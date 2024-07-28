'use client'
import { 
    HR, 
    Label, 
    Select 
} from "flowbite-react";
import moment from "moment";

const SchoolInformationForm = ({formChangeHandler, payload}) => {
    return <>
        <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
            School Information
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block w-72">
                <Label htmlFor="schoolyear" value="School Year"/>
            </div>
            <div className="w-full pr-10 md:pr-0">
                <Select id="schoolyear" name="schoolyear" required value={payload.schoolyear || ''} onChange={formChangeHandler}>
                    <option value="">Select School Year</option>
                    <option value={`${moment().add("-1", "years").format("yyyy")}-${moment().format("yyyy")}`}>{moment().add("-1", "years").format("yyyy")}-{moment().format("yyyy")}</option>
                    <option value={`${moment().format("yyyy")}-${moment().add("1", "years").format("yyyy")}`}>{moment().format("yyyy")}-{moment().add("1", "years").format("yyyy")}</option>
                </Select>
            </div>
        </div>
    </>
};

export default SchoolInformationForm;