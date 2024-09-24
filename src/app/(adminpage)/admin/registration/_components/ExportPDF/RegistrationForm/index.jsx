import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { dateShortDisplay } from "../../../../../../../utils/date";
import ARDExportPDFHeader from "../_components/Header";
import ARDExportPDFPageContainer from "../_components/PageContainer";
import ARDExportPDFSignatureDisplay from "../_components/SignatureDisplay";
import ARDExportPDFDetailSiblings from "./DetailsSiblings";
import ARDExportPDFEducationalBackground from "./EducationalBackground";
import ARDExportPDFEmergencyContact from "./EmergencyContactInformation";
import ARDExportPDFParentAndGuardian from "./ParentsGuardianInformation";
import ARDExportPDFStudentDetail from "./StudentDetail";
import ARDExportPDFStudentIDTable from "./StudentIDtable";

const defaultTableDataStyle = {
	backgroundColor: "#f3d08b",
	padding: 2,
	paddingHorizontal: 3,
};

const styles = StyleSheet.create({
	splitSection: {
		display: "flex",
		flexDirection: "row",
		columnGap: 12,
	},
	signatureSection: {
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		flexDirection: "row",
		alignItems: "center",
	},
	signatureDate: {
		fontSize: 9,
	},
});

const ARDExportRegistrationForm = ({ data }) => {
	return (
		<>
			<ARDExportPDFPageContainer>
				<ARDExportPDFHeader
					title={"REGISTRATION FORM"}
					subtitle={`School Year : ${data.schoolyear}`}
				/>
				<ARDExportPDFStudentIDTable data={data} />
				<View style={styles.splitSection}>
					<View>
						<ARDExportPDFStudentDetail data={data} />
						<ARDExportPDFEducationalBackground data={data} />
					</View>
					<View>
						<ARDExportPDFParentAndGuardian data={data} />
					</View>
				</View>
				<View>
					<ARDExportPDFEmergencyContact data={data} />
				</View>
				<ARDExportPDFDetailSiblings data={data} />
			</ARDExportPDFPageContainer>
			<ARDExportPDFPageContainer>
				<View style={styles.signatureSection}>
					<ARDExportPDFSignatureDisplay data={data} signature={data?.ttdpage1} />
					<Text style={styles.signatureDate}>
						Date: {dateShortDisplay(data?.registereddate)}
					</Text>
				</View>
			</ARDExportPDFPageContainer>
		</>
	);
};

export default ARDExportRegistrationForm;
