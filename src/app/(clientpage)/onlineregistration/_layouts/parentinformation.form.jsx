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

const ParentsInformationForm = ({formChangeHandler, datePickerHandler, payload}) => {
    return <>
        <div>
            <HR.Text text="Parent / Guardian Information"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="fathername" value="Father's Name"/>
            </div>
            <TextInput value={payload.fathername || ''} id="fathername" name="fathername" type="text" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="fatherbirthplace" value="Birth Place"/>
            </div>
            <Select value={payload.fatherbirthplace || ''} id="fatherbirthplace" name="fatherbirthplace" onChange={formChangeHandler}>
                <option value="">Select Birth Place</option>
                <option value="Jakarta">Jakarta</option>
            </Select>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="fatherbirthdate" value="Tanggal Lahir" />
            </div>
            <Datepicker value={payload.fatherbirthdate || ''} id="fatherbirthdate" name="fatherbirthdate" language="en-id" onSelectedDateChanged={date => datePickerHandler('fatherbirthdate', date)}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="fatherphoneno" value="Phone No" />
            </div>
            <TextInput value={payload.fatherphoneno || ''} id="fatherphoneno" name="fatherphoneno" type="text" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="fatheremail" value="Email" />
            </div>
            <TextInput value={payload.fatheremail || ''} icon={HiMail} type="email" id="fatheremail" name="fatheremail" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="fathermaritalstatus" value="Marital Status"/>
            </div>
            <div className="flex items-center gap-2" id="fathermaritalstatus">
                <Radio checked={payload.fathermaritalstatus == 'Married'} id="marriedfather" name="fathermaritalstatus" value="Married" onChange={formChangeHandler}/>
                <Label htmlFor="marriedfather">Married</Label>
                <Radio checked={payload.fathermaritalstatus == 'Divorced'} id="divorcedfather" name="fathermaritalstatus" value="Divorced" onChange={formChangeHandler}/>
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
            <TextInput value={payload.mothername || ''} id="mothername" name="mothername" type="text" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="motherbirthplace" value="Birth Place"/>
            </div>
            <Select value={payload.motherbirthplace || ''} id="motherbirthplace" name="motherbirthplace" onChange={formChangeHandler}>
                <option value="">Select Birth Place</option>
                <option value="Jakarta">Jakarta</option>
            </Select>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="motherbirthdate" value="Tanggal Lahir" />
            </div>
            <Datepicker value={payload.motherbirthdate || ''} id="motherbirthdate" name="motherbirthdate" language="en-id" onSelectedDateChanged={date => datePickerHandler('motherbirthdate', date)}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="motherphoneno" value="Phone No" />
            </div>
            <TextInput value={payload.motherphoneno || ''} id="motherphoneno" name="motherphoneno" type="text" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="motheremail" value="Email" />
            </div>
            <TextInput value={payload.motheremail || ''} icon={HiMail} id="motheremail" name="motheremail" type="email" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="mothermaritalstatus" value="Marital Status"/>
            </div>
            <div className="flex items-center gap-2" id="mothermaritalstatus">
                <Radio checked={payload.mothermaritalstatus == 'Married'} id="marriedmother" name="mothermaritalstatus" value="Married" onChange={formChangeHandler}/>
                <Label htmlFor="marriedmother">Married</Label>
                <Radio checked={payload.mothermaritalstatus == 'Divorced'} id="divorcedmother" name="mothermaritalstatus" value="Divorced" onChange={formChangeHandler}/>
                <Label htmlFor="divorcedmother">Divorced</Label>
            </div>
        </div>
    </>;
}

export default ParentsInformationForm;