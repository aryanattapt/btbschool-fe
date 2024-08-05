import React from "react";
import ARDTableRow from "../Row";
import ARDRegistrationFormTableTemplate from "../TableTemplate";

const ARDParentsGuardianDetailsTable = ({ data }) => {
	const fatherSkeleton = {
		"Father's Name": data?.fathername,
		"Place & Date of Birth": `${data?.fatherbirthplace}, ${data?.fatherbirthdate}`,
		Mobile: data?.fatherphoneno,
		Email: data?.fatheremail,
		"Marital Status": data?.fathermaritalstatus,
		Occupation: data?.fatheroccupation,
		"Company Name": data?.fathercompanyname,
		"Bussiness Address": data?.fatherbusinessaddress,
		Telp: data?.fathertelephone,
		Fax: data?.fatherfax,
	};

	const motherSkeleton = {
		"Mother's Name": data?.mothername,
		"Place & Date of Birth": `${data?.motherbirthplace}, ${data?.motherbirthdate}`,
		Mobile: data?.motherphoneno,
		Email: data?.motheremail,
		"Marital Status": data?.mothermaritalstatus,
		Occupation: data?.motheroccupation,
		"Company Name": data?.mothercompanyname,
		"Bussiness Address": data?.motherbusinessaddress,
		Telp: data?.mothertelephone,
		Fax: data?.motherfax,
	};

	return (
		<ARDRegistrationFormTableTemplate title={"Parents / Guardian information"}>
			{Object.keys(fatherSkeleton).map((key, index) => (
				<ARDTableRow
					key={index}
					breakRow={key === "Break"}
					label={key}
					data={fatherSkeleton[key]}
				/>
			))}
			<ARDTableRow breakRow />
			{Object.keys(motherSkeleton).map((key, index) => (
				<ARDTableRow
					key={index}
					breakRow={key === "Break"}
					label={key}
					data={motherSkeleton[key]}
				/>
			))}
		</ARDRegistrationFormTableTemplate>
	);
};

export default ARDParentsGuardianDetailsTable;
