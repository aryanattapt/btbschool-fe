"use client";
import { useEffect, useState } from 'react';
import {
    GetConfig,
} from '../../../../../../services/config.service';
import AdminHeader from "../../_components/header";
import NavbarSidebarLayout from "../../_layouts/navigation";
import FieldTitle from "../_components/FieldTitle";
import TableTestimoni from "./_components/testimoniTable";
import UniversityList from "./_components/universityList";
import {
    detransformJsonLanguage,
} from '../../../../../../helpers/jsontransform.helper';
import { Button } from 'flowbite-react';

const CMSAlumni = () => {
	const type = 'alumni'
    const configName = 'general';
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

	return (
		<div>
			<NavbarSidebarLayout>
					<div>
						<AdminHeader title="Alumni Content Settings Form" />

						{/* Pengenanlan */}
						<div className="my-6">
                            <Button color="success" onClick={() => window.location.href = '/admin/cms/alumni/alumniform'} className="mb-4">Add Cerita Alumni</Button>
                            <FieldTitle>List Cerita Alumni</FieldTitle>
                            <TableTestimoni payload={payload}/>
                        </div>
                        <div className="my-6">
                            <Button color="success" onClick={() => window.location.href = '/admin/cms/alumni/universityForm'} className="mb-4">Add Univeritas</Button>
                            <FieldTitle>List Universitas</FieldTitle>
                            <UniversityList payload={payload}/>
                        </div>
					</div>
			</NavbarSidebarLayout>
		</div>
	);
};

export default CMSAlumni;