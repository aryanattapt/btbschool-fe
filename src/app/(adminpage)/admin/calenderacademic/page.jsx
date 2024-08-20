'use client'
import { Button, Table } from 'flowbite-react';
import NavbarSidebarLayout from '../_layouts/navigation';
import { useEffect, useState } from 'react';
import {
    DeleteConfig,
    GetConfig
} from '../../../../../services/config.service';
import Swal from 'sweetalert2';
import AdminHeader from '../_components/header';
import TableCalenderAcademic from './_components/table'

const CalenderAcademicPage = () => {
    const [payload, setPayload] = useState([]);

    useEffect(() => {
        fetchConfig()
    }, [])

    const fetchConfig = () => {
        GetConfig('calenderacademic', {})
        .then(res => {setPayload(res)})
        .catch((err) => {
            console.log(err);
        })
    }

    const DeleteHandler = (id) => {
        DeleteConfig('calenderacademic', [{"_id": id}])
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
                <AdminHeader title="Calender Academic Manager"/>
                <div className="p-4 border border-gray-300 border-t-0">
                    <Button color="success" onClick={() => window.location.href = '/admin/calenderacademic/form'} className="mb-4">Add Calender</Button>
                    <TableCalenderAcademic payload={payload} deleteHandler={DeleteHandler}/>  
                </div>
            </div>
        </NavbarSidebarLayout>
    </>
}

export default CalenderAcademicPage;