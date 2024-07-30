'use client'
import { Table } from 'flowbite-react';
import NavbarSidebarLayout from '../_layouts/navigation';
import { useEffect, useState } from 'react';

const BulletinSpotlightPage = () => {
    const [payload, setPayload] = useState([]);

    useEffect(() => {
    }, [])

    return <>
        <NavbarSidebarLayout >
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Full Name</Table.HeadCell>
                        <Table.HeadCell>Role</Table.HeadCell>
                        <Table.HeadCell>Username</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Registered date</Table.HeadCell>
                        <Table.HeadCell>Edit</Table.HeadCell>
                        <Table.HeadCell>Delete</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            payload.map((val, idx) => {
                                return <Table.Row key={idx} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {`${val.firstname} ${val.lastname}`}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {val.username}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {val.email}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {val.registereddate}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {val.experiencelevel}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <a href={`http://localhost:3000/admin/user/form?id=${val._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                            Edit
                                        </a>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button type="button" id="btnDelete" name="btnDelete" className="w-full lg:w-auto" disabled={isLoading}>
                                            {
                                                isLoading ? <>
                                                    <Spinner aria-label="Spinner button example" size="sm" />
                                                    <span className="pl-3">Please Wait...</span>
                                                </> : <>
                                                    Delete  
                                                </>
                                            }
                                        </Button>
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