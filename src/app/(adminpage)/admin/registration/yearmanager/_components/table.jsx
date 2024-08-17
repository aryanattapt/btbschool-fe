import { Button, Table } from "flowbite-react";

const TableOnlineRegistrationYearManager = ({payload, deleteHandler}) => {
    return <div className="overflow-x-auto">       
        <Table hoverable>
            <Table.Head>
                <Table.HeadCell>Start Year</Table.HeadCell>
                <Table.HeadCell>End Year</Table.HeadCell>
                <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                {
                    payload.map((val, idx) => {
                        return <Table.Row key={idx} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {val.startYear}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {val.endYear}
                            </Table.Cell>
                            <Table.Cell>
                                <div className="flex flex-wrap gap-2">
                                    <Button color="warning" onClick={() => window.location.href = '/admin/registration/yearmanager/form?id=' + val._id} className="mr-4">Edit</Button>
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

export default TableOnlineRegistrationYearManager;