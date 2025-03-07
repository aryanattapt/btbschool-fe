"use client";
import SignaturePad from "../../../_components/signaturepad";
import AttachmentForm from "./attachment.form";
import DetailOfSiblingForm from "./detailofsibling.form";
import EducationalBackgroundForm from "./educationalbackgroundform";
import EmergencyContactForm from "./emergencycontactform";
import MedicalProblemForm from "./medicalproblem.form";
import ParentsInformationForm from "./parentinformation.form";
import PersonalHealthInformationForm from "./personalhealthinformation.form";
import RecomendedForm from "./recomended.form";
import SchoolInformationForm from "./schoolinformationform";
import StudentDetailForm from "./studentdetailform";
import DraftNoForm from "./draft.form";
import RulesRegistration from "./rulesregitration";
import { useEffect, useRef, useState } from "react";
import { Button, Label, Radio, Spinner, TextInput } from "flowbite-react";
import { UploadAttachment } from "../../../../../services/attachment.service";
import {
  GetDraftStudentRegistration,
  SubmitStudentRegistration,
  ValidateStudentRegistration,
} from "../../../../../services/onlineregistration.service";
import Swal from "sweetalert2";
import _ from "lodash";
import { HiMail } from "react-icons/hi";
import { convertPhoneNumberToInternational } from "../../../../../helpers/string.helper";
import moment from "moment";
import {
  useEmailValidator,
  usePhoneNumberValidator,
} from "../../../../hooks/useFormValidator";
import { usePageData } from "../../../../hooks/usePageData";
import Loader from "../../../_components/loader";

