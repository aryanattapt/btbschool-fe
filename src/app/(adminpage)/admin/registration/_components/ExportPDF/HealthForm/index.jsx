import React from "react";
import ARDExportPDFPageContainer from "../_components/PageContainer";
import ARDExportPDFHeader from "../_components/Header";
import { StyleSheet, View } from "@react-pdf/renderer";
import ARDExportPersonalHealth from "./PersonalHealth";
import ARDExportMedication from "./Medication";
import ARDExportMedicalHistory from "./MedicalHistory";

const styles = StyleSheet.create({
	splitSection: {
		marginTop: 12,
		display: "flex",
		flexDirection: "row",
		columnGap: 12,
	},
});

const ARDExportHealthForm = ({ data }) => {
	return (
		<ARDExportPDFPageContainer>
			<ARDExportPDFHeader title={"HEALTH FORM"} />
			<View style={styles.splitSection}>
				<View>
					<ARDExportPersonalHealth data={data} />
				</View>
				<View>
					<ARDExportMedication data={data} />
				</View>
			</View>
			<ARDExportMedicalHistory data={data} />
		</ARDExportPDFPageContainer>
	);
};

export default ARDExportHealthForm;
