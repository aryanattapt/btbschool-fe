import { View } from "@react-pdf/renderer";
import PDFRowExport from "../../_components/PDFRowExport";
import ARDExportPDFTableSection from "../../_components/TableSection";

const ARDExportPDFEmergencyContact = ({ data }) => {
	return (
		<ARDExportPDFTableSection
			title={"Emergency Contact lnformation ( Other than Parents )"}
		>
			<PDFRowExport
				label="Name"
				value={data?.emergencycontactname}
				labelStyles={{ width: 200 }}
				valueStyles={{ width: "100%" }}
			/>
			<PDFRowExport
				label="Relationship to Student"
				value={data?.emergencycontactrelaction}
				labelStyles={{ width: 200 }}
				valueStyles={{ width: "100%" }}
			/>
			<PDFRowExport
				label="Telephone Contact Number"
				value={data?.emergencycontactphoneno}
				labelStyles={{ width: 200 }}
				valueStyles={{ width: "100%" }}
			/>
			<PDFRowExport
				label="Address"
				value={data?.emergencycontactaddress}
				labelStyles={{ width: 200 }}
				valueStyles={{ width: "100%" }}
			/>
		</ARDExportPDFTableSection>
	);
};

export default ARDExportPDFEmergencyContact;
