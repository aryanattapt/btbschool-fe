import Swal from "sweetalert2";
import moment from "moment";

const gender = {
	male: "M",
	female: "F",
};

const yesNo = {
	Yes: "Y",
	No: "N",
};

const marital = {
	Married: "M",
};

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
		const result = datas.map((data, index) => {
			return [
				{
					No: index + 1,
					"Registration Code": data?.registrationcode,
					"Registration Date": moment(data?.registereddate).format(
						"DD/MM/YYYY HH:mm:ss"
					),
					"Student ID": "",
					NISN: "",
					"Student Name": `${data?.firstname} ${data?.middlename} ${data?.lastname}`,
					"Place & Date of Birth": `${data?.birthplace}, ${moment(
						data?.birthdate
					).format("YYYY-MM-DD")}`,
					Nationality: data?.nationality,
					Religion: data?.religion,
					Gender: gender[data?.gender],
					Address: data?.address,
					Telepon: data?.phoneno,
					Email: data?.email,
					"Blood Group": data?.bloodgroup,
					"Doctor's Name": data?.doctorname,
					"Doctor's Telephone": data?.doctorphone,
					"Doctor's Address": data?.doctoraddress,
					"Is your Child on Medication ?": yesNo[data?.medicationoption],
					"Does the Child Require Assistance With The Medication?":
						yesNo[data?.isrecassmedicationoption],
					"Please Explain the Nature of the medication, frequency of usage and how it administered":
						data?.naturemedication,
					"Does your child have an allergy to any following?":
						data?.alergicoption,
					"Please specify the nature of the allergy (doctor's certificate required)":
						data?.natureofallergy,
					"Does your child suffer any limitation on physical activity?":
						yesNo[data?.limitationofphysical],
					"Has your child had any surgery or operation?":
						yesNo[data?.surgeryoperation],
					"Has your child had or contracted any of the following medical problems?":
						data?.medicalproblemoptions?.join(", "),
					"Musical Instrument the Child Can Play": data?.musicinstrument,
					"Language(s) Spoken at Home": data?.languagespoken
						?.map((res) => res?.language)
						.join(", "),
					"Previous School Name": data?.previousschoolname,
					"Year Level at Previous School": data?.yearlevelprevschool,
					"Class to which admission is sought": data?.nextclass,
				},
				{
					"Father's Name": data?.fathername,
					"Place & Date of Birth": `${data?.fatherbirthplace}, ${moment(
						data?.fatherbirthdate
					).format("YYYY-MM-DD")}`,
					Mobile: data?.fatherphoneno,
					Email: data?.fatheremail,
					"Marital Status": marital[data?.fathermaritalstatus],
					Occupation: data?.fatheroccupation,
					"Conpany Name": data?.fathercompanyname,
					"Bussiness Address": data?.fatherbusinessAddress,
					Telp: data?.fathertelephone,
					Fax: data?.fatherfax,
				},
				{
					"Mother's Name": data?.mothername,
					"Place & Date of Birth": `${data?.motherbirthplace}, ${moment(
						data?.motherbirthdate
					).format("YYYY-MM-DD")}`,
					Mobile: data?.motherphoneno,
					Email: data?.motheremail,
					"Marital Status": marital[data?.mothermaritalstatus],
					Occupation: data?.motheroccupation,
					"Conpany Name": data?.mothercompanyname,
					"Bussiness Address": data?.motherbusinessAddress,
					Telp: data?.mothertelephone,
					Fax: data?.motherfax,
				},
				{
					"Emergency Name": data?.emergencycontactname,
					"Emergency Relationship to Student": data?.emergencycontactrelaction,
					"Emergency Telp": data?.emergencycontactphoneno,
					"Emergency Address": data?.emergencycontactaddress,
					...siblingExport(data),
					"Recommended by someone ?": yesNo[data?.recommendedoption],
					"Name of BTB Parent": data?.btbparentnamerec,
					"Name of BTB Student": data?.btbstudentnamerec,
					Grade: data?.btbstudentgraderec,
					"Phone No.": data?.btbstudentphonehomerec,
					Mobile: data?.btbstudentphonemobilerec,
				},
			];
		});
		return result;
	} else {
		return Swal.fire("Error", "Data to export is empty", "error");
	}
};
