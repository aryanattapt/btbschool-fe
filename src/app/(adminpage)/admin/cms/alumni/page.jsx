"use client";
import { useEffect, useState } from 'react';
import {
    DeleteConfig,
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
    const [alumniPayload, setAlumniPayload] = useState({});
    const [alumniStoryPayload, setAlumniStoryPayload] = useState([]);
    const [alumniUniversityPayload, setAlumniUniversityPayload] = useState([]);

    useEffect(() => {
        fetchConfig();
    }, []);

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

	return (
		<div>
			<NavbarSidebarLayout>
					<div>
						<AdminHeader title="Alumni Content Settings Form" />

						{/* Pengenanlan */}
						<div className="my-6">
                            <Button color="success" onClick={() => window.location.href = '/admin/cms/alumni/alumniform'} className="mb-4">Add Cerita Alumni</Button>
                            <FieldTitle>List Cerita Alumni</FieldTitle>
                            <TableTestimoni payload={alumniStoryPayload} deleteHandler={deleteHandler}/>
                        </div>
                        <div className="my-6">
                            <Button color="success" onClick={() => window.location.href = '/admin/cms/alumni/universityForm'} className="mb-4">Add Univeritas</Button>
                            <FieldTitle>List Universitas</FieldTitle>
                            <UniversityList payload={alumniUniversityPayload} deleteHandler={deleteHandler}/>
                        </div>
					</div>
			</NavbarSidebarLayout>
		</div>
	);
};

export default CMSAlumni;