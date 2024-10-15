'use client'
import {
    Label,
    Button,
    Spinner,
    TextInput
} from "flowbite-react";
import { 
    useSearchParams 
} from 'next/navigation'
import { Suspense, useEffect, useState } from "react";
import NavbarSidebarLayout from '../../../_layouts/navigation';
import {
    DeleteConfig,
    GetConfig
} from '../../../../../../../services/config.service';
import Swal from "sweetalert2";

const CMSAlumni = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [payload, setPayload] = useState({})
    const searchParams = useSearchParams();
    const id = searchParams.get("id"); // Get the id from URL

    useEffect(() => {
        console.log(`ID: ${id}`);
        
        if(id) {
            // Fetch alumni data
            GetConfig('general', {"type": "alumni"})
            .then(res => {
                // Log the response to see the data
                console.log("Fetched Alumni Data:", res);

                // Find the specific alumni based on the index (id)
                const selectedAlumni = res[0].ceritaAlumniFlag[id];
                if (selectedAlumni) {
                    setPayload(selectedAlumni);  // Set the specific alumni data in payload
                } else {
                    Swal.fire({
                        title: 'Alumni Not Found!',
                        text: `No alumni found with id: ${id}`,
                        icon: 'error',
                    });
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
        }
    }, [id]);

    const formChangeHandler = (e) => {
        const { name, value, type, files } = e.target;
        if(type === 'file'){
            Object.keys(files).forEach((val) => {
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

    const submitHandler = (e) => {
        console.log("Submit Handler triggered");
        if(!id) { delete payload._id }
        console.log("Payload:", payload);
        setIsLoading(true);

        SubmitConfig('alumni', [payload])
        .then(res => {
            setPayload({});
            setIsLoading(false);
            window.location.href = '/admin/cms/alumni';
        })
        .catch((err) => {
            setIsLoading(false);
            Swal.fire({
                allowOutsideClick: false,
                title: 'Submit Notification!',
                text: err,
                icon: 'error',
            });
        });
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
                    <TextInput value={payload.caption || ''} id="name" name="name" type="text" onChange={formChangeHandler}/>
                </div>
                <div>
                    <Label htmlFor="class" value="Logo"/>
                    <TextInput value={payload.image || ''} id="class" name="class" type="text" onChange={formChangeHandler}/>
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