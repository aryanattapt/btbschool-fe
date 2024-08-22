import React from "react";
import {
	Page,
	Text,
	Image,
	Document,
	StyleSheet,
	View,
} from "@react-pdf/renderer";
import ARDRegistrationForm from "../RegistrationForm";
import ARDTermAndCondition from "../TermAndCondition";
import ARDHealthForm from "../HealthForm";
import ARDRecommended from "../Recommended";
import {NavbarPayload} from '../../../../../../../../data'

const styles = StyleSheet.create({
	body: {
		paddingTop: 35,
		paddingBottom: 65,
		paddingHorizontal: 35,
	},
	title: {
		fontSize: 24,
		textAlign: "center",
	},
	text: {
		margin: 12,
		fontSize: 14,
		textAlign: "justify",
	},
	image: {
		marginVertical: 15,
		marginHorizontal: 100,
	},
	header: {
		fontSize: 12,
		marginBottom: 20,
		textAlign: "center",
		color: "grey",
		fontFamily: "AntonFamily",
	},
	pageNumber: {
		position: "absolute",
		fontSize: 12,
		bottom: 30,
		left: 0,
		right: 0,
		textAlign: "center",
		color: "grey",
		fontFamily: "AntonFamily",
	},
	page: {
		flexDirection: "row",
		backgroundColor: "#E4E4E4",
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1,
	},
});

const PDFFile = ({ data, activeSection }) => {
	return (
		<Document>
			<Page size="A4">
				<View>
					<div className="flex flex-col items-center">
						<Image
							alt=""
							// src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/Logo BTB 1.1-01.png"
							src={NavbarPayload.genericlogourl}
							className="h-32 w-fit"
						/>
					</div>
					{data && (
						<>
							{/* {activeSection === "Registration Form" && (
							<ARDRegistrationForm data={data} />
						)} */}
							{activeSection === "Peraturan dan Persyaratan" && (
								<ARDTermAndCondition data={data} />
							)}
							{activeSection === "Health Form" && <ARDHealthForm data={data} />}
							{activeSection === "Recommended" && (
								<ARDRecommended data={data} />
							)}
						</>
					)}
				</View>
			</Page>
		</Document>
	);
};

export default PDFFile;
