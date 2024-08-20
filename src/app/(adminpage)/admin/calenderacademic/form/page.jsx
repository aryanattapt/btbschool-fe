'use client';

import { GetConfig } from '../../../../../../services/config.service';
import { Suspense, useEffect, useState } from 'react';
import CalenderAcademicMainForm from './_components/main.form';
import { useSearchParams } from 'next/navigation';
import Swal from 'sweetalert2';
import { detransformJsonLanguage } from '../../../../../../helpers/jsontransform.helper';

const _CalenderAcademicFormPage = () => {
    const [payload, setPayload] = useState({});
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    useEffect(() => {
        if (id) {
            GetConfig('calenderacademic', {"_id": id})
                .then(res => {
                    setPayload(detransformJsonLanguage(res[0]));
                })
                .catch((err) => {
                    Swal.fire({
                        allowOutsideClick: false,
                        title: 'Error Notification!',
                        text: err.message || err,
                        icon: 'error',
                    });
                });
        }
    }, [id]);

    return (
        <CalenderAcademicMainForm payload={payload} setPayload={setPayload} />
    );
}

const CalenderAcademicFormPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <_CalenderAcademicFormPage/>
        </Suspense>
    );
}

export default CalenderAcademicFormPage;