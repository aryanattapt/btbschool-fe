import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";
import ARDExportPDFPageContainer from "../_components/PageContainer";
import { dateShortDisplay } from "../../../../../../../utils/date";
import ChecklistIcon from "../_components/ChecklistIcon";
import ARDExportCheckListWithLabel from "../_components/CheclistWithLabel";
import ARDExportPDFSignatureDisplay from "../_components/SignatureDisplay";

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#ededed",
		padding: 6,
		fontSize: 12,
		width: 350,
		border: "1px solid black",
	},
	splitSection: {
		marginTop: 12,
		display: "flex",
		flexDirection: "row",
		columnGap: 12,
	},
});

const ARDExportRecommended = ({ data }) => {
	return (
		<ARDExportPDFPageContainer>
			<View style={styles.container}>
				<Text style={{ textAlign: "right", marginRight: 24 }}>
					Date : {dateShortDisplay(data?.registereddate)}
				</Text>
				<Text>Are you recommended by someone ?</Text>
				<View style={{ marginLeft: 12 }}>
					<ARDExportCheckListWithLabel
						label={"No"}
						checked={data?.recommendedoption === "No"}
					/>
					<ARDExportCheckListWithLabel
						label={"Yes"}
						checked={data?.recommendedoption === "Yes"}
					/>
				</View>
				<Row label={"Name of BTB Parent"} value={data?.btbparentnamerec} />
				<Row label={"Name of BTB Student"} value={data?.btbstudentnamerec} />
				<Row label={"Grade"} value={data?.btbstudentgraderec} />
				{/* Phone Row */}
				<PhoneRow
					label={"Phone No."}
					value={data?.btbstudentphonehomerec}
					addDesc={"home/office"}
				/>
				<PhoneRow
					label={""}
					value={data?.btbstudentphonemobilerec}
					addDesc={"mobile"}
				/>
				<View
					style={{
						marginTop: 12,
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-around",
					}}
				>
					<Text>Admsn/Mrktg,</Text>
					<ARDExportPDFSignatureDisplay data={data} />
				</View>
			</View>
		</ARDExportPDFPageContainer>
	);
};

const Row = ({ label, value }) => {
	return (
		<View
			style={{
				marginLeft: 32,
				marginTop: 8,
				display: "flex",
				flexDirection: "row",
			}}
		>
			<Text style={{ width: 90 }}>{label}</Text>
			<Text style={{ width: 160 }}>: {value}</Text>
		</View>
	);
};

const PhoneRow = ({ label, value, addDesc }) => {
	return (
		<View
			style={{
				marginLeft: 32,
				marginTop: 8,
				display: "flex",
				flexDirection: "row",
			}}
		>
			<Text style={{ width: 90 }}>{label}</Text>
			<View
				style={{
					width: 210,
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Text>: {value}</Text>
				<Text>{addDesc}</Text>
			</View>
		</View>
	);
};

export default ARDExportRecommended;
