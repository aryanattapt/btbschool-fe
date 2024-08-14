import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

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
		width: 100,
	},
	value: {
		...defaultTableDataStyle,
		width: 161,
		// width: 150,
	},
});

const ARDExportPersonalHealth = ({ data }) => {
	return (
		<View>
			<Text style={styles.tableTitle}>Personal Health Information</Text>
			<Row
				label="Student's name"
				value={`${data?.firstname} ${data?.middlename} ${data?.lastname}`}
			/>
			<Row label="Date of Birth" value={data?.birthdate} />
			<Row label="Gender" value={data?.gender} />
			<Row label="Blood Group" value={data?.bloodgroup} />
			<Row label="Father's Name" value={data?.fathername} />
			<Row label="Mother's Name" value={data?.mothername} />
			<Row label="Doctor's Name" value={data?.doctorname} />
			<Row label="Doctor's Telephone" value={data?.doctorphone} />
			<Row label="Doctor's Address" value={data?.doctoraddress} />
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

export default ARDExportPersonalHealth;
