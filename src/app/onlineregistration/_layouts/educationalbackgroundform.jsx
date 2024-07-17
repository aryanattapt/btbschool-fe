'use client'
import { 
    HR, 
    Label, 
    Select, 
    TextInput 
} from "flowbite-react";

const EducationalBackgroundForm = () => {
    return <>
        <div>
            <HR.Text text="Educational Background"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="previousschoolname" value="Previous School Name"/>
            </div>
            <TextInput id="previousschoolname" type="text"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="yearlevelprevschool" value="Year Level at Previous School"/>
            </div>
            <TextInput id="yearlevelprevschool" type="text"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="nextclass" value="Class to which admission is sought"/>
            </div>
            <Select id="nextclass" required defaultValue={""}>
                <option value="">Select Class</option>
                <option value="nursery">Nursery</option>
            </Select>
        </div>
    </>
}

export default EducationalBackgroundForm;