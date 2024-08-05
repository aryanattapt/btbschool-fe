import React from "react";
import ARDHealthFormTableTemplate from "../TableTemplate";
import ARDHealthFormBox from "../Box";

const ARDHealthFormSpecificDisability = ({ data }) => {
	return (
		<ARDHealthFormTableTemplate>
			<tr className="text-[#424a57]">
				<ARDHealthFormBox>
					<p className="mb-6">
						Please explain whether you child has specific disability (emotional,
						cognitive) that could affect her / his ability to learn
					</p>
				</ARDHealthFormBox>
			</tr>
		</ARDHealthFormTableTemplate>
	);
};

export default ARDHealthFormSpecificDisability;
