'use client'
import { 
    Button,
} from "flowbite-react";
import AgGridTableForm from "./aggrid.form";

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
    return <>
        <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
        Detail Of Sibling
        </div>
        <div className="mb-6">
            <div className="flex flex-col items-center justify-center px-6">
                <Button type="submit" className="w-full lg:w-auto" onClick={() => agGridRef.current.api.applyTransaction({add: [{}]})}>Add Row</Button>
            </div>
        </div>
        <div className="ag-theme-quartz pr-10 md:pr-0" style={{height: '200px', width: "100%"}}>
            <AgGridTableForm name={name} formChangeHandler={formChangeHandler} payload={payload[name] || []} columnDefs={columnDefs}/>
        </div>
        {errorPayload[name] && (
            <span className="text-red-600 mt-1 text-sm">{errorPayload[name].message}</span>
        )}
    </>
};

export default DetailOfSiblingForm;