"use client";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { GetAllStudentRegistration } from "../../../../../../services/onlineregistration.service";
import useExportExcel from "../../../../../hooks/useExportExcel";
import { admRegisManagerExportObjectBuilder } from "../../../../../utils/admin/registration/export";
import NavbarSidebarLayout from "../../_layouts/navigation";
import AdminRegistrationHeader from "../_components/Header";
import AdminRegistrationMainContent from "../_components/MainContent";
import AdminRegistrationTableSection from "../_components/Table";
import RegistrationTableActionBtn from "../_components/Table/actionBtn";

const AdminRegistrationAllPage = () => {
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
		{ headerName: "Status", field: "status" },
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

	const onClickExport = () => {
		onExportExcel(
			{ Sheet1: admRegisManagerExportObjectBuilder(payload) },
			"Data registrasi all"
		);
	};

	useEffect(() => {
		GetAllStudentRegistration()
			.then((res) => {
				setPayload(res.data);
			})
			.catch((err) => {
				Swal.fire({
					allowOutsideClick: false,
					title: "Error Notification!",
					text: err,
					icon: "error",
				});
			});
	}, []);

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

export default AdminRegistrationAllPage;
