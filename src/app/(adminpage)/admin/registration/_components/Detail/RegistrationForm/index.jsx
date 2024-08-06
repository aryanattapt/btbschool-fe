import ARDContentTitle from "../ContentTitle";
import ARDAttachment from "./Attachment";
import ARDParentSignature from "./Signature";
import ARDEducationBackgroundTable from "./Table/EducationBackground";
import ARDEmergencyContactTable from "./Table/EmergencyContact";
import ARDParentsGuardianDetailsTable from "./Table/ParentsGuardianDetails";
import ARDSiblingDetailsTable from "./Table/SiblingDetails";
import ARDStudentDetailsTable from "./Table/StudentDetails";

const ARDRegistrationForm = ({ data }) => {
	return (
		<div>
			<ARDContentTitle
				title={"REGISTRATION FORM"}
				subtitle={`School Year : ${data?.schoolyear}`}
			/>
			<div className="grid grid-cols-12 gap-x-20">
				<div className="col-span-6">
					<ARDStudentDetailsTable data={data} />
					<ARDEducationBackgroundTable data={data} />
				</div>
				<div className="col-span-6">
					<ARDParentsGuardianDetailsTable data={data} />
				</div>
				<div className="col-span-12">
					<ARDEmergencyContactTable data={data} />
					<ARDSiblingDetailsTable data={data} />
					<ARDParentSignature data={data} />
					<ARDAttachment attachments={data?.attachment} />
				</div>
			</div>
		</div>
	);
};

export default ARDRegistrationForm;
