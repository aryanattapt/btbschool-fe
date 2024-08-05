import React from "react";
import ARDTableRow from "../Row";
import ARDRegistrationFormTableTemplate from "../TableTemplate";

const ARDSiblingDetailsTable = ({ data }) => {
	const skeleton = {
		Name: data?.emergencycontactname,
		"Relationship to Student": data?.emergencycontactrelaction,
		"Telephone Contact Number": data?.emergencycontactphoneno,
		Address: data?.emergencycontactaddress,
	};

	const head = ["No. ", "Name", "Age", "Grade", "School"];

	return (
		<ARDRegistrationFormTableTemplate
			title={"Details of Siblings"}
			head={
				<thead>
					<tr>
						{head.map((res, index) => (
							<TD classes={"font-bold"} key={index}>
								{res}
							</TD>
						))}
					</tr>
				</thead>
			}
		>
			{data?.siblinglist?.length > 0 ? (
				<>
					{data.siblinglist.map((res, index) => (
						<TRDisplay key={index} no={index + 1} data={res} />
					))}
				</>
			) : (
				<>
					<TRDisplay no={1} />
				</>
			)}
		</ARDRegistrationFormTableTemplate>
	);
};

const TRDisplay = ({ no, data }) => {
	return (
		<tr>
			<TD classes={`min-w-36`}>{no}.</TD>
			<TD classes={`w-full`}>{data?.name || "-"}</TD>
			<TD classes={`min-w-36`}>{data?.age || "-"}</TD>
			<TD classes={`min-w-36`}>{data?.grade || "-"}</TD>
			<TD classes={`min-w-96`}>{data?.school || "-"}</TD>
		</tr>
	);
};

const TD = ({ children, classes }) => {
	return (
		<td className={`p-2 border-black border bg-[#f3d08b] text-sm ${classes}`}>
			{children}
		</td>
	);
};

export default ARDSiblingDetailsTable;
