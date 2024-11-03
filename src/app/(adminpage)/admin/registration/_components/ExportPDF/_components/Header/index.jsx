import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";
import { NavbarPayload } from "../../../../../../../../../data";

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
	imageContainer: {
		display: "flex",
		alignItems: "center",
	},
	imageStyle: {
		width: "50%",
	},
});

const ARDExportPDFHeader = ({ title, subtitle }) => {
	return (
		<>
			<View style={styles.imageContainer}>
				<View style={styles.imageStyle}>
					<Image
						src={NavbarPayload.genericlogourl}
						// style={{
						// 	width: 250, // Set the desired width
						// 	height: 30, // Set the desired height
						// 	// objectFit: "cover", // Options: 'cover', 'contain', or 'fill'
						// }}
					/>
				</View>
			</View>
			<View style={styles.titleSection}>
				<Text style={styles.title}>{title}</Text>
				{subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
			</View>
		</>
	);
};

export default ARDExportPDFHeader;
