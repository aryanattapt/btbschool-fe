'use client'
import {
    Label,
    Button,
    Spinner,
    TextInput,
    Tabs,
    FileInput,
} from "flowbite-react";
import { Suspense, useEffect, useRef, useState } from "react";
import NavbarSidebarLayout from '../../_layouts/navigation';
import Swal from "sweetalert2";
import AdminHeader from '../../_components/header'
import { GetConfig, SubmitConfig } from "../../../../../../services/config.service";
import { UploadAttachment } from "../../../../../../services/attachment.service";
import { detransformJsonLanguage, transformJsonLanguage } from "../../../../../../helpers/jsontransform.helper";
import Loader from '../../../../_components/loader';
import { checkPermission } from '../../../../../../services/auth.service';

const BannerForm = () => {
    const fileBannerRef = useRef(null);

    const [isLoadingPage, setIsLoadingPage] = useState(true);
	const [isAuthorized, setIsAuthorized] = useState(null);

    const type = 'btbbuletin'
    const configName = 'general';
    const [isLoading, setIsLoading] = useState(false);
    const [payload, setPayload] = useState({})

    useEffect(() => {
        fetchData(fetchContent);
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

    const fetchContent = async () => {
        try {
            const data = await GetConfig(configName, {"type": type});
            setPayload(data[0]);
        } catch (error) {
            Swal.fire({
                allowOutsideClick: false,
                title: 'Error Notification!',
                text: error.toString(),
                icon: 'error',
            });
        }
    };

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

    const bannerChangeHandler = (e) => {
        const { name, files } = e.target;
        const validFiles = [];
        const maxFileSize = 10 * 1024 * 1024;
        Object.keys(files).forEach((key) => {
            const file = files[key];
            if (file.type.startsWith('image/')) {
                if (file.size <= maxFileSize) {
                    validFiles.push(file);
                } else {
                    clearBannerFile(name);
                    alert(`${file.name} exceeds the maximum size of 10 MB.`);
                }
            } else {
                clearBannerFile(name);
                alert(`${file.name} is not a valid image file.`);
            }
        });

        if (validFiles.length > 0) {
            formChangeHandler(e);
        }
    }

    const clearBannerFile = (name) => {
        console.log(`masuk clear banner`);
        fileBannerRef.current.value = null;
        setPayload(prevState => ({
            ...prevState,
            [name]: null,
        }));
    }

    const submitHandler = async (e) => {
        try {
            /* Handle Attachment */
            try {
                let formData = new FormData();
                formData.append("image", payload?.bannerimage[0]);

                var resultAssets = await UploadAttachment("assets", formData);
                resultAssets = resultAssets?.data[0]?.fileURL;
                if(resultAssets){
                    payload.bannerimageurl = resultAssets;
                    delete payload.bannerimage;
                }
            } catch (error) {console.log(error);}

            setIsLoading(true);
            const finalPayload = {...payload, "type": type};
            const transformedPayload = [finalPayload];
            console.log(transformedPayload);
            
            await SubmitConfig(configName, transformedPayload);
            await fetchContent();
            Swal.fire({
                allowOutsideClick: false,
                title: 'Submit Notification!',
                text: "Success!",
                icon: 'info',
            });
        } catch (error) {
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
                <div className="mt-4 mb-4">
                    <AdminHeader title="Bulletin Spotlight Page Setting Form"/>
                </div>

                <div className="mt-4 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                    Bulletin List
                </div>
                <div>
                    <Button color="success" onClick={() => window.location.href = '/admin/bulletinspotlight'} className="mb-4">Manage</Button>
                </div>
                
                <div className="mt-4 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                    Banner Setting
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor={`bannerimage`} value="Banner" />
                    </div>
                    <FileInput accept="image/*" multiple={false} id={`bannerimage`} ref={fileBannerRef} name={`bannerimage`} helperText="Ukuran Maksimum 10 MB. Format Gambar" onChange={bannerChangeHandler}/>
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

const Page = () => {
    return <Suspense>
        <BannerForm/>
    </Suspense>
}

export default Page;