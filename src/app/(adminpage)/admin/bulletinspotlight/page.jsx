'use client'
import { Table } from 'flowbite-react';
import NavbarSidebarLayout from '../_layouts/navigation';
import { useEffect, useState } from 'react';
import {
    GetConfig
} from '../../../../../services/config.service';
import Swal from 'sweetalert2';
import moment from 'moment';

const BulletinSpotlightPage = () => {
    const [payload, setPayload] = useState([]);

    useEffect(() => {
        GetConfig('bulletinspotlight', {})
        .then(res => setPayload(res))
        .catch((err) => {
            Swal.fire({
                allowOutsideClick: false,
                title: 'Error Notification!',
                text: err,
                icon: 'error',
            });
        })
    }, [])

    return <>
        <NavbarSidebarLayout >
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Title</Table.HeadCell>
                        <Table.HeadCell>Link</Table.HeadCell>
                        <Table.HeadCell><span className="sr-only">Edit</span></Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            payload.map((val, idx) => {
                                return <Table.Row key={idx} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {val.bulletintitle}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <a href={`${val.attachment[0].fileURL}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                            {val.attachment[0].fileName}
                                        </a>
                                    </Table.Cell>
                                    <Table.Cell>
                                    <a href={`http://localhost:3000/admin/bulletinspotlight/form?id=${val._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                        Edit
                                    </a>
                                    </Table.Cell>
                                </Table.Row>
                            })
                        }
                    </Table.Body>
                </Table>
            </div>
        </NavbarSidebarLayout>
    </>
}

export default BulletinSpotlightPage;