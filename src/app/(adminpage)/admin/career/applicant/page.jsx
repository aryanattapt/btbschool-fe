'use client'
import NavbarSidebarLayout from '../../_layouts/navigation';
import { useEffect, useState } from 'react';
import AdminHeader from '../../_components/header';
import TableCareerApplicant from './_components/table'
import {
    GetAllApplicant
} from '../../../../../../services/career.service'
import Loader from '../../../../_components/loader';
import { checkPermission } from '../../../../../../services/auth.service';

const CareerApplicantPage = () => {
    const [payload, setPayload] = useState([]);
    const [isLoadingPage, setIsLoadingPage] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        fetchData(fetchAllApplicant)
    }, [])

    const fetchData = async (callback) => {
        setIsLoadingPage(true);
        try {
            await checkPermission('manage_career');
            setIsAuthorized(true);
            await callback();
        } catch (error) {
            console.log(error);
            if(error.status != '401'){
                try {
                    await callback();
                } catch (error) {console.log(error);}
            }
        } finally {
            setIsLoadingPage(false);
        }
    };

    const fetchAllApplicant = async () => {
        try {
            const res = await GetAllApplicant();
            setPayload(res);
        } catch (err) {
            setPayload([]);
            console.log(err);
        }
    };
    
    if(isLoadingPage){
        return <Loader/>
    } else
        return <NavbarSidebarLayout >
        {
            isAuthorized ? 
            <div className="mt-4">
                <AdminHeader title="Career Applicant List"/>
                <div className="p-4 border border-gray-300 border-t-0">
                    <TableCareerApplicant payload={payload}/>  
                </div>
            </div>
            : <div>Unauthorized</div>
        }
        </NavbarSidebarLayout>
}

export default CareerApplicantPage;