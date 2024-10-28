import { Button, Table } from "flowbite-react";
import moment from "moment";

const TableCareerList = ({payload}) => {
    return <div className="overflow-x-auto">
        <Table hoverable>
            <Table.Head>
                <Table.HeadCell>Job Title Name</Table.HeadCell>
                <Table.HeadCell>Job Category</Table.HeadCell>
                <Table.HeadCell>Location</Table.HeadCell>
                <Table.HeadCell>Apply Before</Table.HeadCell>
                <Table.HeadCell>Experience Level</Table.HeadCell>
                <Table.HeadCell>Edit</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                {
                    payload.map((val, idx) => {
                        return <Table.Row key={idx} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {val.jobtitlename}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {val.jobcategory}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {val.location}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {moment(val.maximumApplyDate).format("DD MMMM YYYY")}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {
                                    Array.isArray(val?.experiencelevel) ? val.experiencelevel.join(',') : val.experiencelevel
                                }
                            </Table.Cell>
                            <Table.Cell>
                                <Button color="warning" onClick={() => window.location.href = '/admin/career/form?id=' + val._id} className="mr-4">Edit</Button>
                            </Table.Cell>
                        </Table.Row>
                    })
                }
            </Table.Body>
        </Table>
    </div>
}

export default TableCareerList;