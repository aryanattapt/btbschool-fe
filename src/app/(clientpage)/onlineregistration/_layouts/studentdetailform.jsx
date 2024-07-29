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

const StudentDetailForm = ({formChangeHandler, datePickerHandler, payload}) => {
    return <>
        <div>
            <HR.Text text="Student Detail"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="firstname" value="First Name"/>
            </div>
            <TextInput value={payload.firstname || ''} id="firstname" name="firstname"  type="text" autoFocus={true} onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="middlename" value="Middle Name"/>
            </div>
            <TextInput value={payload.middlename || ''} id="middlename" name="middlename" type="text" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="lastname" value="Last Name"/>
            </div>
            <TextInput value={payload.lastname || ''} id="lastname" name="lastname" type="text" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="birthplace" value="Birth Place"/>
            </div>
            <Select value={payload.birthplace || ''} id="birthplace" name="birthplace" required onChange={formChangeHandler}>
                <option value="">Select Birth Place</option>
                <option value="Jakarta">Jakarta</option>
            </Select>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="birthdate" value="Tanggal Lahir" />
            </div>
            <Datepicker value={payload.birthdate || ''} id="birthdate" name="birthdate" language="en-id" onSelectedDateChanged={date => datePickerHandler('birthdate', date)}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="religion" value="Religion"/>
            </div>
            <Select value={payload.religion || ''} id="religion" name="religion" required onChange={formChangeHandler}>
                <option value="">Select Religion</option>
                <option value="Islam">Islam</option>
            </Select>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="gender" value="Gender"/>
            </div>
            <div className="flex items-center gap-2" id="gender">
                <Radio checked={payload.gender == 'male'} id="genderMale" name="gender" value="male" onChange={formChangeHandler}/>
                <Label htmlFor="genderMale">Male</Label>
                <Radio checked={payload.gender == 'female'} id="genderFemale" name="gender" value="female" onChange={formChangeHandler}/>
                <Label htmlFor="genderFemale">Female</Label>
            </div>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="address" value="Address" />
            </div>
            <Textarea value={payload.address || ''} id="address" name="address" required rows={4} onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="phoneno" value="Phone No" />
            </div>
            <TextInput value={payload.phoneno || ''} id="phoneno" name="phoneno" type="text" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="email" value="Email" />
            </div>
            <TextInput value={payload.email || ''} icon={HiMail} id="email" name="email" type="email" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="musicinstrument" value="Musical Instrument the Child Can Play" />
            </div>
            <TextInput value={payload.musicinstrument || ''} id="musicinstrument" name="musicinstrument" type="text" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="languagespoken" value="Language(s) Spoken at Home" />
            </div>
            <TextInput value={payload.languagespoken || ''} id="languagespoken" name="languagespoken" type="text" onChange={formChangeHandler}/>
        </div>
    </>;
}

export default StudentDetailForm;