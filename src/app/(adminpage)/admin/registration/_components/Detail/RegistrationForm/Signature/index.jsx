import Image from "next/image";
import React from "react";
import ARDSignatureDisplay from "../../SignatureDisplay";

const ARDParentSignature = ({ data }) => {
	return (
		<div className="flex justify-between items-center mt-8">
			<div className="flex items-center gap-8">
				<p className="text-[#424a57]">Parent Signature : </p>
				<ARDSignatureDisplay src={data?.ttd} />
			</div>
			<p className="text-[#424a57]">Date : {data?.registereddate}</p>
		</div>
	);
};

export default ARDParentSignature;
