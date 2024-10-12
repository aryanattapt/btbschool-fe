'use client'
import { 
    Button,
    Label 
} from "flowbite-react";
import AgGridTableForm from '../../_components/aggrid.form';

const DeleteButtonRenderer = (params) => {
    const handleDelete = () => {
        params.api.applyTransaction({ remove: [params.node.data] });
        params.api.refreshCells({ rowNodes: [params.node] });
    };

    return <Button onClick={handleDelete} color={"failure"}>Delete</Button>;
};

const columnDefs = [
    /* {
        width: "100vw",
        filter: false,
        sortable: false,
        resizable: false,
        suppressHeaderMenuButton: true,
        suppressMovable: true,
        enableRowGroup: false,
        suppressAutoSize: true,
        suppressSizeToFit: true,
        headerName: 'No',
        colId: 'rownumber',
        headerClass: 'cell-center',
        cellStyle: { textAlign: 'right' },
        valueGetter: 'node.rowIndex + 1',
        valueFormatter: 'node?.rowPinned ? "" : x',
        editable: false,
    }, */
    {
        headerName: "Building Name",
        field: "buildingName",
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
        width: "200vw",
        editable: true
    },
    {
        headerName: "Grade",
        field: "grade",
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
        width: "200vw",
        editable: true
    },
    {
        headerName: "Phone No",
        field: "phoneNo",
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
        width: "200vw",
        editable: true
    },
    {
        headerName: "WhatsApp No 1",
        field: "whatsAppNo1",
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
        width: "200vw",
        editable: true
    },
    {
        headerName: "WhatsApp No 2",
        field: "whatsAppNo2",
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
        width: "200vw",
        editable: true
    },
    {
        headerName: "Email",
        field: "email",
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
        width: "200vw",
        editable: true
    },
    {
        headerName: "Maps Location (Embeded)",
        field: "mapsLocationEmbeded",
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
        width: "200vw",
        editable: true
    },
    {
        headerName: "Maps Location",
        field: "mapsLocation",
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
        width: "200vw",
        editable: true
    },
    {
        headerName: "Alamat",
        field: "address",
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
        width: "500vw",
        editable: true
    },
    {
        headerName: "Delete",
        field: "deleteAction",
        cellRenderer: (p) => DeleteButtonRenderer(p),
        width: "100vw",
        filter: false,
        sortable: false,
        resizable: false,
        suppressHeaderMenuButton: true,
        suppressMovable: true,
        enableRowGroup: false,
        suppressAutoSize: true,
        suppressSizeToFit: true,
        headerClass: 'cell-center',
        cellStyle: { textAlign: 'center' },
    },
  ];

const ContactForm = ({formChangeHandler, payload}) => {
    return <>
        <div className="mt-20 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
            {`Contact Form`}
        </div>
        <div className="mt-3 w-fit">
            <p className="mt-1 text-sm text-gray-500">Format Phone No/Whatsapp No: (+62)81234567890</p>
            <p className="mt-1 text-sm text-gray-500">Format Email: test@test.com</p>
            <p className="mt-1 text-sm text-gray-500">Format Maps Location Embeded berbentuk URL (https://test.com) digunakan untuk menampilkan peta langsung dihalaman web</p>
            <p className="mt-1 text-sm text-gray-500">Format Maps Location berbentuk URL (https://test.com) digunakan untuk membuka lokasi maps dihalaman baru</p>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor='contact' value="" />
            </div>
            <div className="ag-theme-quartz pr-10 md:pr-0" style={{height: '200px', width: "100%"}}>
                <AgGridTableForm name="contact" formChangeHandler={formChangeHandler} payload={payload.contact || []} columnDefs={columnDefs}/>
            </div>
        </div>
    </>
}

export default ContactForm;