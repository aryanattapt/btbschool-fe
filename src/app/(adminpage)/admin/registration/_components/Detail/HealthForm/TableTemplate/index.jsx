import React from "react";

const ARDHealthFormTableTemplate = ({ children }) => {
	return (
		<div>
			<table className="w-full">
				<tbody>{children}</tbody>
			</table>
		</div>
	);
};

export default ARDHealthFormTableTemplate;
