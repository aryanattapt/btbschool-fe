'use client'
import { AgGridReact } from "ag-grid-react";
import { useRef, } from "react";
import "ag-grid-community/styles/ag-grid.min.css";
import "ag-grid-community/styles/ag-theme-quartz.min.css";
import { Button } from "flowbite-react";

const AgGridTable = ({formChangeHandler, name, payload, columnDefs}) => {
    const agGridRef = useRef();

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
        <div className="mb-6">
            <div className="flex flex-col items-center justify-center px-6">
                <Button type="submit" className="w-full lg:w-auto" onClick={() => agGridRef.current.api.applyTransaction({add: [{}]})}>Add Row</Button>
            </div>
        </div>
        <AgGridReact name={name} id={name} columnDefs={columnDefs} rowData={payload || []} 
            /* onGridReady={onGridReady}  */
            ref={agGridRef}
            onCellKeyDown={onCellKeyDown}
            onCellEditingStopped={onCellEditingStopped}/>
    </>
};

export default AgGridTable;