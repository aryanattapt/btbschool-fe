'use client';
import {
    Button,
    Spinner,
    Tabs
} from "flowbite-react";
import { useEffect, useState } from "react";
import NavbarSidebarLayout from '../../_layouts/navigation';
import {
    UploadAttachment
} from '../../../../../../services/attachment.service';
import {
    GetConfig,
    SubmitConfig
} from '../../../../../../services/config.service';
import Swal from "sweetalert2";
import {
    detransformJsonLanguage,
    transformJsonLanguage
} from '../../../../../../helpers/jsontransform.helper';
import AdminHeader from "../../_components/header";

const HomepageSettingsMainForm = () => {
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
                    <AdminHeader title="Homepage Content Settings Form"/>
                </div>

                <div className="mt-4 mb-4">
                    <div className="mt-4 mb-4 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                        Homepage Carousel Settings
                    </div>
                    <Button color="blue" onClick={() => window.location.href="/admin/cms/homepage/carousel"}>Settings</Button>
                </div>

                <div className="mt-4 mb-4">
                    <div className="mt-4 mb-2 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                        Content Settings
                    </div>
                    <Tabs aria-label="Default tabs" variant="default">
                        <Tabs.Item title="Indonesia">
                        </Tabs.Item>
                        <Tabs.Item title="English">
                        </Tabs.Item>
                    </Tabs>
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

export default HomepageSettingsMainForm;