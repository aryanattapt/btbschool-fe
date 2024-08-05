"use client";
import { useEffect, useState } from "react";
import LoadingModal from "../../../../../../components/LoadingModal";
import { tempDatas } from "../../../../../../settings/tempAdminRegistration";
import ARDHeaderAction from "./HeaderAction";
import ARDHealthForm from "./HealthForm";
import ARDRecommended from "./Recommended";
import ARDRegistrationForm from "./RegistrationForm";
import ARDTermAndCondition from "./TermAndCondition";

const AdminRegistrationDetailContent = () => {
	const [activeSection, setActiveSection] = useState("");
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setTimeout(() => {
				setActiveSection("Registration Form");
				setData(tempDatas[0]);
				setLoading(false);
			}, 100);
		};
		fetchData();
	}, []);

	const onDownloadPdf = () => {
		console.log("download");
	};

	return (
		<div>
			<ARDHeaderAction
				onDownload={onDownloadPdf}
				onClick={setActiveSection}
				active={activeSection}
			/>
			<div>
				<div className="flex flex-col items-center">
					<img
						alt=""
						src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/Logo BTB 1.1-01.png"
						className="h-32 w-fit"
					/>
				</div>
				{data && (
					<>
						{activeSection === "Registration Form" && (
							<ARDRegistrationForm data={data} />
						)}
						{activeSection === "Peraturan dan Persyaratan" && (
							<ARDTermAndCondition data={data} />
						)}
						{activeSection === "Health Form" && <ARDHealthForm data={data} />}
						{activeSection === "Recommended" && <ARDRecommended data={data} />}
					</>
				)}
			</div>
			{loading && <LoadingModal label={"Getting data, please wait ..."} />}
		</div>
	);
};

export default AdminRegistrationDetailContent;
