'use client'
import { Button, Table } from "flowbite-react";
import moment from 'moment';

const TableUser = ({payload}) => {
    return <div className="overflow-x-auto">
        <Table hoverable>
            <Table.Head>
                <Table.HeadCell>Full Name</Table.HeadCell>
                {/* <Table.HeadCell>Role</Table.HeadCell> */}
                <Table.HeadCell>Username</Table.HeadCell>
                <Table.HeadCell>Email</Table.HeadCell>
                <Table.HeadCell>Registered date</Table.HeadCell>
                <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                {
                    payload.map((val, idx) => {
                        return <Table.Row key={idx} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {`${val.firstname} ${val.lastname}`}
                            </Table.Cell>
                            {/* <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {val.role}
                            </Table.Cell> */}
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {val.username}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {val.email}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {moment(val.registereddate).format("DD MMMM YYYY")}
                            </Table.Cell>
                            <Table.Cell>
                                <div className="flex flex-wrap gap-2">
                                    <Button color="warning" onClick={() => window.location.href = '/admin/user/form?id=' + val._id} className="mr-4">Edit</Button>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    })
                }
            </Table.Body>
        </Table>
    </div>
}

export default TableUser;