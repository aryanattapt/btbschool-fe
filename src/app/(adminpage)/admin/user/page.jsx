'use client'
import NavbarSidebarLayout from '../_layouts/navigation';
import { useEffect, useState } from 'react';
import TableUser from './_components/table'
import AdminHeader from '../_components/header';
import { Button } from 'flowbite-react';
import {
    getAllUsers,
} from '../../../../../services/user.service'

const BulletinSpotlightPage = () => {
    const [payload, setPayload] = useState([]);

    useEffect(() => {
        getAllUsers({})
        .then(res => {setPayload(res)})
        .catch((err) => {
            console.log(err);
        })
    }, []);

    return <>
        <NavbarSidebarLayout >
            <div className="mt-4">
                <AdminHeader title="User Manager"/>
                <div className="p-4 border border-gray-300 border-t-0">
                    <Button color="success" onClick={() => window.location.href = '/admin/user/form'} className="mb-4">Add User</Button>
                    <TableUser payload={payload}/>
                </div>
            </div>
        </NavbarSidebarLayout>
    </>
}

export default BulletinSpotlightPage;