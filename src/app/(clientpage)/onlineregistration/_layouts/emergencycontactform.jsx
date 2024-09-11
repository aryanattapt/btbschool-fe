"use client";

import { 
    Label, 
    Textarea, 
    TextInput 
} from "flowbite-react";

const EmergencyContactForm = ({ formChangeHandler, payload, errorPayload }) => {
    return (
        <>
            <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                Emergency Contact Information (Other than Parents)
            </div>
            <div className="md:inline-flex">
                <div className="mb-2 block w-72">
                    <Label htmlFor="emergencycontactname" value="Name" />
                </div>
                <div className="w-full pr-10 md:pr-0">
                    <TextInput
                        className="w-full pr-10 md:pr-0"
                        id="emergencycontactname"
                        name="emergencycontactname"
                        type="text"
                        value={payload.emergencycontactname || ''}
                        onChange={formChangeHandler}
                        color={errorPayload?.emergencycontactname ? "failure" : undefined}
                        helperText={
                            errorPayload?.emergencycontactname && (
                                <span className="font-medium text-red-600">
                                    {errorPayload.emergencycontactname.message}
                                </span>
                            )
                        }
                    />
                </div>
            </div>
            <div className="md:inline-flex">
                <div className="mb-2 block w-72">
                    <Label htmlFor="emergencycontactrelaction" value="Relationship to Student" />
                </div>
                <div className="w-full pr-10 md:pr-0">
                    <TextInput
                        className="w-full pr-10 md:pr-0"
                        id="emergencycontactrelaction"
                        name="emergencycontactrelaction"
                        type="text"
                        value={payload.emergencycontactrelaction || ''}
                        onChange={formChangeHandler}
                        color={errorPayload?.emergencycontactrelaction ? "failure" : undefined}
                        helperText={
                            errorPayload?.emergencycontactrelaction && (
                                <span className="font-medium text-red-600">
                                    {errorPayload.emergencycontactrelaction.message}
                                </span>
                            )
                        }
                    />
                </div>
            </div>
            <div className="md:inline-flex">
                <div className="mb-2 block w-72">
                    <Label htmlFor="emergencycontactphoneno" value="Phone No" />
                </div>
                <div className="w-full pr-10 md:pr-0">
                    <TextInput
                        className="w-full pr-10 md:pr-0"
                        id="emergencycontactphoneno"
                        name="emergencycontactphoneno"
                        type="text"
                        value={payload.emergencycontactphoneno || ''}
                        onChange={formChangeHandler}
                        color={errorPayload?.emergencycontactphoneno ? "failure" : undefined}
                        helperText={
                            errorPayload?.emergencycontactphoneno && (
                                <span className="font-medium text-red-600">
                                    {errorPayload.emergencycontactphoneno.message}
                                </span>
                            )
                        }
                    />
                </div>
            </div>
            <div className="md:inline-flex">
                <div className="mb-2 block w-72">
                    <Label htmlFor="emergencycontactaddress" value="Address" />
                </div>
                <div className="w-full pr-10 md:pr-0">
                    <Textarea
                        className="w-full pr-10 md:pr-0"
                        id="emergencycontactaddress"
                        name="emergencycontactaddress"
                        value={payload.emergencycontactaddress || ''}
                        required
                        rows={4}
                        onChange={formChangeHandler}
                        color={errorPayload?.emergencycontactaddress ? "failure" : undefined}
                        helperText={
                            errorPayload?.emergencycontactaddress && (
                                <span className="font-medium text-red-600">
                                    {errorPayload.emergencycontactaddress.message}
                                </span>
                            )
                        }
                    />
                </div>
            </div>
        </>
    );
}

export default EmergencyContactForm;