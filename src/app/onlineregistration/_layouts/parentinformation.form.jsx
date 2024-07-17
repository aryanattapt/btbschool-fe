'use client'
import { 
    Datepicker,
    HR, 
    Label,
    Radio,
    Select,
    TextInput
} from "flowbite-react";
import { 
    HiMail 
} from "react-icons/hi";

const ParentsInformationForm = () => {
    return <>
        <div>
            <HR.Text text="Parent / Guardian Information"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="fathername" value="Father's Name"/>
            </div>
            <TextInput id="fathername" type="text"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="fatherbirthplace" value="Birth Place"/>
            </div>
            <Select id="fatherbirthplace" defaultValue={""}>
                <option value="">Select Birth Place</option>
                <option value="Jakarta">Jakarta</option>
            </Select>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="fatherbirthdate" value="Tanggal Lahir" />
            </div>
            <Datepicker id="fatherbirthdate" language="en-id"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="fatherphoneno" value="Phone No" />
            </div>
            <TextInput id="fatherphoneno" type="text" addon="+62"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="fatheremail" value="Email" />
            </div>
            <TextInput icon={HiMail} type="fatheremail" />
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="fathermaritalstatus" value="Marital Status"/>
            </div>
            <div className="flex items-center gap-2" id="fathermaritalstatus">
                <Radio id="marriedfather" name="fathermaritalstatus" value="Married"/>
                <Label htmlFor="marriedfather">Married</Label>
                <Radio id="divorcedfather" name="fathermaritalstatus" value="Divorced"/>
                <Label htmlFor="divorcedfather">Divorced</Label>
            </div>
        </div>
        <div>
            <HR.Trimmed/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="mothername" value="Mother's Name"/>
            </div>
            <TextInput id="mothername" type="text"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="motherbirthplace" value="Birth Place"/>
            </div>
            <Select id="motherbirthplace" defaultValue={""}>
                <option value="">Select Birth Place</option>
                <option value="Jakarta">Jakarta</option>
            </Select>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="motherbirthdate" value="Tanggal Lahir" />
            </div>
            <Datepicker id="motherbirthdate" language="en-id"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="motherphoneno" value="Phone No" />
            </div>
            <TextInput id="motherphoneno" type="text" addon="+62"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="motheremail" value="Email" />
            </div>
            <TextInput icon={HiMail} type="motheremail" />
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="mothermaritalstatus" value="Marital Status"/>
            </div>
            <div className="flex items-center gap-2" id="mothermaritalstatus">
                <Radio id="marriedmother" name="mothermaritalstatus" value="Married"/>
                <Label htmlFor="marriedmother">Married</Label>
                <Radio id="divorcedmother" name="mothermaritalstatus" value="Divorced"/>
                <Label htmlFor="divorcedmother">Divorced</Label>
            </div>
        </div>
    </>;
}

export default ParentsInformationForm;