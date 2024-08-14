"use client";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
	ApproveOutstandingStudentRegistration,
	GetOutstandingStudentRegistration,
} from "../../../../../../services/onlineregistration.service";
import useExportExcel from "../../../../../hooks/useExportExcel";
import NavbarSidebarLayout from "../../_layouts/navigation";
import AdminRegistrationHeader from "../_components/Header";
import AdminRegistrationMainContent from "../_components/MainContent";
import AdminRegistrationTableSection from "../_components/Table";
import RegistrationTableActionBtn from "../_components/Table/actionBtn";
import { FaCheck } from "react-icons/fa";
import { admRegisManagerExportObjectBuilder } from "../../../../../utils/admin/registration/export";

const AdminRegistrationOutstandingPage = () => {
	const onExportExcel = useExportExcel();
	const [payload, setPayload] = useState([]);
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
		{ headerName: "Admission", field: "admision.firstname" },
		{
			headerName: "Approve Action",
			cellStyle: () => ({
				display: "flex",
				alignItems: "center",
			}),
			cellRenderer: (p) => (
				<Button
					size="xs"
					className="text-white"
					color={"success"}
					onClick={(e) => ApproveHandler(p.data)}
				>
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

	const ApproveHandler = (data) => {
		ApproveOutstandingStudentRegistration(data._id)
			.then((_) => {
				getOutstandingData();
				Swal.fire({
					allowOutsideClick: false,
					title: "Approve Notification!",
					text: "Success Approve Data",
					icon: "success",
				});
			})
			.catch((err) => {
				Swal.fire({
					allowOutsideClick: false,
					title: "Error Notification!",
					text: err,
					icon: "error",
				});
			});
	};

	const getOutstandingData = () => {
		GetOutstandingStudentRegistration()
			.then((res) => {
				setPayload(res.data);
			})
			.catch((err) => {
				setPayload([]);
			});
	};

	useEffect(() => {
		getOutstandingData();
	}, []);

	const onClickExport = () => {
		onExportExcel(
			{ Sheet1: admRegisManagerExportObjectBuilder(payload) },
			"Outstanding Data registrasi"
		);
	};

	return (
		<NavbarSidebarLayout>
			<div>
				<AdminRegistrationHeader />
				<AdminRegistrationMainContent
					onExportAll={onClickExport}
					title={
						<>
							Total data :{" "}
							<span className="font-bold" style={{ color: "#3f4b56" }}>
								{payload.length} records
							</span>
						</>
					}
				>
					<AdminRegistrationTableSection colDef={colDef} datas={payload} />
				</AdminRegistrationMainContent>
			</div>
		</NavbarSidebarLayout>
	);
};

export default AdminRegistrationOutstandingPage;
