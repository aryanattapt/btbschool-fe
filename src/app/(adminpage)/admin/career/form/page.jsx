'use client'
import {
    Label,
    Button,
    Spinner,
    TextInput,
    Radio,
    Datepicker,
    Checkbox,
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
import Loader from '../../../../_components/loader';
import { checkPermission } from '../../../../../../services/auth.service';

const CareerForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [payload, setPayload] = useState({})
    const searchParams = useSearchParams()
    const id = searchParams.get("id")

    const [isLoadingPage, setIsLoadingPage] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        fetchData(fetchCareer)
    }, [])

    const fetchData = async (callback) => {
        setIsLoadingPage(true);
        try {
            await checkPermission('manage_career');
            setIsAuthorized(true);
            await callback();
        } catch (error) {
            console.log(error);
            if(error.status != '401'){
                try {
                    await callback();
                } catch (error) {console.log(error);}
            }
        } finally {
            setIsLoadingPage(false);
        }
    };

    const fetchCareer = async () => {
        if(id){
            try {
                const res = await GetAllCareer({ "_id": id });
                setPayload(res[0]);
            } catch (err) {
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Error Notification!',
                    text: err.message || err,
                    icon: 'error',
                });
            }
        }
    };

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

    const onChangeExperienceLevel = (e) => {
        const {value, checked} = e.target
        const referenced = ['All', 'S3', 'S2', 'S1', 'SMA', 'SMP'];
        if(checked){
            if(value === 'All'){
                payload['experiencelevel'] = referenced
            } else {
                payload['experiencelevel'].push(value)
            }
        } else {
            if(value === 'All'){
                payload['experiencelevel'] = []
            } else {
                payload['experiencelevel'] = payload['experiencelevel'].filter(res => res !== value && res !== 'All')
            }
        }
        payload['experiencelevel'] = payload['experiencelevel'].sort((a, b) => { 
            return referenced.indexOf(a) - referenced.indexOf(b)
        })
        setPayload({...payload})
    }

    const errorSwal = (message) => {
        Swal.fire({
            allowOutsideClick: false,
            title: 'Error Notification!',
            text: `Please input ${message}`,
            icon: 'error',
        });
    }

    const submitHandler = async (e) => {
        try {
            if(!payload.jobtitlename) return errorSwal('Jobtitle Name')
            else if(!payload.experienced) return errorSwal('Experience')
            else if(!payload.jobcategory) return errorSwal('Job Category')
            else if(!payload.location) return errorSwal('Job Location')
            else if(!payload.jobsummary) return errorSwal('Job Summary')
            else if(!payload.responsibilites) return errorSwal('Responsibility')
            else if(!payload.maximumApplyDate) return errorSwal('Apply before date')
            else if(!payload.jobtype) return errorSwal('Job Type')
            else if(!payload.experiencelevel) return errorSwal('Experience Level')
            else if(!payload.requirement) return errorSwal('Requirement')
            setIsLoading(true);
            await UpsertCareer(payload);
            window.location.href = '/admin/career';
        } catch (error) {
            Swal.fire({
                allowOutsideClick: false,
                title: 'Error Notification!',
                text: error,
                icon: 'error',
            });
        } finally{
            setIsLoading(false);
        }
    }

    if(isLoadingPage){
        return <Loader/>
    } else
        return <NavbarSidebarLayout >
        {
            isAuthorized ? 
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
                        {/* <Radio checked={payload.experienced == 'experienced'} id="experienced" name="experienced" value="experienced" onChange={formChangeHandler}/> */}
                        <Checkbox
                            checked={payload?.experienced?.includes('experienced')}
                            id="experienced"
                            name="experienced"
                            value="experienced"
                            onChange={formChangeHandler}
                        />
                        <Label htmlFor="experienced" className="mr-4">Experienced</Label>


                        {/* <Radio checked={payload.experienced == 'freshgraduate'} id="freshgraduate" name="experienced" value="freshgraduate" onChange={formChangeHandler}/> */}
                        <Checkbox
                            checked={payload?.experienced?.includes('freshgraduate')}
                            id="freshgraduate"
                            name="experienced"
                            value="freshgraduate"
                            onChange={formChangeHandler}
                        />
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
                        {/* <Radio checked={payload.jobtype == 'Full time, Permanent'} id="jobtimefulltime" name="jobtype" value="Full time, Permanent" onChange={formChangeHandler}/> */}
                        <Checkbox
                            checked={payload?.jobtype?.includes('Full time, Permanent')}
                            id="jobtimefulltime"
                            name="jobtype"
                            value="Full time, Permanent"
                            onChange={formChangeHandler}
                        />
                        <Label htmlFor="jobtimefulltime" className="mr-4">Full time, Permanent</Label>

                        {/* <Radio checked={payload.jobtype == 'Contract'} id="jobtimecontract" name="jobtype" value="Contract" onChange={formChangeHandler}/> */}
                        <Checkbox
                            checked={payload?.jobtype?.includes('Contract')}
                            id="jobtimecontract"
                            name="jobtype"
                            value="Contract"
                            onChange={formChangeHandler}
                        />
                        <Label htmlFor="jobtimecontract" className="mr-4">Contract</Label>

                        {/* <Radio checked={payload.jobtype == 'Outsourcing'} id="jobtimeoutsourcing" name="jobtype" value="Outsourcing" onChange={formChangeHandler}/> */}
                        <Checkbox
                            checked={payload?.jobtype?.includes('Outsourcing')}
                            id="jobtimeoutsourcing"
                            name="jobtype"
                            value="Outsourcing"
                            onChange={formChangeHandler}
                        />
                        <Label htmlFor="jobtimeoutsourcing" className="mr-4">Outsourcing</Label>
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="experiencelevel" value="Experience Level"/>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {/* <Radio checked={payload.experiencelevel == 'All'} id="experiencelevelAll" name="experiencelevel" value="All" onChange={formChangeHandler}/> */}
                        <Checkbox
                            checked={payload?.experiencelevel?.includes('All')}
                            id="experiencelevelAll"
                            name="experiencelevel"
                            value="All"
                            onChange={onChangeExperienceLevel}
                        />
                        <Label htmlFor="experiencelevelAll" className="mr-4">All</Label>

                        {/* <Radio checked={payload.experiencelevel == 'S3'} id="experiencelevelS3" name="experiencelevel" value="S3" onChange={formChangeHandler}/> */}
                        <Checkbox
                            checked={payload?.experiencelevel?.includes('S3')}
                            id="experiencelevelS3"
                            name="experiencelevel"
                            value="S3"
                            onChange={onChangeExperienceLevel}
                        />
                        <Label htmlFor="experiencelevelS3" className="mr-4">S3</Label>
                        
                        {/* <Radio checked={payload.experiencelevel == 'S2'} id="experiencelevelS2" name="experiencelevel" value="S2" onChange={formChangeHandler}/> */}
                        <Checkbox
                            checked={payload?.experiencelevel?.includes('S2')}
                            id="experiencelevelS2"
                            name="experiencelevel"
                            value="S2"
                            onChange={onChangeExperienceLevel}
                        />
                        <Label htmlFor="experiencelevelS2" className="mr-4">S2</Label>

                        {/* <Radio checked={payload.experiencelevel == 'S1'} id="experiencelevelS1" name="experiencelevel" value="S1" onChange={formChangeHandler}/> */}
                        <Checkbox
                            checked={payload?.experiencelevel?.includes('S1')}
                            id="experiencelevelS1"
                            name="experiencelevel"
                            value="S1"
                            onChange={onChangeExperienceLevel}
                        />
                        <Label htmlFor="experiencelevelS1" className="mr-4">S1</Label>

                        {/* <Radio checked={payload.experiencelevel == 'SMA'} id="experiencelevelSMA" name="experiencelevel" value="SMA" onChange={formChangeHandler}/> */}
                        <Checkbox
                            checked={payload?.experiencelevel?.includes('SMA')}
                            id="experiencelevelSMA"
                            name="experiencelevel"
                            value="SMA"
                            onChange={onChangeExperienceLevel}
                        />
                        <Label htmlFor="experiencelevelSMA" className="mr-4">SMA</Label>
                        
                        {/* <Radio checked={payload.experiencelevel == 'SMP'} id="experiencelevelSMP" name="experiencelevel" value="SMP" onChange={formChangeHandler}/> */}
                        <Checkbox
                            checked={payload?.experiencelevel?.includes('SMP')}
                            id="experiencelevelSMP"
                            name="experiencelevel"
                            value="SMP"
                            onChange={onChangeExperienceLevel}
                        />
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
            : <div>Unauthorized</div>
        }
        </NavbarSidebarLayout>
}

const CareerFormPage = () => {
    return <Suspense>
        <CareerForm/>
    </Suspense>
}

export default CareerFormPage;