'use client'
import { 
    Button,
    Label 
} from "flowbite-react";
import AgGridTableForm from '../../_components/aggrid.form';


const QuickLinkForm = ({formChangeHandler, payload}) => {
    const DeleteButtonRenderer = (params, formChangeHandler, name) => {
        const handleDelete = () => {
            params.api.applyTransaction({ remove: [params.node.data] });
            params.api.refreshCells({ rowNodes: [params.node] });

            let gridData = [];
            params.api.forEachNode(node => gridData.push(node.data));
            formChangeHandler({
                "target": {
                    "name": name,
                    "value": gridData,
                    "type": "table"
                }
            });
        };
    
        return <Button onClick={handleDelete} color={"failure"}>Delete</Button>;
    };
    
    const columnDefs = [
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
            width: "1000vw",
            editable: true
        },
        {
            headerName: "Delete",
            field: "deleteAction",
            cellRenderer: (p) => DeleteButtonRenderer(p, formChangeHandler, 'quicklink'),
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
    return <>
        <div className="mt-20 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
            {`Quick Link`}
        </div>
        <div className="mt-3 w-fit">
            <p className="mt-1 text-sm text-gray-500">Format Link berbentuk URL (https://test.com)</p>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor='quicklink' value="" />
            </div>
            <div className="ag-theme-quartz pr-10 md:pr-0" style={{height: '200px', width: "100%"}}>
                <AgGridTableForm name="quicklink" formChangeHandler={formChangeHandler} payload={payload?.quicklink || []}  columnDefs={columnDefs}/>
            </div>
        </div>
    </>
}

export default QuickLinkForm;