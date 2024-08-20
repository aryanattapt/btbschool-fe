'use client'
import { Button } from 'flowbite-react';
import NavbarSidebarLayout from '../_layouts/navigation';
import { useEffect, useState } from 'react';
import {
    DeleteConfig,
    GetConfig
} from '../../../../../services/config.service';
import Swal from 'sweetalert2';
import AdminHeader from '../_components/header'
import BulletinTable from './_components/table'

const BulletinSpotlightPage = () => {
    const [payload, setPayload] = useState([]);

    useEffect(() => {
        fetchConfig()
    }, [])

    const fetchConfig = () => {
        GetConfig('bulletinspotlight', {})
        .then(res => setPayload(res))
        .catch((err) => {
            setPayload([])
            console.log(err);
        })
    }

    const DeleteHandler = (id) => {
        DeleteConfig('bulletinspotlight', [{"_id": id}])
        .then(() => fetchConfig())
        .catch((err) => {
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
                <AdminHeader title="Bulletin Spotlight Manager"/>
                <div className="p-4 border border-gray-300 border-t-0">
                    <Button color="success" onClick={() => window.location.href = '/admin/bulletinspotlight/form'} className="mb-4">Add Bulletin</Button>
                    <BulletinTable payload={payload} deleteHandler={DeleteHandler}/>  
                </div>
            </div>
        </NavbarSidebarLayout>
    </>
}

export default BulletinSpotlightPage;