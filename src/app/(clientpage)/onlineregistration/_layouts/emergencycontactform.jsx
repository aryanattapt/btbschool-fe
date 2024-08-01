'use client'
import { 
    HR, 
    Label,
    Textarea,
    TextInput
} from "flowbite-react";

const EmergencyContactForm = ({formChangeHandler, payload}) => {
    return <>
        {/* <div>
            <HR.Text text="Emergency Contact Information (Other than Parents)"/>
        </div> */}
        <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
        Emergency Contact Information (Other than Parents)
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block w-72">
                <Label htmlFor="emergencycontactname" value="Name"/>
            </div>
            <TextInput className="w-full pr-10 md:pr-0" value={payload.emergencycontactname || ''} id="emergencycontactname" name="emergencycontactname" type="text" onChange={formChangeHandler}/>
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block w-72">
                <Label htmlFor="emergencycontactrelaction" value="Relationship to Student"/>
            </div>
            <TextInput className="w-full pr-10 md:pr-0" value={payload.emergencycontactrelaction || ''} id="emergencycontactrelaction" name="emergencycontactrelaction" type="text" onChange={formChangeHandler}/>
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block w-72">
                <Label htmlFor="emergencycontactphoneno" value="Phone No" />
            </div>
            <TextInput className="w-full pr-10 md:pr-0" value={payload.emergencycontactphoneno || ''} id="emergencycontactphoneno" name="emergencycontactphoneno" type="text" onChange={formChangeHandler}/>
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block w-72">
                <Label htmlFor="emergencycontactaddress" value="Address" />
            </div>
            <Textarea className="w-full pr-10 md:pr-0" value={payload.emergencycontactaddress || ''} id="emergencycontactaddress" name="emergencycontactaddress" required rows={4} onChange={formChangeHandler}/>
        </div>
    </>;
}

export default EmergencyContactForm;