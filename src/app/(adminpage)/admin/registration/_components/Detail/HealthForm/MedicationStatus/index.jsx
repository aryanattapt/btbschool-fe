import React from "react";
import ARDHealthFormTableTemplate from "../TableTemplate";
import ARDHealthFormBox from "../Box";
import ARDHealthFormIconCheckbox from "../IconCheckbox";

const ARDHealthFormMedicationStatus = ({ data }) => {
	const skeleton = {
		"Is your Child on Medication?": data?.medicationoption,
		"Does the Child Require Assistance With The Medication?":
			data?.isrecassmedicationoption,
	};

	const yesNoOpt = ["Yes", "No"];

	return (
		<ARDHealthFormTableTemplate>
			{Object.keys(skeleton).map((key) => (
				<tr key={key} className="text-[#424a57]">
					<ARDHealthFormBox classes={"min-w-56"}>{key}</ARDHealthFormBox>
					<ARDHealthFormBox full>
						<div className="flex">
							{yesNoOpt.map((res) => (
								<ARDHealthFormIconCheckbox
									key={res}
									classes={"w-[50%]"}
									label={res}
									flag={skeleton[key]}
									value={res}
								/>
							))}
						</div>
					</ARDHealthFormBox>
				</tr>
			))}
			<tr className="text-[#424a57]">
				<ARDHealthFormBox colSpan={2}>
					Please Explain the Nature of the medication, frequency of usage and
					how it administered.
				</ARDHealthFormBox>
			</tr>
		</ARDHealthFormTableTemplate>
	);
};

export default ARDHealthFormMedicationStatus;
