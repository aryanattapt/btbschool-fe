'use client'
import { 
    HR, 
    Label, 
    Select, 
    TextInput 
} from "flowbite-react";

const EducationalBackgroundForm = ({formChangeHandler, payload}) => {
    return <>
        <div>
            <HR.Text text="Educational Background"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="previousschoolname" value="Previous School Name"/>
            </div>
            <TextInput value={payload.previousschoolname || ''} id="previousschoolname" name="previousschoolname" type="text" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="yearlevelprevschool" value="Year Level at Previous School"/>
            </div>
            <TextInput value={payload.yearlevelprevschool || ''} id="yearlevelprevschool" name="yearlevelprevschool" type="text" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="nextclass" value="Class to which admission is sought"/>
            </div>
            <Select value={payload.nextclass || ''} id="nextclass" name="nextclass" required onChange={formChangeHandler}>
                <option value="">Select Class</option>
                <option value="nursery">Nursery</option>
            </Select>
        </div>
    </>
}

export default EducationalBackgroundForm;