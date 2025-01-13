'use client'
import {
    Label, 
    Datepicker,
    Button,
    Spinner,
    Tabs
} from "flowbite-react";
import { useState } from "react";
import NavbarSidebarLayout from '../../../_layouts/navigation';
import {
    SubmitConfig
} from '../../../../../../../services/config.service';
import Swal from "sweetalert2";
import CalenderAcademicActivityForm from "./activity.form";
import {
    transformJsonLanguage
} from '../../../../../../../helpers/jsontransform.helper'
import moment from "moment";

const CalenderAcademicMainForm = ({payload, setPayload}) => {
    const [isLoading, setIsLoading] = useState(false);

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

    const datePickerHandler = (name, value) => {
        setPayload(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const submitHandler = async (e) => {
        try {
            setIsLoading(true);
            if(!payload._id) {delete payload._id}
            
            if(!payload.date){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "Please Fill Date!",
                    icon: 'error',
                });
                return;
            }
            
            if(!payload["activity[ID]"] || !payload["activity[EN]"]){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "Please Fill All Activity Data in English And Indonesia!",
                    icon: 'error',
                });
                return;
            }

            await SubmitConfig('calenderacademic', [transformJsonLanguage(payload)]);
            window.location.href = '/admin/calenderacademic'
        } catch (error) {
            Swal.fire({
                allowOutsideClick: false,
                title: 'Submit Notification!',
                text: err,
                icon: 'error',
            });
        } finally{
            setIsLoading(false);
        }
    }

    return <>
        <div className="max-w-full grid gap-3 md:px-8">
            <div className="inline-flex flex justify-between">
                <div className="text-[35px] text-[#00305E] font-bold">
                    Calender Academic Form
                </div>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="date" value="Tanggal" />
                </div>
                <Datepicker value={payload.date || ''} id="date" name='date' language="en-id" onSelectedDateChanged={(date) => datePickerHandler("date", date ? moment(date).format("YYYY-MM-DD") : "")}/>
            </div>
            <Tabs aria-label="Default tabs" variant="default">
                <Tabs.Item active title="Indonesia">
                    <CalenderAcademicActivityForm payload={payload} formChangeHandler={formChangeHandler} language={"ID"}/>
                </Tabs.Item>
                <Tabs.Item active title="English">
                    <CalenderAcademicActivityForm payload={payload} formChangeHandler={formChangeHandler} language={"EN"}/>
                </Tabs.Item>
            </Tabs>
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
    </>
};

export default CalenderAcademicMainForm;