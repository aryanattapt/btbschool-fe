'use client'
import {
    Label,
    Button,
    Spinner,
    TextInput,
    Radio,
    Datepicker,
    Select,
    Checkbox
} from "flowbite-react";
import { 
    useSearchParams 
} from 'next/navigation'
import { Suspense, useEffect, useState } from "react";
import NavbarSidebarLayout from '../../_layouts/navigation';
import { HiOutlineMail } from "react-icons/hi";
import {
    getAllUsers,
    insertUser,
    updateUser
} from '../../../../../../services/user.service'
import Swal from "sweetalert2";

const UserForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [payload, setPayload] = useState({})
    const searchParams = useSearchParams()
    const id = searchParams.get("id")

    useEffect(() => {
        setPayload(prevState => ({
            ...prevState,
            "_id": id
        }));

        if(id){
            getAllUsers({"_id": id})
            .then(res => {
                const data = res[0];
                delete data.password
                setPayload(data)
            })
            .catch((err) => {
                console.log(err);
            })
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

    const submitHandler = async (e) => {
        if (!payload.password) {
            delete payload.password;
        }

        
        try {
            setIsLoading(true);
            if (id) {
                // Call the update API
                await updateUser({...payload});
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: 'Success submit data. Refreshing in 2 seconds...',
                    icon: 'info',
                });
            } else {
                // Call the insert API
                await insertUser({...payload});
                setPayload({});
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: 'Success submit data. Refreshing in 2 seconds...',
                    icon: 'info',
                });
            }
        } catch (err) {
            Swal.fire({
                allowOutsideClick: false,
                title: 'Submit Notification!',
                text: err.message || err,
                icon: 'error',
            });
        } finally {
            setTimeout(() => {
                window.location.reload();
            }, 2000)
            setIsLoading(false);
        }
    };    

    return <>
        <NavbarSidebarLayout >
            <div className="max-w-full grid gap-3 md:px-8">
                <div className="inline-flex flex justify-between">
                    <div className="text-[35px] text-[#00305E] font-bold">
                        User Form
                    </div>
                </div>
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
                {/* <div>
                    <div className="mb-2 block">
                        <Label htmlFor="role" value="Role"/>
                    </div>
                    <Select id="role" name="role" required value={payload.role} onChange={formChangeHandler}>
                        <option value="">Select Role</option>
                        <option value="admin">Administrator</option>
                        <option value="marketingadmission">Marketing Admission</option>
                    </Select>
                </div> */}
                <div>
                    <div className="mb-2 block">
                        <Label value="Permission"/>
                    </div>
                    <div>
                        <Checkbox
                            checked={payload?.permission?.includes('manage_content')}
                            id="manage_content_permission"
                            name="permission"
                            value="manage_content"
                            onChange={formChangeHandler}
                        />
                        <Label htmlFor="manage_content_permission" className="mr-4">Manage Content Client Page</Label>
                        <Checkbox
                            checked={payload?.permission?.includes('manage_career')}
                            id="manage_career_permission"
                            name="permission"
                            value="manage_career"
                            onChange={formChangeHandler}
                        />
                        <Label htmlFor="manage_career_permission" className="mr-4">Manage Career</Label>
                        <Checkbox
                            checked={payload?.permission?.includes('manage_bulletin')}
                            id="manage_bulletin_permission"
                            name="permission"
                            value="manage_bulletin"
                            onChange={formChangeHandler}
                        />
                        <Label htmlFor="manage_bulletin_permission" className="mr-4">Manage bulletin</Label>
                        <Checkbox
                            checked={payload?.permission?.includes('manage_faq')}
                            id="manage_faq_permission"
                            name="permission"
                            value="manage_faq"
                            onChange={formChangeHandler}
                        />
                        <Label htmlFor="manage_faq_permission" className="mr-4">Manage FAQ</Label>
                        <Checkbox
                            checked={payload?.permission?.includes('manage_calender')}
                            id="manage_calender_permission"
                            name="permission"
                            value="manage_calender"
                            onChange={formChangeHandler}
                        />
                        <Label htmlFor="manage_calender_permission" className="mr-4">Manage Calendar Academic</Label>
                    </div>
                    <div>
                    <Checkbox
                            checked={payload?.permission?.includes('manage_alumni')}
                            id="manage_alumni_permission"
                            name="permission"
                            value="manage_alumni"
                            onChange={formChangeHandler}
                        />
                        <Label htmlFor="manage_alumni_permission" className="mr-4">Manage Alumni</Label>
                        <Checkbox
                            checked={payload?.permission?.includes('manage_users')}
                            id="manage_users_permission"
                            name="permission"
                            value="manage_users"
                            onChange={formChangeHandler}
                        />
                        <Label htmlFor="manage_users_permission" className="mr-4">Manage Users</Label>
                        <Checkbox
                            checked={payload?.permission?.includes('manage_studentregistration')}
                            id="manage_studentregistration_permission"
                            name="permission"
                            value="manage_studentregistration"
                            onChange={formChangeHandler}
                        />
                        <Label htmlFor="manage_studentregistration_permission" className="mr-4">Manage Student Registration</Label>
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="isactive" value="Active"/>
                    </div>
                    <div>
                        <Radio checked={payload.isactive?.toString() == 'active'} id="isactivetrue" name="isactive" value="active" onChange={formChangeHandler}/>
                        <Label htmlFor="isactivetrue">Active</Label>
                        <Radio checked={payload.isactive?.toString() == 'nonactive'} id="isactivefalse" name="isactive" value="nonactive" onChange={formChangeHandler}/>
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

const UserFormPage = () => {
    return <Suspense>
        <UserForm/>
    </Suspense>
}

export default UserFormPage;