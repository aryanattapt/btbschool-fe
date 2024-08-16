"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { GetDetailStudentRegistration } from "../../../../../../../services/onlineregistration.service";
import LoadingModal from "../../../../../../components/LoadingModal";
import ARDHeaderAction from "./HeaderAction";
import ARDHealthForm from "./HealthForm";
import ARDRecommended from "./Recommended";
import ARDRegistrationForm from "./RegistrationForm";
import ARDTermAndCondition from "./TermAndCondition";

const AdminRegistrationDetailContent = () => {
	const params = useParams();
	const [activeSection, setActiveSection] = useState("");
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		GetDetailStudentRegistration(params.id)
			.then((res) => {
				setData(res.data[0]);
				setActiveSection("Registration Form");
				setLoading(false);
			})
			.catch((err) => {
				setActiveSection("Registration Form");
				setLoading(false);
				Swal.fire({
					allowOutsideClick: false,
					title: "Error Notification!",
					text: err,
					icon: "error",
				});
			});
	}, []);

	return (
		<div>
			<ARDHeaderAction
				data={data}
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
