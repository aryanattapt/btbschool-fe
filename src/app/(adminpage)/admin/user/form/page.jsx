'use client'
import {
    Label,
    Button,
    Spinner,
    TextInput,
    Radio,
    Datepicker,
    Select
} from "flowbite-react";
import { 
    useSearchParams 
} from 'next/navigation'
import { useEffect, useState } from "react";
import NavbarSidebarLayout from '../../_layouts/navigation';
import { HiOutlineMail } from "react-icons/hi";

const UserForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [payload, setPayload] = useState({})
    const searchParams = useSearchParams()
    const id = searchParams.get("id")

    useEffect(() => {
        console.log(`ID: ${id}`);
        setPayload(prevState => ({
            ...prevState,
            "_id": id
        }));

        if(id){
        }
    }, [])

    const datePickerHandler = (name, value) => {
        setPayload(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const formChangeHandler = (e) => {
        const { name, value, type, files } = e.target;
        if(type == 'file'){
            Object.keys(files).map((val) => {
                setPayload(prevState => ({
                    ...prevState,
                    [name]: prevState[name] ? [...prevState[name], files[val]] : [files[val]]
                }));
            });
        } else if(type == 'checkbox'){
            if(e.target.checked){
                setPayload(prevState => ({
                    ...prevState,
                    [name]: prevState[name] ? [...prevState[name], value] : [value]
                }));
            } else{
                setPayload(prevState => ({
                    ...prevState,
                    [name]: prevState[name].filter(val => val !== value)
                }));
            }
        }
        else{
            setPayload(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const submitHandler = (e) => {
        console.log(`Masuk Submit Handler`);
        if(id == null) {delete payload._id}
        console.log(payload);
        setIsLoading(true);

        /* Call API in here... */
    }

    return <>
        <NavbarSidebarLayout >
            <div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="firstname" value="First Name"/>
                    </div>
                    <TextInput value={payload.firstname || ''} id="firstname" name="firstname"  type="text" autoFocus={true} onChange={formChangeHandler}/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="lastname" value="Last Name"/>
                    </div>
                    <TextInput value={payload.lastname || ''} id="lastname" name="lastname"  type="text" autoFocus={true} onChange={formChangeHandler}/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="username" value="User Name"/>
                    </div>
                    <TextInput value={payload.username || ''} id="username" name="username"  type="text" autoFocus={true} onChange={formChangeHandler}/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email" value="Email"/>
                    </div>
                    <TextInput value={payload.email || ''} id="email" name="email"  type="email" icon={HiOutlineMail} autoFocus={true} onChange={formChangeHandler}/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="Password"/>
                    </div>
                    <TextInput value={payload.password || ''} id="password" name="password"  type="password" autoFocus={true} onChange={formChangeHandler}/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="role" value="Role"/>
                    </div>
                    <Select id="role" name="role" required value={payload.role} onChange={formChangeHandler}>
                        <option value="">Select Role</option>
                        <option value="admin">Administrator</option>
                        <option value="marketingadmission">Marketing Admission</option>
                    </Select>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="isactive" value="Active"/>
                    </div>
                    <div>
                        <Radio checked={payload.isactive == 'active'} id="isactivetrue" name="isactive" value="active" onChange={formChangeHandler}/>
                        <Label htmlFor="isactivetrue">Active</Label>
                        <Radio checked={payload.isactive == 'inactive'} id="isactivefalse" name="isactive" value="inactive" onChange={formChangeHandler}/>
                        <Label htmlFor="isactivefalse">Inactive</Label>
                    </div>
                </div>
                <div className="mt-1 grid grid-cols-1 font-sm gap-[0.625rem] md:grid-cols-3 md:gap-x-0.75">
                    <div className="flex">
                        <div className="mt-1 py-1.25 px-0.75 items-center text-center w-1/2 md:w-full">
                            <Button type="submit" id="btnSaveAndSend" name="btnSaveAndSend" className="w-full lg:w-auto" disabled={isLoading} onClick={submitHandler}>
                                {
                                    isLoading ? <>
                                        <Spinner aria-label="Spinner button example" size="sm" />
                                        <span className="pl-3">Please Wait...</span>
                                    </> : <>
                                        Save  
                                    </>
                                }
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </NavbarSidebarLayout>
    </>
}

export default UserForm;