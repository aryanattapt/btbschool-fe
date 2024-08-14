import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";
import ARDExportCheckListWithLabel from "../../_components/CheclistWithLabel";
import ChecklistIcon from "../../_components/ChecklistIcon";
import ARDExportPDFSignatureDisplay from "../../_components/SignatureDisplay";
import { dateShortDisplay } from "../../../../../../../../utils/date";
const styles = StyleSheet.create({
	container: {
		fontSize: 9,
		width: "100%",
	},
	tableRow: {
		padding: 2,
		backgroundColor: "#ededed",
		paddingHorizontal: 3,
		width: "100%",
		border: "1px solid black",
		marginTop: "-1px",
	},
});

const ARDExportMedicalHistory = ({ data }) => {
	const allergyOpt = [
		"a particular food item (e.g. shrim)",
		"insect sting",
		"penicillin",
		"other",
	];

	const yesNoOpt = [
		{ label: "No", value: "No" },
		{ label: "Yes, please explain", value: "Yes" },
	];

	const medicalOpt = [
		[
			"Asthma",
			"Eczema",
			"Convulsions",
			"Chicken pox",
			"German measles",
			"Heart problems",
			"Tubercolosis",
		],
		[
			"Scarlet fever",
			"Mumps",
			"Epilepsy",
			"Measles",
			"Diabetes",
			"Nightmares",
			"Nosebleeds",
		],
		[
			"HIV",
			"Autism",
			"Whooping cough",
			"Rhemuatic fever",
			"Visual / Eye",
			"Kidney / Urinary infection",
			"Frequent headaches",
		],
		[
			"Hearing difficulties",
			"Persisten ear infections",
			"Persisten chest infections",
			"Attention Deficit Syndrome (ADT)",
		],
	];

	return (
		<View style={styles.container}>
			<View style={{ ...styles.tableRow, marginTop: 8 }}>
				<Text>Does your child have an allergy to any following?</Text>
				<View style={{ display: "flex", flexDirection: "row", columnGap: 24 }}>
					{allergyOpt.map((res) => (
						<ARDExportCheckListWithLabel
							styles={{ marginVertical: 4 }}
							key={res}
							label={res}
							checked={data?.natureofallergy === res}
						/>
					))}
				</View>
				<Text>
					Please specify the nature of the allergy (doctor's
					certificaterequired)
				</Text>
			</View>
			<View style={{ ...styles.tableRow }}>
				<Text>Does your child suffer any limitation on physical activity?</Text>
				<View style={{ display: "flex", flexDirection: "row", columnGap: 24 }}>
					{yesNoOpt.map((res) => (
						<ARDExportCheckListWithLabel
							styles={{ marginVertical: 4 }}
							key={res.value}
							label={res.label}
							checked={data?.limitationofphysical === res.value}
						/>
					))}
				</View>
				<Text> Has your child had any surgery or operation?</Text>
				<View style={{ display: "flex", flexDirection: "row", columnGap: 24 }}>
					{yesNoOpt.map((res) => (
						<ARDExportCheckListWithLabel
							styles={{ marginVertical: 4 }}
							key={res.value}
							label={res.label}
							checked={data?.limitationofphysical === res.value}
						/>
					))}
				</View>
				<Text>
					Has your child had or contracted any of the following medical
					problems?
				</Text>
				<View style={{ display: "flex", flexDirection: "row", columnGap: 24 }}>
					{medicalOpt.map((datas, index) => (
						<View key={index}>
							{datas.map((res) => (
								<ARDExportCheckListWithLabel
									key={res}
									label={res}
									checked={data?.medicalproblemoptions.find(
										(x) => x === res.toLowerCase()
									)}
								/>
							))}
						</View>
					))}
				</View>
			</View>
			<View style={{ ...styles.tableRow, marginTop: 8 }}>
				<Text>
					Please explain whether you child has specific disability (emotional,
					cognitive) that could affect her/ his abitity to learn.
				</Text>
				<Text></Text>
			</View>
			<View style={{ ...styles.tableRow, marginTop: 8 }}>
				<View style={{ display: "flex", flexDirection: "row" }}>
					<View style={{ marginRight: 4 }}>
						<ChecklistIcon checked />
					</View>
					<Text style={{ width: "100%" }}>
						I declare that the information on this health form is true and
						correct, and I understand that the school reserves the right to vary
						or reverse any decision made on the basis of incorrect information.
						I will inform the school of any changes in the above details. ln the
						event of an accident, if neither my nominated emergency contacts nor
						I can be notified, I authorize the school or whomever school
						authorizes, to initiate emergency medical procedures if the school
						deems them necessary.
					</Text>
				</View>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						marginTop: 8,
					}}
				>
					<ARDExportPDFSignatureDisplay data={data} />
					<Text>Date : {dateShortDisplay(data?.registereddate)}</Text>
				</View>
			</View>
		</View>
	);
};

export default ARDExportMedicalHistory;
