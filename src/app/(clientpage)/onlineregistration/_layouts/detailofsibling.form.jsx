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

const DetailOfSiblingForm = ({formChangeHandler, name, payload, errorPayload}) => {
    /* const agGridRef = useRef({
        api: undefined,
        columnApi: undefined,
    }); */

    const agGridRef = useRef();

    /* const onGridReady = (params) => {
        agGridRef.api = params.api;
        agGridRef.columnApi = params.columnApi;
    }; */

    const onCellEditingStopped = () => {
        let gridData = [];
        agGridRef.current.api.forEachNode(node => gridData.push(node.data));
        formChangeHandler({
            "target": {
                "name": name,
                "value": gridData,
                "type": "table"
            }
        });
    } 

    const onCellKeyDown = (params) => {
        if (params.event.key === 'Enter') {
            params.event.preventDefault();
            const api = agGridRef.current.api;
            const focusedCell = api.getFocusedCell();
            
            if (focusedCell) {
                const { rowIndex, column } = focusedCell;
                const allColumns = api.getAllGridColumns();
                const columnIndex = allColumns.indexOf(column);
                const nextColumnIndex = columnIndex + 1;
                const nextRowIndex = rowIndex + 1;

                // Check if next column index is within bounds
                if (nextColumnIndex < allColumns.length) {
                    // Move to the next cell in the same row
                    api.setFocusedCell(rowIndex, allColumns[nextColumnIndex].colId);
                } else if (nextRowIndex < api.getDisplayedRowCount()) {
                    // Move to the first cell of the next row
                    api.setFocusedCell(nextRowIndex, allColumns[0].colId);
                }
            }
        }
    };
    
    return <>
        {/* <div>
            <HR.Text text="Detail Of Sibling"/>
        </div> */}
        <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
        Detail Of Sibling
        </div>
        <div className="mb-6">
            <div className="flex flex-col items-center justify-center px-6">
                <Button type="submit" className="w-full lg:w-auto" onClick={() => agGridRef.current.api.applyTransaction({add: [{}]})}>Add Row</Button>
            </div>
        </div>
        <div className="ag-theme-quartz pr-10 md:pr-0" style={{height: '200px', width: "100%"}}>
            <AgGridReact name={name} id={name} columnDefs={columnDefs} rowData={payload.siblinglist || []} 
                /* onGridReady={onGridReady}  */
                ref={agGridRef}
                onCellKeyDown={onCellKeyDown}
                onCellEditingStopped={onCellEditingStopped}/>
        </div>
        {errorPayload[name] && (
            <span className="text-red-600 mt-1 text-sm">{errorPayload[name].message}</span>
        )}
    </>
};

export default DetailOfSiblingForm;