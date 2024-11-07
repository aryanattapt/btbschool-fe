'use client';
import {
    Button,
    Label,
    Spinner,
    Tabs
} from "flowbite-react";
import { useEffect, useState } from "react";
import NavbarSidebarLayout from '../../_layouts/navigation';
import {
    UploadAttachment
} from '../../../../../../services/attachment.service';
import {
    GetConfig,
    SubmitConfig
} from '../../../../../../services/config.service';
import Swal from "sweetalert2";
import {
    detransformJsonLanguage,
    transformJsonLanguage
} from '../../../../../../helpers/jsontransform.helper';
import AdminHeader from "../../_components/header";
import GradeForm from './_components/grade.form';
import GradeListForm from './_components/gradelist.form';
import Loader from '../../../../_components/loader';
import { checkPermission } from '../../../../../../services/auth.service';

const HomepageSettingsMainForm = () => {
    const [isLoadingPage, setIsLoadingPage] = useState(true);
	const [isAuthorized, setIsAuthorized] = useState(null);

    const type = 'homepage'
    const configName = 'general';
    const [isLoading, setIsLoading] = useState(false);
    const [payload, setPayload] = useState({});

    useEffect(() => {
        fetchData(fetchPage);
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

    const fetchPage = async () => {
        try {
            const data = await GetConfig(configName, {"type": type});
            const deTransformJson = detransformJsonLanguage(data[0]);
            setPayload(deTransformJson);
            console.log(deTransformJson);
        } catch (error) {console.log(error)}
    }

    const formChangeHandler = (e) => {
        const { name, value, type, files } = e.target;
        if(type === 'file'){
            Object.keys(files).map((val) => {
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

    const submitHandler = async (e) => {
        try {
            setIsLoading(true);
            const finalPayload = {...payload, "type": type};

            const transformedPayload = [transformJsonLanguage(finalPayload)];
            console.log(transformedPayload);
            
            /* Submit data */
            await SubmitConfig(configName, transformedPayload);
            await fetchData();
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
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-4 mb-4">
                    <AdminHeader title="Homepage Content Settings Form"/>
                </div>

                <div className="mt-4 mb-4">
                    <div className="mt-4 mb-4 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                        Homepage Carousel Settings
                    </div>
                    <Button color="blue" onClick={() => window.location.href="/admin/cms/homepage/carousel"}>Settings</Button>
                </div>

                <div className="mt-4 mb-4">
                    <div className="mt-4 mb-2 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                        Grade Content Settings
                    </div>
                    <Tabs aria-label="Default tabs" variant="default">
                        <Tabs.Item title="Indonesia">
                            <GradeForm formChangeHandler={formChangeHandler} language={"ID"} payload={payload}/>
                        </Tabs.Item>
                        <Tabs.Item title="English">
                            <GradeForm formChangeHandler={formChangeHandler} language={"EN"} payload={payload}/>
                        </Tabs.Item>
                    </Tabs>
                </div>

                <div className="mt-4 mb-4">
                    <div className="mb-2 block">
                        <Label value="Grade Lists Settings" />
                    </div>
                    <GradeListForm formChangeHandler={formChangeHandler} payload={payload}/>
                </div>

                <div className="mt-20 space-y-4">
                    <Button type="submit" id="btnSaveAndSend" name="btnSaveAndSend" className="w-full md:w-auto" disabled={isLoading} onClick={submitHandler}>
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
};

export default HomepageSettingsMainForm;