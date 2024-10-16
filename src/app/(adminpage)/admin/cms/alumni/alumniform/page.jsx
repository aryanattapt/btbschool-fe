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
    const [originalPayload, setOriginalPayload] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [payload, setPayload] = useState({})
    const searchParams = useSearchParams();
    const id = searchParams.get("id"); // Get the id from URL

    useEffect(() => {
        console.log(`ID: ${id}`);
        
        // Fetch alumni data
        GetConfig('general', {"type": "alumni"})
        .then(res => {
            setOriginalPayload(res[0]);

            // Log the response to see the data
            console.log("Fetched Alumni Data:", res);

            if(id){
                // Find the specific alumni based on the index (id)
                const selectedAlumni = res[0].ceritaAlumni[id];
                if (selectedAlumni) {
                    setPayload(selectedAlumni);  // Set the specific alumni data in payload
                } else {
                    Swal.fire({
                        title: 'Alumni Not Found!',
                        text: `No alumni found with id: ${id}`,
                        icon: 'error',
                    });
                }
            }
        })
        .catch((err) => {
            Swal.fire({
                allowOutsideClick: false,
                title: 'Error Notification!',
                text: err,
                icon: 'error',
            });
        });
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
            console.log("Submit Handler triggered");
            console.log(payload);

            /* Handle Attachment */
            try {
                let formData = new FormData();
                const theFile = payload?.image[0]; /* Ganti disini input file name nya */
                formData.append("image", theFile); /* Ganti disini input file name nya */

                var resultAssets = await UploadAttachment("assets", formData);
                resultAssets = resultAssets?.data[0]?.fileURL;
            } catch (error) {console.log(error);}

            let data = {...originalPayload, "type": "alumni"};
            if(id){
                data.ceritaAlumni[id] = {...payload, "image": resultAssets || payload.image};
            } else{
                data.ceritaAlumni.push({...payload, "image": resultAssets || payload.image})
            }
            console.log(data);

            await SubmitConfig('general', [data]);
            window.location.href = '/admin/cms/alumni';            
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
                    <TextInput value={payload.testimonies || ''} id="testimonies" name="testimonies" type="text" onChange={formChangeHandler}/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="image" value="Foto" />
                    </div>
                    <FileInput accept="image/*" id="image" name="image" helperText="Ukuran Maksimum 2MB. Format Image" onChange={formChangeHandler}/>
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
