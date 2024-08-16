import Image from "next/image";
import React from "react";

const ARDAttachment = ({ attachments }) => {
	const skeleton = {
		"Copy of Birth Certificate": "birthcertificate",
		"Copy of Family Card": "familycardattachment",
		"Copy of Report Card From Previous School": "reportcardattachment",
	};

	console.log({ attachments });

	const findAttachment = (key) => {
		const attachment = attachments?.find((x) => x?.type === key);
		if (attachment)
			return (
				<a
					className="text-blue-500 hover:text-blue-800"
					href={attachment?.fileURL}
					target="_blank"
				>
					{attachment?.fileName}
				</a>
			);
		else return "";
	};

	return (
		<div className="mt-12">
			<p className="text-[#424a57] text-lg font-semibold">Attachment</p>
			<table>
				<tbody>
					{Object.keys(skeleton).map((key) => (
						<tr key={key}>
							<TD>{key}</TD>
							<TD>: {findAttachment(skeleton[key])}</TD>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

const TD = ({ children }) => {
	return <td className="text-[#424a57] text-xs pr-2">{children}</td>;
};

export default ARDAttachment;
