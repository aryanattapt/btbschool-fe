'use client'

import { 
    HR, 
    Label, 
    Radio,
    TextInput
} from "flowbite-react";

const RecomendedForm = ({formChangeHandler}) => {
    return <>
        <div>
            <HR.Text text="Recomemended Form"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="recpmmendedForm" value="Are you recommended by someone?"/>
            </div>
            <div className="flex items-center gap-2" id="recpmmendedForm">
                <Radio id="recommendedoptionyes" name="recommendedoption" value="Yes" onChange={formChangeHandler}/>
                <Label htmlFor="recommendedoptionyes">Yes</Label>
                <Radio id="recommendedoptionno" name="recommendedoption" value="No" onChange={formChangeHandler}/>
                <Label htmlFor="recommendedoptionno">No</Label>
            </div>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="btbparentnamerec" value="Name Of BTB Parent"/>
            </div>
            <TextInput id="btbparentnamerec" name="btbparentnamerec" type="text" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="btbstudentnamerec" value="Name Of BTB Student"/>
            </div>
            <TextInput id="btbstudentnamerec" name="btbstudentnamerec" type="text" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="btbstudentgraderec" value="Grade"/>
            </div>
            <TextInput id="btbstudentgraderec" name="btbstudentgraderec" type="text" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="btbstudentphonehomerec" value="Phone Home" />
            </div>
            <TextInput id="btbstudentphonehomerec" name="btbstudentphonehomerec" type="text" addon="+62" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="btbstudentphonemobilerec" value="Phone Mobile" />
            </div>
            <TextInput id="btbstudentphonemobilerec" name="btbstudentphonemobilerec" type="text" addon="+62" onChange={formChangeHandler}/>
        </div>
    </>
}

export default RecomendedForm;