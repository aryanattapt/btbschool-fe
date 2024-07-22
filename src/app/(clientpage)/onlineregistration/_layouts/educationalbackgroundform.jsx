'use client'
import { 
    HR, 
    Label, 
    Select, 
    TextInput 
} from "flowbite-react";

const EducationalBackgroundForm = ({formChangeHandler}) => {
    return <>
        <div>
            <HR.Text text="Educational Background"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="previousschoolname" value="Previous School Name"/>
            </div>
            <TextInput id="previousschoolname" name="previousschoolname" type="text" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="yearlevelprevschool" value="Year Level at Previous School"/>
            </div>
            <TextInput id="yearlevelprevschool" name="yearlevelprevschool" type="text" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="nextclass" value="Class to which admission is sought"/>
            </div>
            <Select id="nextclass" name="nextclass" required defaultValue={""} onChange={formChangeHandler}>
                <option value="">Select Class</option>
                <option value="nursery">Nursery</option>
            </Select>
        </div>
    </>
}

export default EducationalBackgroundForm;