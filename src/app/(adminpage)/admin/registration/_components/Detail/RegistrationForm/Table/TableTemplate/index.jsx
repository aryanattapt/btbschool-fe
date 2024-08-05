import React from "react";

const ARDRegistrationFormTableTemplate = ({ title, children, head }) => {
	return (
		<div className="mt-6">
			<p className="font-semibold mb-2">{title}</p>
			<table>
				{head}
				<tbody>{children}</tbody>
			</table>
		</div>
	);
};

export default ARDRegistrationFormTableTemplate;
