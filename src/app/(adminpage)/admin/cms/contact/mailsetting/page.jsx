'use client'
import {
    Label,
    Button,
    Spinner,
    TextInput,
} from "flowbite-react";
import { 
    useSearchParams 
} from 'next/navigation'
import { Suspense, useEffect, useState } from "react";
import NavbarSidebarLayout from '../../../_layouts/navigation';
import {
    FetchAlumni,
    VerifyAlumni
} from '../../../../../../../services/alumni.service'
import Swal from "sweetalert2";
import AdminHeader from '../../../_components/header'
import CustomEditor from '../../../../../_components/customformeditor';

const MailForm = () => {
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
            fetchAlumni(id)
        }
    }, [])

    const fetchAlumni = (id) => {
        FetchAlumni({"_id": id})
        .then(res => setPayload(res[0]))
        .catch((err) => {
            console.log(err);
        })
    }

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
        if(id == null) {delete payload._id}
        console.log(payload);
        setIsLoading(true);

        /* Call API in here... */
        VerifyAlumni(payload)
        .then(() => {
            setIsLoading(false); 
            window.location.href = '/admin/alumni'
        })
        .catch((err) => {
            setIsLoading(false); 
            Swal.fire({
                allowOutsideClick: false,
                title: 'Error Notification!',
                text: err,
                icon: 'error',
            });
        })
    }

    return <>
        <NavbarSidebarLayout >
        <div className="max-w-full grid gap-3 md:px-8">
            <div className="mt-4 mb-4">
                <AdminHeader title="Contact Mail Setting Form"/>
            </div>
            
            <div className="mt-4 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                Email Recepient
            </div>
            <div>
                <TextInput value={payload.emailrecepient || ''} id="emailrecepient" name="emailrecepient"  type="text" autoFocus={true} onChange={formChangeHandler}/>
            </div>
            <div className="mt-4 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                Mail Content
            </div>
            <div>
                <CustomEditor name='content' onChange={formChangeHandler} value={payload.content || ''} />
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

const ContactMailSettingPage = () => {
    return <Suspense>
        <MailForm/>
    </Suspense>
}

export default ContactMailSettingPage;