'use client'
import moment from "moment";
import { Table, Button } from "flowbite-react"

const TableCalenderAcademic = ({payload, deleteHandler}) => {
    return <div className="overflow-x-auto">
        <Table hoverable>
            <Table.Head>
                <Table.HeadCell>Date</Table.HeadCell>
                <Table.HeadCell>Activity</Table.HeadCell>
                <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                {
                    payload.map((val, idx) => {
                        return <Table.Row key={idx} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {moment(val.date).format("DD MMMM YYYY")}
                            </Table.Cell>
                            <Table.Cell>{val.activity}</Table.Cell>
                            <Table.Cell>
                                <div className="flex flex-wrap gap-2">
                                    <Button color="warning" onClick={() => window.location.href = '/admin/calenderacademic/form?id=' + val._id} className="mr-4">Delete</Button>
                                    <Button color="failure" onClick={() => deleteHandler(val._id)} className="mr-4">Delete</Button>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    })
                }
            </Table.Body>
        </Table>
    </div>
}

export default TableCalenderAcademic;