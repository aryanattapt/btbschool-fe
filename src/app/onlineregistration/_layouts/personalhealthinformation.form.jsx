'use client'

import { 
    HR, 
    Label,
    Radio
} from "flowbite-react";

const PersonalHealthInformationForm = () => {
    return <>
        <div>
            <HR.Text text="Personal Health Information"/>
        </div>
        <div>
            <div className="flex items-center gap-4">
                <Label value="Student's Name"/>
                <Label value=":"/>
                <Label value="Test"></Label>
            </div>
        </div>
        <div>
            <div className="flex items-center gap-4">
                <Label value="Date of Birth"/>
                <Label value=":"/>
                <Label value="Test"></Label>
            </div>
        </div>
        <div>
            <div className="flex items-center gap-4">
                <Label value="Gender"/>
                <Label value=":"/>
                <Label value="Test"></Label>
            </div>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="bloodgroup" value="Blood Group"/>
            </div>
            <div className="flex items-center gap-4" id="bloodgroup">
                <Radio id="bloodA" name="bloodgroup" value="A"/>
                <Label htmlFor="bloodA">A</Label>
                <Radio id="bloodB" name="bloodgroup" value="B"/>
                <Label htmlFor="bloodB">B</Label>
                <Radio id="bloodAB" name="bloodgroup" value="AB"/>
                <Label htmlFor="bloodAB">AB</Label>
                <Radio id="bloodO" name="bloodgroup" value="O"/>
                <Label htmlFor="bloodO">O</Label>
            </div>
        </div>
        <div>
            <div className="flex items-center gap-4">
                <Label value="Father's Name"/>
                <Label value=":"/>
                <Label value="Test"></Label>
            </div>
        </div>
        <div>
            <div className="flex items-center gap-4">
                <Label value="Mother's Name"/>
                <Label value=":"/>
                <Label value="Test"></Label>
            </div>
        </div>
    </>
}

export default PersonalHealthInformationForm;