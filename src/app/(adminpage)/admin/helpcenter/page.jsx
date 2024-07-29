'use client'
import { Table } from 'flowbite-react';
import NavbarSidebarLayout from '../_layouts/navigation';
import { useEffect, useState } from 'react';
import {
    GetConfig
} from '../../../../../services/config.service';
import Swal from 'sweetalert2';

const HelpCenterPage = () => {
    const [payload, setPayload] = useState([]);

    useEffect(() => {
        GetConfig('faq', {})
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
                        <Table.HeadCell>Question</Table.HeadCell>
                        <Table.HeadCell>Answer</Table.HeadCell>
                        <Table.HeadCell><span className="sr-only">Edit</span></Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            payload.map((val, idx) => {
                                return <Table.Row key={idx} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {val.question}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {val.answer}
                                    </Table.Cell>
                                    <Table.Cell>
                                    <a href={`http://localhost:3000/admin/helpcenter/faqform?id=${val._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
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

export default HelpCenterPage;