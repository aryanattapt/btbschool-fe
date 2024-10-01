'use client';
import {
    Button,
    Spinner,
    Tabs
} from "flowbite-react";
import { useEffect, useState } from "react";
import NavbarSidebarLayout from '../../../_layouts/navigation';
import {
    UploadAttachment
} from '../../../../../../../services/attachment.service';
import {
    GetConfig,
    SubmitConfig
} from '../../../../../../../services/config.service';
import Swal from "sweetalert2";
import {
    detransformJsonLanguage,
    transformJsonLanguage
} from '../../../../../../../helpers/jsontransform.helper';
import LogoForm from './logo.form';
import SosmedForm from './sosmed.form';
import ContactForm from './contact.form';
import FloatingButtonForm from './floatingbutton.form';
import AdminHeader from "../../../_components/header";
import QuickLinkForm from './quicklink.form'

const GeneralSettingsMainForm = () => {
    const type = 'generalsetting'
    const configName = 'general';
    const [isLoading, setIsLoading] = useState(false);
    const [payload, setPayload] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await GetConfig(configName, {"type": type});
            const deTransformJson = detransformJsonLanguage(data[0]);
            setPayload(deTransformJson);
            console.log(deTransformJson);
        } catch (error) {
            Swal.fire({
                allowOutsideClick: false,
                title: 'Error Notification!',
                text: error.toString(),
                icon: 'error',
            });
        }
    }

    const formChangeHandler = (e) => {
        const { name, value, type, files } = e.target;
        if(type === 'file'){
            Object.keys(files).map((val) => {
                setPayload(prevState => ({
                    ...prevState,
                    [name]: prevState[name] ? [...prevState[name], files[val]] : [files[val]]
                }));
            });
        } else if(type === 'checkbox'){
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
    const validateData = (data) => {
        const isEmpty = (item) => typeof item === 'object' && Object.keys(item).length === 0;
    
        const isValidURL = (url) => /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/.test(url);
    
        const isValidE164 = (number) => /^\+?[1-9]\d{1,14}$/.test(number); // E.164 format
    
        const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
        const validate = (item) => {
            if (Array.isArray(item)) {
                if (item.length === 0) return false;
                return item.every(validate);
            } else if (typeof item === 'object' && item !== null) {
                if (isEmpty(item)) return false;
                return Object.entries(item).every(([key, value]) => {
                    if (Array.isArray(value)) {
                        return value.length > 0 && value.every(validate);
                    } else if (key === 'link' || key === 'mapsLocation') {
                        return isValidURL(value);
                    } else if (key === 'phoneNo' || key === 'whatsAppNo') {
                        return isValidE164(value);
                    } else if (key === 'email') {
                        return isValidEmail(value);
                    }
                    return value !== null && value !== '';
                });
            }
            return item !== null && item !== '';
        };
        return validate(data);
    };    

    const submitHandler = async (e) => {
        try {
            setIsLoading(true);
            /* if(!validateData(payload)){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "Data is not valid!",
                    icon: 'error',
                });
                return;
            } */

            const finalPayload = {...payload, "type": type};
            
            /* Handle Attachment */
            try {
                var formDataLogoID = new FormData();
                payload["logo[ID]"]?.map((val) => {
                    formDataLogoID.append("logofile", val);
                });
                
                var formDataLogoEN = new FormData();
                payload["logo[EN]"]?.map((val) => {
                    formDataLogoEN.append("logofile", val);
                });

                const collectedPromise = [];
                collectedPromise.push(UploadAttachment("assets", formDataLogoEN));
                collectedPromise.push(UploadAttachment("assets", formDataLogoID));
                
                const [resultEN, resultID] = await Promise.all(collectedPromise);
                
                finalPayload["logo[EN]"] = resultEN?.data[0]?.fileURL;
                finalPayload["logo[ID]"] = resultID?.data[0]?.fileURL;
            } catch (error) {console.log(error);}

            const transformedPayload = [transformJsonLanguage(finalPayload)];
            console.log(transformedPayload);
            
            /* Submit data */
            await SubmitConfig(configName, transformedPayload);
            await fetchData();
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

    return (
        <NavbarSidebarLayout>
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-4 mb-4">
                    <AdminHeader title="General Content Settings Form"/>
                </div>

                <Tabs aria-label="Default tabs" variant="default">
                    <Tabs.Item title="Indonesia">
                        <LogoForm payload={payload} formChangeHandler={formChangeHandler} language={"ID"}/>
                    </Tabs.Item>
                    <Tabs.Item title="English">
                        <LogoForm payload={payload} formChangeHandler={formChangeHandler} language={"EN"}/>
                    </Tabs.Item>
                </Tabs>
                <div className="space-y-4">
                    <SosmedForm payload={payload} formChangeHandler={formChangeHandler}/>
                </div>
                <div className="space-y-4">
                    <ContactForm payload={payload} formChangeHandler={formChangeHandler}/>
                </div>
                <div className="space-y-4">
                    <FloatingButtonForm payload={payload} formChangeHandler={formChangeHandler}/>
                </div>
                <div className="space-y-4">
                    <QuickLinkForm payload={payload} formChangeHandler={formChangeHandler}/>
                </div>
                <div className="mt-20 space-y-4">
                    <Button type="submit" id="btnSaveAndSend" name="btnSaveAndSend" className="w-full md:w-auto" disabled={isLoading} onClick={submitHandler}>
                        {isLoading ? (
                            <>
                                <Spinner aria-label="Spinner button example" size="sm" />
                                <span className="pl-3">Please Wait...</span>
                            </>
                        ) : (
                            "Save"
                        )}
                    </Button>
                </div>
            </div>
        </NavbarSidebarLayout>
    );
};

export default GeneralSettingsMainForm;