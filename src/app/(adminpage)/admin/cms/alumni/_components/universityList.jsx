'use client'
import { Button, Table } from "flowbite-react";
import { useEffect } from "react";

const UniversityList = ({payload, deleteHandler}) => {
    useEffect(() => {
        console.log("Payload data:", payload["ceritaAlumniFlag"]);
    }, [payload]);
    return (
        <div className="overflow-x-auto">
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Logo</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        payload && payload["ceritaAlumniFlag"] && payload["ceritaAlumniFlag"].length > 0 ? (
                            payload["ceritaAlumniFlag"].map((alumni, idx) => (
                                <Table.Row key={idx} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {alumni.caption}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        <img src={alumni.image} alt={alumni.caption} width="100px"/>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <div className="flex flex-wrap gap-2">
                                            <Button 
                                                color="warning" 
                                                onClick={() => window.location.href = '/admin/cms/alumni/universityForm?id=' + idx} 
                                                className="mr-4"
                                            >
                                                Edit
                                            </Button>
                                            <Button 
                                                color="failure" 
                                                onClick={() => deleteHandler(alumni._id)} 
                                                className="mr-4"
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        ) : (
                            <Table.Row>
                                <Table.Cell colSpan={6} className="text-center">
                                    Loading...
                                </Table.Cell>
                            </Table.Row>
                        )
                    }
                </Table.Body>
            </Table>
        </div>
    );
};

export default UniversityList;
