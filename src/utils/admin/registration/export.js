import Swal from "sweetalert2";
import { dateDetailDisplay } from "../../date";

const siblingExport = (data) => {
	const result = {};
	for (let i = 0; i < 5; i++) {
		result[`Siblings Name ${i + 1}`] = data?.siblinglist?.[i]?.name;
		result[`Siblings Age ${i + 1}`] = data?.siblinglist?.[i]?.age;
		result[`Siblings Grade ${i + 1}`] = data?.siblinglist?.[i]?.grade;
		result[`Siblings School ${i + 1}`] = data?.siblinglist?.[i]?.school;
	}
	return result;
};

export const admRegisManagerExportObjectBuilder = (datas = []) => {
	if (datas?.length > 0) {
		const result = datas.map((data, index) => ({
			"No": index + 1,
			"Registration Code": data?.registrationcode,
			"Registration Date": data?.registereddate,
			"Student ID": "",
			"NISN": "",
			"Student Name": `${data?.firstname} ${data?.middlename} ${data?.lastname}`,
			"Place & Date of Birth": `${data?.birthplace}, ${dateDetailDisplay(
				data?.birthdate
			)}`,
			"Nationality": data?.nationality,
			"Religion": data?.religion,
			"Gender": data?.gender,
			"Address": data?.address,
			"Telepon": data?.phoneno,
			"Email": data?.email,
			"Blood Group": data?.bloodgroup,
			"Doctor's Name": data?.doctorname,
			"Doctor's Telephone": data?.doctorphone,
			"Doctor's Address": data?.doctoraddress,
			"Is your Child on Medication ?": data?.medicationoption,
			"Does the Child Require Assistance With The Medication?":
				data?.isrecassmedicationoption,
			"Please Explain the Nature of the medication, frequency of usage and how it administered":
				data?.naturemedication,
			"Does your child have an allergy to any following?":
				data?.alergicoption,
			"Please specify the nature of the allergy (doctor's certificate required)":
				data?.natureofallergy,
			"Does your child suffer any limitation on physical activity?":
				data?.limitationofphysical,
			"Has your child had any surgery or operation?": data?.surgeryoperation,
			"Has your child had or contracted any of the following medical problems?":
				data?.medicalproblemoptions?.join(", "),
			"Musical Instrument the Child Can Play": data?.musicinstrument,
			"Language(s) Spoken at Home": data?.languagespoken,
			"Previous School Name": data?.previousschoolname,
			"Year Level at Previous School": data?.yearlevelprevschool,
			"Class to which admission is sought": data?.nextclass,
			"Father's Name": data?.fathername,
			"Father Place & Date of Birth": `${
				data?.fatherbirthplace
			}, ${dateDetailDisplay(data?.fatherbirthdate)}`,
			"Father's Mobile": data?.fatherphoneno,
			"Father's Email": data?.fatheremail,
			"Father's Marital Status": data?.fathermaritalstatus,
			"Father's Occupation": data?.fatheroccupation,
			"Father's Conpany Name": data?.fathercompanyname,
			"Father's Bussiness Address": data?.fatherbusinessAddress,
			"Father's Telp": data?.fathertelephone,
			"Father's Fax": data?.fatherfax,
			"Mother's Name": data?.mothername,
			"Mother Place & Date of Birth": `${
				data?.motherbirthplace
			}, ${dateDetailDisplay(data?.motherbirthdate)}`,
			"Mother's Mobile": data?.motherphoneno,
			"Mother's Email": data?.motheremail,
			"Mother's Marital Status": data?.mothermaritalstatus,
			"Mother's Occupation": data?.motheroccupation,
			"Mother's Conpany Name": data?.mothercompanyname,
			"Mother's Bussiness Address": data?.motherbusinessAddress,
			"Mother's Telp": data?.mothertelephone,
			"Mother's Fax": data?.motherfax,
			"Emergency Name": data?.emergencycontactname,
			"Emergency Relationship to Student": data?.emergencycontactrelaction,
			"Emergency Telp": data?.emergencycontactphoneno,
			"Emergency Address": data?.emergencycontactaddress,
			...siblingExport(data),
			"Recommended by someone ?": data?.recommendedoption,
			"Name of BTB Parent": data?.btbparentnamerec,
			"Name of BTB Student": data?.btbstudentnamerec,
			"Grade": data?.btbstudentgraderec,
			"Phone No.": data?.btbstudentphonehomerec,
			"Mobile": data?.btbstudentphonemobilerec,
		}));
		return result;
	} else {
		return Swal.fire("Error", "Data to export is empty", "error");
	}
};