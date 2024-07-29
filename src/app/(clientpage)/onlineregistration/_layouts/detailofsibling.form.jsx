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
        headerName: 'No',
        colId: 'rownumber',
        headerClass: 'cell-center',
        cellStyle: { textAlign: 'right' },
        valueGetter: 'node.rowIndex + 1',
        valueFormatter: 'node?.rowPinned ? "" : x',
        editable: false,
    },
    {
        headerName: "Name",
        field: "name",
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
        width: "800vw",
        editable: true
    },
    {
        headerName: "Age",
        field: "age",
        filter: false,
        sortable: false,
        resizable: false,
        suppressHeaderMenuButton: true,
        suppressMovable: true,
        enableRowGroup: false,
        suppressAutoSize: true,
        suppressSizeToFit: true,
        headerClass: 'cell-center',
        cellStyle: { textAlign: 'right' },
        width: "100vw",
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
        width: "300vw",
        editable: true
    },
    {
        headerName: "School",
        field: "school",
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
];

const DetailOfSiblingForm = ({formChangeHandler, name, payload}) => {
    const agGridRef = useRef({
        api: undefined,
        columnApi: undefined,
    });

    const onGridReady = (params) => {
        agGridRef.api = params.api;
        agGridRef.columnApi = params.columnApi;
    };

    const onCellEditingStopped = () => {
        let gridData = [];
        agGridRef.api.forEachNode(node => gridData.push(node.data));
        formChangeHandler({
            "target": {
                "name": name,
                "value": gridData,
                "type": "table"
            }
        });
    } 

    return <>
        <div>
            <HR.Text text="Detail Of Sibling"/>
        </div>
        <div className="mb-6">
            <div className="flex flex-col items-center justify-center px-6">
                <Button type="submit" className="w-full lg:w-auto" onClick={() => agGridRef.api.applyTransaction({add: [{}]})}>Add Row</Button>
            </div>
        </div>
        <div className="ag-theme-quartz" style={{height: '200px', width: "100%"}}>
            <AgGridReact name={name} id={name} columnDefs={columnDefs} rowData={payload.siblinglist || []} onGridReady={onGridReady} onCellEditingStopped={onCellEditingStopped}/>
        </div>
    </>
};

export default DetailOfSiblingForm;