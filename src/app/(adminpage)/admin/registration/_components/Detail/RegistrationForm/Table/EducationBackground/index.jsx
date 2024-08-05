import React from "react";
import ARDTableRow from "../Row";
import ARDRegistrationFormTableTemplate from "../TableTemplate";

const ARDEducationBackgroundTable = ({ data }) => {
	const skeleton = {
		"Previous School Name": data?.previousschoolname,
		"Year level at Previous School": data?.yearlevelprevschool,
		"Class to which admission is sought": data?.nextclass,
	};

	return (
		<ARDRegistrationFormTableTemplate title={"Educational Background"}>
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

export default ARDEducationBackgroundTable;
