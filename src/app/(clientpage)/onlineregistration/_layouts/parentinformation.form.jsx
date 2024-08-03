"use client";
import {
  Datepicker,
  HR,
  Label,
  Radio,
  Select,
  TextInput,
} from "flowbite-react";
import { HiMail } from "react-icons/hi";

const ParentsInformationForm = ({
  formChangeHandler,
  datePickerHandler,
  payload,
}) => {
  return (
    <>
      <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
        Parent / Guardian Information
      </div>
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="fathername" value="Father's Name" />
        </div>
        <TextInput
          className="w-full pr-10 md:pr-0"
          value={payload.fathername || ""}
          id="fathername"
          name="fathername"
          type="text"
          onChange={formChangeHandler}
        />
      </div>
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="fatherbirthplace" value="Birth Place" />
        </div>
        <Select
          className="w-full pr-10 md:pr-0"
          value={payload.fatherbirthplace || ""}
          id="fatherbirthplace"
          name="fatherbirthplace"
          onChange={formChangeHandler}
        >
          <option value="">Select Birth Place</option>
          <option value="Jakarta">Jakarta</option>
        </Select>
      </div>
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="fatherbirthdate" value="Birth Date" />
        </div>
        <Datepicker
          className="w-full pr-10 md:pr-0"
          value={payload.fatherbirthdate || ""}
          id="fatherbirthdate"
          name="fatherbirthdate"
          language="en-id"
          showClearButton={false}
          showTodayButton={false}
          onSelectedDateChanged={(date) =>
            datePickerHandler("fatherbirthdate", date)
          }
        />
      </div>
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="fatherphoneno" value="Phone No" />
        </div>
        <TextInput
          className="w-full pr-10 md:pr-0"
          value={payload.fatherphoneno || ""}
          id="fatherphoneno"
          name="fatherphoneno"
          type="text"
          onChange={formChangeHandler}
        />
      </div>
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="fatheremail" value="Email" />
        </div>
        <TextInput
          className="w-full pr-10 md:pr-0"
          value={payload.fatheremail || ""}
          icon={HiMail}
          type="email"
          id="fatheremail"
          name="fatheremail"
          onChange={formChangeHandler}
        />
      </div>
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="fathermaritalstatus" value="Marital Status" />
        </div>
        <div
          className="w-full pr-10 md:pr-0 flex items-center gap-2"
          id="fathermaritalstatus"
        >
          <Radio
            checked={payload.fathermaritalstatus == "Married"}
            id="marriedfather"
            name="fathermaritalstatus"
            value="Married"
            onChange={formChangeHandler}
          />
          <Label htmlFor="marriedfather">Married</Label>
          <Radio
            checked={payload.fathermaritalstatus == "Divorced"}
            id="divorcedfather"
            name="fathermaritalstatus"
            value="Divorced"
            onChange={formChangeHandler}
          />
          <Label htmlFor="divorcedfather">Divorced</Label>
        </div>
      </div>
      <div>
        <HR />
      </div>
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="mothername" value="Mother's Name" />
        </div>
        <TextInput
          className="w-full pr-10 md:pr-0"
          value={payload.mothername || ""}
          id="mothername"
          name="mothername"
          type="text"
          onChange={formChangeHandler}
        />
      </div>
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="motherbirthplace" value="Birth Place" />
        </div>
        <Select
          className="w-full pr-10 md:pr-0"
          value={payload.motherbirthplace || ""}
          id="motherbirthplace"
          name="motherbirthplace"
          onChange={formChangeHandler}
        >
          <option value="">Select Birth Place</option>
          <option value="Jakarta">Jakarta</option>
        </Select>
      </div>
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="motherbirthdate" value="Birth Date" />
        </div>
        <Datepicker
          className="w-full pr-10 md:pr-0"
          value={payload.motherbirthdate || ""}
          id="motherbirthdate"
          name="motherbirthdate"
          language="en-id"
          showClearButton={false}
          showTodayButton={false}
          onSelectedDateChanged={(date) =>
            datePickerHandler("motherbirthdate", date)
          }
        />
      </div>
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="motherphoneno" value="Phone No" />
        </div>
        <TextInput
          className="w-full pr-10 md:pr-0"
          value={payload.motherphoneno || ""}
          id="motherphoneno"
          name="motherphoneno"
          type="text"
          onChange={formChangeHandler}
        />
      </div>
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="motheremail" value="Email" />
        </div>
        <TextInput
          className="w-full pr-10 md:pr-0"
          value={payload.motheremail || ""}
          icon={HiMail}
          id="motheremail"
          name="motheremail"
          type="email"
          onChange={formChangeHandler}
        />
      </div>
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="mothermaritalstatus" value="Marital Status" />
        </div>
        <div
          className="w-full pr-10 md:pr-0 flex items-center gap-2"
          id="mothermaritalstatus"
        >
          <Radio
            checked={payload.mothermaritalstatus == "Married"}
            id="marriedmother"
            name="mothermaritalstatus"
            value="Married"
            onChange={formChangeHandler}
          />
          <Label htmlFor="marriedmother">Married</Label>
          <Radio
            checked={payload.mothermaritalstatus == "Divorced"}
            id="divorcedmother"
            name="mothermaritalstatus"
            value="Divorced"
            onChange={formChangeHandler}
          />
          <Label htmlFor="divorcedmother">Divorced</Label>
        </div>
      </div>
    </>
  );
};

export default ParentsInformationForm;
