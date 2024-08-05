import ARDContentTitle from "../ContentTitle";
import ARDHealthFormAgreement from "./Agreement";
import ARDHealthFormMedicalHistory from "./MedicalHistory";
import ARDHealthFormMedicationStatus from "./MedicationStatus";
import ARDHealthFormPersonalHealth from "./PersonalHealth";
import ARDHealthFormSpecificDisability from "./SpecificDisability";

const ARDHealthForm = ({ data }) => {
	return (
		<div>
			<ARDContentTitle title={"HEALTH FORM"} />
			<div className="mt-6 grid grid-cols-12 gap-x-20 ">
				<div className="col-span-12">
					<p className="font-semibold mb-2">Personal Health Information</p>
				</div>
				<div className="col-span-6">
					<ARDHealthFormPersonalHealth data={data} />
				</div>
				<div className="col-span-6">
					<ARDHealthFormMedicationStatus data={data} />
				</div>
				<div className="col-span-12">
					<div className="mt-6">
						<ARDHealthFormMedicalHistory data={data} />
					</div>
					<div className="mt-6">
						<ARDHealthFormSpecificDisability />
					</div>
					<div className="mt-6">
						<ARDHealthFormAgreement data={data} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ARDHealthForm;
