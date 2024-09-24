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
import { SubmitAlumni } from "../../../../../services/alumni.service";
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
} from '../../../../../services/googlerecaptcha.service'

const AlumniForm = () => {
  const attachmentRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [alumniPayload, setAlumniPayload] = useState({edukasiOptions: []});

  /* State google recaptcha */
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isRecaptchaValidated, setIsRecaptchaValidated] = useState(false);
  const captchaRef = useRef();

  const formChangeHandler = (e) => {
    const { name, value, type, files, checked } = e.target;
    
    if(name === 'phoneno'){
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
  };

  const submitHandler = async (e) => {
    try {
        setIsLoading(true);
        if (!isRecaptchaValidated) {
            await ValidateGoogleRecaptcha(captchaValue);
            setIsRecaptchaValidated(true);
        }

        const formData = new FormData();
        alumniPayload?.photoFile?.forEach(val => {
            formData.append("photoFile", val);
        });

        const res = await UploadAttachment("alumni", formData);

        const alumniSubmitPayload = { ...alumniPayload };
        alumniSubmitPayload.attachment = res.data;
        delete alumniSubmitPayload.photoFile;

        await SubmitAlumni(alumniSubmitPayload);

        Swal.fire({
            allowOutsideClick: false,
            title: "Alumni Submission Notification!",
            text: "Success submit Alumni! Refreshing page in 5 seconds...",
            icon: "info",
        });

        setAlumniPayload({});
        captchaRef.current.reset();
        attachmentRef.current.value = '';

        setTimeout(() => {
          window.location.href = '/alumni';
      }, 5000);
    } catch (err) {
        // Error handling
        Swal.fire({
            allowOutsideClick: false,
            title: "Alumni Submission Notification!",
            html: err || "An error occurred",
            icon: "error",
        });
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
            onSelectedDateChanged={(date) => datePickerHandler("birthdate", date)}
          />
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
              onKeyDown={e => e.preventDefault()}
              className="block w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              wrapperClassName="w-full"
            />
          </div>
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
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            value={alumniPayload?.email || ''}
            icon={HiMail}
            type="email"
            id="email"
            name="email"
            onChange={formChangeHandler}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="phoneno" value="Phone No" />
          </div>
          <TextInput
            value={alumniPayload?.phoneno || ''}
            id="phoneno"
            name="phoneno"
            type="text"
            onChange={formChangeHandler}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="photoFile" value="Unggah Foto" />
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
        </div>
        <div>
          <Recaptcha
            recaptchaRef={captchaRef}
            handleRecaptchaChange={(value) => setCaptchaValue(value)}
            handleRecaptchaExpired={() => {setCaptchaValue(null); setIsRecaptchaValidated(false)}}
          />
        </div>
        <div>
          <small className="text-gray-500 dark:text-gray-400">
            Untuk informasi atau pertanyaan lebih lanjut, silahkan kirim email
            ke alumni@btbschool.org.
          </small>
        </div>
        <div>
          <Button
            type="submit"
            className="w-full lg:w-auto"
            disabled={isLoading}
            onClick={submitHandler}
          >
            {isLoading ? (
              <>
                <Spinner aria-label="Spinner button example" size="sm" />
                <span className="pl-3">Please Wait...</span>
              </>
            ) : (
              <>Kirim</>
            )}
          </Button>
        </div>
      </div>
    </>
  );
};

export default AlumniForm;