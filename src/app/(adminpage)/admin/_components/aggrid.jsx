'use client'
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.min.css";
import "ag-grid-community/styles/ag-theme-quartz.min.css";

const AgGridTable = ({name, payload, columnDefs}) => {
    return <div className="ag-theme-quartz pr-10 md:pr-0" style={{ height: "70vh", width: "100%" }}>
        <AgGridReact name={name} id={name} columnDefs={columnDefs} rowData={payload || []}/>
    </div>
};

export default AgGridTable;