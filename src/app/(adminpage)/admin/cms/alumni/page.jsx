"use client";
import { useEffect, useState } from 'react';
import {
    GetConfig,
    SubmitConfig
} from '../../../../../../services/config.service';
import { isObjectEmpty } from "../../../../../utils/checker";
import AdminHeader from "../../_components/header";
import NavbarSidebarLayout from "../../_layouts/navigation";
import FieldTitle from "../_components/FieldTitle";
import TableTestimoni from "./_components/testimoniTable";
import UniversityList from "./_components/universityList";
import {
    detransformJsonLanguage,
    transformJsonLanguage
} from '../../../../../../helpers/jsontransform.helper';
import Swal from 'sweetalert2';

const CMSAlumni = () => {
	const type = 'alumni'
    const configName = 'general';
    const [isLoading, setIsLoading] = useState(false);
    const [payload, setPayload] = useState({});

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
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

	return (
		<div>
			<NavbarSidebarLayout>
					<div>
						<AdminHeader title="About Us Content Settings Form" />

						{/* Pengenanlan */}
						<div className="my-6">
                            <FieldTitle>List Cerita Alumni</FieldTitle>
                            <TableTestimoni payload={payload}/>
                        </div>
                        <div className="my-6">
                            <FieldTitle>List Universitas</FieldTitle>
                            <UniversityList payload={payload}/>
                        </div>
					</div>
			</NavbarSidebarLayout>
		</div>
	);
};

export default CMSAlumni;