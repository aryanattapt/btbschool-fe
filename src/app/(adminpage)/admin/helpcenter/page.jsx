'use client'
import { Button, Table } from 'flowbite-react';
import NavbarSidebarLayout from '../_layouts/navigation';
import { useEffect, useState } from 'react';
import {
    GetConfig
} from '../../../../../services/config.service';
import Swal from 'sweetalert2';
import TableFAQHelpCenter from './_components/tablefaq';
import AdminHeader from '../_components/header';

const HelpCenterPage = () => {
    const [payload, setPayload] = useState([]);

    useEffect(() => {
        fetchConfig()
    }, [])

    const fetchConfig = () => {
        GetConfig('faq', {})
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
                <AdminHeader title="FAQ Help Center Manager"/>
                <div className="p-4 border border-gray-300 border-t-0">
                    <Button color="success" onClick={() => window.location.href = '/admin/helpcenter/faqform'} className="mb-4">Add FAQ</Button>
                    <TableFAQHelpCenter payload={payload} deleteHandler={DeleteHandler}/>  
                </div>
            </div>
        </NavbarSidebarLayout>
    </>
}

export default HelpCenterPage;