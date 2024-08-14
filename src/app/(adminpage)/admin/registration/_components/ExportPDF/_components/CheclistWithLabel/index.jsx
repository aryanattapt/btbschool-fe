import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";
import ChecklistIcon from "../ChecklistIcon";

const ARDExportCheckListWithLabel = ({ label, styles, checked = false }) => {
	return (
		<View
			style={{
				display: "flex",
				flexDirection: "row",
				marginTop: 8,
				alignItems: "center",
				...styles,
			}}
		>
			<ChecklistIcon checked={checked} />
			<Text style={{ marginLeft: 4 }}>{label}</Text>
		</View>
	);
};

export default ARDExportCheckListWithLabel;
