'use client'
import { 
    Button,
    HR, 
    Label,
    TextInput
} from "flowbite-react";

const DraftNoForm = ({formChangeHandler, payload, fetchDraftDataHandler}) => {
    return <>
        <div>
            <HR.Text text="Draft Registration No"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="registrationcode" value="Registration Code"/>
            </div>
            <TextInput id="registrationcode" name="registrationcode" type="text" autoFocus={true} onChange={formChangeHandler} value={payload.registrationcode || ''}/>
        </div>
        <div>
            <Button type="button" className="w-full lg:w-auto" onClick={fetchDraftDataHandler}>Load Data</Button>
        </div>
    </>;
}

export default DraftNoForm;