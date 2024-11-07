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
import Loader from '../../../../_components/loader';
import { checkPermission } from '../../../../../../services/auth.service';

const YearManagerPage = () => {
    const [payload, setPayload] = useState([]);
    const [isLoadingPage, setIsLoadingPage] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        fetchData(fetchSchoolYear)
    }, [])

    const fetchData = async (callback) => {
        setIsLoadingPage(true);
        try {
            await checkPermission('manage_studentregistration');
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

    const fetchSchoolYear = async () => {
        try {
            const res = await GetConfig('onlineregisyear', {});
            setPayload(res);
        } catch (err) {
            setPayload([]);
            console.log(err);
        }
    };    

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

    if(isLoadingPage){
        return <Loader/>
    } else
        return <NavbarSidebarLayout >
        {
            isAuthorized ? 
            <div className="mt-4">
                <AdminHeader title="Online Registration Year Manager"/>
                <div className="p-4 border border-gray-300 border-t-0">
                    <Button color="success" onClick={() => window.location.href = '/admin/registration/yearmanager/form'} className="mb-4">Add Year</Button>
                    <TableOnlineRegistrationYearManager payload={payload} deleteHandler={DeleteHandler}/>  
                </div>
            </div>
            : <div>Unauthorized</div>
        }
        </NavbarSidebarLayout>
}

export default YearManagerPage;