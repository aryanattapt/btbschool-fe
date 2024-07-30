'use client'
import { Table } from 'flowbite-react';
import NavbarSidebarLayout from '../../_layouts/navigation';
import { useEffect, useState } from 'react';

const CareerApplicantPage = () => {
    const [payload, setPayload] = useState([]);

    useEffect(() => {
    }, [])

    return <>
        <NavbarSidebarLayout >
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Full Name</Table.HeadCell>
                        <Table.HeadCell>Phone No</Table.HeadCell>
                        <Table.HeadCell>Additional Info</Table.HeadCell>
                        <Table.HeadCell>Country</Table.HeadCell>
                        <Table.HeadCell>Address</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>View Career Page</Table.HeadCell>
                        <Table.HeadCell>View CV</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            payload.map((val, idx) => {
                                return <Table.Row key={idx} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {`${val.firstname} ${val.lastname}`}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {val.phoneno}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {val.additionalInfo}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {val.country}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {val.currentaddress}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <a href={`mailto:${val.email}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                            Send Mail
                                        </a>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <a href={`http://localhost:3000/career/detail?id=${val._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                            View Detail Career Page
                                        </a>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <a href={`${val.attachment[0].fileURL}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                            {val.attachment[0].fileName}
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

export default CareerApplicantPage;