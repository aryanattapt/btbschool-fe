import React from "react";
import { FaRegCheckSquare, FaRegSquare } from "react-icons/fa";
import ARDSignatureDisplay from "../SignatureDisplay";
import { dateDetailDisplay } from "../../../../../../../utils/date";

const ARDRecommended = ({ data }) => {
	return (
		<div className="p-2 border border-black w-[60%] text-[#424a57]">
			<p className="text-end">Date: {dateDetailDisplay(data?.registereddate)}</p>
			<p>Are you recommended by someone ?</p>
			<div className="my-2">
				<CheckboxIcon
					label={"No"}
					flag={"No"}
					value={data?.recommendedoption}
					classes={"mb-1"}
				/>
				<CheckboxIcon
					label={"Yes"}
					flag={"Yes"}
					value={data?.recommendedoption}
				/>
			</div>
			<div className="ml-16">
				<Label label={"Name of BTB Parent"}>{data?.btbparentnamerec}</Label>
				<Label label={"Name of BTB Student"}>{data?.btbstudentnamerec}</Label>
				<Label label={"Grade"}>{data?.btbstudentgraderec}</Label>
				<div className="flex justify-between">
					<Label label={"Phone No."}>{data?.btbstudentphonehomerec}</Label>
					<p>
						home/ <br />
						office
					</p>
				</div>
				<div className="flex justify-between">
					<Label label={"Mobile Phone No."}>
						{data?.btbstudentphonemobilerec}
					</Label>
					<p>mobile</p>
				</div>
				<Signature data={data} />
			</div>
		</div>
	);
};

const CheckboxIcon = ({ label, flag, value, classes }) => {
	return (
		<div className={`flex items-center ${classes}`}>
			<div className="mr-12">
				{flag === value ? <FaRegCheckSquare /> : <FaRegSquare />}
			</div>
			<p>{label}</p>
		</div>
	);
};

const Label = ({ children, label }) => {
	return (
		<div className="flex">
			<p className="w-52">{label}</p>
			<p>
				: <span>{children}</span>
			</p>
		</div>
	);
};

const Signature = ({ data }) => {
	return (
		<div className="flex mt-4">
			<p className="min-w-52">Admsn/Mrktg.</p>
			<div className="flex flex-col w-full items-center">
				<p>Parents of applicant</p>
				<ARDSignatureDisplay src={data?.ttdpage4} />
			</div>
		</div>
	);
};

export default ARDRecommended;
