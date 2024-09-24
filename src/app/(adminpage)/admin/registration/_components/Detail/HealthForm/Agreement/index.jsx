import { FaRegCheckSquare } from "react-icons/fa";
import ARDHealthFormBox from "../Box";
import ARDHealthFormTableTemplate from "../TableTemplate";
import ARDSignatureDisplay from "../../SignatureDisplay";

const ARDHealthFormAgreement = ({ data }) => {
	return (
		<ARDHealthFormTableTemplate>
			<tr className="text-[#424a57]">
				<ARDHealthFormBox>
					<div>
						<FaRegCheckSquare className="inline-block " /> I declare that the
						information on this health form is true and correct, and I
						understand that the school reserves the right to vary or reverse any
						decision made on the basis of incorrect information, I will inform
						the school of any changes in the above details. In the event of an
						accident, if neither my nominated emergency contacts nor I can be
						notified, I authorize the school or whomever school authorizes, to
						initiate emergency medical procedures if the school deems theme
						neccesary.
					</div>
					<div className="flex justify-between mt-8 mb-4">
						<div className="flex items-center">
							<p className="mr-4">Parent Signature</p>
							<div className="bg-white px-12">
								<ARDSignatureDisplay src={data?.ttdpage3} />
							</div>
						</div>
						<p>Date: {data?.registereddate}</p>
					</div>
				</ARDHealthFormBox>
			</tr>
		</ARDHealthFormTableTemplate>
	);
};

export default ARDHealthFormAgreement;
