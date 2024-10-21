'use client'
import {
    Label,
    FileInput,
    Button,
    Spinner,
    TextInput
} from "flowbite-react";
import { 
    useSearchParams 
} from 'next/navigation'
import { Suspense, useEffect, useRef, useState } from "react";
import NavbarSidebarLayout from '../../_layouts/navigation';
import {
    GetConfig,
    SubmitConfig
} from '../../../../../../services/config.service';
import {
    UploadAttachment
} from '../../../../../../services/attachment.service';
import Swal from "sweetalert2";

const BulletinSpotlightForm = () => {
    const fileInputRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [payload, setPayload] = useState({})
    const searchParams = useSearchParams()
    const id = searchParams.get("id")

    useEffect(() => {
        console.log(`ID: ${id}`);
        if(id){
            GetConfig('bulletinspotlight', {"_id": id})
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
    }, [])

    const clearFile = (name) => {
        fileInputRef.current.value = null;
        setPayload(prevState => ({
            ...prevState,
            [name]: null,
        }));
    }

    const formChangeHandler = (e) => {
        const { name, value, type, files } = e.target;
        if(type == 'file'){
            const validFiles = [];
            const maxFileSize = 20 * 1024 * 1024;
            Object.keys(files).forEach((key) => {
                const file = files[key];
                if (file.type === 'application/pdf') {
                    if (file.size <= maxFileSize) {
                        validFiles.push(file);
                    } else {
                        clearFile(name);
                        alert(`${file.name} exceeds the maximum size of 20 MB.`);
                    }
                } else {
                    clearFile(name);
                    alert(`${file.name} is not a valid PDF file.`);
                }
            });

            if (validFiles.length > 0) {
                setPayload(prevState => ({
                    ...prevState,
                    [name]: prevState[name] ? [...prevState[name], ...validFiles] : validFiles
                }));
            }
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
            const finalPayload = {...payload, "date": new Date()};
            if(!payload.bulletintitle){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "Please fill title",
                    icon: 'error',
                });
                return;
            } if(!payload.bulletinFile){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "Please fill attachment",
                    icon: 'error',
                });
                return;
            }

            try {
                var formData = new FormData();
                payload?.bulletinFile?.map((val) => {
                    formData.append("bulletinFile", val);
                });

                const attachmentResult = await UploadAttachment("alumni", formData);
                if(attachmentResult && attachmentResult.data){
                    finalPayload.attachment = attachmentResult.data;
                    delete finalPayload.bulletinFile;
                }
            } catch (error) {console.log(error);}

            console.log([finalPayload]);
            SubmitConfig('bulletinspotlight', [finalPayload]);
            // window.location.href = '/admin/bulletinspotlight';
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
        <NavbarSidebarLayout >
            <div className="max-w-full grid gap-3 md:px-8">
                <div className="inline-flex flex justify-between">
                    <div className="text-[35px] text-[#00305E] font-bold">
                        Bulletin Form
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bulletintitle" value="Bulletin Title"/>
                    </div>
                    <TextInput value={payload.bulletintitle || ''} id="bulletintitle" name="bulletintitle"  type="text" autoFocus={true} onChange={formChangeHandler}/>
                </div>
                <div>
                        <div className="mb-2 block">
                            <Label htmlFor="bulletinFile" value="Unggah CV" />
                        </div>
                        <FileInput accept=".pdf" ref={fileInputRef} id="bulletinFile" name="bulletinFile" helperText="Ukuran Maksimum 20MB. Format PDF" onChange={formChangeHandler}/>
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

const BulletinSpotlightFormPage = () => {
    return <Suspense>
        <BulletinSpotlightForm/>
    </Suspense>
}

export default BulletinSpotlightFormPage;