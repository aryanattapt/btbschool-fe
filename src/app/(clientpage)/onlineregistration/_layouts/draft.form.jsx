'use client'
import { 
    HR, 
    Label,
    TextInput
} from "flowbite-react";

const DraftNoForm = ({formChangeHandler, payload}) => {
    return <>
        <div>
            <HR.Text text="Draft Registration No"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="draftregistrationno" value="Draft No"/>
            </div>
            <TextInput id="draftregistrationno" name="draftregistrationno" type="text" autoFocus={true} onChange={formChangeHandler} value={payload.draftregistrationno || ''}/>
        </div>
    </>;
}

export default DraftNoForm;