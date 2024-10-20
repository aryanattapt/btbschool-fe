import { Button, Table } from "flowbite-react";

const TableTestimoni = ({payload, deleteHandler}) => {
    return (
        <div className="overflow-x-auto">
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Class</Table.HeadCell>
                    <Table.HeadCell>University</Table.HeadCell>
                    <Table.HeadCell>Major</Table.HeadCell>
                    <Table.HeadCell>Testimonies</Table.HeadCell>
                    <Table.HeadCell>Action</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        payload && payload?.length > 0 ? (
                            payload?.map((alumni, idx) => (
                                <Table.Row key={idx} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {alumni?.name}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {alumni?.class}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {alumni?.university}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {alumni?.major}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {alumni?.testimonies}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <div className="flex flex-wrap gap-2">
                                            <Button color="warning" onClick={() => window.location.href = '/admin/cms/alumni/alumniform?id=' + alumni?._id} className="mr-4">
                                                Edit
                                            </Button>
                                            <Button color="failure" onClick={() => deleteHandler(alumni?.type, alumni?._id)} className="mr-4">
                                                Delete
                                            </Button>
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        ) : (
                            <Table.Row>
                                <Table.Cell colSpan={6} className="text-center">
                                    Data not found...
                                </Table.Cell>
                            </Table.Row>
                        )
                    }
                </Table.Body>
            </Table>
        </div>
    );
};

export default TableTestimoni;
