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
import NavbarSidebarLayout from '../../_layouts/navigation';
import {
    GetConfig,
    SubmitConfig
} from '../../../../../../services/config.service';
import Swal from "sweetalert2";

const FAQ = () => {
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
            GetConfig('faq', {"_id": id})
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

        /* Call API in here... */
        SubmitConfig('faq', [payload])
        .then(res => {
            setPayload({});
            setIsLoading(false);
            window.location.href = '/admin/helpcenter'
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
    }

    return <>
        <NavbarSidebarLayout >
            <div className="max-w-full grid gap-3 md:px-8">
                <div className="inline-flex flex justify-between">
                    <div className="text-[35px] text-[#00305E] font-bold">
                        F.A.Q Form
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="question" value="Question"/>
                    </div>
                    <TextInput value={payload.question || ''} id="question" name="question"  type="text" autoFocus={true} onChange={formChangeHandler}/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="answer" value="Answer"/>
                    </div>
                    <TextInput value={payload.answer || ''} id="answer" name="answer"  type="text" autoFocus={true} onChange={formChangeHandler}/>
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

const FAQForm = () => {
    return <Suspense>
        <FAQ/>
    </Suspense>
}

export default FAQForm;