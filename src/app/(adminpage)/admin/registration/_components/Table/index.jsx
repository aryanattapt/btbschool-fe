"use client";
import "ag-grid-community/styles/ag-grid.min.css";
import "ag-grid-community/styles/ag-theme-quartz.min.css";
import { AgGridReact } from "ag-grid-react";

const AdminRegistrationTableSection = ({ datas, colDef }) => {
	return (
		<>
			<div
				className="ag-theme-quartz pr-10 md:pr-0"
				style={{ height: "70vh", width: "100%" }}
			>
				<AgGridReact columnDefs={colDef} rowData={datas} />
			</div>
		</>
	);
};

export default AdminRegistrationTableSection;
