'use client'
import { Button, Table } from "flowbite-react";

const TableFAQHelpCenter = ({payload, deleteHandler}) => {
    return <div className="overflow-x-auto">
        <Table hoverable>
            <Table.Head>
                <Table.HeadCell>Question</Table.HeadCell>
                <Table.HeadCell>Answer</Table.HeadCell>
                <Table.HeadCell>Action</Table.HeadCell>
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
                                <div className="flex flex-wrap gap-2">
                                    <Button color="warning" onClick={() => window.location.href = '/admin/helpcenter/faqform?id=' + val._id} className="mr-4">Delete</Button>
                                    <Button color="failure" onClick={() => deleteHandler(val._id)} className="mr-4">Delete</Button>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    })
                }
            </Table.Body>
        </Table>
    </div>
};

export default TableFAQHelpCenter;