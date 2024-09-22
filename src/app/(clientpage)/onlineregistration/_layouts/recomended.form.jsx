'use client';

import { 
    Label, 
    Radio, 
    TextInput 
} from "flowbite-react";
import { forwardRef } from "react";

const RecomendedForm = forwardRef(({ formChangeHandler, payload = {}, errorPayload = {} }, ref) => {
    return (
        <>
            <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                Recommended Form
            </div>
            
            <div className="md:inline-flex">
                <div className="mb-2 block md:w-72">
                    <Label htmlFor="recommendedoption" value="Are you recommended by someone?" />
                </div>
                <div className="md:w-full flex items-center gap-2" id="recommendedoption">
                    <Radio
                        ref={ref.recommendedoption}
                        checked={payload.recommendedoption === 'Yes'}
                        id="recommendedoptionyes"
                        name="recommendedoption"
                        value="Yes"
                        onChange={formChangeHandler}
                        color={errorPayload?.recommendedoption ? "failure" : undefined}
                    />
                    <Label htmlFor="recommendedoptionyes">Yes</Label>
                    <Radio
                        checked={payload.recommendedoption === 'No'}
                        id="recommendedoptionno"
                        name="recommendedoption"
                        value="No"
                        onChange={formChangeHandler}
                        color={errorPayload?.recommendedoption ? "failure" : undefined}
                    />
                    <Label htmlFor="recommendedoptionno">No</Label>
                </div>
                {errorPayload?.recommendedoption && (
                    <span className="text-red-600 mt-1 text-sm">{errorPayload.recommendedoption.message}</span>
                )}
            </div>
            
            <div className="md:inline-flex">
                <div className="mb-2 block md:w-72">
                    <Label htmlFor="btbparentnamerec" value="Name Of BTB Parent" />
                </div>
                <TextInput
                    ref={ref.btbparentnamerec}
                    className="md:w-full"
                    value={payload.btbparentnamerec || ''}
                    id="btbparentnamerec"
                    name="btbparentnamerec"
                    type="text"
                    onChange={formChangeHandler}
                    color={errorPayload?.btbparentnamerec ? "failure" : undefined}
                    helperText={errorPayload?.btbparentnamerec && <span className="font-medium text-red-600">{errorPayload.btbparentnamerec.message}</span>}
                />
            </div>
            
            <div className="md:inline-flex">
                <div className="mb-2 block md:w-72">
                    <Label htmlFor="btbstudentnamerec" value="Name Of BTB Student" />
                </div>
                <TextInput
                    ref={ref.btbstudentnamerec}
                    className="md:w-full"
                    value={payload.btbstudentnamerec || ''}
                    id="btbstudentnamerec"
                    name="btbstudentnamerec"
                    type="text"
                    onChange={formChangeHandler}
                    color={errorPayload?.btbstudentnamerec ? "failure" : undefined}
                    helperText={errorPayload?.btbstudentnamerec && <span className="font-medium text-red-600">{errorPayload.btbstudentnamerec.message}</span>}
                />
            </div>
            
            <div className="md:inline-flex">
                <div className="mb-2 block md:w-72">
                    <Label htmlFor="btbstudentgraderec" value="Grade" />
                </div>
                <TextInput
                    ref={ref.btbstudentgraderec}
                    className="md:w-full"
                    value={payload.btbstudentgraderec || ''}
                    id="btbstudentgraderec"
                    name="btbstudentgraderec"
                    type="text"
                    onChange={formChangeHandler}
                    color={errorPayload?.btbstudentgraderec ? "failure" : undefined}
                    helperText={errorPayload?.btbstudentgraderec && <span className="font-medium text-red-600">{errorPayload.btbstudentgraderec.message}</span>}
                />
            </div>
            
            <div className="md:inline-flex">
                <div className="mb-2 block md:w-72">
                    <Label htmlFor="btbstudentphonehomerec" value="Phone Home" />
                </div>
                <TextInput
                    ref={ref.btbstudentphonehomerec}
                    className="md:w-full"
                    value={payload.btbstudentphonehomerec || ''}
                    id="btbstudentphonehomerec"
                    name="btbstudentphonehomerec"
                    type="text"
                    onChange={formChangeHandler}
                    color={errorPayload?.btbstudentphonehomerec ? "failure" : undefined}
                    helperText={errorPayload?.btbstudentphonehomerec && <span className="font-medium text-red-600">{errorPayload.btbstudentphonehomerec.message}</span>}
                />
            </div>
            
            <div className="md:inline-flex">
                <div className="mb-2 block md:w-72">
                    <Label htmlFor="btbstudentphonemobilerec" value="Phone Mobile" />
                </div>
                <TextInput
                    ref={ref.btbstudentphonemobilerec}
                    className="md:w-full"
                    value={payload.btbstudentphonemobilerec || ''}
                    id="btbstudentphonemobilerec"
                    name="btbstudentphonemobilerec"
                    type="text"
                    onChange={formChangeHandler}
                    color={errorPayload?.btbstudentphonemobilerec ? "failure" : undefined}
                    helperText={errorPayload?.btbstudentphonemobilerec && <span className="font-medium text-red-600">{errorPayload.btbstudentphonemobilerec.message}</span>}
                />
            </div>
        </>
    );
})

export default RecomendedForm;