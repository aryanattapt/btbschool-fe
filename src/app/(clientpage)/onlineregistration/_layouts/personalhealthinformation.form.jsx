'use client'

import { 
    HR, 
    Label,
    Radio,
    Textarea,
    TextInput
} from "flowbite-react";
import moment from "moment";

const PersonalHealthInformationForm = ({formChangeHandler, payload}) => {
    return <>
        <div>
            <HR.Text text="Personal Health Information"/>
        </div>
        <div>
            <div className="flex items-center gap-4">
                <Label value="Student's Name"/>
                <Label value=":"/>
                <Label value={`${payload?.firstname || ''} ${payload?.middlename || ''} ${payload?.lastname || ''}`}></Label>
            </div>
        </div>
        <div>
            <div className="flex items-center gap-4">
                <Label value="Date of Birth"/>
                <Label value=":"/>
                <Label value={`${payload?.birthplace || ''}, ${moment(payload?.birthdate).format("DD MMMM YYYY") || ''}`}></Label>
            </div>
        </div>
        <div>
            <div className="flex items-center gap-4">
                <Label value="Gender"/>
                <Label value=":"/>
                <Label value={`${payload?.gender || ''}`}></Label>
            </div>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="bloodgroup" value="Blood Group"/>
            </div>
            <div className="flex items-center gap-4" id="bloodgroup">
                <Radio checked={payload.bloodgroup == 'A'} id="bloodA" name="bloodgroup" value="A" onChange={formChangeHandler}/>
                <Label htmlFor="bloodA">A</Label>
                <Radio checked={payload.bloodgroup == 'B'} id="bloodB" name="bloodgroup" value="B" onChange={formChangeHandler}/>
                <Label htmlFor="bloodB">B</Label>
                <Radio checked={payload.bloodgroup == 'AB'} id="bloodAB" name="bloodgroup" value="AB" onChange={formChangeHandler}/>
                <Label htmlFor="bloodAB">AB</Label>
                <Radio checked={payload.bloodgroup == 'O'} id="bloodO" name="bloodgroup" value="O" onChange={formChangeHandler}/>
                <Label htmlFor="bloodO">O</Label>
            </div>
        </div>
        <div>
            <div className="flex items-center gap-4">
                <Label value="Father's Name"/>
                <Label value=":"/>
                <Label value={`${payload?.fathername || ''}`}></Label>
            </div>
        </div>
        <div>
            <div className="flex items-center gap-4">
                <Label value="Mother's Name"/>
                <Label value=":"/>
                <Label value={`${payload?.mothername || ''}`}></Label>
            </div>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="doctorname" value="Doctor's Name"/>
            </div>
            <TextInput value={payload.doctorname || ''} id="doctorname" name="doctorname" type="text" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="naturemedication" value="Doctor's Telephone" />
            </div>
            <TextInput value={payload.doctorphone || ''} id="doctorphone" name="doctorphone" type="text" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="doctoraddress" value="Doctor's Address" />
            </div>
            <Textarea value={payload.doctoraddress || ''} id="doctoraddress" name="doctoraddress" required rows={4} onChange={formChangeHandler}/>
        </div>
        <div>
            <HR.Text text="Medication"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="ismedicationform" value="Is your child on medication?"/>
            </div>
            <div className="flex items-center gap-2" id="ismedicationform">
                <Radio checked={payload.medicationoption == 'Yes'} id="medicationoptionyes" name="medicationoption" value="Yes" onChange={formChangeHandler}/>
                <Label htmlFor="medicationoptionyes">Yes</Label>
                <Radio checked={payload.medicationoption == 'No'} id="medicationoptionno" name="medicationoption" value="No" onChange={formChangeHandler}/>
                <Label htmlFor="medicationoptionno">No</Label>
            </div>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="isrecassmedication" value="Does the child require assistance with the medication?"/>
            </div>
            <div className="flex items-center gap-2" id="isrecassmedication">
                <Radio checked={payload.isrecassmedicationoption == 'Yes'} id="isrecassmedicationoptionyes" name="isrecassmedicationoption" value="Yes" onChange={formChangeHandler}/>
                <Label htmlFor="isrecassmedicationoptionyes">Yes</Label>
                <Radio checked={payload.isrecassmedicationoption == 'No'} id="isrecassmedicationoptionno" name="isrecassmedicationoption" value="No" onChange={formChangeHandler}/>
                <Label htmlFor="isrecassmedicationoptionno">No</Label>
            </div>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="naturemedication" value="Please explain the nature of medication, frequency of usage and how it administered" />
            </div>
            <Textarea value={payload.naturemedication || ''} id="naturemedication" name="naturemedication" required rows={4} onChange={formChangeHandler}/>
        </div>
    </>
}

export default PersonalHealthInformationForm;