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
import Loader from '../../../_components/loader';
import { checkPermission } from '../../../../../services/auth.service';

const CalenderAcademicPage = () => {
    const [payload, setPayload] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        fetchData(fetchConfig)
    }, [])

    const fetchData = async (callback) => {
        setIsLoading(true);
        try {
            await checkPermission('manage_calender');
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

    const fetchConfig = async () => {
        try {
            const res = await GetConfig('calenderacademic', {});
            setPayload(res);
        } catch (err) {
            setPayload([]);
            console.log(err);
        }
    };    

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

    if(isLoading){
        return <Loader/>
    } else
        return <NavbarSidebarLayout >
            {
                isAuthorized ? 
                <div className="mt-4">
                    <AdminHeader title="Calender Academic Manager"/>
                    <div className="p-4 border border-gray-300 border-t-0">
                        <Button color="success" onClick={() => window.location.href = '/admin/calenderacademic/form'} className="mb-4">Add Calender</Button>
                        <TableCalenderAcademic payload={payload} deleteHandler={DeleteHandler}/>  
                    </div>
                </div>
                : <div>Unauthorized</div>
            }
            </NavbarSidebarLayout>
}

export default CalenderAcademicPage;