import { Button, Table } from "flowbite-react";

const TableBulletinSpotlight = ({payload, deleteHandler}) => {
    return <div className="overflow-x-auto">       
        <Table hoverable>
            <Table.Head>
                <Table.HeadCell>Title</Table.HeadCell>
                <Table.HeadCell>Link</Table.HeadCell>
                <Table.HeadCell>Action</Table.HeadCell>
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
                                <div className="flex flex-wrap gap-2">
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

export default TableBulletinSpotlight;