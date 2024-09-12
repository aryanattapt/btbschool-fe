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
import { useEffect, useState } from "react";
import { Button, Label, Radio, Spinner, TextInput } from "flowbite-react";
import { UploadAttachment } from "../../../../../services/attachment.service";
import { GetCountry } from '../../../../../services/country.service'
import {
  GetDraftStudentRegistration,
  SubmitStudentRegistration,
  ValidateStudentRegistration,
} from "../../../../../services/onlineregistration.service";
import Swal from "sweetalert2";
import _ from "lodash";
import { HiMail } from "react-icons/hi";
import {
  convertPhoneNumberToInternational
} from "../../../../../helpers/string.helper";
import { GetConfig } from "../../../../../services/config.service";
import moment from "moment";
import {
  useEmailValidator,
  usePhoneNumberValidator
} from '../../../../hooks/useFormValidator'

const OnlineRegistrationForm = () => {
  let [pageNo, setPageNo] = useState(0);
  const [haveRegisCode, setHaveRegiscode] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [registrationPayload, setRegistrationPayload] = useState({medicalproblemoptions: []});
  const [nationalityPayload, setNationalityPayload] = useState([]);
  const [yearPayload, setYearPayload] = useState([]);
  const [errorPayload, setErrorPayload] = useState({});
  
  const formChangeHandler = (e) => {
    const { name, value, type, files } = e.target;
    onChangeHookForValidation(e);
    if(name.includes("phone") || name.includes("telephone")){
      console.log(`convert phone format ${name}`);
      setRegistrationPayload(prevState => ({
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
  }

  const submitHandler = async (isFinal, setStateCallBack) => {
      try {
          console.log(`Masuk Submit Handler`);
          console.log(registrationPayload);
          setStateCallBack(true);

          /* Collect Attachment */
          const formData = new FormData();
          if (registrationPayload.birthcertificateattachment && Array.isArray(registrationPayload.birthcertificateattachment)) {
              registrationPayload.birthcertificateattachment.forEach(val => {
                  console.log(val);
                  formData.append("birthcertificate", val);
              });
          }
          if (registrationPayload.familycardattachment && Array.isArray(registrationPayload.familycardattachment)) {
              registrationPayload.familycardattachment.forEach(val => {
                  console.log(val);
                  formData.append("familycardattachment", val);
              });
          }
          if (registrationPayload.reportcardattachment && Array.isArray(registrationPayload.reportcardattachment)) {
              registrationPayload.reportcardattachment.forEach(val => {
                  console.log(val);
                  formData.append("reportcardattachment", val);
              });
          }

          if(isFinal){
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
          const submitRes = await SubmitStudentRegistration(studentRegistrationPayload);
          setRegistrationPayload({});
          setStateCallBack(false);
          
          Swal.fire({
              allowOutsideClick: false,
              title: "Student Submission Notification!",
              text: `Success submit student data with no: ${submitRes.data.registrationCode}. Form will be reloaded in 5 seconds!`,
              icon: "info",
          });
          
          setTimeout(() => {
              window.location.href = '/onlineregistration';
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

  const saveAndSendHandler = (e) => {
    submitHandler(true, setIsLoading);
  };

  const saveAsDraftHandler = (e) => {
    submitHandler(false, setIsLoading);
  };

  const [registrationCode, setRegistrationCode] = useState('');
  const [isPasteRegistrationCode, setIsPasteRegistrationCode] = useState(false);
  const onChangeRegistrationCode = (e) => {
    if(!isPasteRegistrationCode){
      setRegistrationCode(e.target.value);
    } else{
      console.log(`on paste regis code detected in on change`);
    }
  }

  const onPasteRegistrationCode = (e) => { 
    setIsPasteRegistrationCode(true); 
    setRegistrationCode(e.clipboardData.getData('Text'));
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

    if(registrationPayload.registrationcode == registrationCode){
      console.log(`tidak perlu fetch ulang regis code karena data sama`);
      setPageNo(++pageNo);
    } else{
      console.log(`fetch/refetch regis code`);
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
  const {error: mainEmailError, handleChange: handleChangeMainEmail} = useEmailValidator(true, 'Email', registrationPayload.mainEmail);
  const {error: phonenoError, handleChange: handleChangePhoneno} = usePhoneNumberValidator(true, "Phone No", registrationPayload.phoneno);
  const {error: emailError, handleChange: handleChangeEmail} = useEmailValidator(true, 'Email', registrationPayload.email);
  const onChangeHookForValidation = (e) => {
    const { name, value, type } = e.target;
    if(name == 'mainEmail'){
      handleChangeMainEmail({"target": {"value": value}});
    } if(name == 'phoneno'){
      handleChangePhoneno({"target": {"value": value}});
    } if(name == 'email'){
      handleChangeEmail({"target": {"value": value}});
    }
  }

  const setNextPage = () => {
    if(pageNo == 0){
      if (haveRegisCode == "true" && !registrationCode) {
        Swal.fire({
          allowOutsideClick: false,
          title: "Student Submission Notification!",
          text: "Please input registration code if you choose option yes. Otherwise please choose no!",
          icon: "warning",
        });
      } else if (haveRegisCode == "true" && registrationCode) {
        fetchDraftDataHandler();
      } else if (haveRegisCode == "false" && mainEmailError) {
        Swal.fire({
          allowOutsideClick: false,
          title: "Student Submission Notification!",
          text: mainEmailError,
          icon: "warning",
        });
      } else {
        setPageNo(pageNo + 1);
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    } else if(pageNo == 1){
      if(!registrationPayload.firstname){
        Swal.fire({
          allowOutsideClick: false,
          title: "Student Submission Notification!",
          text: "First Name is required!",
          icon: "warning",
        });
      } else if(!registrationPayload.birthdate){
        Swal.fire({
          allowOutsideClick: false,
          title: "Student Submission Notification!",
          text: "Birth Date is required!",
          icon: "warning",
        });
      } else if(!registrationPayload.address){
        Swal.fire({
          allowOutsideClick: false,
          title: "Student Submission Notification!",
          text: "Address is required!",
          icon: "warning",
        });
      } else if (phonenoError){
        Swal.fire({
          allowOutsideClick: false,
          title: "Student Submission Notification!",
          text: phonenoError,
          icon: "warning",
        });
      } else if(emailError){
        Swal.fire({
          allowOutsideClick: false,
          title: "Student Submission Notification!",
          text: emailError,
          icon: "warning",
        });
      } else {
        setPageNo(pageNo + 1);
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    } else {
      setPageNo(pageNo + 1);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const setPrevPage = () => {
    setPageNo(pageNo - 1);
  };

  useEffect(() => {
    (async () => {
      const collectedPromise = [];
      collectedPromise.push(GetCountry());
      collectedPromise.push(GetConfig('onlineregisyear', {}))

      try {
        const [country, year] = await Promise.all(collectedPromise);
        setNationalityPayload(country);
        setYearPayload(year)
      } catch (error) {console.log(error);}
    })();
  }, []);

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
            {
              haveRegisCode == "true" ? (
                <DraftNoForm
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
                          <Label htmlFor="mainEmail" value="Email"/>
                      </div>
                      <TextInput className="md:w-full pr-10 md:pr-0" id="mainEmail" name="mainEmail" type="email" icon={HiMail} autoFocus={true} onChange={formChangeHandler} value={registrationPayload.mainEmail || ''}/>
                  </div>
                </>
              ) : <></>
            }
          </>
        ) : (
          <></>
        )}

        {/* Page 1 */}
        {pageNo == 1 ? (
          <>
            <SchoolInformationForm
              yearPayload={yearPayload}
              payload={registrationPayload}
              formChangeHandler={formChangeHandler}
              errorPayload={errorPayload}
            />
            <StudentDetailForm
              nationalityPayload = {nationalityPayload}
              payload={registrationPayload}
              formChangeHandler={formChangeHandler}
              datePickerHandler={datePickerHandler}
              errorPayload={errorPayload}
            />
            <EducationalBackgroundForm
              payload={registrationPayload}
              formChangeHandler={formChangeHandler}
              errorPayload={errorPayload}
            />
            <ParentsInformationForm
              payload={registrationPayload}
              formChangeHandler={formChangeHandler}
              datePickerHandler={datePickerHandler}
              errorPayload={errorPayload}
            />
            <EmergencyContactForm
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
              value={registrationPayload.ttdpage1 || ''}
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
              payload={registrationPayload}
              formChangeHandler={formChangeHandler}
            />
            <SignaturePad
              formChangeHandler={formChangeHandler}
              value={registrationPayload.ttdpage2 || ''}
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
              payload={registrationPayload}
              formChangeHandler={formChangeHandler}
              errorPayload={errorPayload}
            />
            <MedicalProblemForm
              payload={registrationPayload}
              formChangeHandler={formChangeHandler}
              errorPayload={errorPayload}
            />
            <SignaturePad
              formChangeHandler={formChangeHandler}
              value={registrationPayload.ttdpage3 || ''}
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
              payload={registrationPayload}
              formChangeHandler={formChangeHandler}
              errorPayload={errorPayload}
            />
            <AttachmentForm formChangeHandler={formChangeHandler} />
            <SignaturePad
              formChangeHandler={formChangeHandler}
              value={registrationPayload.ttdpage4 || ''}
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
