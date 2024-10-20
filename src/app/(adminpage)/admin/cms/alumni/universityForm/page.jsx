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
import { Suspense, useEffect, useState } from "react";
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
    const type = {"type": "alumni.university"};
    const configName = "general";
    const [isLoading, setIsLoading] = useState(false);
    const [payload, setPayload] = useState({})
    const searchParams = useSearchParams();
    const id = searchParams.get("id"); // Get the id from URL

    useEffect(() => {
        if(id){
            (async (id) => {
                try {
                    const result = await GetConfig("general", {...type, "_id": id});
                    setPayload(result[0]);
                } catch (error) {console.log(error);}
            })(id)
        }
    }, [id]);

    const formChangeHandler = (e) => {
        const { name, value, type, files } = e.target;
        if(type === 'file'){
            Object.keys(files).forEach((val) => {
                if(files[val].size > 2*1024*1024){
                    alert("File exceed 2 mb");
                } else{
                    setPayload(prevState => ({
                        ...prevState,
                        [name]: prevState[name] ? [...prevState[name], files[val]] : [files[val]]
                    }));
                }
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
                    <TextInput value={payload.caption || ''} id="caption" name="caption" type="text" onChange={formChangeHandler}/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="universityImage" value="Foto" />
                    </div>
                    <FileInput accept="image/*" id="universityImage" name="universityImage" helperText="Ukuran Maksimum 2MB. Format Image" onChange={formChangeHandler}/>
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