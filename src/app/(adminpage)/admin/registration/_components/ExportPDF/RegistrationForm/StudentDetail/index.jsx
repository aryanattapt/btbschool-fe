import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";
import ARDExportPDFTableSection from "../../_components/TableSection";
import PDFExportRow from "../../_components/PDFRowExport";
import { dateDetailDisplay } from "../../../../../../../../utils/date";

const ARDExportPDFStudentDetail = ({ data }) => {
	return (
		<ARDExportPDFTableSection title={"Student Detail"}>
			<PDFExportRow label="First Name" value={data?.firstname} />
			<PDFExportRow label="Middle Name" value={data?.middlename} />
			<PDFExportRow label="Last Name" value={data?.lastname} />
			<PDFExportRow
				label="Place & Date of Birth"
				value={`${data?.birthplace}, ${dateDetailDisplay(data?.birthdate)}`}
			/>
			<PDFExportRow label="Nationality" value={data?.nationality} />
			<PDFExportRow label="Religion" value={data?.religion} />
			<PDFExportRow label="Gender" value={data?.gender} />
			<PDFExportRow label="Address" value={data?.address} />
			<PDFExportRow label="Telephone" value={data?.phoneno} />
			<PDFExportRow label="Email" value={data?.email} />
			{/* <PDFExportRow
				label="Musical Instrument the Child Can Play"
				value={data?.musicinstrument}
			/> */}
			<PDFExportRow
				label="Language(s) spoken at Home"
				value={data?.languagespoken?.map((res) => res?.language).join(", ")}
			/>
		</ARDExportPDFTableSection>
	);
};

export default ARDExportPDFStudentDetail;
