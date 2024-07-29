'use client'
import { 
    HR, 
    Label, 
    Radio,
    TextInput
} from "flowbite-react";

const RecomendedForm = ({formChangeHandler, payload}) => {
    return <>
        <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
            Recomemended Form
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block md:w-72">
                <Label htmlFor="recpmmendedForm" value="Are you recommended by someone?"/>
            </div>
            <div className="md:w-full flex items-center gap-2" id="recpmmendedForm">
                <Radio checked={payload.recommendedoption == 'Yes'} id="recommendedoptionyes" name="recommendedoption" value="Yes" onChange={formChangeHandler}/>
                <Label htmlFor="recommendedoptionyes">Yes</Label>
                <Radio checked={payload.recommendedoption == 'No'} id="recommendedoptionno" name="recommendedoption" value="No" onChange={formChangeHandler}/>
                <Label htmlFor="recommendedoptionno">No</Label>
            </div>
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block md:w-72">
                <Label htmlFor="btbparentnamerec" value="Name Of BTB Parent"/>
            </div>
            <TextInput className="md:w-full" value={payload.btbparentnamerec || ''} id="btbparentnamerec" name="btbparentnamerec" type="text" onChange={formChangeHandler}/>
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block md:w-72">
                <Label htmlFor="btbstudentnamerec" value="Name Of BTB Student"/>
            </div>
            <TextInput className="md:w-full" value={payload.btbstudentnamerec || ''} id="btbstudentnamerec" name="btbstudentnamerec" type="text" onChange={formChangeHandler}/>
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block md:w-72">
                <Label htmlFor="btbstudentgraderec" value="Grade"/>
            </div>
            <TextInput className="md:w-full" value={payload.btbstudentgraderec || ''} id="btbstudentgraderec" name="btbstudentgraderec" type="text" onChange={formChangeHandler}/>
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block md:w-72">
                <Label htmlFor="btbstudentphonehomerec" value="Phone Home" />
            </div>
            <TextInput className="md:w-full" value={payload.btbstudentphonehomerec || ''} id="btbstudentphonehomerec" name="btbstudentphonehomerec" type="text" addon="+62" onChange={formChangeHandler}/>
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block md:w-72">
                <Label htmlFor="btbstudentphonemobilerec" value="Phone Mobile" />
            </div>
            <TextInput className="md:w-full" value={payload.btbstudentphonemobilerec || ''} id="btbstudentphonemobilerec" name="btbstudentphonemobilerec" type="text" addon="+62" onChange={formChangeHandler}/>
        </div>
    </>
}

export default RecomendedForm;