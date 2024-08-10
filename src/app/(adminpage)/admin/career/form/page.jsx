'use client'
import {
    Label,
    Button,
    Spinner,
    TextInput,
    Radio,
    Datepicker,
    Textarea
} from "flowbite-react";
import { 
    useSearchParams 
} from 'next/navigation'
import { Suspense, useEffect, useState } from "react";
import NavbarSidebarLayout from '../../_layouts/navigation';
import {
    GetAllCareer,
    UpsertCareer
} from '../../../../../../services/career.service'
import Swal from "sweetalert2";
import CustomEditor from '../../../../_components/customformeditor';

const CareerForm = () => {
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
            fetchCareer(id)
        }
    }, [])

    const fetchCareer = (id) => {
        GetAllCareer({"_id": id})
        .then(res => setPayload(res[0]))
        .catch((err) => {
            Swal.fire({
                allowOutsideClick: false,
                title: 'Error Notification!',
                text: err,
                icon: 'error',
            });
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
        console.log(value);
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
        UpsertCareer(payload)
        .then(() => {
            setIsLoading(false); 
            window.location.href = '/admin/career'
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
            <div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="jobtitlename" value="Job Title Name"/>
                    </div>
                    <TextInput value={payload.jobtitlename || ''} id="jobtitlename" name="jobtitlename"  type="text" autoFocus={true} onChange={formChangeHandler}/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="experienced" value="Experience"/>
                    </div>
                    <div>
                        <Radio checked={payload.experienced == 'experienced'} id="experienced" name="experienced" value="experienced" onChange={formChangeHandler}/>
                        <Label htmlFor="experienced">Experienced</Label>
                        <Radio checked={payload.experienced == 'freshgraduate'} id="freshgraduate" name="experienced" value="freshgraduate" onChange={formChangeHandler}/>
                        <Label htmlFor="freshgraduate">Fresh Graduate</Label>
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="jobcategory" value="Job Category"/>
                    </div>
                    <TextInput value={payload.jobcategory || ''} id="jobcategory" name="jobcategory"  type="text" autoFocus={true} onChange={formChangeHandler}/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="location" value="Location"/>
                    </div>
                    <TextInput value={payload.location || ''} id="location" name="location"  type="text" autoFocus={true} onChange={formChangeHandler}/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="jobsummary" value="Job Summary" />
                    </div>
                    {/* <Textarea value={payload.jobsummary || ''} id="jobsummary" name="jobsummary" required rows={4} onChange={formChangeHandler}/> */}
                    <CustomEditor name='jobsummary' onChange={formChangeHandler} value={payload.jobsummary || ''} />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="responsibilites" value="Responsibilites" />
                    </div>
                    {/* <Textarea value={payload.responsibilites || '} id="responsibilites" name="responsibilites" required rows={4} onChange={formChangeHandler}/> */}
                    <CustomEditor name='responsibilites' onChange={formChangeHandler} value={payload.responsibilites || ''} />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="maximumApplyDate" value="Apply Before" />
                    </div>
                    <Datepicker value={payload.maximumApplyDate || ''} id="maximumApplyDate" name="maximumApplyDate" language="en-id" onSelectedDateChanged={date => datePickerHandler('maximumApplyDate', date)}/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="jobtype" value="Job Type"/>
                    </div>
                    <div>
                        <Radio checked={payload.jobtype == 'Full time, Permanent'} id="jobtimefulltime" name="jobtype" value="Full time, Permanent" onChange={formChangeHandler}/>
                        <Label htmlFor="jobtimefulltime">Full time, Permanent</Label>
                        <Radio checked={payload.jobtype == 'Contract'} id="jobtimecontract" name="jobtype" value="Contract" onChange={formChangeHandler}/>
                        <Label htmlFor="jobtimecontract">Contract</Label>
                        <Radio checked={payload.jobtype == 'Outsourcing'} id="jobtimeoutsourcing" name="jobtype" value="Outsourcing" onChange={formChangeHandler}/>
                        <Label htmlFor="jobtimeoutsourcing">Outsourcing</Label>
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="experiencelevel" value="Experience Level"/>
                    </div>
                    <div>
                        <Radio checked={payload.experiencelevel == 'All'} id="experiencelevelAll" name="experiencelevel" value="All" onChange={formChangeHandler}/>
                        <Label htmlFor="experiencelevelAll">All</Label>
                        <Radio checked={payload.experiencelevel == 'S3'} id="experiencelevelS3" name="experiencelevel" value="S3" onChange={formChangeHandler}/>
                        <Label htmlFor="experiencelevelS3">S3</Label>
                        <Radio checked={payload.experiencelevel == 'S2'} id="experiencelevelS2" name="experiencelevel" value="S2" onChange={formChangeHandler}/>
                        <Label htmlFor="experiencelevelS2">S2</Label>
                        <Radio checked={payload.experiencelevel == 'S1'} id="experiencelevelS1" name="experiencelevel" value="S1" onChange={formChangeHandler}/>
                        <Label htmlFor="experiencelevelS1">S1</Label>
                        <Radio checked={payload.experiencelevel == 'SMA'} id="experiencelevelSMA" name="experiencelevel" value="SMA" onChange={formChangeHandler}/>
                        <Label htmlFor="experiencelevelSMA">SMA</Label>
                        <Radio checked={payload.experiencelevel == 'SMP'} id="experiencelevelSMP" name="experiencelevel" value="SMP" onChange={formChangeHandler}/>
                        <Label htmlFor="experiencelevelSMP">SMP</Label>
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="requirement" value="Requirement" />
                    </div>
                    {/* <Textarea value={payload.requirement || ''} id="requirement" name="requirement" required rows={4} onChange={formChangeHandler}/> */}
                    <CustomEditor name='requirement' onChange={formChangeHandler} value={payload.requirement || ''} />
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

const CareerFormPage = () => {
    return <Suspense>
        <CareerForm/>
    </Suspense>
}

export default CareerFormPage;