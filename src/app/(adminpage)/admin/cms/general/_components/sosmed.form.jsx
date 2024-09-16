'use client'
import { 
    Label 
} from "flowbite-react";
import AgGridTableForm from './aggrid.form';

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
        width: "200vw",
        editable: true
    },
    {
        headerName: "Logo",
        field: "logo",
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
        headerName: "Link",
        field: "link",
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

const SosialMediaForm = ({formChangeHandler, payload}) => {
    return <>
        <div className="mt-5 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
            {`Sosial Media`}
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor='socialmedia' value="" />
            </div>
            <div className="ag-theme-quartz pr-10 md:pr-0" style={{height: '200px', width: "100%"}}>
                <AgGridTableForm name="socialmedia" formChangeHandler={formChangeHandler} payload={payload.socialmedia || []} columnDefs={columnDefs}/>
            </div>
        </div>
    </>
}

export default SosialMediaForm;