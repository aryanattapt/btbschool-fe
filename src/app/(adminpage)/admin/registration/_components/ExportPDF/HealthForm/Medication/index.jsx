import { StyleSheet, Text, View } from "@react-pdf/renderer";
import ARDExportCheckListWithLabel from "../../_components/CheclistWithLabel";

const defaultTableDataStyle = {
	backgroundColor: "#ededed",
	padding: 2,
	paddingHorizontal: 3,
};

const styles = StyleSheet.create({
	tableTitle: {
		fontSize: 10,
		marginBottom: 4,
	},
	tableRow: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		fontSize: 9,
		border: "1px solid black",
		marginTop: "-2px",
	},
	label: {
		...defaultTableDataStyle,
		width: 120,
	},
	value: {
		...defaultTableDataStyle,
		width: 141,
		// width: 150,
	},
	checklistOptContainer: {
		display: "flex",
		flexDirection: "row",
		columnGap: 12,
		alignItems: "center",
	},
});

const ARDExportMedication = ({ data }) => {
	return (
		<View>
			<Text style={styles.tableTitle}>Personal Health Information</Text>
			<Row
				label="Is your Child on Medication ?"
				value={`${data?.firstname} ${data?.middlename} ${data?.lastname}`}
			>
				<View style={{ ...styles.value, ...styles.checklistOptContainer }}>
					<ARDExportCheckListWithLabel
						label={"Yes"}
						checked={data?.medicationoption === "Yes"}
						styles={{ marginTop: 0 }}
					/>
					<ARDExportCheckListWithLabel
						label={"No"}
						checked={data?.medicationoption === "No"}
						styles={{ marginTop: 0 }}
					/>
				</View>
			</Row>
			<Row label="Does the Child Require Assistance With The Medication?">
				<View style={{ ...styles.value, ...styles.checklistOptContainer }}>
					<ARDExportCheckListWithLabel
						label={"Yes"}
						checked={data?.isrecassmedicationoption === "Yes"}
						styles={{ marginTop: 0 }}
					/>
					<ARDExportCheckListWithLabel
						label={"No"}
						checked={data?.isrecassmedicationoption === "No"}
						styles={{ marginTop: 0 }}
					/>
				</View>
			</Row>
			<View
				style={{
					...styles.tableRow,
					marginTop: "-1px",
					backgroundColor: "#ededed",
				}}
			>
				<Text
					style={{ fontSize: 9, padding: 2, paddingHorizontal: 3, width: 250 }}
				>
					Please Explain the Nature of the medication, frequency of usage and
					how it administered
				</Text>
			</View>
		</View>
	);
};

const Row = ({
	label = "",
	value,
	rowStyles,
	labelStyles,
	valueStyles,
	children,
}) => {
	return (
		<View style={{ ...styles.tableRow, ...rowStyles }}>
			<Text style={{ ...styles.label, ...labelStyles }}>{label}</Text>
			{children ? (
				<>{children}</>
			) : (
				<Text style={{ ...styles.value, ...valueStyles }}>: {value}</Text>
			)}
		</View>
	);
};

export default ARDExportMedication;
