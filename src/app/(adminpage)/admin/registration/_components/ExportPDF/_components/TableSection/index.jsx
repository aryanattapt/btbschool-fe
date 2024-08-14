import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
	sectionTable: {
		marginTop: 12,
	},
	tableTitle: {
		fontSize: 10,
		marginBottom: 4,
	},
});

const ARDExportPDFTableSection = ({ title, children }) => {
	return (
		<View style={styles.sectionTable}>
			{title && <Text style={styles.tableTitle}>{title}</Text>}
			{children}
		</View>
	);
};

export default ARDExportPDFTableSection;
