import React from "react";
import ARDTableRow from "../Row";
import ARDRegistrationFormTableTemplate from "../TableTemplate";

const ARDEmergencyContactTable = ({ data }) => {
	const skeleton = {
		Name: data?.emergencycontactname,
		"Relationship to Student": data?.emergencycontactrelaction,
		"Telephone Contact Number": data?.emergencycontactphoneno,
		Address: data?.emergencycontactaddress,
	};

	return (
		<ARDRegistrationFormTableTemplate
			title={"Emergency Contact Information ( Other than Parents )"}
		>
			{Object.keys(skeleton).map((key, index) => (
				<ARDTableRow
					key={index}
					breakRow={key === "Break"}
					label={key}
					data={skeleton[key]}
				/>
			))}
		</ARDRegistrationFormTableTemplate>
	);
};

export default ARDEmergencyContactTable;
