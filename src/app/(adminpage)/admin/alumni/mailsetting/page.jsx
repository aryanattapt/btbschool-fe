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
import { checkPermission } from "../../../../../../services/auth.service";
import Loader from '../../../../_components/loader';

const MailForm = () => {
    const type = 'admincms.alumni.mailcontent'
    const configName = 'general';
    const [isLoading, setIsLoading] = useState(true);
    const [payload, setPayload] = useState({})
    const [isAuthorized, setIsAuthorized] = useState(null);    

    useEffect(() => {
        fetchData(fetchMailContentAlumni);
    }, []);

    const fetchData = async (callback) => {
        setIsLoading(true);
        try {
            await checkPermission('manage_alumni');
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
            setIsLoading(false);
        }
    };

    const fetchMailContentAlumni = async () => {
        try {
            const data = await GetConfig(configName, {"type": type});
            const deTransformJson = detransformJsonLanguage(data[0]);
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

    const validateData = (str) => {
        const matches = str.match(/%s/g);
        return matches && matches.length === 3;
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
            if(!validateData(payload?.content || '')){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "Mail Content should have 3 %s character. First %s is First name. Second %s is Last Name. Last %s is Alumni ID.",
                    icon: 'error',
                });
                return;
            }

            setIsLoading(true);
            const finalPayload = {...payload, "type": type};
            const transformedPayload = [transformJsonLanguage(finalPayload)];
            
            await SubmitConfig(configName, transformedPayload);
            await fetchMailContentAlumni();
            Swal.fire({
                allowOutsideClick: false,
                title: 'Submit Notification!',
                text: "Success!",
                icon: 'info',
            });
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

    if(isLoading){
        return <Loader/>
    } else
        return <NavbarSidebarLayout >
        {
            isAuthorized ? 
            <div className="max-w-full grid gap-3 md:px-8">
                <div className="mt-4 mb-4">
                    <AdminHeader title="Verify Alumni Mail Setting Form"/>
                </div>
                
                <div className="mt-4 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                    Mail Content
                </div>
                <div>
                    <CustomEditor name='content' onChange={formChangeHandler} value={payload?.content || ''} />
                    <p className="mt-1 text-sm text-gray-500">Mail Content should have 3 %s character. First %s is First name. Second %s is Last Name. Last %s is Alumni ID.</p>
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

const AlumniMailSettingPage = () => {
    return <Suspense>
        <MailForm/>
    </Suspense>
}

export default AlumniMailSettingPage;