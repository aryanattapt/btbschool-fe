'use client'
import { 
    HR, 
    Label,
    Textarea,
    TextInput
} from "flowbite-react";

const EmergencyContactForm = ({formChangeHandler, payload}) => {
    return <>
        <div>
            <HR.Text text="Emergency Contact Information (Other than Parents)"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="emergencycontactname" value="Name"/>
            </div>
            <TextInput value={payload.emergencycontactname || ''} id="emergencycontactname" name="emergencycontactname" type="text" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="emergencycontactrelaction" value="Relationship to Student"/>
            </div>
            <TextInput value={payload.emergencycontactrelaction || ''} id="emergencycontactrelaction" name="emergencycontactrelaction" type="text" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="emergencycontactphoneno" value="Phone No" />
            </div>
            <TextInput value={payload.emergencycontactphoneno || ''} id="emergencycontactphoneno" name="emergencycontactphoneno" type="text" addon="+62" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="emergencycontactaddress" value="Address" />
            </div>
            <Textarea value={payload.emergencycontactaddress || ''} id="emergencycontactaddress" name="emergencycontactaddress" required rows={4} onChange={formChangeHandler}/>
        </div>
    </>;
}

export default EmergencyContactForm;