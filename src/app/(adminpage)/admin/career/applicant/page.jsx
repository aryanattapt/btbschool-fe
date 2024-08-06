'use client'
import NavbarSidebarLayout from '../../_layouts/navigation';
import { useEffect, useState } from 'react';
import AdminHeader from '../../_components/header';
import TableCareerApplicant from './_components/table'
import {
    GetAllApplicant
} from '../../../../../../services/career.service'

const CareerApplicantPage = () => {
    const [payload, setPayload] = useState([]);

    useEffect(() => {
        fetchAllApplicant()
    }, [])

    const fetchAllApplicant = () => {
        GetAllApplicant()
        .then(res => setPayload(res))
        .catch((err) => {
            console.log(err);
        })
    }

    return <>
        <NavbarSidebarLayout >
            <div className="mt-4">
                <AdminHeader title="Career Applicant List"/>
                <div className="p-4 border border-gray-300 border-t-0">
                    <TableCareerApplicant payload={payload}/>  
                </div>
            </div>
        </NavbarSidebarLayout>
    </>
}

export default CareerApplicantPage;