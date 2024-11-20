'use client'
import { Button } from 'flowbite-react';
import NavbarSidebarLayout from '../../../_layouts/navigation';
import { useEffect, useState } from 'react';
import {
    DeleteConfig,
    GetConfig
} from '../../../../../../../services/config.service';
import Swal from 'sweetalert2';
import AdminHeader from '../../../_components/header'
import CarouselTable from './_components/table'
import { detransformJsonLanguage } from '../../../../../../../helpers/jsontransform.helper';

const HomePageCarouselManagerPage = () => {
    const type = 'homepage.carousel'
    const configName = 'general';
    const [payload, setPayload] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const data = await GetConfig(configName, {"type": type});
            const deTransformJson = detransformJsonLanguage(data);
            console.log(deTransformJson);
            setPayload(deTransformJson);
        } catch (error) {
            console.log(error);
            Swal.fire({
                allowOutsideClick: false,
                title: 'Error Notification!',
                text: error.toString(),
                icon: 'error',
            });
        }
    };

    const DeleteHandler = (id) => {
        DeleteConfig(configName, [{"_id": id, "type": type}])
        .then(() => fetchData())
        .catch((err) => {
            setPayload([]);
            Swal.fire({
                allowOutsideClick: false,
                title: 'Error Notification!',
                text: err,
                icon: 'error',
            });
        })
    }

    return <>
        <NavbarSidebarLayout >
            <div className="mt-4">
                <AdminHeader title="Home Page Carousel Manager"/>
                <div className="p-4 border border-gray-300 border-t-0">
                    <Button color="success" onClick={() => window.location.href = '/admin/cms/homepage/carousel/form'} className="mb-4">Add Carousel</Button>
                    <CarouselTable payload={payload} deleteHandler={DeleteHandler}/>  
                </div>
            </div>
        </NavbarSidebarLayout>
    </>
}

export default HomePageCarouselManagerPage;