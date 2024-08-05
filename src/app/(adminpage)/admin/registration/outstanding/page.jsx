"use client";
import React from "react";
import NavbarSidebarLayout from "../../_layouts/navigation";
import AdminRegistrationHeader from "../_components/Header";
import AdminRegistrationMainContent from "../_components/MainContent";
import AdminRegistrationTableSection from "../_components/Table";
import RegistrationTableActionBtn from "../_components/Table/actionBtn";
import { FaCheck } from "react-icons/fa";
import { Button } from "flowbite-react";
import { tempDatas } from "../../../../../settings/tempAdminRegistration";

const AdminRegistrationOutstandingPage = () => {
	const colDef = [
		{ headerName: "No", valueGetter: (p) => p.node.rowIndex + 1, width: 80 },
		{ headerName: "Registration Code", field: "registrationcode" },
		{
			headerName: "Fullname",
			valueGetter: (p) => {
				return `${p.data.firstname} ${p.data.middlename} ${p.data.lastname} `;
			},
		},
		{ headerName: "Phone", field: "phoneno" },
		{ headerName: "Submit Date", field: "registereddate" },
		{ headerName: "Admission", field: "fathername" },
		{
			headerName: "Approve Action",
			cellStyle: () => ({
				display: "flex",
				alignItems: "center",
			}),
			cellRenderer: (p) => (
				<Button size="xs" className="text-white" color={"success"}>
					<FaCheck className="mr-2 h-4 w-4" />
					<p>Approve</p>
				</Button>
			),
		},
		{
			headerName: "Action",
			cellStyle: () => ({
				display: "flex",
				alignItems: "center",
			}),
			width: 350,
			cellRenderer: (p) => RegistrationTableActionBtn(p.data),
		},
	];

	return (
		<NavbarSidebarLayout>
			<div>
				<AdminRegistrationHeader />
				<AdminRegistrationMainContent
					title={
						<>
							Total data :{" "}
							<span className="font-bold" style={{ color: "#3f4b56" }}>
								312 records
							</span>
						</>
					}
				>
					<AdminRegistrationTableSection colDef={colDef} datas={tempDatas} />
				</AdminRegistrationMainContent>
			</div>
		</NavbarSidebarLayout>
	);
};

export default AdminRegistrationOutstandingPage;
