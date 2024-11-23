import AgGrid from '../../../_components/aggrid';
import { Button } from 'flowbite-react';

const TableTestimoni = ({payload, deleteHandler}) => {
    const columnDefs = [
        {
            headerName: "Name",
            field: "name",
            filter: true,
            sortable: true,
            resizable: true,
            headerClass: 'cell-center',
            cellStyle: { textAlign: 'left' },
            width: "200vw",
            editable: false,
        },
        {
            headerName: "Class",
            field: "class",
            filter: true,
            sortable: true,
            resizable: true,
            headerClass: 'cell-center',
            cellStyle: { textAlign: 'left' },
            width: "150vw",
            editable: false,
        },
        {
            headerName: "University",
            field: "university",
            filter: true,
            sortable: true,
            resizable: true,
            headerClass: 'cell-center',
            cellStyle: { textAlign: 'left' },
            width: "200vw",
            editable: false,
        },
        {
            headerName: "Major",
            field: "major",
            filter: true,
            sortable: true,
            resizable: true,
            headerClass: 'cell-center',
            cellStyle: { textAlign: 'left' },
            width: "200vw",
            editable: false,
        },
        {
            headerName: "Testimonies",
            field: "testimonies",
            filter: true,
            sortable: true,
            resizable: true,
            headerClass: 'cell-center',
            cellStyle: { textAlign: 'left' },
            width: "300vw",
            editable: false,
        },
        {
            headerName: "Edit",
            cellRenderer: (p) => {
                return (
                    <div className="flex flex-wrap gap-2">
                        <Button color="warning" onClick={() => window.location.href = '/admin/cms/alumni/alumniform?id=' + p?.data?._id} className="mr-4">
                            Edit
                        </Button>
                    </div>
                );
            },
            filter: false,
            sortable: false,
            resizable: false,
            suppressHeaderMenuButton: true,
            suppressMovable: true,
            enableRowGroup: false,
            suppressAutoSize: true,
            suppressSizeToFit: true,
            headerClass: 'cell-center',
            cellStyle: { textAlign: 'left' },
            width: "150vw",
            editable: false,
        },
        {
            headerName: "Delete",
            cellRenderer: (p) => {
                return (
                    <div className="flex flex-wrap gap-2">
                        <Button color="failure" onClick={() => deleteHandler(p?.data?.type, p?.data?._id)} className="mr-4">
                            Delete
                        </Button>
                    </div>
                );
            },
            filter: false,
            sortable: false,
            resizable: false,
            suppressHeaderMenuButton: true,
            suppressMovable: true,
            enableRowGroup: false,
            suppressAutoSize: true,
            suppressSizeToFit: true,
            headerClass: 'cell-center',
            cellStyle: { textAlign: 'left' },
            width: "150vw",
            editable: false,
        }
    ];

    return (
        <AgGrid 
            payload={payload} 
            columnDefs={columnDefs} 
            name="testimoniTable"
            pagination={true}
            paginationPageSize={50}
        />
    );
};

export default TableTestimoni;