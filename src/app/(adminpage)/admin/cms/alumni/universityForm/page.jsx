'use client'
import {
    Label,
    Button,
    Spinner,
    TextInput,
    FileInput
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
import Loader from '../../../../../_components/loader';
import { checkPermission } from '../../../../../../../services/auth.service';

const CMSAlumni = () => {
    const [isLoadingPage, setIsLoadingPage] = useState(true);
	const [isAuthorized, setIsAuthorized] = useState(null);

    const type = {"type": "alumni.university"};
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
        fetchData(fetchGeneralConfig)
    }, []);

    const fetchData = async (callback) => {
		setIsLoadingPage(true);
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
			setIsLoadingPage(false);
		}
	};

    const fetchGeneralConfig = async () => {
        if (id) {
            try {
                const result = await GetConfig("general", { ...type, "_id": id });
                setPayload(result[0]);
            } catch (error) {
                console.log(error);
            }
        }
    };
    
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
            if(!payload.caption){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "Please fill university name",
                    icon: 'error',
                });
                return;
            } if(!payload.universityImage){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "Please fill univeristy image",
                    icon: 'error',
                });
                return;
            }

            /* Handle Attachment */
            try {
                let formData = new FormData();
                formData.append("image", payload?.universityImage[0]);

                var resultAssets = await UploadAttachment("assets", formData);
                resultAssets = resultAssets?.data[0]?.fileURL;
                if(resultAssets){
                    finalData.image = resultAssets;
                    delete finalData.universityImage;
                }
            } catch (error) {console.log(error);}

            await SubmitConfig(configName, [finalData]);
            Swal.fire({
                allowOutsideClick: false,
                title: 'Submit Notification!',
                text: "Success!",
                icon: 'info',
            });
            setTimeout(() => {
                window.location.href = '/admin/cms/alumni';
            }, 5*1000); 
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

    if(isLoadingPage){
        return <Loader/>
    } else
        return <NavbarSidebarLayout >
        {
            isAuthorized ? 
            <div className="max-w-full grid gap-3 md:px-8">
                <div className="inline-flex justify-between">
                    <div className="text-[35px] text-[#00305E] font-bold">
                        Alumni Form
                    </div>
                </div>
                <div>
                    <Label htmlFor="name" value="Name"/>
                    <TextInput value={payload.caption || ''} id="caption" name="caption" type="text" onChange={formChangeHandler}/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="universityImage" value="Foto" />
                    </div>
                    <FileInput accept="image/*" ref={fileInputRef} id="universityImage" name="universityImage" helperText="Ukuran Maksimum 2MB. Format Image" onChange={formChangeHandler}/>
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
            : <div>Unauthorized</div>
        }
        </NavbarSidebarLayout>
}

const AlumniForm = () => {
    return (
        <Suspense>
            <CMSAlumni />
        </Suspense>
    );
}

export default AlumniForm;