const OnlineRegistrationForm = () => {
  const { getOnlineRegistrationPageData, isLoading: isLoadingPage } =
    usePageData();
  const nationalityPayload = usePageData((state) => state.result.countryData);
  const yearPayload = usePageData((state) => state.result.yearData);

  let [pageNo, setPageNo] = useState(0);
  const [haveRegisCode, setHaveRegiscode] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [registrationPayload, setRegistrationPayload] = useState({
    medicalproblemoptions: [],
  });
  /* const [nationalityPayload, setNationalityPayload] = useState([]);
  const [yearPayload, setYearPayload] = useState([]); */
  const [errorPayload, setErrorPayload] = useState({});
  const [termandcondition, setTermandcondition] = useState(true);
  // Ref for focus to mandatory field
  const inputRef = {
    registrationCode: useRef(),
    mainEmailError: useRef(),
    schoolyear: useRef(),
    firstname: useRef(),
    birthplace: useRef(),
    birthdate: useRef(),
    nationality: useRef(),
    religion: useRef(),
    gender: useRef(),
    address: useRef(),
    phonenoError: useRef(),
    emailError: useRef(),
    previousschoolname: useRef(),
    yearlevelprevschool: useRef(),
    nextclass: useRef(),
    fathername: useRef(),
    fatherbirthplace: useRef(),
    fatherbirthdate: useRef(),
    fatherphoneno: useRef(),
    fatheremail: useRef(),
    fathermaritalstatus: useRef(),
    fatheroccupation: useRef(),
    fathercompanyname: useRef(),
    fatherbusinessAddress: useRef(),
    fathertelephone: useRef(),
    mothername: useRef(),
    motherbirthplace: useRef(),
    motherbirthdate: useRef(),
    motherphoneno: useRef(),
    motheremail: useRef(),
    mothermaritalstatus: useRef(),
    motheroccupation: useRef(),
    mothercompanyname: useRef(),
    motherbusinessAddress: useRef(),
    mothertelephone: useRef(),
    emergencycontactname: useRef(),
    emergencycontactrelaction: useRef(),
    emergencycontactphoneno: useRef(),
    emergencycontactaddress: useRef(),
    termandcondition: useRef(),
    medicationoption: useRef(),
    isrecassmedicationoption: useRef(),
    alergicoption: useRef(),
    limitationofphysical: useRef(),
    limitationofphysicalexplain: useRef(),
    surgeryoperation: useRef(),
    surgeryoperationexplain: useRef(),
    recommendedoption: useRef(),
    btbparentnamerec: useRef(),
    btbstudentnamerec: useRef(),
    btbstudentgraderec: useRef(),
    btbstudentphonehomerec: useRef(),
    btbstudentphonemobilerec: useRef(),
    birthcertificateattachment: useRef(),
    familycardattachment: useRef(),
    reportcardattachment: useRef(),
  };

  const formChangeHandler = (e) => {
    const { name, value, type, files } = e.target;
    onChangeHookForValidation(e);
    if (name.includes("phone") || name.includes("telephone")) {
      setRegistrationPayload((prevState) => ({
        ...prevState,
        [name]: convertPhoneNumberToInternational(value),
      }));
    } else if (type == "file") {
      Object.keys(files).map((val) => {
        setRegistrationPayload((prevState) => ({
          ...prevState,
          [name]: prevState[name]
            ? [...prevState[name], files[val]]
            : [files[val]],
        }));
      });
    } else if (type == "checkbox") {
      if (e.target.checked) {
        setRegistrationPayload((prevState) => ({
          ...prevState,
          [name]: prevState[name] ? [...prevState[name], value] : [value],
        }));
      } else {
        setRegistrationPayload((prevState) => ({
          ...prevState,
          [name]: prevState[name].filter((val) => val !== value),
        }));
      }
    } else {
      setRegistrationPayload((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const datePickerHandler = (name, value) => {
    setRegistrationPayload((prevState) => ({
      ...prevState,
      [name]: moment(value).format("DD MMMM YYYY"),
    }));
  };

  const findMinPage = (data) => {
    let minPage = Infinity;
    for (const key in data) {
      if (data[key].page < minPage) {
        minPage = data[key].page;
      }
    }
    return minPage;
  };

  const submitHandler = async (isFinal, setStateCallBack) => {
    try {
      setStateCallBack(true);

      /* Collect Attachment */
      const formData = new FormData();
      if (
        registrationPayload.birthcertificateattachment &&
        Array.isArray(registrationPayload.birthcertificateattachment)
      ) {
        registrationPayload.birthcertificateattachment.forEach((val) => {
          formData.append("birthcertificate", val);
        });
      }
      if (
        registrationPayload.familycardattachment &&
        Array.isArray(registrationPayload.familycardattachment)
      ) {
        registrationPayload.familycardattachment.forEach((val) => {
          formData.append("familycardattachment", val);
        });
      }
      if (
        registrationPayload.reportcardattachment &&
        Array.isArray(registrationPayload.reportcardattachment)
      ) {
        registrationPayload.reportcardattachment.forEach((val) => {
          formData.append("reportcardattachment", val);
        });
      }

      if (isFinal) {
        try {
          await ValidateStudentRegistration(registrationPayload);
        } catch (error) {
          Swal.fire({
            allowOutsideClick: false,
            title: "Student Submission Notification!",
            text: `Please Validate your data submission`,
            icon: "info",
          });
          setErrorPayload(error);
          setStateCallBack(false);
          setPageNo(findMinPage(error));
          return;
        }
      }

      /* Call API */
      const res = await UploadAttachment("studentregistration", formData);
      const studentRegistrationPayload = { ...registrationPayload };
      delete studentRegistrationPayload.birthcertificateattachment;
      delete studentRegistrationPayload.familycardattachment;
      delete studentRegistrationPayload.reportcardattachment;

      if (res.data) {
        studentRegistrationPayload.attachment = res.data;
      }
      studentRegistrationPayload.status = isFinal ? "send" : "draft";
      const submitRes = await SubmitStudentRegistration(
        studentRegistrationPayload
      );
      setRegistrationPayload({});
      setStateCallBack(false);

      Swal.fire({
        allowOutsideClick: false,
        title: "Student Submission Notification!",
        text: `Success submit student data with no: ${submitRes.data.registrationCode}. Form will be reloaded in 5 seconds!`,
        icon: "info",
      });

      setTimeout(() => {
        window.location.href = "/onlineregistration";
      }, 5000);
    } catch (err) {
      setStateCallBack(false);
      Swal.fire({
        allowOutsideClick: false,
        title: "Student Submission Notification!",
        html: err.message || err,
        icon: "error",
      });
    }
  };

  const onCheckAttachment = () => {
    if (!registrationPayload.birthcertificateattachment) {
      return swalFormError(
        "Birth Certificate is required!",
        "birthcertificateattachment"
      );
    } else if (!registrationPayload.familycardattachment) {
      return swalFormError("Family Card is required!", "familycardattachment");
    } else if (!registrationPayload.reportcardattachment) {
      return swalFormError("Report Card is required!", "reportcardattachment");
    } else if (!registrationPayload.ttdpage4) {
      return swalFormError("Signature is required!");
    }
    return true;
  };

  const saveAndSendHandler = (e) => {
    if (!registrationPayload.recommendedoption) {
      return swalFormError(
        "Recommend Option is required!",
        "recommendedoption"
      );
    } else if (registrationPayload.recommendedoption === "Yes") {
      if (!registrationPayload.btbparentnamerec) {
        return swalFormError("Parent Name is required!", "btbparentnamerec");
      } else if (!registrationPayload.btbstudentnamerec) {
        return swalFormError("Student Name is required!", "btbstudentnamerec");
      } else if (!registrationPayload.btbstudentgraderec) {
        return swalFormError(
          "Student Grade is required!",
          "btbstudentgraderec"
        );
      } else if (!registrationPayload.btbstudentphonehomerec) {
        return swalFormError(
          "Student Phone is required!",
          "btbstudentphonehomerec"
        );
      } else if (!registrationPayload.btbstudentphonemobilerec) {
        return swalFormError(
          "Student Phone Mobile is required!",
          "btbstudentphonemobilerec"
        );
      }
    }
    if (onCheckAttachment() === true) {
      submitHandler(true, setIsLoading);
    }
  };

  const saveAsDraftHandler = (e) => {
    submitHandler(false, setIsLoading);
  };

  const [registrationCode, setRegistrationCode] = useState("");
  const [isPasteRegistrationCode, setIsPasteRegistrationCode] = useState(false);
  const onChangeRegistrationCode = (e) => {
    if (!isPasteRegistrationCode) {
      setRegistrationCode(e.target.value);
    }
  };

  const onPasteRegistrationCode = (e) => {
    setIsPasteRegistrationCode(true);
    setRegistrationCode(e.clipboardData.getData("Text"));
    setTimeout(() => setIsPasteRegistrationCode(false), 5);
  };

  const fetchDraftDataHandler = () => {
    if (!registrationCode) {
      Swal.fire({
        allowOutsideClick: false,
        title: "Student Submission Notification!",
        text: "Please input registration code",
        icon: "error",
      });
      return;
    }

    if (registrationPayload.registrationcode == registrationCode) {
      setPageNo(++pageNo);
    } else {
      GetDraftStudentRegistration(registrationCode)
        .then((res) => {
          setRegistrationPayload(res.data[0]);
          setRegistrationCode(res.data[0].registrationcode);
          setPageNo(pageNo + 1);
          Swal.fire({
            allowOutsideClick: false,
            title: "Student Submission Notification!",
            text: `Success get registration data`,
            icon: "info",
          });
        })
        .catch((err) => {
          Swal.fire({
            allowOutsideClick: false,
            title: "Student Submission Notification!",
            text: err,
            icon: "error",
          });
        });
    }
  };

  /* Custom Hook */
  const { error: mainEmailError, handleChange: handleChangeMainEmail } =
    useEmailValidator(true, "Email", registrationPayload.mainEmail);
  const { error: phonenoError, handleChange: handleChangePhoneno } =
    usePhoneNumberValidator(true, "Phone No", registrationPayload.phoneno);
  const { error: emailError, handleChange: handleChangeEmail } =
    useEmailValidator(true, "Email", registrationPayload.email);
  const onChangeHookForValidation = (e) => {
    const { name, value, type } = e.target;
    if (name == "mainEmail") {
      handleChangeMainEmail({ target: { value: value } });
    }
    if (name == "phoneno") {
      handleChangePhoneno({ target: { value: value } });
    }
    if (name == "email") {
      handleChangeEmail({ target: { value: value } });
    }
  };

  const swalFormError = (text, ref) => {
    Swal.fire({
      allowOutsideClick: false,
      title: "Student Submission Notification!",
      text: text,
      icon: "warning",
    }).then((res) => {
      if (ref && (res.dismiss || res.isConfirmed || res.isDismissed)) {
        setTimeout(() => {
          inputRef[ref].current.focus();
        }, 300);
      }
    });
  };

  const goToNextPage = () => {
    setPageNo(pageNo + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const setNextPage = (e) => {
    e.preventDefault();
    if (pageNo == 0) {
      if (haveRegisCode == "true" && !registrationCode) {
        return swalFormError(
          "Please input registration code if you choose option yes. Otherwise please choose no!",
          "registrationCode"
        );
      } else if (haveRegisCode == "true" && registrationCode) {
        fetchDraftDataHandler();
      } else if (haveRegisCode == "false" && mainEmailError) {
        return swalFormError(mainEmailError, "mainEmailError");
      } else {
        setPageNo(pageNo + 1);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    } else if (pageNo == 1) {
      if (!registrationPayload.schoolyear) {
        return swalFormError("School Year is required!", "schoolyear");
      } else if (!registrationPayload.firstname) {
        return swalFormError("First Name is required!", "firstname");
      } else if (!registrationPayload.birthplace) {
        return swalFormError("Birth Place is required!", "birthplace");
      } else if (!registrationPayload.birthdate) {
        return swalFormError("Birth Date is required!", "birthdate");
      } else if (!registrationPayload.nationality) {
        return swalFormError("Nationality is required!", "nationality");
      } else if (!registrationPayload.religion) {
        return swalFormError("Religion is required!", "religion");
      } else if (!registrationPayload.gender) {
        return swalFormError("Gender is required!", "gender");
      } else if (!registrationPayload.address) {
        return swalFormError("Address is required!", "address");
      } else if (phonenoError) {
        return swalFormError(phonenoError, "phonenoError");
      } else if (emailError) {
        return swalFormError(emailError, "emailError");
      } else if (!registrationPayload.previousschoolname) {
        return swalFormError(
          "Previous School Name is required!",
          "previousschoolname"
        );
      } else if (!registrationPayload.yearlevelprevschool) {
        return swalFormError(
          "Year Level at Previous School is required!",
          "yearlevelprevschool"
        );
      } else if (!registrationPayload.nextclass) {
        return swalFormError(
          "Class to which admission is sought is required!",
          "nextclass"
        );
      } else if (!registrationPayload.fathername) {
        return swalFormError("Father's Name is required!", "fathername");
      } else if (!registrationPayload.fatherbirthplace) {
        return swalFormError(
          "Father's Birth Place is required!",
          "fatherbirthplace"
        );
      } else if (!registrationPayload.fatherbirthdate) {
        return swalFormError(
          "Father's Birth Date is required!",
          "fatherbirthdate"
        );
      } else if (!registrationPayload.fatherphoneno) {
        return swalFormError("Father's Phone No is required!", "fatherphoneno");
      } else if (!registrationPayload.fatheremail) {
        return swalFormError("Father's Email is required!", "fatheremail");
      } else if (!registrationPayload.fathermaritalstatus) {
        return swalFormError(
          "Father's Marital Status is required!",
          "fathermaritalstatus"
        );
      } else if (!registrationPayload.fatheroccupation) {
        return swalFormError(
          "Father's Occupation is required!",
          "fatheroccupation"
        );
        // } else if(!registrationPayload.fathercompanyname){
        //   return swalFormError("Father's Company Name is required!", 'fathercompanyname')
        // } else if(!registrationPayload.fatherbusinessAddress){
        //   return swalFormError("Father's Business Address is required!", 'fatherbusinessAddress')
        // } else if(!registrationPayload.fathertelephone){
        //   return swalFormError("Father's Telephone is required!", 'fathertelephone')
      } else if (!registrationPayload.mothername) {
        return swalFormError("Mother's Name is required!", "mothername");
      } else if (!registrationPayload.motherbirthplace) {
        return swalFormError(
          "Mother's Birth Place is required!",
          "motherbirthplace"
        );
      } else if (!registrationPayload.motherbirthdate) {
        return swalFormError(
          "Mother's Birth Date is required!",
          "motherbirthdate"
        );
      } else if (!registrationPayload.motherphoneno) {
        return swalFormError("Mother's Phone No is required!", "motherphoneno");
      } else if (!registrationPayload.motheremail) {
        return swalFormError("Mother's Email is required!", "motheremail");
      } else if (!registrationPayload.mothermaritalstatus) {
        return swalFormError(
          "Mother's Marital Status is required!",
          "mothermaritalstatus"
        );
      } else if (!registrationPayload.motheroccupation) {
        return swalFormError(
          "Mother's Occupation is required!",
          "motheroccupation"
        );
        // } else if(!registrationPayload.mothercompanyname){
        //   return swalFormError("Mother's Company Name is required!", 'mothercompanyname')
        // } else if(!registrationPayload.motherbusinessAddress){
        //   return swalFormError("Mother's Business Address is required!", 'motherbusinessAddress')
        // } else if(!registrationPayload.mothertelephone){
        //   return swalFormError("Mother's Telephone is required!", 'mothertelephone')
      } else if (!registrationPayload.emergencycontactname) {
        return swalFormError(
          "Emergency Contact Name is required!",
          "emergencycontactname"
        );
      } else if (!registrationPayload.emergencycontactrelaction) {
        return swalFormError(
          "Emergency Contact Relation is required!",
          "emergencycontactrelaction"
        );
      } else if (!registrationPayload.emergencycontactphoneno) {
        return swalFormError(
          "Emergency Contact Phone is required!",
          "emergencycontactphoneno"
        );
      } else if (!registrationPayload.emergencycontactaddress) {
        return swalFormError(
          "Emergency Contact Address is required!",
          "emergencycontactaddress"
        );
      } else if (!registrationPayload.ttdpage1) {
        return swalFormError("Signature is required!");
      } else {
        goToNextPage();
      }
    } else if (pageNo === 2) {
      if (!termandcondition)
        return swalFormError(
          "Term and Condition is required!",
          "termandcondition"
        );
      else if (!registrationPayload.ttdpage2)
        return swalFormError("Signature is required!");
      else goToNextPage();
    } else if (pageNo === 3) {
      if (!registrationPayload.medicationoption) {
        return swalFormError(
          "Medication Option is required!",
          "medicationoption"
        );
      } else if (!registrationPayload.isrecassmedicationoption) {
        return swalFormError(
          "Medication Assistance is required!",
          "isrecassmedicationoption"
        );
      } else if (!registrationPayload.limitationofphysical) {
        return swalFormError(
          "Limitation of Physical Option is required!",
          "limitationofphysical"
        );
      } else if (
        registrationPayload.limitationofphysical === "Yes" &&
        !registrationPayload.limitationofphysicalexplain
      ) {
        return swalFormError(
          "Limitation of Physical Explanation is required!",
          "limitationofphysicalexplain"
        );
      } else if (!registrationPayload.surgeryoperation) {
        return swalFormError(
          "Surgery Operation is required!",
          "surgeryoperation"
        );
      } else if (
        registrationPayload.surgeryoperation === "Yes" &&
        !registrationPayload.surgeryoperationexplain
      ) {
        return swalFormError(
          "Surgery Operation Explanation is required!",
          "surgeryoperationexplain"
        );
      } else if (!registrationPayload.ttdpage3) {
        return swalFormError("Signature is required!");
      } else return goToNextPage();
    } else {
      goToNextPage();
    }
  };

  const setPrevPage = () => {
    setPageNo(pageNo - 1);
  };

  useEffect(() => {
    getOnlineRegistrationPageData();
  }, []);

  if (isLoadingPage) {
    return <Loader />;
  } else if (nationalityPayload && yearPayload)
    return (
      <>
        <div className="max-w-full grid gap-3 mt-20 md:px-32">
          <div className="inline-flex flex justify-between">
            <div className="text-[35px] text-[#00305E] font-bold">
              Registration Form
            </div>
            <div className="text-[35px] text-[#00305E] font-semibold pr-10 md:pr-0">
              [{pageNo}/4]
            </div>
          </div>

          {/* Page 0 */}
          {pageNo == 0 ? (
            <>
              {/* Form Opsi Punya Regis Code atau tidak */}
              <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                Have you registered before or already have registration code?
              </div>
              <div>
                <div>
                  <Radio
                    checked={haveRegisCode == "true"}
                    id="haveRegisCodeTrue"
                    name="haveRegisCode"
                    value="true"
                    onChange={(e) => setHaveRegiscode(e.target.value)}
                  />
                  <Label htmlFor="haveRegisCodeTrue" className="mr-10 ml-3">
                    Yes, I have
                  </Label>
                  <Radio
                    checked={haveRegisCode == "false"}
                    id="haveRegisCodeFalse"
                    name="haveRegisCode"
                    value="false"
                    onChange={(e) => setHaveRegiscode(e.target.value)}
                  />
                  <Label htmlFor="haveRegisCodeFalse" className="mr-10 ml-3">
                    No
                  </Label>
                </div>
              </div>

              {/* Page Draft Registration No */}
              {haveRegisCode == "true" ? (
                <DraftNoForm
                  ref={inputRef.registrationCode}
                  onChange={onChangeRegistrationCode}
                  onPaste={onPasteRegistrationCode}
                  registrationcode={registrationCode}
                />
              ) : haveRegisCode == "false" ? (
                <>
                  {/* Email Form */}
                  <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                    Email
                  </div>
                  <div className="md:inline-flex">
                    <div className="mb-2 block w-32">
                      <Label htmlFor="mainEmail" value="Email" />
                    </div>
                    <TextInput
                      ref={inputRef.mainEmailError}
                      className="md:w-full pr-10 md:pr-0"
                      id="mainEmail"
                      name="mainEmail"
                      type="email"
                      icon={HiMail}
                      autoFocus={true}
                      onChange={formChangeHandler}
                      value={registrationPayload.mainEmail || ""}
                    />
                  </div>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}

          {/* Page 1 */}
          {pageNo == 1 ? (
            <>
              <SchoolInformationForm
                ref={inputRef}
                yearPayload={yearPayload}
                payload={registrationPayload}
                formChangeHandler={formChangeHandler}
                errorPayload={errorPayload}
              />
              <StudentDetailForm
                ref={inputRef}
                nationalityPayload={nationalityPayload}
                payload={registrationPayload}
                formChangeHandler={formChangeHandler}
                datePickerHandler={datePickerHandler}
                errorPayload={errorPayload}
              />
              <EducationalBackgroundForm
                ref={inputRef}
                payload={registrationPayload}
                formChangeHandler={formChangeHandler}
                errorPayload={errorPayload}
              />
              <ParentsInformationForm
                ref={inputRef}
                payload={registrationPayload}
                formChangeHandler={formChangeHandler}
                datePickerHandler={datePickerHandler}
                errorPayload={errorPayload}
              />
              <EmergencyContactForm
                ref={inputRef}
                payload={registrationPayload}
                formChangeHandler={formChangeHandler}
                errorPayload={errorPayload}
              />
              <DetailOfSiblingForm
                payload={registrationPayload}
                formChangeHandler={formChangeHandler}
                name="siblinglist"
                errorPayload={errorPayload}
              />
              <SignaturePad
                formChangeHandler={formChangeHandler}
                value={registrationPayload.ttdpage1 || ""}
                name="ttdpage1"
              />
            </>
          ) : (
            <></>
          )}

          {/* Page 2 - Peraturan dan Persyaratan Static Page */}
          {pageNo == 2 ? (
            <>
              <RulesRegistration
                ref={inputRef}
                onChange={setTermandcondition}
              />
              <SignaturePad
                formChangeHandler={formChangeHandler}
                value={registrationPayload.ttdpage2 || ""}
                name="ttdpage2"
              />
            </>
          ) : (
            <></>
          )}

          {/* Page 3 */}
          {pageNo == 3 ? (
            <>
              <PersonalHealthInformationForm
                ref={inputRef}
                payload={registrationPayload}
                formChangeHandler={formChangeHandler}
                errorPayload={errorPayload}
              />
              <MedicalProblemForm
                ref={inputRef}
                payload={registrationPayload}
                formChangeHandler={formChangeHandler}
                errorPayload={errorPayload}
              />
              <SignaturePad
                formChangeHandler={formChangeHandler}
                value={registrationPayload.ttdpage3 || ""}
                name="ttdpage3"
              />
            </>
          ) : (
            <></>
          )}

          {/* Page 4 */}
          {pageNo == 4 ? (
            <>
              <RecomendedForm
                ref={inputRef}
                payload={registrationPayload}
                formChangeHandler={formChangeHandler}
                errorPayload={errorPayload}
              />
              <AttachmentForm
                ref={inputRef}
                formChangeHandler={formChangeHandler}
              />
              <SignaturePad
                formChangeHandler={formChangeHandler}
                value={registrationPayload.ttdpage4 || ""}
                name="ttdpage4"
              />
            </>
          ) : (
            <></>
          )}

          {/* Button Page No And Save */}
          {haveRegisCode != null ? (
            <div className="mt-1 grid grid-cols-1 font-sm gap-[0.625rem] md:grid-cols-3 md:gap-x-0.75">
              <div className="flex">
                {isLoading ? (
                  <>
                    <Spinner aria-label="Spinner button example" size="sm" />
                    <span className="pl-3">Please Wait...</span>
                  </>
                ) : (
                  <></>
                )}

                {!isLoading && pageNo > 0 ? (
                  <div className="mt-1 py-1.25 px-0.75 items-center text-center w-1/2 md:w-full">
                    <Button
                      type="button"
                      className="w-full lg:w-auto"
                      disabled={isLoading}
                      onClick={setPrevPage}
                    >
                      Prev
                    </Button>
                  </div>
                ) : (
                  <></>
                )}

                {!isLoading && pageNo >= 0 && pageNo < 4 ? (
                  <div className="mt-1 py-1.25 px-0.75 items-center text-center w-1/2 md:w-full">
                    <Button
                      type="button"
                      className="w-full lg:w-auto"
                      disabled={isLoading}
                      onClick={setNextPage}
                    >
                      Next
                    </Button>
                  </div>
                ) : !isLoading && pageNo == 4 ? (
                  <>
                    <div className="mt-1 py-1.25 px-0.75 items-center text-center w-3 md:w-full mr-3">
                      <Button
                        type="submit"
                        id="btnSaveAndSend"
                        name="btnSaveAndSend"
                        className="w-full lg:w-auto"
                        disabled={isLoading}
                        onClick={saveAndSendHandler}
                      >
                        Save And Send
                      </Button>
                    </div>
                    <div className="mt-1 py-1.25 px-0.75 items-center text-center w-3 md:w-full ml-3">
                      <Button
                        type="submit"
                        className="w-full lg:w-auto"
                        disabled={isLoading}
                        onClick={saveAsDraftHandler}
                      >
                        Save As Draft
                      </Button>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </>
    );
};

export default OnlineRegistrationForm;
