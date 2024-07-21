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

const StudentDetailForm = ({formChangeHandler}) => {
    return <>
        <div>
            <HR.Text text="Student Detail"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="firstname" value="First Name"/>
            </div>
            <TextInput id="firstname" name="firstname"  type="text" autoFocus={true} onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="middlename" value="Middle Name"/>
            </div>
            <TextInput id="middlename" name="middlename" type="text" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="lastname" value="Last Name"/>
            </div>
            <TextInput id="lastname" name="lastname" type="text" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="birthplace" value="Birth Place"/>
            </div>
            <Select id="birthplace" name="birthplace" required defaultValue={""} onChange={formChangeHandler}>
                <option value="">Select Birth Place</option>
                <option value="Jakarta">Jakarta</option>
            </Select>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="birthdate" value="Tanggal Lahir" />
            </div>
            <Datepicker id="birthdate" name="birthdate" language="en-id" onSelect={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="religion" value="Religion"/>
            </div>
            <Select id="religion" name="religion" required defaultValue={""} onChange={formChangeHandler}>
                <option value="">Select Religion</option>
                <option value="Islam">Islam</option>
            </Select>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="gender" value="Gender"/>
            </div>
            <div className="flex items-center gap-2" id="gender">
                <Radio id="genderMale" name="gender" value="male" onChange={formChangeHandler}/>
                <Label htmlFor="genderMale">Male</Label>
                <Radio id="genderFemale" name="gender" value="female" onChange={formChangeHandler}/>
                <Label htmlFor="genderFemale">Female</Label>
            </div>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="address" value="Address" />
            </div>
            <Textarea id="address" name="address" required rows={4} onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="phoneno" value="Phone No" />
            </div>
            <TextInput id="phoneno" name="phoneno" type="text" addon="+62" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="email" value="Email" />
            </div>
            <TextInput icon={HiMail} id="email" name="email" type="email" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="musicinstrument" value="Musical Instrument the Child Can Play" />
            </div>
            <TextInput id="musicinstrument" name="musicinstrument" type="text" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="languagespoken" value="Language(s) Spoken at Home" />
            </div>
            <TextInput id="languagespoken" name="languagespoken" type="text" onChange={formChangeHandler}/>
        </div>
    </>;
}

export default StudentDetailForm;