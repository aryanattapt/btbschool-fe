import React from "react";
import ARDHealthFormBox from "../Box";
import ARDHealthFormTableTemplate from "../TableTemplate";
import ARDHealthFormIconCheckbox from "../IconCheckbox";

const ARDHealthFormPersonalHealth = ({ data }) => {
	const skeleton = {
		"Student's name": `${data?.firstname} ${data?.middlename} ${data?.lastname}`,
		"Date of Birth": data?.birthdate,
		Gender: data?.gender,
		"Blood Group": data?.bloodgroup,
		"Father's Name": data?.fathername,
		"Mother's Name": data?.mothername,
		"Doctor's Name": data?.doctorname,
		"Doctor's Telephone": data?.doctorphone,
		"Doctor's Address": data?.doctoraddress,
	};

	const genderOpt = { Male: "male", Female: "female" };

	return (
		<ARDHealthFormTableTemplate>
			{Object.keys(skeleton).map((key) => (
				<tr key={key} className="text-[#424a57]">
					{key !== "Gender" ? (
						<>
							<ARDHealthFormBox classes={"min-w-56"}>{key}</ARDHealthFormBox>
							<ARDHealthFormBox full>: {skeleton[key]}</ARDHealthFormBox>
						</>
					) : (
						<>
							<ARDHealthFormBox classes={"min-w-56"}>{key}</ARDHealthFormBox>
							<ARDHealthFormBox full>
								<div className="flex">
									{Object.keys(genderOpt).map((res) => (
										<ARDHealthFormIconCheckbox
											classes={"w-[50%]"}
											flag={data?.gender}
											value={genderOpt[res]}
											key={res}
											label={res}
										/>
									))}
								</div>
							</ARDHealthFormBox>
						</>
					)}
				</tr>
			))}
		</ARDHealthFormTableTemplate>
	);
};

export default ARDHealthFormPersonalHealth;
