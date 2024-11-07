'use client'
import { Button, Table } from 'flowbite-react';
import NavbarSidebarLayout from '../_layouts/navigation';
import { useEffect, useState } from 'react';
import AdminHeader from '../_components/header';
import TableCareerApplicant from './_components/table'
import {
    GetAllCareer
} from '../../../../../services/career.service'
import Loader from '../../../_components/loader';
import { checkPermission } from '../../../../../services/auth.service';

const CareerPage = () => {
    const [payload, setPayload] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        fetchData(fetchAllCareer)
    }, [])

    const fetchData = async (callback) => {
        setIsLoading(true);
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
            setIsLoading(false);
        }
    };

    const fetchAllCareer = async () => {
        try {
            const res = await GetAllCareer({});
            setPayload(res);
        } catch (err) {
            setPayload([]);
            console.log(err);
        }
    };
    
    if(isLoading){
        return <Loader/>
    } else
        return <NavbarSidebarLayout >
        {
            isAuthorized ? 
            <div className="mt-4">
                <AdminHeader title="Career List"/>
                <div className="p-4 border border-gray-300 border-t-0">
                    <Button color="success" onClick={() => window.location.href = '/admin/career/form'} className="mb-4">Add Career</Button>
                    <TableCareerApplicant payload={payload}/>  
                </div>
            </div>
            : <div>Unauthorized</div>
        }
        </NavbarSidebarLayout>
}

export default CareerPage;