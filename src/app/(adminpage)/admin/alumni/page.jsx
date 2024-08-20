'use client'
import NavbarSidebarLayout from '../_layouts/navigation';
import { useEffect, useState } from 'react';
import AdminHeader from '../_components/header';
import {
    FetchAlumni,
} from '../../../../../services/alumni.service'
import TableAlumniList from './_components/table';

const CareerPage = () => {
    const [payload, setPayload] = useState([]);

    useEffect(() => {
        fetchAllAlumni()
    }, [])

    const fetchAllAlumni = () => {
        FetchAlumni({})
        .then(res => setPayload(res))
        .catch((err) => {
            setPayload([])
            console.log(err);
        })
    }

    return <>
        <NavbarSidebarLayout >
            <div className="mt-4">
                <AdminHeader title="Alumni List"/>
                <div className="p-4 border border-gray-300 border-t-0">
                    <TableAlumniList payload={payload}/>  
                </div>
            </div>
        </NavbarSidebarLayout>
    </>
}

export default CareerPage;