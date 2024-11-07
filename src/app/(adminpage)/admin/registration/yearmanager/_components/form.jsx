'use client'
import {
    Label,
    Button,
    Spinner,
} from "flowbite-react";
import { 
    useSearchParams 
} from 'next/navigation'
import { useEffect, useState } from "react";
import NavbarSidebarLayout from '../../../_layouts/navigation';
import {
    GetConfig,
    SubmitConfig
} from '../../../../../../../services/config.service'
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Loader from '../../../../../_components/loader';
import { checkPermission } from '../../../../../../../services/auth.service';

const OnlineRegistrationYearManagerForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [payload, setPayload] = useState({})
    const searchParams = useSearchParams()
    const id = searchParams.get("id")

    const [isLoadingPage, setIsLoadingPage] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        fetchData(fetchSchoolYear)
    }, [])

    const fetchData = async (callback) => {
        setIsLoadingPage(true);
        try {
            await checkPermission('manage_studentregistration');
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

    const fetchSchoolYear = async () => {
        if (id) {
            try {
                const res = await GetConfig('onlineregisyear', { "_id": id });
                setPayload(res[0]);
            } catch (err) {
                setPayload([]);
                console.log(err);
            }
        }
    };    

    const datePickerHandler = (name, value) => {
        setPayload(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const submitHandler = (e) => {
        if(id == null) {delete payload._id}
        console.log(payload);
        setIsLoading(true);

        /* Call API in here... */
        SubmitConfig('onlineregisyear', [payload])
        .then(() => {
            setIsLoading(false); 
            window.location.href = '/admin/registration/yearmanager'
        })
        .catch((err) => {
            setIsLoading(false); 
            Swal.fire({
                allowOutsideClick: false,
                title: 'Error Notification!',
                text: err,
                icon: 'error',
            });
        })
    }

    if(isLoadingPage){
        return <Loader/>
    } else
        return <NavbarSidebarLayout >
        {
            isAuthorized ? 
            <div className="max-w-full grid gap-3 md:px-8">
                <div className="inline-flex flex justify-between">
                    <div className="text-[35px] text-[#00305E] font-bold">
                        Online Registration Year Form
                    </div>
                </div>
                <div className="md:inline-flex">
                    <div className="mb-2 block w-72">
                        <Label htmlFor="startYear" value="Start Year"/>
                    </div>
                    <DatePicker
                        className="md:w-full pr-10 md:pr-0" id="alumniid" name="alumniid" type="text"
                        selected={payload?.startYear || ''}
                        onChange={(date) => datePickerHandler('startYear', date ? moment(date).format("yyyy") : "")}
                        dateFormat="yyyy"
                        showYearPicker
                    />
                </div>
                <div className="md:inline-flex">
                    <div className="mb-2 block w-72">
                        <Label htmlFor="endYear" value="End Year"/>
                    </div>
                    <DatePicker
                        className="md:w-full pr-10 md:pr-0" id="alumniid" name="alumniid" type="text"
                        selected={payload?.endYear || ''}
                        onChange={(date) => datePickerHandler('endYear', date ? moment(date).format("yyyy") : "")}
                        dateFormat="yyyy"
                        showYearPicker
                    />
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
            : <div>Unauthorized</div>
        }
        </NavbarSidebarLayout>
}

export default OnlineRegistrationYearManagerForm;