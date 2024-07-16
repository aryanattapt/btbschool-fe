'use client'

import { 
    Datepicker,
    HR, 
    Label,
    Radio,
    Select,
    Textarea,
    TextInput
} from "flowbite-react";
import {
    HiMail 
} from "react-icons/hi";

const StudentDetailForm = () => {
    return <>
        <div>
            <HR.Text text="Student Detail"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="firstname" value="First Name"/>
            </div>
            <TextInput id="firstname" type="text" autoFocus={true}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="middlename" value="Middle Name"/>
            </div>
            <TextInput id="middlename" type="text"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="lastname" value="Last Name"/>
            </div>
            <TextInput id="lastname" type="text"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="birthplace" value="Birth Place"/>
            </div>
            <Select id="birthplace" required>
                <option value="" selected>Select Birth Place</option>
                <option value="Jakarta">Jakarta</option>
            </Select>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="birthdate" value="Tanggal Lahir" />
            </div>
            <Datepicker id="birthdate" language="en-id"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="religion" value="Religion"/>
            </div>
            <Select id="religion" required>
                <option value="" selected>Select Religion</option>
                <option value="Islam">Islam</option>
            </Select>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="gender" value="Gender"/>
            </div>
            <div className="flex items-center gap-2" id="gender">
                <Radio id="genderMale" name="gender" value="male"/>
                <Label htmlFor="genderMale">Male</Label>
                <Radio id="genderFemale" name="gender" value="female"/>
                <Label htmlFor="genderFemale">Female</Label>
            </div>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="address" value="Address" />
            </div>
            <Textarea id="address" required rows={4} />
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="phoneno" value="Phone No" />
            </div>
            <TextInput id="phoneno" type="text" addon="+62"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="email" value="Email" />
            </div>
            <TextInput icon={HiMail} type="email" />
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="musicinstrument" value="Musical Instrument the Child Can Play" />
            </div>
            <TextInput id="musicinstrument" type="text"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="languagespoken" value="Language(s) Spoken at Home" />
            </div>
            <TextInput id="languagespoken" type="text" />
        </div>
    </>;
}

export default StudentDetailForm;