import { Button, Table } from "flowbite-react";

const TableBulletinSpotlight = ({ payload, deleteHandler }) => {
  const TableCell = ({ children }) => {
    return (
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {children}
      </Table.Cell>
    );
  };

  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>School</Table.HeadCell>
          <Table.HeadCell>Type</Table.HeadCell>
          <Table.HeadCell>Link</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {payload.map((val, idx) => {
            return (
              <Table.Row
                key={idx}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <TableCell>{val.title}</TableCell>
                <TableCell>{val.school}</TableCell>
                <TableCell>{val.type}</TableCell>
                <Table.Cell>
                  {val?.attachment?.length > 0 ? (
                    <a
                      href={`${val?.attachment[0]?.fileURL}`}
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      {val?.attachment[0]?.fileName}
                    </a>
                  ) : (
                    <div></div>
                  )}
                </Table.Cell>
                <Table.Cell>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      color="failure"
                      onClick={() => deleteHandler(val._id)}
                      className="mr-4"
                    >
                      Delete
                    </Button>
                  </div>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default TableBulletinSpotlight;
