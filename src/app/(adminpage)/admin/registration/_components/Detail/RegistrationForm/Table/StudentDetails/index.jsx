import React from "react";
import ARDTableRow from "../Row";
import ARDRegistrationFormTableTemplate from "../TableTemplate";
import { dateDetailDisplay } from "../../../../../../../../../utils/date";

const ARDStudentDetailsTable = ({ data }) => {
	const skeleton = {
		"First Name": data?.firstname,
		"Middle Name": data?.middlename,
		"Last Name": data?.lastname,
		"Place & Date of Birth": `${data?.birthplace}, ${dateDetailDisplay(
			data?.birthdate
		)}`,
		Nationality: data?.nationality,
		Religion: data?.religion,
		Gender: data?.gender,
		Address: data?.address,
		Telephone: data?.phoneno,
		Email: data?.email,
		"Musical Instrument the Child Can Play": data?.musicinstrument,
		"Language(s) spken at Home": data?.languagespoken,
	};

	return (
		<ARDRegistrationFormTableTemplate title={"Student Details"}>
			{Object.keys(skeleton).map((key, index) => (
				<ARDTableRow label={key} key={index} data={skeleton[key]} />
			))}
		</ARDRegistrationFormTableTemplate>
	);
};

export default ARDStudentDetailsTable;
