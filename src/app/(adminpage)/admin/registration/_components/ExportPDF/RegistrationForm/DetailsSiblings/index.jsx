import { StyleSheet, Text, View } from "@react-pdf/renderer";

const defaultTableDataStyle = {
	backgroundColor: "#f3d08b",
	padding: 2,
	paddingHorizontal: 3,
};

const styles = StyleSheet.create({
	tableTitle: {
		fontSize: 10,
		marginBottom: 4,
	},
	tableRow: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		fontSize: 9,
		border: "1px solid black",
		marginTop: "-2px",
	},
	tdNo: {
		...defaultTableDataStyle,
		width: 50,
	},
	tdName: {
		...defaultTableDataStyle,
		borderLeft: "1px solid black",
		width: 400,
	},
	tdAge: {
		...defaultTableDataStyle,
		borderLeft: "1px solid black",
		textAlign: "center",
		width: 100,
	},
	tdGrade: {
		...defaultTableDataStyle,
		borderLeft: "1px solid black",
		textAlign: "center",
		width: 100,
	},
	tdSchool: {
		...defaultTableDataStyle,
		borderLeft: "1px solid black",
		width: 340,
	},
});

const ARDExportPDFDetailSiblings = ({ data }) => {
	return (
		<View>
			<Text style={{ ...styles.tableTitle, marginTop: 4 }}>
				Details of Siblings:
			</Text>
			<View style={styles.tableRow}>
				<Text style={{ ...styles.tdNo, textAlign: "center" }}>No</Text>
				<Text style={{ ...styles.tdName, textAlign: "center" }}>Name</Text>
				<Text style={styles.tdAge}>Age</Text>
				<Text style={styles.tdGrade}>Grade</Text>
				<Text style={{ ...styles.tdSchool, textAlign: "center" }}>School</Text>
			</View>
			{[...Array(5)].map((res, index) => (
				<View style={styles.tableRow}>
					<Text style={{ ...styles.tdNo, textAlign: "center" }}>
						{index + 1}
					</Text>
					<Text style={{ ...styles.tdName, textAlign: "center" }}>
						{data?.siblinglist?.[index]?.name}
					</Text>
					<Text style={styles.tdAge}>{data?.siblinglist?.[index]?.age}</Text>
					<Text style={styles.tdGrade}>
						{data?.siblinglist?.[index]?.grade}
					</Text>
					<Text style={{ ...styles.tdSchool, textAlign: "center" }}>
						{data?.siblinglist?.[index]?.school}
					</Text>
				</View>
			))}
		</View>
	);
};

export default ARDExportPDFDetailSiblings;
