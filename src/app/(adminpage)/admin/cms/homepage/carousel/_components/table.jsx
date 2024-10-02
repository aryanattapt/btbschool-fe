import { Button, Table } from "flowbite-react";

const TableCarousel = ({payload, deleteHandler}) => {
    return <div className="overflow-x-auto">       
        <Table hoverable>
            <Table.Head>
                <Table.HeadCell>Title (ID)</Table.HeadCell>
                <Table.HeadCell>Title (EN)</Table.HeadCell>
                <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                {
                    payload.map((val, idx) => {
                        return <Table.Row key={idx} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {val["title[ID]"]}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {val["title[EN]"]}
                            </Table.Cell>
                            <Table.Cell>
                                <div className="flex flex-wrap gap-2">
                                    <Button color="info" onClick={() => window.location.href=`${val?.url}`} className="mr-4">Preview</Button>
                                    <Button color="warning" onClick={() => window.location.href=`/admin/cms/homepage/carousel/form?id=${val._id}`} className="mr-4">Edit</Button>
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

export default TableCarousel;