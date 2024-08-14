import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import ARDExportHealthForm from "./HealthForm";
import ARDExportRecommended from "./Recommended";
import ARDExportRegistrationForm from "./RegistrationForm";
import ARDExportTermAndCondition from "./TermAndCondition";

const styles = StyleSheet.create({
	page: {
		flexDirection: "row",
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1,
		backgroundColor: "black",
	},
	child: {
		backgroundColor: "red",
	},
});

const ARDExportPdf = ({ data }) => {
	return (
		<Document>
			<ARDExportRegistrationForm data={data} />
			<ARDExportTermAndCondition data={data} />
			<ARDExportHealthForm data={data} />
			<ARDExportRecommended data={data} />
		</Document>
	);
};

export default ARDExportPdf;
