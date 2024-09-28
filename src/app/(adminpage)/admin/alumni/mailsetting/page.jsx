'use client'
import {
    Button,
    Spinner,
} from "flowbite-react";
import { Suspense, useEffect, useState } from "react";
import NavbarSidebarLayout from '../../_layouts/navigation';
import Swal from "sweetalert2";
import AdminHeader from '../../_components/header'
import CustomEditor from '../../../../_components/customformeditor';
import { detransformJsonLanguage, transformJsonLanguage } from "../../../../../../helpers/jsontransform.helper";
import { GetConfig, SubmitConfig } from "../../../../../../services/config.service";

const MailForm = () => {
    const _id = 'admincms.alumni.mailcontent'
    const configName = 'general';
    const [isLoading, setIsLoading] = useState(false);
    const [payload, setPayload] = useState({})

    useEffect(() => {
        fetchMailContentAlumni();
    }, []);

    const fetchMailContentAlumni = async () => {
        try {
            const data = await GetConfig(configName, {"_id": _id});
            const deTransformJson = detransformJsonLanguage(data);
            setPayload(deTransformJson);
        } catch (error) {
            Swal.fire({
                allowOutsideClick: false,
                title: 'Alumni Notification!',
                text: error.toString(),
                icon: 'error',
            });
        }
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
        try {
            setIsLoading(true);
            console.log("Submit Handler");
            const finalPayload = {...payload, "_id": _id};
            const transformedPayload = [transformJsonLanguage(finalPayload)];
            console.log(transformedPayload);
            
            await SubmitConfig(configName, transformedPayload);
            await fetchMailContentAlumni();
        } catch (error) {
            Swal.fire({
                allowOutsideClick: false,
                title: 'Submit Notification!',
                text: error.toString(),
                icon: 'error',
            });
        } finally{
            setIsLoading(false);
        }
    };

    return <>
        <NavbarSidebarLayout >
        <div className="max-w-full grid gap-3 md:px-8">
            <div className="mt-4 mb-4">
                <AdminHeader title="Alumni Mail Setting Form"/>
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

const AlumniMailSettingPage = () => {
    return <Suspense>
        <MailForm/>
    </Suspense>
}

export default AlumniMailSettingPage;