'use client'
import NavbarSidebarLayout from '../../_layouts/navigation';
import { useEffect, useState } from 'react';
import AdminHeader from '../../_components/header';
import {
    GetConfig,
    DeleteConfig
} from '../../../../../../services/config.service'
import { Button } from 'flowbite-react';
import TableOnlineRegistrationYearManager from './_components/table'

const YearManagerPage = () => {
    const [payload, setPayload] = useState([]);

    useEffect(() => {
        fetchSchoolYear()
    }, [])

    const fetchSchoolYear = () => {
        GetConfig('onlineregisyear', {})
        .then(res => setPayload(res))
        .catch((err) => {
            console.log(err);
        })
    }

    const DeleteHandler = (id) => {
        DeleteConfig('onlineregisyear', [{"_id": id}])
        .then(() => fetchSchoolYear())
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
                <AdminHeader title="Online Registration Year Manager"/>
                <div className="p-4 border border-gray-300 border-t-0">
                    <Button color="success" onClick={() => window.location.href = '/admin/registration/yearmanager/form'} className="mb-4">Add Year</Button>
                    <TableOnlineRegistrationYearManager payload={payload} deleteHandler={DeleteHandler}/>  
                </div>
            </div>
        </NavbarSidebarLayout>
    </>
}

export default YearManagerPage;