'use client'
import { Button } from 'flowbite-react';
import NavbarSidebarLayout from '../../../_layouts/navigation';
import { useEffect, useState } from 'react';
import {
    DeleteConfig,
    GetConfig
} from '../../../../../../../services/config.service';
import Swal from 'sweetalert2';
import AdminHeader from '../../../_components/header'
import GradelistsTable from './_components/table'
import Loader from '../../../../../_components/loader';
import { checkPermission } from '../../../../../../../services/auth.service';

const HomepageGradelistPage = () => {
    const type = 'homepage.edulevel'
    const configName = 'general';
    const [payload, setPayload] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        fetchData(fetchConfig)
    }, [])

    const fetchData = async (callback) => {
        setIsLoading(true);
        try {
            await checkPermission('manage_content');
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
            const res = await GetConfig(configName, {type});
            setPayload(res)
        } catch (error) {
            setPayload([])
            console.log(error);
        }
    }

    const DeleteHandler = async (id) => {
        try {
            await DeleteConfig(configName, [{"_id": id, type}])
        } catch (error) {
            Swal.fire({
                allowOutsideClick: false,
                title: 'Error Notification!',
                text: error,
                icon: 'error',
            });
        } finally{
            try {
                fetchConfig();
            } catch (error) {console.log(error);}
        }
    }

    if(isLoading){
        return <Loader/>
    } else
        return <>
            <NavbarSidebarLayout >
            {
                isAuthorized ? 
                    <div className="mt-4">
                        <AdminHeader title="Homepage Grade list Manager"/>
                        <div className="p-4 border border-gray-300 border-t-0">
                            <Button color="success" onClick={() => window.location.href = '/admin/cms/homepage/edulevel/form'} className="mb-4">Add Grade</Button>
                            <GradelistsTable payload={payload} deleteHandler={DeleteHandler}/>  
                        </div>
                    </div>
                : <div>Unauthorized</div>
            }
            </NavbarSidebarLayout>
        </>
}

export default HomepageGradelistPage;