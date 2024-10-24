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

    const submitHandler = async (e) => {
        try {
            if(!payload.jobtitlename){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Error Notification!',
                    text: 'Please input jobtitle name',
                    icon: 'error',
                });
                return;
            } if(!payload.experienced){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Error Notification!',
                    text: 'Please input Experience',
                    icon: 'error',
                });
                return;
            } if(!payload.jobcategory){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Error Notification!',
                    text: 'Please input job category',
                    icon: 'error',
                });
                return;
            } if(!payload.location){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Error Notification!',
                    text: 'Please input job location',
                    icon: 'error',
                });
                return;
            } if(!payload.jobsummary){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Error Notification!',
                    text: 'Please input job summary',
                    icon: 'error',
                });
                return;
            } if(!payload.responsibilites){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Error Notification!',
                    text: 'Please input responsibility',
                    icon: 'error',
                });
                return;
            } if(!payload.maximumApplyDate){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Error Notification!',
                    text: 'Please input apply before date',
                    icon: 'error',
                });
                return;
            } if(!payload.jobtype){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Error Notification!',
                    text: 'Please input job type',
                    icon: 'error',
                });
                return;
            } if(!payload.experiencelevel){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Error Notification!',
                    text: 'Please input experience level',
                    icon: 'error',
                });
                return;
            } if(!payload.requirement){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Error Notification!',
                    text: 'Please input requirement',
                    icon: 'error',
                });
                return;
            }

            setIsLoading(true);
            await UpsertCareer(payload);
            window.location.href = '/admin/career';
        } catch (error) {
            Swal.fire({
                allowOutsideClick: false,
                title: 'Error Notification!',
                text: err,
                icon: 'error',
            });
        } finally{
            setIsLoading(false);
        }
    }

    return <>
        <NavbarSidebarLayout >
            <div className="max-w-full grid gap-3 md:px-8">
                <div className="inline-flex flex justify-between">
                    <div className="text-[35px] text-[#00305E] font-bold">
                        Career Form
                    </div>
                </div>
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
                    <div className="flex flex-wrap gap-2">
                        <Radio checked={payload.experienced == 'experienced'} id="experienced" name="experienced" value="experienced" onChange={formChangeHandler}/>
                        <Label htmlFor="experienced" className="mr-4">Experienced</Label>
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
                    <div className="flex flex-wrap gap-2">
                        <Radio checked={payload.jobtype == 'Full time, Permanent'} id="jobtimefulltime" name="jobtype" value="Full time, Permanent" onChange={formChangeHandler}/>
                        <Label htmlFor="jobtimefulltime" className="mr-4">Full time, Permanent</Label>
                        <Radio checked={payload.jobtype == 'Contract'} id="jobtimecontract" name="jobtype" value="Contract" onChange={formChangeHandler}/>
                        <Label htmlFor="jobtimecontract" className="mr-4">Contract</Label>
                        <Radio checked={payload.jobtype == 'Outsourcing'} id="jobtimeoutsourcing" name="jobtype" value="Outsourcing" onChange={formChangeHandler}/>
                        <Label htmlFor="jobtimeoutsourcing" className="mr-4">Outsourcing</Label>
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="experiencelevel" value="Experience Level"/>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <Radio checked={payload.experiencelevel == 'All'} id="experiencelevelAll" name="experiencelevel" value="All" onChange={formChangeHandler}/>
                        <Label htmlFor="experiencelevelAll" className="mr-4">All</Label>
                        <Radio checked={payload.experiencelevel == 'S3'} id="experiencelevelS3" name="experiencelevel" value="S3" onChange={formChangeHandler}/>
                        <Label htmlFor="experiencelevelS3" className="mr-4">S3</Label>
                        <Radio checked={payload.experiencelevel == 'S2'} id="experiencelevelS2" name="experiencelevel" value="S2" onChange={formChangeHandler}/>
                        <Label htmlFor="experiencelevelS2" className="mr-4">S2</Label>
                        <Radio checked={payload.experiencelevel == 'S1'} id="experiencelevelS1" name="experiencelevel" value="S1" onChange={formChangeHandler}/>
                        <Label htmlFor="experiencelevelS1" className="mr-4">S1</Label>
                        <Radio checked={payload.experiencelevel == 'SMA'} id="experiencelevelSMA" name="experiencelevel" value="SMA" onChange={formChangeHandler}/>
                        <Label htmlFor="experiencelevelSMA" className="mr-4">SMA</Label>
                        <Radio checked={payload.experiencelevel == 'SMP'} id="experiencelevelSMP" name="experiencelevel" value="SMP" onChange={formChangeHandler}/>
                        <Label htmlFor="experiencelevelSMP" className="mr-4">SMP</Label>
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