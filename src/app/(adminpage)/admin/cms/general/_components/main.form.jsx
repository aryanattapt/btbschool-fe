'use client';
import {
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
import {
    transformJsonLanguage
} from '../../../../../../../helpers/jsontransform.helper';
import LogoForm from './logo.form';
import SosmedForm from './sosmed.form';
import ContactForm from './contact.form';
import FloatingButtonForm from './floatingbutton.form';
import AdminHeader from "../../../_components/header";

const GeneralSettingsMainForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [payload, setPayload] = useState({});

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

    const datePickerHandler = (name, value) => {
        setPayload(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitHandler = (e) => {
        console.log("Submit Handler");
        if(!payload._id) {delete payload._id}
        /* setIsLoading(true); */

        /* Call API here */
        /* SubmitConfig('', [transformJsonLanguage(payload)])
        .then(_ => {
            window.location.href = '/admin/cms/general';
        })
        .catch((err) => {
            setIsLoading(false);
            Swal.fire({
                allowOutsideClick: false,
                title: 'Submit Notification!',
                text: err,
                icon: 'error',
            });
        }); */
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