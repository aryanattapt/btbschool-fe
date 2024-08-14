import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
	titleSection: {
		textAlign: "center",
	},
	title: {
		fontSize: 13,
	},
	subtitle: {
		fontSize: 11,
	},
});

const ARDExportPDFHeader = ({ title, subtitle }) => {
	return (
		<>
			<Image
				src={
					"https://w6i8.c1.e2-7.dev/assets/btbschool/images/Logo BTB 1.1-01.png"
				}
			/>
			<View style={styles.titleSection}>
				<Text style={styles.title}>{title}</Text>
				{subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
			</View>
		</>
	);
};

export default ARDExportPDFHeader;
