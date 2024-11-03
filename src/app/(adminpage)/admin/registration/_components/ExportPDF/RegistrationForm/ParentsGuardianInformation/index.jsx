import React from "react";
import { dateDetailDisplay } from "../../../../../../../../utils/date";
import PDFExportRow from "../../_components/PDFRowExport";
import ARDExportPDFTableSection from "../../_components/TableSection";
import { View } from "@react-pdf/renderer";

const ARDExportPDFParentAndGuardian = ({ data }) => {
	return (
		<View>
			<ARDExportPDFTableSection title={"Parents / Guardian Information"}>
				<PDFExportRow label="Father's Name" value={data?.fathername} />
				<PDFExportRow
					label="Place & Date of Birth"
					value={`${data?.fatherbirthplace}, ${dateDetailDisplay(
						data?.fatherbirthdate
					)}`}
				/>
				<PDFExportRow label="Mobile" value={data?.fatherphoneno} />
				<PDFExportRow label="Email" value={data?.fatheremail} />
				<PDFExportRow
					label="Marital Status"
					value={data?.fathermaritalstatus}
				/>
				<PDFExportRow label="Occupation" value={data?.fatheroccupation} />
				<PDFExportRow label="Company Name" value={data?.fathercompanyname} />
				<PDFExportRow
					label="Bussiness Address"
					value={data?.fatherbusinessAddress}
				/>
				<PDFExportRow label="Telp" value={data?.fathertelephone} />
				{/* <PDFExportRow label="Fax" value={data?.fatherfax} /> */}
				<PDFExportRow
					rowStyles={{ borderTop: "3px solid black" }}
					label="Mother's Name"
					value={data?.mothername}
				/>
				<PDFExportRow
					label="Place & Date of Birth"
					value={`${data?.motherbirthplace}, ${dateDetailDisplay(
						data?.motherbirthdate
					)}`}
				/>
				<PDFExportRow label="Mobile" value={data?.motherphoneno} />
				<PDFExportRow label="Email" value={data?.motheremail} />
				<PDFExportRow
					label="Marital Status"
					value={data?.mothermaritalstatus}
				/>
				<PDFExportRow label="Occupation" value={data?.motheroccupation} />
				<PDFExportRow label="Company Name" value={data?.mothercompanyname} />
				<PDFExportRow
					label="Bussiness Address"
					value={data?.motherbusinessAddress}
				/>
				<PDFExportRow label="Telp" value={data?.mothertelephone} />
				{/* <PDFExportRow label="Fax" value={data?.motherfax} /> */}
				{/* <PDFExportRow
					label="Language(s) spoken at Home"
					value={data?.languagespoken?.map((res) => res?.language).join(", ")}
				/> */}
			</ARDExportPDFTableSection>
		</View>
	);
};

export default ARDExportPDFParentAndGuardian;
