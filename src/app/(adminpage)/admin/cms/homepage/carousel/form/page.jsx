'use client'
import {
    Label,
    FileInput,
    Button,
    Spinner,
    TextInput,
    Tabs
} from "flowbite-react";
import { Suspense, useEffect, useState } from "react";
import NavbarSidebarLayout from '../../../../_layouts/navigation';
import {
    GetConfig,
    SubmitConfig
} from '../../../../../../../../services/config.service';
import {
    UploadAttachment
} from '../../../../../../../../services/attachment.service';
import Swal from "sweetalert2";
import AdminHeader from "../../../../_components/header";
import { detransformJsonLanguage, transformJsonLanguage } from "../../../../../../../../helpers/jsontransform.helper";
import { useSearchParams } from "next/navigation";

const CarouselForm = () => {
    const searchParams = useSearchParams()
    const id = searchParams.get("id")
    
    const type = 'homepage.carousel'
    const configName = 'general';
    const [isLoading, setIsLoading] = useState(false);
    const [payload, setPayload] = useState({});

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            if(id){
                const data = await GetConfig(configName, {type, "_id": id || ''});
                const deTransformJson = detransformJsonLanguage(data[0]);
                setPayload(deTransformJson);
                console.log(deTransformJson);
            }
        } catch (error) {console.log(error);}
    };

    const formChangeHandler = (e) => {
        const { name, value, type, files } = e.target;
        if(type == 'file'){
            const newFiles = Array.from(files);
            const validFiles = [];
            let isValid = true;
            console.log(`masuk`);

            newFiles.forEach((file) => {
                if (file.size >= 1 * 1024 * 1024) {
                    isValid = false;
                    alert(`${file.name} exceeds the 64 MB size limit.`);
                } else {
                    validFiles.push(file);
                }
            });

            if (isValid) {
                setPayload(prevState => ({
                    ...prevState,
                    [name]: prevState[name] ? [...prevState[name], ...validFiles] : [...validFiles]
                }));
            }

            /* Object.keys(files).map((val) => {
                setPayload(prevState => ({
                    ...prevState,
                    [name]: prevState[name] ? [...prevState[name], files[val]] : [files[val]]
                }));
            }); */
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
            console.log(`Masuk Submit Handler`);
            setIsLoading(true);

            /* Handle Attachment */
            let fileType = payload.fileType; let formData = new FormData();
            try {
                const theFile = payload?.carousel[0];
                formData.append("carousel", theFile);
                fileType = theFile?.type?.startsWith('image/') ? 'IMAGE' : theFile?.type?.startsWith('video/') ? 'VIDEO' : '';

                var resultAssets = await UploadAttachment("assets", formData);
                resultAssets = resultAssets?.data[0]?.fileURL;
            } catch (error) {console.log(error);}

            delete payload.carousel;
            const finalPayload = {...payload, "type": type, "url": resultAssets, "fileType": fileType};
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
                title: "Error Notification!",
                text: error.toString(),
                icon: "error",
            });
        } finally{
            setIsLoading(false);
        }
    }

    return <>
        <NavbarSidebarLayout >
            <div className="max-w-full grid gap-3 md:px-8">
                <div className="mt-4 mb-4">
                    <AdminHeader title="Carousel Form"/>
                </div>
                <Tabs aria-label="Default tabs" variant="default">
                    <Tabs.Item title="Indonesia">
                        <div>
                            <div className="mb-3 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                                <Label htmlFor="title[ID]" value="Title (ID)"/>
                            </div>
                            <TextInput value={payload[`title[ID]`] || ''} id="title[ID]" name="title[ID]"  type="text" autoFocus={true} onChange={formChangeHandler}/>
                            <div className="mt-3 mb-3 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                                <Label htmlFor="content[ID]" value="Content (ID)"/>
                            </div>
                            <TextInput value={payload[`content[ID]`] || ''} id="content[ID]" name="content[ID]"  type="text" autoFocus={true} onChange={formChangeHandler}/>
                            <div className="mt-3 mb-3 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                                <Label htmlFor="buttondesc[ID]" value="Button Description (ID)"/>
                            </div>
                            <TextInput value={payload[`buttondesc[ID]`] || ''} id="buttondesc[ID]" name="buttondesc[ID]"  type="text" autoFocus={true} onChange={formChangeHandler}/>
                            <div className="mt-3 mb-3 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                                <Label htmlFor="buttonlink[ID]" value="Button Link (ID)"/>
                            </div>
                            <TextInput value={payload[`buttonlink[ID]`] || ''} id="buttonlink[ID]" name="buttonlink[ID]"  type="text" autoFocus={true} onChange={formChangeHandler}/>
                        </div>
                    </Tabs.Item>
                    <Tabs.Item title="English">
                        <div>
                            <div className="mb-3 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                                <Label htmlFor="title[EN]" value="Title (EN)"/>
                            </div>
                            <TextInput value={payload[`title[EN]`] || ''} id="title[EN]" name="title[EN]"  type="text" autoFocus={true} onChange={formChangeHandler}/>
                            <div className="mt-3 mb-3 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                                <Label htmlFor="content[EN]" value="Content (EN)"/>
                            </div>
                            <TextInput value={payload[`content[EN]`] || ''} id="content[EN]" name="content[EN]"  type="text" autoFocus={true} onChange={formChangeHandler}/>
                            <div className="mt-3 mb-3 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                                <Label htmlFor="buttondesc[EN]" value="Button Description (EN)"/>
                            </div>
                            <TextInput value={payload[`buttondesc[EN]`] || ''} id="buttondesc[EN]" name="buttondesc[EN]"  type="text" autoFocus={true} onChange={formChangeHandler}/>
                            <div className="mt-3 mb-3 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                                <Label htmlFor="buttonlink[EN]" value="Button Link (EN)"/>
                            </div>
                            <TextInput value={payload[`buttonlink[EN]`] || ''} id="buttonlink[EN]" name="buttonlink[EN]"  type="text" autoFocus={true} onChange={formChangeHandler}/>
                        </div>
                    </Tabs.Item>
                </Tabs>
                <div>
                        <div className="mb-3 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                            <Label htmlFor="carousel" value="Unggah File" />
                        </div>
                        <FileInput accept="image/*,video/*" id="carousel" name="carousel" helperText="Ukuran Maksimum 64MB. Format Images/Video dengan menggunakan aspect ratio wide Misal 1920x1080px" onChange={formChangeHandler}/>
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

const CarouselFormPage = () => {
    return <Suspense>
        <CarouselForm/>
    </Suspense>
}

export default CarouselFormPage;