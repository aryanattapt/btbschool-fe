import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
	signatureContainer: {
		textAlign: "cemter",
		fontSize: 9,
	},
});

const ARDExportPDFSignatureDisplay = ({ data, signature }) => {
	return (
		<View style={styles.signatureContainer}>
			<Text style={{ alignSelf: "center" }}>Parent Signature</Text>
			{
				signature &&
				<Image src={signature} style={{ width: 100, height: 100 }} />
			}
			<Text style={{ alignSelf: "center" }}>
				{data?.fathername?.toUpperCase()} / {data?.mothername?.toUpperCase()}
			</Text>
		</View>
	);
};

export default ARDExportPDFSignatureDisplay;
