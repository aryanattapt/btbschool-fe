'use client'

import { 
    HR, 
    Label,
    Radio,
    Textarea,
    TextInput
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
        <div>
            <div className="mb-2 block">
                <Label htmlFor="doctorname" value="Doctor's Name"/>
            </div>
            <TextInput id="doctorname" type="text"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="naturemedication" value="Doctor's Telephone" />
            </div>
            <TextInput id="naturemedication" type="text" addon="+62"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="doctoraddress" value="Doctor's Address" />
            </div>
            <Textarea id="doctoraddress" required rows={4} />
        </div>
        <div>
            <HR.Text text="Medication"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="ismedicationform" value="Is your child on medication?"/>
            </div>
            <div className="flex items-center gap-2" id="ismedicationform">
                <Radio id="medicationoptionyes" name="medicationoption" value="Yes"/>
                <Label htmlFor="medicationoptionyes">Yes</Label>
                <Radio id="medicationoptionno" name="medicationoption" value="No"/>
                <Label htmlFor="medicationoptionno">No</Label>
            </div>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="isrecassmedication" value="Does the child require assistance with the medication?"/>
            </div>
            <div className="flex items-center gap-2" id="isrecassmedication">
                <Radio id="isrecassmedicationoptionyes" name="isrecassmedicationoption" value="Yes"/>
                <Label htmlFor="isrecassmedicationoptionyes">Yes</Label>
                <Radio id="isrecassmedicationoptionno" name="isrecassmedicationoption" value="No"/>
                <Label htmlFor="isrecassmedicationoptionno">No</Label>
            </div>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="naturemedication" value="Please explain the nature of medication, frequency of usage and how it administered" />
            </div>
            <Textarea id="naturemedication" required rows={4}/>
        </div>
    </>
}

export default PersonalHealthInformationForm;