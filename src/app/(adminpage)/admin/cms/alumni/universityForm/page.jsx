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
            setIsLoading(true);
            const finalData = {...payload, ...type};

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

            if(!finalData.caption){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "Please fill university name",
                    icon: 'error',
                });
                return;
            } if(!finalData.image){
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: "Please fill univeristy image",
                    icon: 'error',
                });
                return;
            }

            await SubmitConfig(configName, [finalData]);
            Swal.fire({
                allowOutsideClick: false,
                title: 'Submit Notification!',
                text: "Success! Redirect in 2 seconds...",
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
                    <FileInput accept="image/*" ref={fileInputRef} id="universityImage" name="universityImage" helperText="Ukuran Maksimum 8MB. Format Image dengan aspect ratio 1:1 contoh 512px x 512 px" onChange={formChangeHandler}/>
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