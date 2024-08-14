import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

const defaultTableDataStyle = {
	backgroundColor: "#f3d08b",
	padding: 2,
	paddingHorizontal: 3,
};

const styles = StyleSheet.create({
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

const PDFRowExport = ({
	label = "",
	value,
	rowStyles,
	labelStyles,
	valueStyles,
}) => {
	return (
		<View style={{ ...styles.tableRow, ...rowStyles }}>
			<Text style={{ ...styles.label, ...labelStyles }}>{label}</Text>
			<Text style={{ ...styles.value, ...valueStyles }}>: {value}</Text>
		</View>
	);
};

export default PDFRowExport;
