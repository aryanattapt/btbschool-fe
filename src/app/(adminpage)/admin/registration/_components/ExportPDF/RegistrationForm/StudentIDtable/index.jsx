import { Text, View } from "@react-pdf/renderer";
import React from "react";
import PDFRowExport from "../../_components/PDFRowExport";
import ARDExportPDFTableSection from "../../_components/TableSection";

const ARDExportPDFStudentIDTable = ({ data }) => {
	return (
		<View style={{ width: "50%" }}>
			<ARDExportPDFTableSection>
				<PDFRowExport label="Student ID" value={""} />
				<PDFRowExport label="NISN" value={""} />
				<PDFRowExport label="House Name" value={""} />
			</ARDExportPDFTableSection>
		</View>
	);
};

export default ARDExportPDFStudentIDTable;
