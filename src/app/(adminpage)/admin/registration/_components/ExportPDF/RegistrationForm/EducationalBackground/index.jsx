import React from "react";
import ARDExportPDFTableSection from "../../_components/TableSection";
import PDFRowExport from "../../_components/PDFRowExport";

const ARDExportPDFEducationalBackground = ({ data }) => {
	return (
		<ARDExportPDFTableSection title={"Educational Background"}>
			<PDFRowExport
				label="Previous School Name"
				value={data?.previousschoolname}
			/>
			<PDFRowExport
				label="Year level at Previous School"
				value={data?.yearlevelprevschool}
			/>
			<PDFRowExport
				label="Class to which admission is sought"
				value={data?.nextclass}
			/>
		</ARDExportPDFTableSection>
	);
};

export default ARDExportPDFEducationalBackground;
