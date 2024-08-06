import { Button } from "flowbite-react";
import Link from "next/link";
import { IoMdDownload } from "react-icons/io";
import useExportExcel from "../../../../../../../hooks/useExportExcel";
import { dateDetailDisplay } from "../../../../../../../utils/date";

const temp = {
	_id: "66b0e74422bac999704edd61",
	address: "Jl. Jakarta",
	alergicoption: "a particular food item (e.g. shrim)",
	attachment: [
		{
			category: "studentregistration",
			fileMetadata: {
				"Content-Disposition": [
					'form-data; name="birthcertificate"; filename="PROPOSAL BTB 20240501.pdf"',
				],
				"Content-Type": ["application/pdf"],
			},
			fileName: "8952786b687b43b68ac41848d0da1ac0..pdf",
			fileSize: 249094,
			fileURL:
				"https://w6i8.c1.e2-7.dev/uploads/studentregistration/birthcertificate/8952786b687b43b68ac41848d0da1ac0..pdf",
			type: "birthcertificate",
		},
		{
			category: "studentregistration",
			fileMetadata: {
				"Content-Disposition": [
					'form-data; name="familycardattachment"; filename="PROPOSAL BTB 20240501.pdf"',
				],
				"Content-Type": ["application/pdf"],
			},
			fileName: "63dc5483897b410fa76707d2ce98337a..pdf",
			fileSize: 249094,
			fileURL:
				"https://w6i8.c1.e2-7.dev/uploads/studentregistration/familycardattachment/63dc5483897b410fa76707d2ce98337a..pdf",
			type: "familycardattachment",
		},
		{
			category: "studentregistration",
			fileMetadata: {
				"Content-Disposition": [
					'form-data; name="reportcardattachment"; filename="PROPOSAL BTB 20240501.pdf"',
				],
				"Content-Type": ["application/pdf"],
			},
			fileName: "490d4ff214c44084a82864eafe252bca..pdf",
			fileSize: 249094,
			fileURL:
				"https://w6i8.c1.e2-7.dev/uploads/studentregistration/reportcardattachment/490d4ff214c44084a82864eafe252bca..pdf",
			type: "reportcardattachment",
		},
	],
	birthdate: "2024-07-31T17:00:00.000Z",
	birthplace: "aceh",
	bloodgroup: "A",
	btbparentnamerec: "Juni",
	btbstudentgraderec: "6",
	btbstudentnamerec: "Juli",
	btbstudentphonehomerec: "+6281234567890",
	btbstudentphonemobilerec: "+6281234567890",
	doctoraddress: "Jl. Jakarta",
	doctorname: "Ajeng",
	doctorphone: "+6281234567890",
	email: "test@test.com",
	emergencycontactaddress: "Jl. Jakarta",
	emergencycontactname: "Udan",
	emergencycontactphoneno: "+6281234567890",
	emergencycontactrelaction: "Paman",
	fatherbirthdate: "2024-07-31T17:00:00.000Z",
	fatherbirthplace: "aceh",
	fatherbusinessAddress: "-",
	fathercompanyname: "-",
	fatheremail: "test@test.com",
	fatherfax: "+6281234567890",
	fathermaritalstatus: "Divorced",
	fathername: "Udin",
	fatheroccupation: "Wiraswasta",
	fatherphoneno: "+6281234567890",
	fathertelephone: "+6281234567890",
	firstname: "First Name",
	gender: "male",
	isrecassmedicationoption: "No",
	languagespoken: "Indonesia",
	lastname: "Last Name",
	limitationofphysical: "Yes",
	limitationofphysicalexplain: "-",
	medicalproblemoptions: ["asthma"],
	medicationoption: "No",
	middlename: "Middle Name",
	motherbirthdate: "2024-07-31T17:00:00.000Z",
	motherbirthplace: "aceh",
	motherbusinessAddress: "-",
	mothercompanyname: "-",
	motheremail: "test@test.com",
	motherfax: "+6281234567890",
	mothermaritalstatus: "Married",
	mothername: "Ulan",
	motheroccupation: "Ibu Rumah Tangga",
	motherphoneno: "+6281234567890",
	mothertelephone: "+6281234567890",
	musicinstrument: "Piano, Guitar",
	nationality: "Indonesia",
	naturemedication: "-",
	natureofallergy: "Alergi Udang",
	nextclass: "Grade 10",
	phoneno: "+6281234567890",
	previousschoolname: "SMP Test",
	recommendedoption: "Yes",
	registereddate: "2024-08-05T13:35:37.703Z",
	registrationcode: "PPD05082024203537",
	religion: "Islam",
	schoolyear: "2023-2024",
	siblinglist: [
		{
			age: "12",
			grade: "SD",
			name: "Andu",
			school: "SD Test",
		},
	],
	specificdisability: "-",
	status: "send",
	surgeryoperation: "Yes",
	surgeryoperationexplain: "-",
	ttd: "data:image/png;base64,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",
	updateddate: "2024-08-05T13:44:11.167Z",
	yearlevelprevschool: "2023",
};

