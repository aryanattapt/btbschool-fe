import { Page, StyleSheet, View } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
	page: {
		flexDirection: "row",
	},
	section: {
		margin: 10,
		padding: 25,
		flexGrow: 1,
	},
});

const ARDExportPDFPageContainer = ({ children }) => {
	return (
		<Page size="A4" style={styles.page}>
			<View style={styles.section}>{children}</View>
		</Page>
	);
};

export default ARDExportPDFPageContainer;
