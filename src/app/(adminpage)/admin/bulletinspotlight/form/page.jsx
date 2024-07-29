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
import { useEffect, useState } from "react";
import NavbarSidebarLayout from '../../_layouts/navigation';
import {
    GetConfig,
    SubmitConfig
} from '../../../../../../services/config.service';
import {
    UploadAttachment
} from '../../../../../../services/attachment.service';
import Swal from "sweetalert2";

const BulletinSpotlightFormPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [payload, setPayload] = useState({})
    const searchParams = useSearchParams()
    const id = searchParams.get("id")

    useEffect(() => {
        console.log(`ID: ${id}`);
        setPayload(prevState => ({
            ...prevState,
            "_id": id
        }));

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

    const formChangeHandler = (e) => {
        const { name, value, type, files } = e.target;
        if(type == 'file'){
            Object.keys(files).map((val) => {
                setPayload(prevState => ({
                    ...prevState,
                    [name]: prevState[name] ? [...prevState[name], files[val]] : [files[val]]
                }));
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

    const submitHandler = (e) => {
        console.log(`Masuk Submit Handler`);
        if(id == null) {delete payload._id}
        console.log(payload);
        setIsLoading(true);

        var formData = new FormData();
        payload?.bulletinFile?.map((val) => {
            formData.append("bulletinFile", val);
        });

        /* Call API in here... */
        UploadAttachment("alumni", formData)
        .then((res) => {
            const finalPayload = { ...payload };
            finalPayload.attachment = res.data;
            delete finalPayload.bulletinFile;

            SubmitConfig('bulletinspotlight', [finalPayload])
            .then(res => {
                setPayload({});
                setIsLoading(false);
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: `Success submit data`,
                    icon: 'info',
                });
            })
            .catch((err) => {
                setIsLoading(false);
                setStateCallBack(false);
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Submit Notification!',
                    text: err,
                    icon: 'error',
                });
            })
        }).catch((err) => {
            setIsLoading(false);
            Swal.fire({
                allowOutsideClick: false,
                title: "Error Notification!",
                text: err,
                icon: "error",
            });
        });
    }

    return <>
        <NavbarSidebarLayout >
            <div>
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
                        <FileInput accept=".pdf" id="bulletinFile" name="bulletinFile" helperText="Ukuran Maksimum 2MB. Format PDF" onChange={formChangeHandler}/>
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

export default BulletinSpotlightFormPage;