const RegistrationTableActionBtn = (data) => {
	const onExportExcel = useExportExcel();

	const siblingExport = () => {
		const result = {};
		for (let i = 0; i < 5; i++) {
			result[`Siblings Name ${i + 1}`] = data?.siblinglist[i]?.name;
			result[`Siblings Age ${i + 1}`] = data?.siblinglist[i]?.age;
			result[`Siblings Grade ${i + 1}`] = data?.siblinglist[i]?.grade;
			result[`Siblings School ${i + 1}`] = data?.siblinglist[i]?.school;
		}
		console.log({ result });
		return result;
	};

	const onClickExport = () => {
		const container = {
			No: 1,
			"Registration Code": data?.registrationcode,
			"Registration Date": data?.registereddate,
			"Student ID": data?._id,
			NISN: data?.nisn,
			"Student Name": `${data?.firstname} ${data?.middlename} ${data?.lastname}`,
			"Place & Date of Birth": `${data?.birthplace}, ${dateDetailDisplay(
				data?.birthdate
			)}`,
			Nationality: data?.nationality,
			Religion: data?.religion,
			Gender: data?.gender,
			Address: data?.address,
			Telepon: data?.phoneno,
			Email: data?.email,
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
				data?.natureofallergy,
			"Please specify the nature of the allergy (doctor's certificate required)":
				"-",
			"Does your child suffer any limitation on physical activity?":
				data?.limitationofphysical,
			"Has your child had any surgery or operation?": data?.surgeryoperation,
			"Has your child had or contracted any of the following medical problems?":
				data?.medicalproblemoptions.join(", "),
			"Musical Instrument the Child Can Play": data?.musicinstrument,
			"Language(s) Spoken at Home": data?.languagespoken,
			"Previous School Name": data?.previousschoolname,
			"Year Level at Previous School": data?.yearlevelprevschool,
			"Class to which admission is sought": data?.nextclass,
			"Father's Name": data?.fathername,
			"Father Place & Date of Birth": `${
				data?.fatherbirthplace
			}, ${dateDetailDisplay(data?.fatherbirthdate)}`,
			Mobile: data?.fatherphoneno,
			Email: data?.fatheremail,
			"Marital Status": data?.fathermaritalstatus,
			Occupation: data?.fatheroccupation,
			"Conpany Name": data?.fathercompanyname,
			"Bussiness Address": data?.fatherbusinessAddress,
			Telp: data?.fathertelephone,
			Fax: data?.fatherfax,
			"Mother's Name": data?.mothername,
			"Mother Place & Date of Birth": `${
				data?.motherbirthplace
			}, ${dateDetailDisplay(data?.motherbirthdate)}`,
			Mobile: data?.motherphoneno,
			Email: data?.motheremail,
			"Marital Status": data?.mothermaritalstatus,
			Occupation: data?.motheroccupation,
			"Conpany Name": data?.mothercompanyname,
			"Bussiness Address": data?.motherbusinessAddress,
			Telp: data?.mothertelephone,
			Fax: data?.motherfax,
			"Emergency Name": data?.emergencycontactname,
			"Emergency Relationship to Student": data?.emergencycontactrelaction,
			"Emergency Telp": data?.emergencycontactphoneno,
			"Emergency Address": data?.emergencycontactaddress,
			...siblingExport(),
			// "Siblings Name 1": data?.,
			// "Siblings Age 1": data?.,
			// "Siblings Grade 1": data?.,
			// "Siblings School 1": data?.,
			// "Siblings Name 2": data?.,
			// "Siblings Age 2": data?.,
			// "Siblings Grade 2": data?.,
			// "Siblings School 2": data?.,
			// "Siblings Name 3": data?.,
			// "Siblings Age 3": data?.,
			// "Siblings Grade 3": data?.,
			// "Siblings School 3": data?.,
			// "Siblings Name 4": data?.,
			// "Siblings Age 4": data?.,
			// "Siblings Grade 4": data?.,
			// "Siblings School 4": data?.,
			// "Siblings Name 5": data?.,
			// "Siblings Age 5": data?.,
			// "Siblings Grade 5": data?.,
			// "Siblings School 5": data?.,
			"Recommended by someone ?": data?.recommendedoption,
			"Name of BTB Parent": data?.btbparentnamerec,
			"Name of BTB Student": data?.btbstudentnamerec,
			Grade: data?.btbstudentgraderec,
			"Phone No.": data?.btbstudentphonehomerec,
			Mobile: data?.btbstudentphonemobilerec,
		};
		onExportExcel(
			{ Sheet1: [container] },
			`${data?.firstname} ${data?.middlename} ${data?.lastname}`
		);
	};

	return (
		<div className="flex gap-2">
			<Button
				size="xs"
				className="text-white"
				style={{ background: "#3fbae5" }}
			>
				<IoMdDownload className="mr-2 h-4 w-4" />
				<p>PDF</p>
			</Button>
			<Button
				size="xs"
				className="text-white"
				style={{ background: "#3fbae5" }}
				onClick={onClickExport}
			>
				<IoMdDownload className="mr-2 h-4 w-4" />
				<p>Excel</p>
			</Button>
			<Button size={"xs"} color="warning">
				Admission
			</Button>
			<Link href={`./detail/${data["_id"]}`}>
				<Button size={"xs"} color="dark">
					Detail
				</Button>
			</Link>
		</div>
	);
};

export default RegistrationTableActionBtn;
