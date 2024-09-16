'use client';
import { Suspense } from 'react';
import MainForm from './_components/main.form'

const GeneralFormPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MainForm/>
        </Suspense>
    );
}

export default GeneralFormPage;