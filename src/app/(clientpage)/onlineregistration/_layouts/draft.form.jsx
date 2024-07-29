'use client'
import { 
    Button,
    HR, 
    Label,
    TextInput
} from "flowbite-react";

const DraftNoForm = ({formChangeHandler, payload, fetchDraftDataHandler}) => {
    return <>
        <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
            Draft Registration No
            {/* <HR.Text text="Draft Registration No"/> */}
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block w-72">
                <Label htmlFor="registrationcode" value="Registration Code"/>
            </div>
            <TextInput className="md:w-full pr-10 md:pr-0" id="registrationcode" name="registrationcode" type="text" autoFocus={true} onChange={formChangeHandler} value={payload.registrationcode || ''}/>
        </div>
        <div>
            <Button type="button" className="md:w-full lg:w-auto" onClick={fetchDraftDataHandler}>Load Data</Button>
        </div>
    </>;
}

export default DraftNoForm;