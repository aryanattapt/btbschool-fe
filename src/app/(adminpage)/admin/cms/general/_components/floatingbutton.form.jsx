'use client'
import { 
    Button,
    FileInput,
    Label 
} from "flowbite-react";
import AgGridTableForm from './aggrid.form';

const LogoFileInputRenderer = (params) => {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            params.setValue(file.name);

            /* Jika mau disave jadi file beneran */
            /* params.node.data.file = file;
            params.api.refreshCells({ rowNodes: [params.node] }); */

            /* Disimpan sebagai base64 */
            const reader = new FileReader();
            reader.onloadend = () => {
                params.node.data[params.column.colId] = reader.result;
            };
            reader.readAsDataURL(file);
            params.api.refreshCells({ rowNodes: [params.node] });
        }
    };

    return <FileInput accept="image/*" name={params.column.colid} onChange={handleFileChange} />;
};

const DeleteButtonRenderer = (params) => {
    const handleDelete = () => {
        params.api.applyTransaction({ remove: [params.node.data] });
        params.api.refreshCells({ rowNodes: [params.node] });
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
        width: "140vw",
        editable: true,
        cellRenderer: (p) => LogoFileInputRenderer(p),
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

const FloatingButtonForm = ({formChangeHandler, payload}) => {
    return <>
        <div className="mt-20 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
            {`Floating Button`}
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor='floatingButton' value="" />
            </div>
            <div className="ag-theme-quartz pr-10 md:pr-0" style={{height: '200px', width: "100%"}}>
                <AgGridTableForm name="floatingbuttons" formChangeHandler={formChangeHandler} payload={payload.floatingbuttons || []} columnDefs={columnDefs}/>
            </div>
        </div>
    </>
}

export default FloatingButtonForm;