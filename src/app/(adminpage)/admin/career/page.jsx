'use client'
import { Button, Table } from 'flowbite-react';
import NavbarSidebarLayout from '../_layouts/navigation';
import { useEffect, useState } from 'react';
import AdminHeader from '../_components/header';
import TableCareerApplicant from './_components/table'
import {
    GetAllCareer
} from '../../../../../services/career.service'

const CareerPage = () => {
    const [payload, setPayload] = useState([]);

    useEffect(() => {
        fetchAllCareer()
    }, [])

    const fetchAllCareer = () => {
        GetAllCareer({})
        .then(res => setPayload(res))
        .catch((err) => {
            setPayload([])
            console.log(err);
        })
    }

    return <>
        <NavbarSidebarLayout >
            <div className="mt-4">
                <AdminHeader title="Career List"/>
                <div className="p-4 border border-gray-300 border-t-0">
                    <Button color="success" onClick={() => window.location.href = '/admin/career/form'} className="mb-4">Add Career</Button>
                    <TableCareerApplicant payload={payload}/>  
                </div>
            </div>
        </NavbarSidebarLayout>
    </>
}

export default CareerPage;