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
        <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
            Student Detail
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block w-72">
                <Label htmlFor="firstname" value="First Name"/>
            </div>
            <TextInput className="w-full pr-10 md:pr-0" value={payload.firstname || ''} id="firstname" name="firstname"  type="text" autoFocus={true} onChange={formChangeHandler}/>
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block w-72">
                <Label htmlFor="middlename" value="Middle Name"/>
            </div>
            <TextInput className="w-full pr-10 md:pr-0" value={payload.middlename || ''} id="middlename" name="middlename" type="text" onChange={formChangeHandler}/>
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block w-72">
                <Label htmlFor="lastname" value="Last Name"/>
            </div>
            <TextInput className="w-full pr-10 md:pr-0" value={payload.lastname || ''} id="lastname" name="lastname" type="text" onChange={formChangeHandler}/>
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block w-72">
                <Label htmlFor="birthplace" value="Place & Date of Birth"/>
            </div>
            <div className="inline-flex w-full pr-10 md:pr-0">
                <div className="w-1/2 pr-2">
                    <Select value={payload.birthplace || ''} id="birthplace" name="birthplace" required onChange={formChangeHandler}>
                        <option value="">Select Birth Place</option>
                        <option value="Jakarta">Jakarta</option>
                    </Select>
                </div>
                <div className="w-1/2">
                    <Datepicker value={payload.birthdate || ''} id="birthdate" name="birthdate" language="en-id" showClearButton={false} showTodayButton={false} onSelectedDateChanged={date => datePickerHandler('birthdate', date)}/>
                </div>
            </div>  
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block w-72">
                <Label htmlFor="religion" value="Religion"/>
            </div>
            <Select className="w-full pr-10 md:pr-0" value={payload.religion || ''} id="religion" name="religion" required onChange={formChangeHandler}>
                <option value="">Select Religion</option>
                <option value="Islam">Islam</option>
            </Select>
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block w-72">
                <Label htmlFor="gender" value="Gender"/>
            </div>
            <div className="flex items-center gap-2 w-full pr-10 md:pr-0" id="gender">
                <Radio checked={payload.gender == 'male'} id="genderMale" name="gender" value="male" onChange={formChangeHandler}/>
                <Label htmlFor="genderMale">Male</Label>
                <Radio checked={payload.gender == 'female'} id="genderFemale" name="gender" value="female" onChange={formChangeHandler}/>
                <Label htmlFor="genderFemale">Female</Label>
            </div>
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block w-72">
                <Label htmlFor="address" value="Address" />
            </div>
            <Textarea className="w-full pr-10 md:pr-0" value={payload.address || ''} id="address" name="address" required rows={4} onChange={formChangeHandler}/>
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block w-72">
                <Label htmlFor="phoneno" value="Phone No" />
            </div>
            <TextInput className="w-full pr-10 md:pr-0" value={payload.phoneno || ''} id="phoneno" name="phoneno" type="text" onChange={formChangeHandler}/>
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block w-72">
                <Label htmlFor="email" value="Email" />
            </div>
            <TextInput className="w-full pr-10 md:pr-0" value={payload.email || ''} icon={HiMail} id="email" name="email" type="email" onChange={formChangeHandler}/>
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block w-72">
                <Label htmlFor="musicinstrument" value="Musical Instrument the Child Can Play" />
            </div>
            <TextInput className="w-full pr-10 md:pr-0" value={payload.musicinstrument || ''} id="musicinstrument" name="musicinstrument" type="text" onChange={formChangeHandler}/>
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block w-72">
                <Label htmlFor="languagespoken" value="Language(s) Spoken at Home" />
            </div>
            <TextInput className="w-full pr-10 md:pr-0" value={payload.languagespoken || ''} id="languagespoken" name="languagespoken" type="text" onChange={formChangeHandler}/>
        </div>
    </>;
}

export default StudentDetailForm;