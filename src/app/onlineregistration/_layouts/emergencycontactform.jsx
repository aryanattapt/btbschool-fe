'use client'
import { 
    HR, 
    Label,
    Textarea,
    TextInput
} from "flowbite-react";

const EmergencyContactForm = () => {
    return <>
        <div>
            <HR.Text text="Emergency Contact Information (Other than Parents)"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="emergencycontactname" value="Name"/>
            </div>
            <TextInput id="emergencycontactname" type="text"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="emergencycontactrelaction" value="Relationship to Student"/>
            </div>
            <TextInput id="emergencycontactrelaction" type="text"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="emergencycontactphoneno" value="Phone No" />
            </div>
            <TextInput id="emergencycontactphoneno" type="text" addon="+62"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="emergencycontactaddress" value="Address" />
            </div>
            <Textarea id="emergencycontactaddress" required rows={4} />
        </div>
    </>;
}

export default EmergencyContactForm;