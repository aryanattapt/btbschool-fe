"use client";
import {
  Button,
  Checkbox,
  Datepicker,
  FileInput,
  Label,
  Radio,
  TextInput,
  Spinner,
  Textarea,
} from "flowbite-react";
import { useRef, useState } from "react";
import { HiMail } from "react-icons/hi";
import { UploadAttachment } from "../../../../../services/attachment.service";
import { SubmitAlumni, ValidateAlumniSubmissionData } from "../../../../../services/alumni.service";
import Swal from "sweetalert2";
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  convertPhoneNumberToInternational
} from "../../../../../helpers/string.helper";
import Recaptcha from '../../../_components/recaptcha';
import {
  ValidateGoogleRecaptcha
} from '../../../../../services/googlerecaptcha.service';

const AlumniForm = () => {
  const attachmentRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [alumniPayload, setAlumniPayload] = useState({ edukasiOptions: [], errors: {} });

  /* State google recaptcha */
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isRecaptchaValidated, setIsRecaptchaValidated] = useState(false);
  const captchaRef = useRef();

  // Validation function
  const validateFormData = (e) => {
    const { name, value, type, files, checked } = e.target;
    let error = "";
  
    switch (name) {
      case "firstname":
      case "lastname":
        if (!value.trim()) {
          error = "This field is required.";
        }
        break;
      case "email":
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(value)) {
          error = "Please enter a valid email address.";
        }
        break;
      case "phoneno":
        if (!value || !/^(\+?\d{1,3})?\d{1,15}$/.test(value)) {
          error = "Please enter a valid phone number.";
        }
        break;
      case "birthdate":
        if (!value) {
          error = "Please select a birth date.";
        } else if (moment(value).isAfter(moment())) {
          error = "Birthdate cannot be in the future.";
        }
        break;
      case "laststudentyear":
        if (!value) {
          error = "Please select the last year at BTB.";
        }
        break;
      case "photoFile":
        if (files && files[0] && files[0].size > 2 * 1024 * 1024) {
          error = "The file size must be less than 2MB.";
        } else if (files && !files[0].type.startsWith("image")) {
          error = "Only image files (.jpg, .png) are allowed.";
        }
        break;
      case "currentlocation":
        if (!value.trim()) {
          error = "Please provide your current location.";
        }
        break;
      case "statusKerjaOptions":
        if (!value) {
          error = "Please select your working status.";
        }
        break;
      case "professionname":
        if (!value.trim()) {
          error = "Please provide your profession name.";
        }
        break;
      default:
        break;
    }
    return error;
  };

  const formChangeHandler = (e) => {
    const { name, value, type, files, checked } = e.target;
    let errorMessage = "";

    if (name === 'phoneno') {
      setAlumniPayload(prevState => ({
        ...prevState,
        [name]: convertPhoneNumberToInternational(value),
      }));
    } else if (type === "file") {
      Object.keys(files).map(val => {
        setAlumniPayload(prevState => ({
          ...prevState,
          [name]: prevState[name] ? [...prevState[name], files[val]] : [files[val]],
        }));
      });
    } else if (type === "checkbox") {
      setAlumniPayload(prevState => ({
        ...prevState,
        [name]: checked
          ? [...prevState[name], value]
          : prevState[name].filter(val => val !== value),
      }));
    } else {
      setAlumniPayload(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }

    // Validate the field
    errorMessage = validateFormData(e);
    setAlumniPayload(prevState => ({
      ...prevState,
      errors: {
        ...prevState.errors,
        [name]: errorMessage,
      }
    }));
  };

  const submitHandler = async (e) => {
    try {
      setIsLoading(true);
      // Validate the entire form
      let isValid = true;
      Object.keys(alumniPayload).forEach((key) => {
        if (key !== "errors") {
          const error = validateFormData(e);
          if (error) {
            isValid = false;
            setAlumniPayload((prevState) => ({
              ...prevState,
              errors: {
                ...prevState.errors,
                [key]: error,
              }
            }));
          }
        }
      });

      if (!isValid) {
        Swal.fire({
          title: "Form Validation",
          text: "Please correct the highlighted errors.",
          icon: "error",
        });
        return;
      }

      // Validate Google Recaptcha
      if (!isRecaptchaValidated) {
        await ValidateGoogleRecaptcha(captchaValue);
        setIsRecaptchaValidated(true);
      }

      const formData = new FormData();
      alumniPayload?.photoFile?.forEach(val => {
        formData.append("photoFile", val);
      });

      let res = await UploadAttachment("alumni", formData);
      try {
        res = res?.data[0]?.fileURL;
      } catch (error) {res = "";}

      const alumniSubmitPayload = { ...alumniPayload, "attachment": res };
      delete alumniSubmitPayload.photoFile;
      delete alumniSubmitPayload.errors;

      await SubmitAlumni(alumniSubmitPayload);

      Swal.fire({
        allowOutsideClick: false,
        title: "Alumni Submission Notification!",
        text: "Success submit Alumni! Refreshing page in 5 seconds...",
        icon: "info",
      });

      setAlumniPayload({});
      try {        
          captchaRef.current.reset();
          attachmentRef.current.value = '';
      } catch (error) {console.log(error);}

      setTimeout(() => {
        window.location.href = '/alumni';
      }, 5000);
    } catch (err) {
        if(err != null){
            let errorMessage = err?.message || 'Something went wrong!';
            if (typeof err === "string") {
                errorMessage = err;
            } else if (typeof err === "object" && Object.keys(err?.error)?.length > 0) {
                Object.keys(err?.error)?.map(val => {
                    setAlumniPayload((prevState) => ({
                      ...prevState,
                      errors: {
                        ...prevState.errors,
                        [val]: err?.error[val]?.message,
                      }
                    }));
                });
            }
            Swal.fire({
              allowOutsideClick: false,
              title: "Alumni Submission Notification!",
              html: errorMessage,
              icon: "error",
            });
        }
    } finally {
      setIsLoading(false);
    }
  };

  const datePickerHandler = (name, value) => {
    setAlumniPayload(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="max-w-full grid gap-3 mt-[30px] md:mt-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="firstname" value="First Name" />
            </div>
            <TextInput
              id="firstname"
              name="firstname"
              type="text"
              autoFocus={true}
              onChange={formChangeHandler}
              value={alumniPayload?.firstname || ''}
            />
            {alumniPayload.errors?.firstname && (
              <p className="text-red-500 text-sm">{alumniPayload.errors.firstname}</p>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="lastname" value="Last Name" />
            </div>
            <TextInput
              id="lastname"
              name="lastname"
              type="text"
              onChange={formChangeHandler}
              value={alumniPayload?.lastname || ''}
            />
            {alumniPayload.errors?.lastname && (
              <p className="text-red-500 text-sm">{alumniPayload.errors.lastname}</p>
            )}
          </div>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="birthdate" value="Birth Date" />
          </div>
          <Datepicker
            id="birthdate"
            name="birthdate"
            language="en-id"
            value={alumniPayload?.birthdate || ''}
            onSelectedDateChanged={(date) => datePickerHandler("birthdate", date ? moment(date).format("YYYY-MM-DD") : "")}
          />
          {alumniPayload.errors?.birthdate && (
            <p className="text-red-500 text-sm">{alumniPayload.errors.birthdate}</p>
          )}
        </div>

        <div className="mb-4">
          <div className="mb-2 block w-72">
            <Label htmlFor="gender" value="Gender"  />
          </div>
          <div className="flex items-center gap-2" id="gender">
            <Radio
              checked={alumniPayload.gender === "male"}
              id="genderMale"
              name="gender"
              value="male"
              onChange={formChangeHandler}
            />
            <Label htmlFor="genderMale">Male</Label>
            <Radio
              checked={alumniPayload.gender === "female"}
              id="genderFemale"
              name="gender"
              value="female"
              onChange={formChangeHandler}
            />
            <Label htmlFor="genderFemale">Female</Label>
          </div>
          {alumniPayload.errors?.gender && (
            <span className="font-medium text-red-600">{alumniPayload.errors.gender}</span>
          )}
        </div>

        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="laststudentyear" value="Last Year at BTB" />
          </div>
          <div className="relative w-full">
            <DatePicker
              selected={alumniPayload?.laststudentyear || null}
              onChange={(date) => datePickerHandler('laststudentyear', date ? moment(date).format("yyyy") : "")}
              dateFormat="yyyy"
              showYearPicker
              autoComplete="off"
              maxDate={new Date()}
              onKeyDown={e => e.preventDefault()}
              className="block w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              wrapperClassName="w-full"
            />
          </div>
          {alumniPayload.errors?.laststudentyear && (
            <p className="text-red-500 text-sm">{alumniPayload.errors.laststudentyear}</p>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="edukasiOptions" value="Education" />
          </div>
          <div className="flex items-center gap-2" id="edukasiOptions">
            <Checkbox
              checked={alumniPayload?.edukasiOptions?.includes('undergraduate')}
              id="edukasiOptionUnderGraduate"
              name="edukasiOptions"
              value="undergraduate"
              onChange={formChangeHandler}
            />
            <Label htmlFor="edukasiOptionUnderGraduate">Undergraduate</Label>
            <Checkbox
              checked={alumniPayload?.edukasiOptions?.includes('postgraduate')}
              id="edukasiOptionPostgraduate"
              name="edukasiOptions"
              value="postgraduate"
              onChange={formChangeHandler}
            />
            <Label htmlFor="edukasiOptionPostgraduate">Postgraduate</Label>
          </div>
        </div>
        {
          alumniPayload?.edukasiOptions?.includes('undergraduate') && 
          <div className="mb-2 block">
            <Label htmlFor="undergraduateuniversityname" value="Undergraduate University Name" />
            <TextInput
              value={alumniPayload?.undergraduateuniversityname || ''}
              type="text"
              id="undergraduateuniversityname"
              name="undergraduateuniversityname"
              onChange={formChangeHandler}
            />
          </div>
        }
        {
          alumniPayload?.edukasiOptions?.includes('postgraduate') &&
          <div className="mb-2 block">
            <Label htmlFor="postgraduateuniversityname" value="Postgraduate University Name" />
            <TextInput
              value={alumniPayload?.postgraduateuniversityname || ''}
              type="text"
              id="postgraduateuniversityname"
              name="postgraduateuniversityname"
              onChange={formChangeHandler}
            />
          </div>
        }

        <div>
          <div className="mb-2 block">
            <Label htmlFor="major" value="Major" />
          </div>
          <TextInput
            value={alumniPayload?.major || ''}
            type="text"
            id="major"
            name="major"
            onChange={formChangeHandler}
          />
        </div>

        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="yeargraduation" value="Year Of Graduation" />
          </div>
          <div className="relative w-full">
            <DatePicker
              selected={alumniPayload?.yeargraduation || null}
              onChange={(date) => datePickerHandler('yeargraduation', date ? moment(date).format("yyyy") : "")}
              dateFormat="yyyy"
              showYearPicker
              autoComplete="off"
              maxDate={new Date()}
              onKeyDown={e => e.preventDefault()}
              className="block w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              wrapperClassName="w-full"
            />
          </div>
          {alumniPayload.errors?.yeargraduation && (
            <p className="text-red-500 text-sm">{alumniPayload.errors.yeargraduation}</p>
          )}
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="statusKerjaOptions" value="Working Status" />
          </div>
          <div className="flex items-center gap-2" id="statusKerjaOptions">
            <Radio
              checked={alumniPayload?.statusKerjaOptions === 'work'}
              id="statusKerjaOptionWork"
              name="statusKerjaOptions"
              value="work"
              onChange={formChangeHandler}
            />
            <Label htmlFor="statusKerjaOptionWork">Work</Label>
            <Radio
              checked={alumniPayload?.statusKerjaOptions === 'notwork'}
              id="statusKerjaOptionNotWork"
              name="statusKerjaOptions"
              value="notwork"
              onChange={formChangeHandler}
            />
            <Label htmlFor="statusKerjaOptionNotWork">Not Work</Label>
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="professionname" value="Profession Name" />
          </div>
          <TextInput
            value={alumniPayload?.professionname || ''}
            type="text"
            id="professionname"
            name="professionname"
            onChange={formChangeHandler}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="currentlocation" value="Current Location" />
          </div>
          <Textarea
            rows={4}
            value={alumniPayload?.currentlocation || ''}
            type="text"
            id="currentlocation"
            name="currentlocation"
            onChange={formChangeHandler}
          />
        </div>
        
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="phoneno" value="Phone Number" />
          </div>
          <TextInput
            id="phoneno"
            name="phoneno"
            type="text"
            onChange={formChangeHandler}
            value={alumniPayload?.phoneno || ''}
          />
          {alumniPayload.errors?.phoneno && (
            <p className="text-red-500 text-sm">{alumniPayload.errors.phoneno}</p>
          )}
        </div>

        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            id="email"
            name="email"
            type="text"
            onChange={formChangeHandler}
            value={alumniPayload?.email || ''}
          />
          {alumniPayload.errors?.email && (
            <p className="text-red-500 text-sm">{alumniPayload.errors.email}</p>
          )}
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="address" value="Address" />
          </div>
          <Textarea
            rows={4}
            value={alumniPayload?.address || ''}
            type="text"
            id="address"
            name="address"
            onChange={formChangeHandler}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="careerpathwayandactivities" value="Career Pathway & what is your Activities now?" />
          </div>
          <Textarea
            rows={4}
            value={alumniPayload?.careerpathwayandactivities || ''}
            type="text"
            id="careerpathwayandactivities"
            name="careerpathwayandactivities"
            onChange={formChangeHandler}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="momentatbtb" value="Moments at BTB" />
          </div>
          <Textarea
            rows={4}
            value={alumniPayload?.momentatbtb || ''}
            type="text"
            id="momentatbtb"
            name="momentatbtb"
            onChange={formChangeHandler}
          />
        </div>

        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="socialmedia" value="Social Media" />
          </div>
          <TextInput
            id="socialmedia"
            name="socialmedia"
            type="text"
            onChange={formChangeHandler}
            value={alumniPayload?.socialmedia || ''}
          />
          {alumniPayload.errors?.socialmedia && (
            <p className="text-red-500 text-sm">{alumniPayload.errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="photoFile" value="Photo" />
          </div>
          <FileInput
            multiple={false}
            accept="image/*"
            id="photoFile"
            name="photoFile"
            helperText="Ukuran Maksimum 2MB. Format Gambar (.jpg, .png)"
            onChange={formChangeHandler}
            ref={attachmentRef}
          />
          {alumniPayload.errors?.photoFile && (
            <p className="text-red-500 text-sm">{alumniPayload.errors.photoFile}</p>
          )}
        </div>

        <div>
        <Recaptcha
            recaptchaRef={captchaRef}
            handleRecaptchaChange={(value) => setCaptchaValue(value)}
            handleRecaptchaExpired={() => {setCaptchaValue(null); setIsRecaptchaValidated(false)}}
          />
        </div>

        <Button 
          onClick={submitHandler}
          disabled={isLoading}
        >
          {isLoading ? (
            <Spinner aria-label="Extra large spinner example" />
          ) : (
            "Submit"
          )}
        </Button>
      </div>
    </>
  );
};

export default AlumniForm;
