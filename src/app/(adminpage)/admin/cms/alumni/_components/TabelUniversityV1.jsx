import AgGrid from '../../../_components/aggrid';
import { Button } from 'flowbite-react';

const TabelUniversity = ({ payload, deleteHandler }) => {
    const columnDefs = [
        {
            headerName: "Name",
            field: "caption",
            filter: true,
            sortable: true,
            resizable: true,
            headerClass: 'cell-center',
            cellStyle: { textAlign: 'left' },
            width: "500vw",
            editable: false,
        },
        /* {
            headerName: "Logo",
            cellRenderer: (p) => {
                return p?.data?.image ? (
                    <img src={p?.data?.image} alt={p?.data?.caption} width="100px" />
                ) : null;
            },
            filter: false,
            sortable: false,
            resizable: true,
            suppressHeaderMenuButton: true,
            suppressMovable: true,
            enableRowGroup: false,
            suppressAutoSize: true,
            suppressSizeToFit: true,
            headerClass: 'cell-center',
            cellStyle: { textAlign: 'left' },
            width: "700vw",
            editable: false,
        }, */
        {
            headerName: "Logo",
            cellRenderer: (p) => {
                return p?.data?.image ? (
                    <Button color="info" onClick={() => window.location.href = p?.data?.image} className="mr-4">
                            Preview/Download
                        </Button>
                ) : null;
            },
            filter: false,
            sortable: false,
            resizable: true,
            suppressHeaderMenuButton: true,
            suppressMovable: true,
            enableRowGroup: false,
            suppressAutoSize: true,
            suppressSizeToFit: true,
            headerClass: 'cell-center',
            cellStyle: { textAlign: 'left' },
            width: "300vw",
            editable: false,
        },
        {
            headerName: "Action",
            cellRenderer: (p) => {
                return (
                    <div className="flex flex-wrap gap-2">
                        <Button color="warning" onClick={() => window.location.href = '/admin/cms/alumni/universityForm?id=' + p?.data?._id} className="mr-4">
                            Edit
                        </Button>
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
            width: "300vw",
            editable: false,
        },
    ];

    return (
        <AgGrid 
            payload={payload} 
            columnDefs={columnDefs} 
            name="universityListTable"
            pagination={true}
            paginationPageSize={50}
            rowHeight={60} // Menyesuaikan tinggi setiap baris
        />
    );
};

export default TabelUniversity;
