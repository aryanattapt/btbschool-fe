"use client";
import { Button, Label, Spinner, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import { HiMail } from "react-icons/hi";
import { SubmitContact } from '../../../../../services/contact.service'
import Swal from "sweetalert2";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [contactPayload, setContactPayload] = useState({});

  const formChangeHandler = (e) => {
    const { name, value, type, files } = e.target;
    if (type == "file") {
      setContactPayload((prevState) => ({
        ...prevState,
        [name]: files,
      }));
    } else {
      setContactPayload((prevState) => ({
        ...prevState,
        [name]: (name == 'phoneno') ? `+62${value}` : value,
      }));
    }
  };

  const submitHandler = (e) => {
    setIsLoading(true);

    /* Call API in here... */
    SubmitContact(contactPayload)
    .then(_ => {
      setIsLoading(false);
      Swal.fire({
        allowOutsideClick: false,
        title: 'Contact Submission Notification!',
        text: "Success send contact",
        icon: 'success',
      });
    }).catch((err) => {
      setIsLoading(false);
      Swal.fire({
          allowOutsideClick: false,
          title: 'Contact Submission Notification!',
          text: err,
          icon: 'error',
      });
    });
  };

  return (
    <>
      <div className="max-w-full grid gap-3">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="firstname" value="Nama Depan" />
          </div>
          <TextInput
            id="firstname"
            name="firstname"
            type="text"
            autoFocus={true}
            onChange={formChangeHandler}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="lastname" value="Nama Belakang" />
          </div>
          <TextInput
            id="lastname"
            name="lastname"
            type="text"
            onChange={formChangeHandler}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="phoneno" value="Nomor Telepon" />
          </div>
          <TextInput
            id="phoneno"
            name="phoneno"
            type="text"
            addon="+62"
            onChange={formChangeHandler}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            icon={HiMail}
            type="email"
            id="email"
            name="email"
            onChange={formChangeHandler}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="message" value="Pesan" />
          </div>
          <Textarea
            id="message"
            name="message"
            placeholder="Tuliskan Pesan anda..."
            required
            rows={4}
            onChange={formChangeHandler}
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
