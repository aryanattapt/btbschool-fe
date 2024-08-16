import { Document } from "@react-pdf/renderer";
import ARDExportHealthForm from "./HealthForm";
import ARDExportRecommended from "./Recommended";
import ARDExportRegistrationForm from "./RegistrationForm";
import ARDExportTermAndCondition from "./TermAndCondition";

const ARDExportPdf = ({ data, selected = "All" }) => {
	return (
		<Document>
			{(selected === "All" || selected === "Registration Form") && (
				<ARDExportRegistrationForm data={data} />
			)}
			{(selected === "All" || selected === "Peraturan dan Persyaratan") && (
				<ARDExportTermAndCondition data={data} />
			)}
			{(selected === "All" || selected === "Health Form") && (
				<ARDExportHealthForm data={data} />
			)}
			{(selected === "All" || selected === "Recommended") && (
				<ARDExportRecommended data={data} />
			)}
		</Document>
	);
};

export default ARDExportPdf;
