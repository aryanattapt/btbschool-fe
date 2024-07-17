'use client'

import { 
    HR, 
    Label, 
    Radio,
    TextInput
} from "flowbite-react";

const RecomendedForm = () => {
    return <>
        <div>
            <HR.Text text="Recomemended Form"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="recpmmendedForm" value="Are you recommended by someone?"/>
            </div>
            <div className="flex items-center gap-2" id="recpmmendedForm">
                <Radio id="recommendedoptionyes" name="recommendedoption" value="Yes"/>
                <Label htmlFor="recommendedoptionyes">Yes</Label>
                <Radio id="recommendedoptionno" name="recommendedoption" value="No"/>
                <Label htmlFor="recommendedoptionno">No</Label>
            </div>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="btbparentnamerec" value="Name Of BTB Parent"/>
            </div>
            <TextInput id="btbparentnamerec" type="text"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="btbstudentnamerec" value="Name Of BTB Student"/>
            </div>
            <TextInput id="btbstudentnamerec" type="text"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="btbstudentgraderec" value="Grade"/>
            </div>
            <TextInput id="btbstudentgraderec" type="text"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="btbstudentphonehomerec" value="Phone Home" />
            </div>
            <TextInput id="btbstudentphonehomerec" type="text" addon="+62"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="btbstudentphonemobilerec" value="Phone Mobile" />
            </div>
            <TextInput id="btbstudentphonemobilerec" type="text" addon="+62"/>
        </div>
    </>
}

export default RecomendedForm;