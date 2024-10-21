'use client'
import {
    Label,
    Button,
    Spinner,
    TextInput,
    FileInput,
    Textarea
} from "flowbite-react";
import { 
    useSearchParams 
} from 'next/navigation'
import { Suspense, useEffect, useRef, useState } from "react";
import NavbarSidebarLayout from '../../../_layouts/navigation';
import {
    GetConfig,
    SubmitConfig
} from '../../../../../../../services/config.service';
import {
    UploadAttachment
} from '../../../../../../../services/attachment.service';
import Swal from "sweetalert2";

const CMSAlumni = () => {
    const type = {"type": "alumni.story"};
    const configName = "general";

    const [isLoading, setIsLoading] = useState(false);
    const [payload, setPayload] = useState({})
    const searchParams = useSearchParams();
    const id = searchParams.get("id"); // Get the id from URL

    const fileInputRef = useRef(null);
    const clearFile = (name) => {
        fileInputRef.current.value = null;
        setPayload(prevState => ({
            ...prevState,
            [name]: null,
        }));
    }


    useEffect(() => {
        if(id){
            (async (id) => {
                try {
                    const result = await GetConfig(configName, {...type, "_id": id});
                    setPayload(result[0]);
                } catch (error) {console.log(error);}
            })(id)
        }
    }, [id]);

    const formChangeHandler = (e) => {
        const { name, value, type, files } = e.target;
        if(type === 'file'){
            const validFiles = [];
            const maxFileSize = 2 * 1024 * 1024;
            Object.keys(files).forEach((key) => {
                const file = files[key];
                if (file.type.startsWith('image/')) {
                    if (file.size <= maxFileSize) {
                        validFiles.push(file);
                    } else {
                        clearFile(name);
                        alert(`${file.name} exceeds the maximum size of 2 MB.`);
                    }
                } else {
                    clearFile(name);
                    alert(`${file.name} is not a valid image file.`);
                }
            });

            if (validFiles.length > 0) {
                setPayload(prevState => ({
                    ...prevState,
                    [name]: prevState[name] ? [...prevState[name], ...validFiles] : validFiles
                }));
            }
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
            const finalData = {...payload, ...type};
            if(!payload.name){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "Please fill alumni name",
                    icon: 'error',
                });
                return;
            } if(!payload.class){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "Please fill alumni class",
                    icon: 'error',
                });
                return;
            } if(!payload.university){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "Please fill alumni university",
                    icon: 'error',
                });
                return;
            } if(!payload.major){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "Please fill alumni major",
                    icon: 'error',
                });
                return;
            } if(!payload.testimonies){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "Please fill alumni testimony",
                    icon: 'error',
                });
                return;
            } if(!payload.alumniImage){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "Please fill alumni photo",
                    icon: 'error',
                });
                return;
            }

            // /* Handle Attachment */
            try {
                let formData = new FormData();
                formData.append("image", payload?.alumniImage[0]);

                var resultAssets = await UploadAttachment("assets", formData);
                resultAssets = resultAssets?.data[0]?.fileURL;
                if(resultAssets){
                    finalData.image = resultAssets;
                    delete finalData.alumniImage;
                }
            } catch (error) {console.log(error);}

            console.log([finalData]);
            await SubmitConfig(configName, [finalData]);
            Swal.fire({
                allowOutsideClick: false,
                title: 'Submit Notification!',
                text: "Success!",
                icon: 'info',
            });
            setTimeout(() => {
                window.location.href = '/admin/cms/alumni';
            }, 2*1000); 
        } catch (error) {
            console.log(error);
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
            <div className="max-w-full grid gap-3 md:px-8">
                <div className="inline-flex justify-between">
                    <div className="text-[35px] text-[#00305E] font-bold">
                        Alumni Form
                    </div>
                </div>
                <div>
                    <Label htmlFor="name" value="Name"/>
                    <TextInput value={payload.name || ''} id="name" name="name" type="text" onChange={formChangeHandler}/>
                </div>
                <div>
                    <Label htmlFor="class" value="Class"/>
                    <TextInput value={payload.class || ''} id="class" name="class" type="text" onChange={formChangeHandler}/>
                </div>
                <div>
                    <Label htmlFor="university" value="University"/>
                    <TextInput value={payload.university || ''} id="university" name="university" type="text" onChange={formChangeHandler}/>
                </div>
                <div>
                    <Label htmlFor="major" value="Major"/>
                    <TextInput value={payload.major || ''} id="major" name="major" type="text" onChange={formChangeHandler}/>
                </div>
                <div>
                    <Label htmlFor="testimonies" value="Testimonies"/>
                    <Textarea rows="4" cols="12" value={payload.testimonies || ''} id="testimonies" name="testimonies" type="text" onChange={formChangeHandler}/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="alumniImage" value="Foto" />
                    </div>
                    <FileInput accept="image/*" ref={fileInputRef} id="alumniImage" name="alumniImage" helperText="Ukuran Maksimum 2MB. Format Image" onChange={formChangeHandler}/>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    <Button 
                        color="warning" 
                        onClick={() => window.location.href = '/admin/cms/alumni'} 
                        className="mr-4"
                    >
                        Back
                    </Button>   
                    <Button type="submit" disabled={isLoading} onClick={submitHandler}>
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
}

const AlumniForm = () => {
    return (
        <Suspense>
            <CMSAlumni />
        </Suspense>
    );
}

export default AlumniForm;
