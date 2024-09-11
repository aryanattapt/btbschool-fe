"use client";

import { 
    Button,
    Label,
    TextInput 
} from "flowbite-react";

const DraftNoForm = ({ registrationcode, onChange, onPaste, errorPayload }) => {
    return (
        <>
            <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                Draft Registration No
            </div>
            <div className="md:inline-flex">
                <div className="mb-2 block w-72">
                    <Label htmlFor="registrationcode" value="Registration Code" />
                </div>
                <div className="w-full pr-10 md:pr-0">
                    <TextInput
                        className="md:w-full pr-10 md:pr-0"
                        id="registrationcode"
                        name="registrationcode"
                        type="text"
                        autoFocus={true}
                        onChange={onChange}
                        onPaste={onPaste}
                        value={registrationcode || ''}
                        color={errorPayload?.registrationcode ? "failure" : undefined}
                        helperText={
                            errorPayload?.registrationcode && (
                                <span className="font-medium text-red-600">
                                    {errorPayload.registrationcode.message}
                                </span>
                            )
                        }
                    />
                </div>
            </div>
            {/* <div>
                <Button type="button" className="md:w-full lg:w-auto" onClick={fetchDraftDataHandler}>Load Data</Button>
            </div> */}
        </>
    );
}

export default DraftNoForm;