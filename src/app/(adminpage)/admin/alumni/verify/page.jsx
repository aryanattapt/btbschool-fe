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
import NavbarSidebarLayout from '../../_layouts/navigation';
import moment from 'moment'
import {
    FetchAlumni,
    VerifyAlumni
} from '../../../../../../services/alumni.service'
import Swal from "sweetalert2";

const AlumniVerifyForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [payload, setPayload] = useState({})
    const searchParams = useSearchParams()
    const id = searchParams.get("id")

    useEffect(() => {
        console.log(`ID: ${id}`);
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
            <div className="inline-flex flex justify-between">
                <div className="text-[35px] text-[#00305E] font-bold">
                    Verify Alumni
                </div>
            </div>
            <div className="mt-4 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                Alumni Data
            </div>
            <div className="md:inline-flex">
                <div className="mb-2 block w-72">
                    <Label value="Full Name"/>
                </div>
                <div className="mb-2 block w-72">
                    <Label value={`${payload?.firstname} ${payload?.lastname}`}/>
                </div>
            </div>
            <div className="md:inline-flex">
                <div className="mb-2 block w-72">
                    <Label value="Birth Date"/>
                </div>
                <div className="mb-2 block w-72">
                    <Label value={`${moment(payload?.birthdate).format("DD MMMM YYYY")}`}/>
                </div>
            </div>
            <div className="md:inline-flex">
                <div className="mb-2 block w-72">
                    <Label value="Last Year At BTB"/>
                </div>
                <div className="mb-2 block w-72">
                    <Label value={`${payload?.laststudentyear}`}/>
                </div>
            </div>
            <div className="md:inline-flex">
                <div className="mb-2 block w-72">
                    <Label value="Educations"/>
                </div>
                <div className="mb-2 block w-72">
                    <Label value={`${payload?.edukasiOptions?.join(",")}`}/>
                </div>
            </div>
            <div className="md:inline-flex">
                <div className="mb-2 block w-72">
                    <Label value="Undergraduate Name"/>
                </div>
                <div className="mb-2 block w-72">
                    <Label value={`${payload?.undergraduateuniversityname}`}/>
                </div>
            </div>
            <div className="md:inline-flex">
                <div className="mb-2 block w-72">
                    <Label value="Postgraduate Name"/>
                </div>
                <div className="mb-2 block w-72">
                    <Label value={`${payload?.postgraduateuniversityname}`}/>
                </div>
            </div>
            <div className="md:inline-flex">
                <div className="mb-2 block w-72">
                    <Label value="Working Status"/>
                </div>
                <div className="mb-2 block w-72">
                    <Label value={`${payload?.statusKerjaOptions}`}/>
                </div>
            </div>
            <div className="md:inline-flex">
                <div className="mb-2 block w-72">
                    <Label value="Profession Name"/>
                </div>
                <div className="mb-2 block w-72">
                    <Label value={`${payload?.professionname}`}/>
                </div>
            </div>
            <div className="md:inline-flex">
                <div className="mb-2 block w-72">
                    <Label value="Current Location"/>
                </div>
                <div className="mb-2 block w-72">
                    <Label value={`${payload?.currentlocation}`}/>
                </div>
            </div>
            <div className="md:inline-flex">
                <div className="mb-2 block w-72">
                    <Label value="Phone No"/>
                </div>
                <div className="mb-2 block w-72">
                    <Label value={`${payload?.phoneno}`}/>
                </div>
            </div>
            <div className="md:inline-flex">
                <div className="mb-2 block w-72">
                    <Label value="Email"/>
                </div>
                <div className="mb-2 block w-72">
                    <Label value={`${payload?.email}`}/>
                </div>
            </div>
            <div className="md:inline-flex">
                <div className="mb-2 block w-72">
                    <Label value="Photo"/>
                </div>
                <div className="mb-2 block w-72">
                    <Button color="success" onClick={() => window.location.href = val.attachment[0].fileURL} className="mr-4">View</Button>
                </div>
            </div>
            <div className="mt-4 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                Alumni ID
            </div>
            <div className="md:inline-flex">
                <div className="mb-2 block w-72">
                    <Label htmlFor="alumniid" value="Alumni ID"/>
                </div>
                <TextInput className="md:w-full pr-10 md:pr-0" id="alumniid" name="alumniid" type="text" autoFocus={true} onChange={formChangeHandler} value={payload.alumniid || ''}/>
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

const VerifyAlumniPage = () => {
    return <Suspense>
        <AlumniVerifyForm/>
    </Suspense>
}

export default VerifyAlumniPage;