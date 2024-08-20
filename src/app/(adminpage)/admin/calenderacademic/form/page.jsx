'use client'
import {
    GetConfig,
} from '../../../../../../services/config.service';
import { Suspense, useEffect, useState } from 'react';
import CalenderAcademicMainForm from './_components/main.form'
import { useSearchParams } from 'next/navigation';
import Swal from 'sweetalert2';
import {
    detransformJsonLanguage,
} from '../../../../../../helpers/jsontransform.helper'

const CalenderAcademicFormPage = () => {
    const [payload, setPayload] = useState({})
    const searchParams = useSearchParams()
    const id = searchParams.get("id")

    useEffect(() => {
        setPayload(prevState => ({
            ...prevState,
            "_id": id
        }));

        if(id){
            try {
                GetConfig('calenderacademic', {"_id": id})
                .then(res => {
                    setPayload(detransformJsonLanguage(res[0]))
                })
                .catch((err) => {
                    Swal.fire({
                        allowOutsideClick: false,
                        title: 'Error Notification!',
                        text: err,
                        icon: 'error',
                    });
                })
            } catch (error) {console.log(error);}
        }
    }, [])

    return <Suspense>
        <CalenderAcademicMainForm payload={payload} setPayload={setPayload}/>
    </Suspense>
}

export default CalenderAcademicFormPage;