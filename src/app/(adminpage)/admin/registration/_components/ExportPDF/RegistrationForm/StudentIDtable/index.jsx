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

				{/* <View style={styles.tableRow}>
					<Text style={styles.label}>Student ID</Text>
					<Text style={styles.value}>:</Text>
				</View>
				<View style={styles.tableRow}>
					<Text style={styles.label}>NISN</Text>
					<Text style={styles.value}>:</Text>
				</View>
				<View style={styles.tableRow}>
					<Text style={styles.label}>House Name</Text>
					<Text style={styles.value}>:</Text>
				</View> */}
			</ARDExportPDFTableSection>
		</View>
	);
};

export default ARDExportPDFStudentIDTable;
