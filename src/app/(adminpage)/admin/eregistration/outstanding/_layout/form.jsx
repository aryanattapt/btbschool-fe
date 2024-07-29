'use client'
import { useRef, useState } from "react";
import "ag-grid-community/styles/ag-grid.min.css";
import "ag-grid-community/styles/ag-theme-quartz.min.css";
import { AgGridReact } from "ag-grid-react";
import { 
    Button,
    HR,
} from "flowbite-react";

const columnDefs = [
    {
        width: "100vw",
        filter: false,
        sortable: false,
        resizable: false,
        suppressHeaderMenuButton: true,
        suppressMovable: true,
        enableRowGroup: false,
        suppressAutoSize: true,
        suppressSizeToFit: true,
        headerName: 'Registration Code',
        colId: 'registrationCode',
        headerClass: 'cell-center',
        cellStyle: { textAlign: 'left' },
        editable: false,
    },
    {
        width: "100vw",
        filter: false,
        sortable: false,
        resizable: false,
        suppressHeaderMenuButton: true,
        suppressMovable: true,
        enableRowGroup: false,
        suppressAutoSize: true,
        suppressSizeToFit: true,
        headerName: 'Full Name',
        colId: 'firstName',
        headerClass: 'cell-center',
        cellStyle: { textAlign: 'left' },
        editable: false,
    },
    {
        width: "100vw",
        filter: false,
        sortable: false,
        resizable: false,
        suppressHeaderMenuButton: true,
        suppressMovable: true,
        enableRowGroup: false,
        suppressAutoSize: true,
        suppressSizeToFit: true,
        headerName: 'Phone No',
        colId: 'phoneno',
        headerClass: 'cell-center',
        cellStyle: { textAlign: 'left' },
        editable: false,
    },
    {
        width: "100vw",
        filter: false,
        sortable: false,
        resizable: false,
        suppressHeaderMenuButton: true,
        suppressMovable: true,
        enableRowGroup: false,
        suppressAutoSize: true,
        suppressSizeToFit: true,
        headerName: 'Submit Date',
        colId: 'registereddate',
        headerClass: 'cell-center',
        cellStyle: { textAlign: 'left' },
        editable: false,
    },
];

const ERegistrationOutstandingTable = ({data}) => {
    const agGridRef = useRef({
        api: undefined,
        columnApi: undefined,
    });

    const onGridReady = (params) => {
        agGridRef.api = params.api;
        agGridRef.columnApi = params.columnApi;
    };

    return <>
        <div className="ag-theme-quartz" style={{height: '500px', width: "100%"}}>
            <AgGridReact name={"ERegistrationOutstandingTable"} id={"ERegistrationOutstandingTable"} 
            columnDefs={columnDefs} rowData={data}  onGridReady={onGridReady} />
        </div>
    </>
}

export default ERegistrationOutstandingTable;