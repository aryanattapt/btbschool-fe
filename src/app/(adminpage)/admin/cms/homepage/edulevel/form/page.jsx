'use client'
import {
    Label,
    FileInput,
    Button,
    Spinner,
    TextInput,
    Tabs
} from "flowbite-react";
import { 
    useSearchParams 
} from 'next/navigation'
import { Suspense, useEffect, useRef, useState } from "react";
import NavbarSidebarLayout from '../../../../_layouts/navigation';
import {
    GetConfig,
    SubmitConfig
} from '../../../../../../../../services/config.service';
import {
    UploadAttachment
} from '../../../../../../../../services/attachment.service';
import Swal from "sweetalert2";
import Loader from '../../../../../../_components/loader';
import { checkPermission } from '../../../../../../../../services/auth.service';
import { detransformJsonLanguage, transformJsonLanguage } from "../../../../../../../../helpers/jsontransform.helper";

const EducationLevelForm = () => {
    const fileInputRef = useRef(null);
    const [payload, setPayload] = useState({})
    const searchParams = useSearchParams()
    const id = searchParams.get("id")
    const [isLoading, setIsLoading] = useState(false);
    const [isSaveLoading, setIsSaveLoading] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        console.log(`ID: ${id}`);
        fetchData(fetchEducationLevel)
    }, []);

    const fetchData = async (callback) => {
        setIsLoading(true);
        try {
            await checkPermission('manage_content');
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

    const fetchEducationLevel = async () => {
        if (id) {
            try {
                const res = await GetConfig('general', { "_id": id, "type": "homepage.edulevel" });
                setPayload(detransformJsonLanguage(res[0]));
            } catch (err) {
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Error Notification!',
                    text: err,
                    icon: 'error',
                });
            }
        }
    };

    const clearFile = (name) => {
        fileInputRef.current.value = null;
        setPayload(prevState => ({
            ...prevState,
            [name]: null,
        }));
    }

    const formChangeHandler = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            const maxFileSize = 8 * 1024 * 1024;
            Object.keys(files).forEach((key) => {
                const file = files[key];
                
                if (file.type.startsWith('image/')) {
                    if (file.size <= maxFileSize) {
                        const img = new Image();
                        const reader = new FileReader();
                        
                        reader.onload = (event) => {
                            img.src = event.target.result;
                            img.onload = () => {
                                const isSquare = img.width === img.height;
                                if (isSquare) {
                                    setPayload(prevState => ({
                                        ...prevState,
                                        [name]: prevState[name] ? [...prevState[name], file] : [file]
                                    }));    
                                } else {
                                    clearFile(name);
                                    Swal.fire({
                                        allowOutsideClick: false,
                                        title: 'Error Notification!',
                                        text: `${file.name} does not have a 1:1 aspect ratio. Height: ${img.height}px. Width: ${img.width}px.`,
                                        icon: 'error',
                                    });
                                }
                            };
                        };
                        reader.readAsDataURL(file);
                        
                    } else {
                        clearFile(name);
                        Swal.fire({
                            allowOutsideClick: false,
                            title: 'Error Notification!',
                            text: `${file.name} exceeds the maximum size of 8 MB.`,
                            icon: 'error',
                        });
                    }
                } else {
                    clearFile(name);
                    Swal.fire({
                        allowOutsideClick: false,
                        title: 'Error Notification!',
                        text: `${file.name} is not a valid image file.`,
                        icon: 'error',
                    });
                }
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
            setIsSaveLoading(true);
            const finalPayload = {...payload, "date": new Date(), "type": "homepage.edulevel"};

            try {
                var formData = new FormData();
                payload?.photofile?.map((val) => {
                    formData.append("photofile", val);
                });

                const attachmentResult = await UploadAttachment("educationlevel", formData);
                if(attachmentResult && attachmentResult.data){
                    finalPayload.attachment = attachmentResult.data;
                    delete finalPayload.photofile;
                }
            } catch (error) {console.log(error);}

            if(!finalPayload["title[EN]"] || !finalPayload["title[ID]"]){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "Please fill title",
                    icon: 'error',
                });
                return;
            } if(!finalPayload.attachment){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "Please fill attachment",
                    icon: 'error',
                });
                return;
            }

            const transformedPayload = [transformJsonLanguage(finalPayload)];
            console.log(transformedPayload);
            SubmitConfig('general', transformedPayload);
        } catch (error) {
            console.log(error);
            Swal.fire({
                allowOutsideClick: false,
                title: 'Submit Notification!',
                text: error,
                icon: 'error',
            });
        } finally{
            setIsSaveLoading(false);
            window.location.href = "/admin/cms/homepage/edulevel"
        }
    }

    if(isLoading){
        return <Loader/>
    } else
        return <NavbarSidebarLayout >
        {
            isAuthorized ? 
            <div className="max-w-full grid gap-3 md:px-8">
                <div className="inline-flex flex justify-between">
                    <div className="text-[35px] text-[#00305E] font-bold">
                        Homepage Education Level Form
                    </div>
                </div>
                <Tabs aria-label="Default tabs" variant="default">
                    <Tabs.Item title="Indonesia">
                        <div>
                            <div className="mb-3 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                                <Label htmlFor="title[ID]" value="Title (ID)"/>
                            </div>
                            <TextInput value={payload[`title[ID]`] || ''} id="title[ID]" name="title[ID]"  type="text" autoFocus={true} onChange={formChangeHandler}/>
                        </div>
                    </Tabs.Item>
                    <Tabs.Item title="English">
                        <div>
                            <div className="mb-3 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                                <Label htmlFor="title[EN]" value="Title (EN)"/>
                            </div>
                            <TextInput value={payload[`title[EN]`] || ''} id="title[EN]" name="title[EN]"  type="text" autoFocus={true} onChange={formChangeHandler}/>
                        </div>
                    </Tabs.Item>
                </Tabs>
                <div>
                        <div>
                            <div className="mb-3 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                                <Label htmlFor="Link" value="Link"/>
                            </div>
                            <TextInput value={payload.link} id="link" name="link"  type="text" autoFocus={true} onChange={formChangeHandler}/>
                        </div>
                </div>
                <div>
                        <div className="mb-2 block">
                            <Label htmlFor="photofile" value="Unggah Photo" />
                        </div>
                        <FileInput accept="image/*" ref={fileInputRef} id="photofile" name="photofile" helperText="Ukuran Maksimum 8MB. Format Image dengan aspect ratio 1:1. Example: 512x512 px" onChange={formChangeHandler}/>
                    </div>
                <div className="mt-1 grid grid-cols-1 font-sm gap-[0.625rem] md:grid-cols-3 md:gap-x-0.75">
                    <div className="flex">
                        <div className="mt-1 py-1.25 px-0.75 items-center text-center w-1/2 md:w-full">
                            <Button type="submit" id="btnSaveAndSend" name="btnSaveAndSend" className="w-full lg:w-auto" disabled={isLoading} onClick={submitHandler}>
                                {
                                    isSaveLoading ? <>
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

const EducationLevelFormPage = () => {
    return <Suspense>
        <EducationLevelForm/>
    </Suspense>
}

export default EducationLevelFormPage;