import { dateShortDisplay } from "../../../../../../../../utils/date";
import ARDSignatureDisplay from "../../SignatureDisplay";

const ARDParentSignature = ({ data }) => {
	return (
		<div className="flex justify-between items-center mt-8">
			<div className="flex items-center gap-8">
				<p className="text-[#424a57]">Parent Signature : </p>
				<ARDSignatureDisplay src={data?.ttd} />
			</div>
			<p className="text-[#424a57]">
				Date : {dateShortDisplay(data?.registereddate)}
			</p>
		</div>
	);
};

export default ARDParentSignature;
