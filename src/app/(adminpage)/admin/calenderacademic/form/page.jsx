'use client';

import { GetConfig } from '../../../../../../services/config.service';
import { Suspense, useEffect, useState } from 'react';
import CalenderAcademicMainForm from './_components/main.form';
import { useSearchParams } from 'next/navigation';
import Swal from 'sweetalert2';
import { detransformJsonLanguage } from '../../../../../../helpers/jsontransform.helper';
import Loader from '../../../../_components/loader';
import { checkPermission } from '../../../../../../services/auth.service';
import NavbarSidebarLayout from '../../_layouts/navigation';

const _CalenderAcademicFormPage = () => {
    const [payload, setPayload] = useState({});
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        fetchData(fetchCalendarAcademic)
    }, []);

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

    const fetchCalendarAcademic = async () => {
        if (id) {
            try {
                const res = await GetConfig('calenderacademic', { "_id": id });
                setPayload(detransformJsonLanguage(res[0]));
            } catch (err) {
                Swal.fire({
                    allowOutsideClick: false,
                    title: 'Error Notification!',
                    text: err.message || err,
                    icon: 'error',
                });
            }
        }
    };    

    if(isLoading){
        return <Loader/>
    } else
        return <NavbarSidebarLayout >
        {
            isAuthorized ? 
            <CalenderAcademicMainForm payload={payload} setPayload={setPayload} />
            : <div>Unauthorized</div>
        }
        </NavbarSidebarLayout>
}

const CalenderAcademicFormPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <_CalenderAcademicFormPage/>
        </Suspense>
    );
}

export default CalenderAcademicFormPage;