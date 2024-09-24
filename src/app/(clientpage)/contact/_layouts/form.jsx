"use client";
import { Button, Label, Spinner, TextInput, Textarea } from "flowbite-react";
import { useRef, useState } from "react";
import { HiMail } from "react-icons/hi";
import { SubmitContact } from "../../../../../services/contact.service";
import Swal from "sweetalert2";
import { ContactUsPayLoad } from "../../../../../data";
/* import { useLanguageStore } from "../../../../../store/language.store"; */
import {
  convertPhoneNumberToInternational
} from "../../../../../helpers/string.helper";
import Recaptcha from '../../../_components/recaptcha';
import {
  ValidateGoogleRecaptcha
} from '../../../../../services/googlerecaptcha.service'
import useLanguage from "../../../../hooks/useLanguage";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [contactPayload, setContactPayload] = useState({});

  const formChangeHandler = (e) => {
    const { name, value, type, files } = e.target;
    if(name === 'phoneno'){
      setContactPayload(prevState => ({
        ...prevState,
        [name]: convertPhoneNumberToInternational(value),
      }));
    } else if (type == "file") {
      setContactPayload((prevState) => ({
        ...prevState,
        [name]: files,
      }));
    } else {
      setContactPayload((prevState) => ({
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

        await SubmitContact(contactPayload);
        Swal.fire({
            allowOutsideClick: false,
            title: "Contact Submission Notification!",
            text: "Success send contact! Refreshing page in 5 seconds...",
            icon: "success",
        });

        setContactPayload({});
        captchaRef.current.reset();

        setTimeout(() => {
          window.location.href = '/contact';
      }, 5000);
    } catch (err) {
        Swal.fire({
            allowOutsideClick: false,
            title: "Contact Submission Notification!",
            html: err || "An error occurred",
            icon: "error",
        });
    } finally {
        setIsLoading(false);
    }
  };

  const [contactUsData, setcontactUsData] = useState(ContactUsPayLoad);
  /* const { language } = useLanguageStore(); */
  const {language} = useLanguage();

  /* State google recaptcha */
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isRecaptchaValidated, setIsRecaptchaValidated] = useState(false);
  const captchaRef = useRef();

  return (
    <>
      <div className="max-w-full grid gap-3">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="firstname"
              value={`${contactUsData[language].form.fieldFirstName}`}
            />
          </div>
          <TextInput
            id="firstname"
            name="firstname"
            type="text"
            autoFocus={true}
            value={contactPayload?.firstname || ''}
            onChange={formChangeHandler}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="lastname"
              value={`${contactUsData[language].form.fieldLastName}`}
            />
          </div>
          <TextInput
            id="lastname"
            name="lastname"
            type="text"
            value={contactPayload?.lastname || ''}
            onChange={formChangeHandler}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="phoneno"
              value={`${contactUsData[language].form.fieldPhone}`}
            />
          </div>
          <TextInput
            id="phoneno"
            name="phoneno"
            type="text"
            value={contactPayload?.phoneno || ''}
            onChange={formChangeHandler}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email"
              value={`${contactUsData[language].form.fieldEmail}`}
            />
          </div>
          <TextInput
            icon={HiMail}
            type="email"
            id="email"
            name="email"
            value={contactPayload?.email || ''}
            onChange={formChangeHandler}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="message"
              value={`${contactUsData[language].form.fieldMessage}`}
            />
          </div>
          <Textarea
            id="message"
            name="message"
            placeholder={`${contactUsData[language].form.placeHolderMessage}`}
            required
            rows={4}
            value={contactPayload?.message || ''}
            onChange={formChangeHandler}
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
          <Button
            type="submit"
            className="md:w-full lg:w-auto md:w-[200px] bg-[#243F6D]"
            disabled={isLoading}
            onClick={submitHandler}
          >
            {isLoading ? (
              <>
                <Spinner aria-label="Spinner button example" size="sm" />
                <span className="pl-3">Please Wait...</span>
              </>
            ) : (
              <>Submit</>
            )}
          </Button>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
