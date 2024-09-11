'use client';

import {
    HR,
    Label,
    Radio,
    Textarea,
    TextInput
} from "flowbite-react";
import moment from "moment";

const PersonalHealthInformationForm = ({ formChangeHandler, payload = {}, errorPayload = {}, datePickerHandler }) => {
    return (
        <>
            <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                Personal Health Information
            </div>
            
            <div className="inline-flex">
                <div className="w-60">
                    <Label value="Student's Name" />
                </div>
                <div className="mr-4">
                    <Label value=":" />
                </div>
                <div className="w-full">
                    <Label value={`${payload?.firstname || ''} ${payload?.middlename || ''} ${payload?.lastname || ''}`} />
                </div>
            </div>
            
            <div className="inline-flex">
                <div className="w-60">
                    <Label value="Date of Birth" />
                </div>
                <div className="mr-4">
                    <Label value=":" />
                </div>
                <div className="w-full">
                    <Label value={`${payload?.birthplace || ''}, ${moment(payload?.birthdate).format("DD MMMM YYYY") || ''}`} />
                </div>
            </div>
            
            <div className="inline-flex">
                <div className="w-60">
                    <Label value="Gender" />
                </div>
                <div className="mr-4">
                    <Label value=":" />
                </div>
                <div className="w-full">
                    <Label value={`${payload?.gender || ''}`} />
                </div>
            </div>
            
            <div className="md:inline-flex">
                <div className="mb-2 block md:w-72">
                    <Label htmlFor="bloodgroup" value="Blood Group" />
                </div>
                <div className="flex items-center gap-4 md:w-full" id="bloodgroup">
                    <Radio
                        checked={payload.bloodgroup === 'A'}
                        id="bloodA"
                        name="bloodgroup"
                        value="A"
                        onChange={formChangeHandler}
                        color={errorPayload?.bloodgroup ? "failure" : undefined}
                    />
                    <Label htmlFor="bloodA">A</Label>
                    <Radio
                        checked={payload.bloodgroup === 'B'}
                        id="bloodB"
                        name="bloodgroup"
                        value="B"
                        onChange={formChangeHandler}
                        color={errorPayload?.bloodgroup ? "failure" : undefined}
                    />
                    <Label htmlFor="bloodB">B</Label>
                    <Radio
                        checked={payload.bloodgroup === 'AB'}
                        id="bloodAB"
                        name="bloodgroup"
                        value="AB"
                        onChange={formChangeHandler}
                        color={errorPayload?.bloodgroup ? "failure" : undefined}
                    />
                    <Label htmlFor="bloodAB">AB</Label>
                    <Radio
                        checked={payload.bloodgroup === 'O'}
                        id="bloodO"
                        name="bloodgroup"
                        value="O"
                        onChange={formChangeHandler}
                        color={errorPayload?.bloodgroup ? "failure" : undefined}
                    />
                    <Label htmlFor="bloodO">O</Label>
                </div>
                {errorPayload?.bloodgroup && (
                    <span className="font-medium text-red-600">{errorPayload.bloodgroup.message}</span>
                )}
            </div>
            
            <div className="inline-flex">
                <div className="w-60 flex items-center gap-4">
                    <Label value="Father's Name" />
                </div>
                <div className="mr-4">
                    <Label value=":" />
                </div>
                <div className="w-full">
                    <Label value={`${payload?.fathername || ''}`} />
                </div>
            </div>
            
            <div className="inline-flex">
                <div className="w-60 flex items-center gap-4">
                    <Label value="Mother's Name" />
                </div>
                <div className="mr-4">
                    <Label value=":" />
                </div>
                <div className="w-full">
                    <Label value={`${payload?.mothername || ''}`} />
                </div>
            </div>
            
            <div className="md:inline-flex">
                <div className="mb-2 block md:w-72">
                    <Label htmlFor="doctorname" value="Doctor's Name" />
                </div>
                <TextInput
                    className="md:w-full"
                    value={payload.doctorname || ''}
                    id="doctorname"
                    name="doctorname"
                    type="text"
                    onChange={formChangeHandler}
                    color={errorPayload?.doctorname ? "failure" : undefined}
                    helperText={errorPayload?.doctorname && <span className="font-medium text-red-600">{errorPayload.doctorname.message}</span>}
                />
            </div>
            
            <div className="md:inline-flex">
                <div className="mb-2 block md:w-72">
                    <Label htmlFor="doctorphone" value="Doctor's Telephone" />
                </div>
                <TextInput
                    className="md:w-full"
                    value={payload.doctorphone || ''}
                    id="doctorphone"
                    name="doctorphone"
                    type="text"
                    onChange={formChangeHandler}
                    color={errorPayload?.doctorphone ? "failure" : undefined}
                    helperText={errorPayload?.doctorphone && <span className="font-medium text-red-600">{errorPayload.doctorphone.message}</span>}
                />
            </div>
            
            <div className="md:inline-flex">
                <div className="mb-2 block md:w-72">
                    <Label htmlFor="doctoraddress" value="Doctor's Address" />
                </div>
                <Textarea
                    className="md:w-full"
                    value={payload.doctoraddress || ''}
                    id="doctoraddress"
                    name="doctoraddress"
                    required
                    rows={4}
                    onChange={formChangeHandler}
                    color={errorPayload?.doctoraddress ? "failure" : undefined}
                    helperText={errorPayload?.doctoraddress && <span className="font-medium text-red-600">{errorPayload.doctoraddress.message}</span>}
                />
            </div>
            
            <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                Medication
            </div>
            
            <div className="md:inline-flex">
                <div className="mb-2 block md:w-72">
                    <Label htmlFor="medicationoption" value="Is your child on medication?" />
                </div>
                <div className="md:w-full flex items-center gap-2" id="medicationoption">
                    <Radio
                        checked={payload.medicationoption === 'Yes'}
                        id="medicationoptionyes"
                        name="medicationoption"
                        value="Yes"
                        onChange={formChangeHandler}
                        color={errorPayload?.medicationoption ? "failure" : undefined}
                    />
                    <Label htmlFor="medicationoptionyes">Yes</Label>
                    <Radio
                        checked={payload.medicationoption === 'No'}
                        id="medicationoptionno"
                        name="medicationoption"
                        value="No"
                        onChange={formChangeHandler}
                        color={errorPayload?.medicationoption ? "failure" : undefined}
                    />
                    <Label htmlFor="medicationoptionno">No</Label>
                </div>
                {errorPayload?.medicationoption && (
                    <span className="font-medium text-red-600">{errorPayload.medicationoption.message}</span>
                )}
            </div>
            
            <div className="md:inline-flex">
                <div className="mb-2 block md:w-72">
                    <Label htmlFor="isrecassmedication" value="Does the child require assistance with the medication?" />
                </div>
                <div className="md:w-full flex items-center gap-2" id="isrecassmedication">
                    <Radio
                        checked={payload.isrecassmedicationoption === 'Yes'}
                        id="isrecassmedicationoptionyes"
                        name="isrecassmedicationoption"
                        value="Yes"
                        onChange={formChangeHandler}
                        color={errorPayload?.isrecassmedicationoption ? "failure" : undefined}
                    />
                    <Label htmlFor="isrecassmedicationoptionyes">Yes</Label>
                    <Radio
                        checked={payload.isrecassmedicationoption === 'No'}
                        id="isrecassmedicationoptionno"
                        name="isrecassmedicationoption"
                        value="No"
                        onChange={formChangeHandler}
                        color={errorPayload?.isrecassmedicationoption ? "failure" : undefined}
                    />
                    <Label htmlFor="isrecassmedicationoptionno">No</Label>
                </div>
                {errorPayload?.isrecassmedicationoption && (
                    <span className="font-medium text-red-600">{errorPayload.isrecassmedicationoption.message}</span>
                )}
            </div>
            
            <div className="md:inline-flex">
                <div className="mb-2 block md:w-72">
                    <Label htmlFor="naturemedication" value="Please explain the nature of medication, frequency of usage and how it is administered" />
                </div>
                <Textarea
                    className="md:w-full"
                    value={payload.naturemedication || ''}
                    id="naturemedication"
                    name="naturemedication"
                    required
                    rows={4}
                    onChange={formChangeHandler}
                    color={errorPayload?.naturemedication ? "failure" : undefined}
                    helperText={errorPayload?.naturemedication && <span className="font-medium text-red-600">{errorPayload.naturemedication.message}</span>}
                />
            </div>
        </>
    );
}

export default PersonalHealthInformationForm;