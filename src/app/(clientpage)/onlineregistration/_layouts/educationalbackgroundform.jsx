'use client'
import { 
    HR, 
    Label, 
    Select, 
    TextInput 
} from "flowbite-react";

const EducationalBackgroundForm = ({formChangeHandler, payload}) => {
    return <>
        {/* <div>
            <HR.Text text="Educational Background"/>
        </div> */}
        <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
            Educational Background
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block w-72">
                <Label htmlFor="previousschoolname" value="Previous School Name"/>
            </div>
            <TextInput className="md:w-full pr-10 md:pr-0" value={payload.previousschoolname || ''} id="previousschoolname" name="previousschoolname" type="text" onChange={formChangeHandler}/>
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block w-72">
                <Label htmlFor="yearlevelprevschool" value="Year Level at Previous School"/>
            </div>
            <TextInput className="md:w-full pr-10 md:pr-0" value={payload.yearlevelprevschool || ''} id="yearlevelprevschool" name="yearlevelprevschool" type="text" onChange={formChangeHandler}/>
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block w-72">
                <Label htmlFor="nextclass" value="Class to which admission is sought"/>
            </div>
            <Select className="md:w-full pr-10 md:pr-0" value={payload.nextclass || ''} id="nextclass" name="nextclass" required onChange={formChangeHandler}>
                <option value="">Select Class</option>
                <option value="nursery">Nursery</option>
            </Select>
        </div>
    </>
}

export default EducationalBackgroundForm;