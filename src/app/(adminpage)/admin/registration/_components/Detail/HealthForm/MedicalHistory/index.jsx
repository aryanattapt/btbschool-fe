import React from "react";
import ARDHealthFormTableTemplate from "../TableTemplate";
import ARDHealthFormBox from "../Box";
import ARDHealthFormIconCheckbox from "../IconCheckbox";

const ARDHealthFormMedicalHistory = ({ data }) => {
	const allergyOpt = [
		"a particular food item (e.g. shrim)",
		"insect sting",
		"penicillin",
		"other",
	];

	const noYesOpt = ["No", "Yes"];

	const medicalOpt = [
		[
			"Asthma",
			"Eczema",
			"Convulsions",
			"Chicken pox",
			"German measles",
			"Heart problems",
			"Tubercolosis",
		],
		[
			"Scarlet fever",
			"Mumps",
			"Epilepsy",
			"Measles",
			"Diabetes",
			"Nightmares",
			"Nosebleeds",
		],
		[
			"HIV",
			"Autism",
			"Whooping cough",
			"Rhemuatic fever",
			"Visual / Eye",
			"Kidney / Urinary infection",
			"Frequent headaches",
		],
		[
			"Hearing difficulties",
			"Persisten ear infections",
			"Persisten chest infections",
			"Attention Deficit Syndrome (ADT)",
		],
	];

	const checkMedicalProblems = (prob, medicalOpt) => {
		if (medicalOpt.find((x) => x === prob.toLowerCase())) return true;
		return false;
	};

	return (
		<ARDHealthFormTableTemplate>
			<tr className="text-[#424a57]">
				<ARDHealthFormBox>
					<p>Does your child have an allergy to any following?</p>
					<div className="flex gap-6 my-2">
						{allergyOpt.map((res) => (
							<ARDHealthFormIconCheckbox
								key={res}
								value={data?.alergicoption}
								flag={res}
								label={res}
							/>
						))}
					</div>
					<p>
						Please specify the nature of the allergy (doctor's certificate
						required)
					</p>
					<p>Alergi udang / shrimp</p>
				</ARDHealthFormBox>
			</tr>
			<tr className="text-[#424a57]">
				<ARDHealthFormBox>
					<p>Does your child suffer any limitation on physical activity?</p>
					<div className="flex gap-8">
						{noYesOpt.map((res) => (
							<ARDHealthFormIconCheckbox
								key={res}
								value={data?.limitationofphysical}
								flag={res}
								label={res !== "Yes" ? res : `Yes, please explain`}
								classes={"mb-2"}
							/>
						))}
					</div>
					<p>Has your child had any surgery or operation?</p>
					<div className="flex gap-8">
						{noYesOpt.map((res) => (
							<ARDHealthFormIconCheckbox
								key={res}
								value={data?.surgeryoperation}
								flag={res}
								label={res !== "Yes" ? res : `Yes, please explain`}
								classes={"mb-6"}
							/>
						))}
					</div>
					<p>
						Has your child had or contracted any of the following medical
						problems?
					</p>
					<div className="flex gap-12">
						{medicalOpt.map((list) => (
							<div>
								{list.map((res) => (
									<div className="mt-1">
										<ARDHealthFormIconCheckbox
											label={res}
											customValidation={() =>
												checkMedicalProblems(res, data?.medicalproblemoptions)
											}
											// flag={}
										/>
									</div>
								))}
							</div>
						))}
					</div>
				</ARDHealthFormBox>
			</tr>
		</ARDHealthFormTableTemplate>
	);
};

export default ARDHealthFormMedicalHistory;
