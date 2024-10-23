<Table hoverable>
    <Table.Head>
        <Table.HeadCell>Alumni ID</Table.HeadCell>
        <Table.HeadCell>Full Name</Table.HeadCell>
        <Table.HeadCell>Birth Date</Table.HeadCell>
        {/* <Table.HeadCell>Undergraduate Name</Table.HeadCell>
        <Table.HeadCell>Postgraduate Name</Table.HeadCell> */}
        <Table.HeadCell>Last Year At BTB</Table.HeadCell>
        <Table.HeadCell>Education</Table.HeadCell>
        <Table.HeadCell>Working Status</Table.HeadCell>
        {/* <Table.HeadCell>Profession Name</Table.HeadCell>
        <Table.HeadCell>Current Location</Table.HeadCell> */}
        <Table.HeadCell>Email</Table.HeadCell>
        <Table.HeadCell>Phone No</Table.HeadCell>
        <Table.HeadCell>View Photo</Table.HeadCell>
        <Table.HeadCell>Verify</Table.HeadCell>
    </Table.Head>
    <Table.Body className="divide-y">
        {
            payload.map((val, idx) => {
                return <Table.Row key={idx} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-1000px">
                        {val?.alumniid}
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {val?.firstname} {val?.lastname}
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {moment(val.birthdate).format("DD MMMM YYYY")}
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {val.laststudentyear}
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {val?.edukasiOptions?.join(",")}
                    </Table.Cell>
                    {/* <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {val?.undergraduateuniversityname}
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {val?.postgraduateuniversityname}
                    </Table.Cell> */}
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {val?.statusKerjaOptions}
                    </Table.Cell>
                    {/* <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {val?.professionname}
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {val?.currentlocation}
                    </Table.Cell> */}
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        <Button color="warning" onClick={() => window.location.href = "mailto:" + val?.email} className="mr-4">{val?.email}</Button>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {val?.phoneno}
                    </Table.Cell>
                    <Table.Cell>
                        <Button color="success" onClick={() => window.location.href = val.attachment[0].fileURL} className="mr-4">View</Button>
                    </Table.Cell>
                    <Table.Cell>
                        <Button color="info" onClick={() => window.location.href = '/admin/alumni/verify?id=' + val._id} className="mr-4">Verify</Button>
                    </Table.Cell>
                </Table.Row>
            })
        }
    </Table.Body>
</Table>