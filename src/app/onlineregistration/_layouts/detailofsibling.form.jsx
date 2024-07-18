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
        headerName: "No",
        field: "no",
        width: "100vw"
    },
    {
        headerName: "Name",
        field: "name",
        width: "800vw",
        editable: true
    },
    {
        headerName: "Age",
        field: "age",
        width: "100vw",
        editable: true
    },
    {
        headerName: "Grade",
        field: "grade",
        width: "300vw",
        editable: true
    },
    {
        headerName: "School",
        field: "school",
        width: "500vw",
        editable: true
    },
];

const DetailOfSiblingForm = () => {
    const [rowData, setRowData] = useState([]);
    const agGridRef = useRef({
        api: undefined,
        columnApi: undefined,
    });

    const onGridReady = (params) => {
        agGridRef.api = params.api;
        agGridRef.columnApi = params.columnApi;
    };

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
            <AgGridReact columnDefs={columnDefs} rowData={rowData} onGridReady={onGridReady}/>
        </div>
    </>
};

export default DetailOfSiblingForm;