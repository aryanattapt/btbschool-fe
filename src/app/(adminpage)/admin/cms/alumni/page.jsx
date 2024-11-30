"use client";
import { useEffect, useRef, useState } from 'react';
import {
    DeleteConfig,
    GetConfig,
    SubmitConfig,
} from '../../../../../../services/config.service';
import AdminHeader from "../../_components/header";
import NavbarSidebarLayout from "../../_layouts/navigation";
import FieldTitle from "../_components/FieldTitle";
import TabelTestimoniV1 from './_components/TabelTestimoniV1';
import TabelUniversityV1 from './_components/TabelUniversityV1';
import {
    detransformJsonLanguage,
    transformJsonLanguage,
} from '../../../../../../helpers/jsontransform.helper';
import { Button, FileInput, Label, Spinner, Tabs, Textarea } from 'flowbite-react';
import Loader from '../../../../_components/loader';
import { checkPermission } from '../../../../../../services/auth.service';
import Swal from 'sweetalert2';
import { UploadAttachment } from '../../../../../../services/attachment.service';

const CMSAlumni = () => {
    const fileBannerRef = useRef(null);
    const [isSaveLoading, setIsSaveLoading] = useState(false);
    const [isLoadingPage, setIsLoadingPage] = useState(true);
	const [isAuthorized, setIsAuthorized] = useState(null);

    const [alumniPayload, setAlumniPayload] = useState({});
    const [alumniStoryPayload, setAlumniStoryPayload] = useState([]);
    const [alumniUniversityPayload, setAlumniUniversityPayload] = useState([]);

    useEffect(() => {
        fetchData(fetchConfig);
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

    const fetchConfig = async () => {
        const alumniType = 'alumni';
        const alumniStoryType = 'alumni.story';
        const alumniUniversityType = 'alumni.university';
        try {
            const result = await GetConfig('general', {
                "type": {
                    "$in": [alumniType, alumniStoryType, alumniUniversityType]
                }
            });

            setAlumniPayload(detransformJsonLanguage(result.find(val => val.type === alumniType)));
            setAlumniStoryPayload(detransformJsonLanguage(result.filter(val => val.type === alumniStoryType)));
            setAlumniUniversityPayload(detransformJsonLanguage(result.filter(val => val.type === alumniUniversityType)));
        } catch (error) {console.log(error)}
    }

    const deleteHandler = (type, id) => {
        DeleteConfig('general', [{"_id": id, "type": type}])
        .then(() => fetchConfig())
        .catch((err) => console.log(err))
    }

    const formChangeHandler = (e) => {
        const { name, value, type, files } = e.target;
        if(type == 'file'){
            Object.keys(files).map((val) => {
                setAlumniPayload(prevState => ({
                    ...prevState,
                    [name]: prevState[name] ? [...prevState[name], files[val]] : [files[val]]
                }));
            });
        } else if(type == 'checkbox'){
            if(e.target.checked){
                setAlumniPayload(prevState => ({
                    ...prevState,
                    [name]: prevState[name] ? [...prevState[name], value] : [value]
                }));
            } else{
                setAlumniPayload(prevState => ({
                    ...prevState,
                    [name]: prevState[name].filter(val => val !== value)
                }));
            }
        }
        else{
            setAlumniPayload(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const submitAlumniHandler = async (e) => {
        try {
            /* Handle Attachment */
            try {
                console.log(alumniPayload);
                let formData = new FormData();
                formData.append("image", alumniPayload?.bannerimage[0]);

                var resultAssets = await UploadAttachment("assets", formData);
                resultAssets = resultAssets?.data[0]?.fileURL;
                if(resultAssets){
                    alumniPayload.bannerimageurl = resultAssets;
                    delete alumniPayload.bannerimage;
                }
            } catch (error) {console.log(error);}
            
            setIsSaveLoading(true);
            const finalPayload = {...alumniPayload, "type": "alumni"};
            const transformedPayload = [transformJsonLanguage(finalPayload)];
            console.log(transformedPayload);
            
            await SubmitConfig('general', transformedPayload);
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
            setIsSaveLoading(false);
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
        setAlumniPayload(prevState => ({
            ...prevState,
            [name]: null,
        }));
    }

    if(isLoadingPage){
        return <Loader/>
    } else
        return <NavbarSidebarLayout >
        {
            isAuthorized ? 
            <div>
                <AdminHeader title="Alumni Content Settings Form" />

                {/* Pengenanlan */}
                <div className="my-6">
                    <Button color="success" onClick={() => window.location.href = '/admin/cms/alumni/alumniform'} className="mb-4">Add Cerita Alumni</Button>
                    <FieldTitle>List Cerita Alumni</FieldTitle>
                    <TabelTestimoniV1 payload={alumniStoryPayload} deleteHandler={deleteHandler} />
                </div>
                <div className="my-6">
                    <Button color="success" onClick={() => window.location.href = '/admin/cms/alumni/universityForm'} className="mb-4">Add Univeritas</Button>
                    <FieldTitle>List Universitas</FieldTitle>
                    <TabelUniversityV1 payload={alumniUniversityPayload} deleteHandler={deleteHandler} />
                    <div className="my-3">
                        <Tabs aria-label="Default tabs" variant="default">
                            <Tabs.Item active title="Indonesia">
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="universitytitle" value="Title" />
                                    </div>
                                    <Textarea value={alumniPayload[`universitytitle[ID]`]} id="universitytitle" name={`universitytitle[ID]`} required rows={1} onChange={formChangeHandler}/>
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="universitycontent" value="Content" />
                                    </div>
                                    <Textarea value={alumniPayload[`universitycontent[ID]`]} id="universitycontent" name={`universitycontent[ID]`} required rows={4} onChange={formChangeHandler}/>
                                </div>
                            </Tabs.Item>
                            <Tabs.Item active title="English">
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="universitytitle" value="Title" />
                                    </div>
                                    <Textarea value={alumniPayload[`universitytitle[EN]`]} id="universitytitle" name={`universitytitle[EN]`} required rows={1} onChange={formChangeHandler}/>
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="universitycontent" value="Content" />
                                    </div>
                                    <Textarea value={alumniPayload[`universitycontent[EN]`]} id="universitycontent" name={`universitycontent[EN]`} required rows={4} onChange={formChangeHandler}/>
                                </div>
                            </Tabs.Item>
                        </Tabs>

                        <div className="mt-4 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                            Banner Setting
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor={`bannerimage`} value="Banner" />
                            </div>
                            <FileInput accept="image/*" multiple={false} id={`bannerimage`} ref={fileBannerRef} name={`bannerimage`} helperText="Ukuran Maksimum 10 MB. Format Gambar" onChange={bannerChangeHandler}/>
                        </div>
                        
                        <Button type="submit" id="btnSaveAndSend" name="btnSaveAndSend" className="w-full lg:w-auto" disabled={isSaveLoading} onClick={submitAlumniHandler}>
                            {
                                isSaveLoading ? <>
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
            : <div>Unauthorized</div>
        }
        </NavbarSidebarLayout>
};

export default CMSAlumni;