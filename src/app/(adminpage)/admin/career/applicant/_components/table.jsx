import moment from "moment";

const { Table, Button } = require("flowbite-react")

const TableCareerApplicant = ({payload}) => {
    return <div className="overflow-x-auto">
        <Table hoverable>
            <Table.Head>
                <Table.HeadCell>Apply Date</Table.HeadCell>
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
                                {moment(val?.registereddate).format("DD MMMM YYYY HH:mm:ss")}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {`${val.firstname} ${val?.lastname ?? ''}`}
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
                                <Button color="warning" onClick={() => window.location.href = "mailto:" + val.email} className="mr-4">Send Mail</Button>
                            </Table.Cell>
                            <Table.Cell>
                                <Button color="blue" onClick={() => window.location.href = '/career/' + val.careerid} className="mr-4">View Detail Career Page</Button>
                            </Table.Cell>
                            <Table.Cell>
                                <Button color="success" onClick={() => window.location.href = val.attachment[0].fileURL} className="mr-4">View CV</Button>
                            </Table.Cell>
                        </Table.Row>
                    })
                }
            </Table.Body>
        </Table>
    </div>
}

export default TableCareerApplicant;