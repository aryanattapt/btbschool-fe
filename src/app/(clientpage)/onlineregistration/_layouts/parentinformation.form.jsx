"use client";

import {
  Datepicker,
  HR,
  Label,
  Radio,
  TextInput,
} from "flowbite-react";
import { forwardRef } from "react";
import { HiMail } from "react-icons/hi";

const ParentsInformationForm = forwardRef(({
  formChangeHandler,
  datePickerHandler,
  payload = {}, // Ensure payload is always defined
  errorPayload = {}, // Ensure errorPayload is always defined
}, ref) => {
  return (
    <>
      <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
        Parent / Guardian Information
      </div>

      {/* Father Information */}
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="fathername" value="Father's Name" />
        </div>
        <TextInput
          ref={ref.fathername}
          className="w-full pr-10 md:pr-0"
          value={payload.fathername || ""}
          id="fathername"
          name="fathername"
          type="text"
          onChange={formChangeHandler}
          color={errorPayload?.fathername ? "failure" : undefined}
          helperText={errorPayload?.fathername && <span className="font-medium text-red-600">{errorPayload.fathername.message}</span>}
        />
      </div>

      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="fatherbirthplace" value="Birth Place" />
        </div>
        <TextInput
          ref={ref.fatherbirthplace}
          className="w-full pr-10 md:pr-0"
          value={payload.fatherbirthplace || ""}
          id="fatherbirthplace"
          name="fatherbirthplace"
          type="text"
          onChange={formChangeHandler}
          color={errorPayload?.fatherbirthplace ? "failure" : undefined}
          helperText={errorPayload?.fatherbirthplace && <span className="font-medium text-red-600">{errorPayload.fatherbirthplace.message}</span>}
        />
      </div>

      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="fatherbirthdate" value="Birth Date" />
        </div>
        <Datepicker
          ref={ref.fatherbirthdate}
          className="w-full pr-10 md:pr-0"
          value={payload.fatherbirthdate || ""}
          id="fatherbirthdate"
          name="fatherbirthdate"
          language="en-id"
          showClearButton={false}
          showTodayButton={false}
          onSelectedDateChanged={(date) => datePickerHandler("fatherbirthdate", date)}
          color={errorPayload?.fatherbirthdate ? "failure" : undefined}
          helperText={errorPayload?.fatherbirthdate && <span className="font-medium text-red-600">{errorPayload.fatherbirthdate.message}</span>}
        />
      </div>

      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="fatherphoneno" value="Phone No" />
        </div>
        <TextInput
          ref={ref.fatherphoneno}
          className="w-full pr-10 md:pr-0"
          value={payload.fatherphoneno || ""}
          id="fatherphoneno"
          name="fatherphoneno"
          type="text"
          onChange={formChangeHandler}
          color={errorPayload?.fatherphoneno ? "failure" : undefined}
          helperText={errorPayload?.fatherphoneno && <span className="font-medium text-red-600">{errorPayload.fatherphoneno.message}</span>}
        />
      </div>

      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="fatheremail" value="Email" />
        </div>
        <TextInput
          ref={ref.fatheremail}
          className="w-full pr-10 md:pr-0"
          value={payload.fatheremail || ""}
          icon={HiMail}
          type="email"
          id="fatheremail"
          name="fatheremail"
          onChange={formChangeHandler}
          color={errorPayload?.fatheremail ? "failure" : undefined}
          helperText={errorPayload?.fatheremail && <span className="font-medium text-red-600">{errorPayload.fatheremail.message}</span>}
        />
      </div>

      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="fathermaritalstatus" value="Marital Status" />
        </div>
        <div className="w-full pr-10 md:pr-0 flex items-center gap-2">
          <Radio
            ref={ref.fathermaritalstatus}
            checked={payload.fathermaritalstatus === "Married"}
            id="marriedfather"
            name="fathermaritalstatus"
            value="Married"
            onChange={formChangeHandler}
          />
          <Label htmlFor="marriedfather">Married</Label>
          <Radio
            checked={payload.fathermaritalstatus === "Divorced"}
            id="divorcedfather"
            name="fathermaritalstatus"
            value="Divorced"
            onChange={formChangeHandler}
          />
          <Label htmlFor="divorcedfather">Divorced</Label>
        </div>
        {errorPayload?.fathermaritalstatus && (
            <span className="font-medium text-red-600">{errorPayload.fathermaritalstatus.message}</span>
        )}
      </div>

      {/* Father Occupation Details */}
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="fatheroccupation" value="Father's Occupation" />
        </div>
        <TextInput
          ref={ref.fatheroccupation}
          className="w-full pr-10 md:pr-0"
          value={payload.fatheroccupation || ""}
          type="text"
          id="fatheroccupation"
          name="fatheroccupation"
          onChange={formChangeHandler}
          color={errorPayload?.fatheroccupation ? "failure" : undefined}
          helperText={errorPayload?.fatheroccupation && <span className="font-medium text-red-600">{errorPayload.fatheroccupation.message}</span>}
        />
      </div>

      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="fathercompanyname" value="Company Name" />
        </div>
        <TextInput
          ref={ref.fathercompanyname}
          className="w-full pr-10 md:pr-0"
          value={payload.fathercompanyname || ""}
          type="text"
          id="fathercompanyname"
          name="fathercompanyname"
          onChange={formChangeHandler}
          color={errorPayload?.fathercompanyname ? "failure" : undefined}
          helperText={errorPayload?.fathercompanyname && <span className="font-medium text-red-600">{errorPayload.fathercompanyname.message}</span>}
        />
      </div>

      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="fatherbusinessAddress" value="Business Address" />
        </div>
        <TextInput
          ref={ref.fatherbusinessAddress}
          className="w-full pr-10 md:pr-0"
          value={payload.fatherbusinessAddress || ""}
          type="text"
          id="fatherbusinessAddress"
          name="fatherbusinessAddress"
          onChange={formChangeHandler}
          color={errorPayload?.fatherbusinessAddress ? "failure" : undefined}
          helperText={errorPayload?.fatherbusinessAddress && <span className="font-medium text-red-600">{errorPayload.fatherbusinessAddress.message}</span>}
        />
      </div>

      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="fathertelephone" value="Telp" />
        </div>
        <TextInput
          ref={ref.fathertelephone}
          className="w-full pr-10 md:pr-0"
          value={payload.fathertelephone || ""}
          type="text"
          id="fathertelephone"
          name="fathertelephone"
          onChange={formChangeHandler}
          color={errorPayload?.fathertelephone ? "failure" : undefined}
          helperText={errorPayload?.fathertelephone && <span className="font-medium text-red-600">{errorPayload.fathertelephone.message}</span>}
        />
      </div>

      <HR />

      {/* Mother Information */}
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="mothername" value="Mother's Name" />
        </div>
        <TextInput
          ref={ref.mothername}
          className="w-full pr-10 md:pr-0"
          value={payload.mothername || ""}
          id="mothername"
          name="mothername"
          type="text"
          onChange={formChangeHandler}
          color={errorPayload?.mothername ? "failure" : undefined}
          helperText={errorPayload?.mothername && <span className="font-medium text-red-600">{errorPayload.mothername.message}</span>}
        />
      </div>

      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="motherbirthplace" value="Birth Place" />
        </div>
        <TextInput
          ref={ref.motherbirthplace}
          className="w-full pr-10 md:pr-0"
          value={payload.motherbirthplace || ""}
          id="motherbirthplace"
          name="motherbirthplace"
          type="text"
          onChange={formChangeHandler}
          color={errorPayload?.motherbirthplace ? "failure" : undefined}
          helperText={errorPayload?.motherbirthplace && <span className="font-medium text-red-600">{errorPayload.motherbirthplace.message}</span>}
        />
      </div>

      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="motherbirthdate" value="Birth Date" />
        </div>
        <Datepicker
          ref={ref.motherbirthdate}
          className="w-full pr-10 md:pr-0"
          value={payload.motherbirthdate || ""}
          id="motherbirthdate"
          name="motherbirthdate"
          language="en-id"
          showClearButton={false}
          showTodayButton={false}
          onSelectedDateChanged={(date) => datePickerHandler("motherbirthdate", date)}
          color={errorPayload?.motherbirthdate ? "failure" : undefined}
          helperText={errorPayload?.motherbirthdate && <span className="font-medium text-red-600">{errorPayload.motherbirthdate.message}</span>}
        />
      </div>

      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="motherphoneno" value="Phone No" />
        </div>
        <TextInput
          ref={ref.motherphoneno}
          className="w-full pr-10 md:pr-0"
          value={payload.motherphoneno || ""}
          id="motherphoneno"
          name="motherphoneno"
          type="text"
          onChange={formChangeHandler}
          color={errorPayload?.motherphoneno ? "failure" : undefined}
          helperText={errorPayload?.motherphoneno && <span className="font-medium text-red-600">{errorPayload.motherphoneno.message}</span>}
        />
      </div>

      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="motheremail" value="Email" />
        </div>
        <TextInput
          ref={ref.motheremail}
          className="w-full pr-10 md:pr-0"
          value={payload.motheremail || ""}
          icon={HiMail}
          type="email"
          id="motheremail"
          name="motheremail"
          onChange={formChangeHandler}
          color={errorPayload?.motheremail ? "failure" : undefined}
          helperText={errorPayload?.motheremail && <span className="font-medium text-red-600">{errorPayload.motheremail.message}</span>}
        />
      </div>

      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="mothermaritalstatus" value="Marital Status" />
        </div>
        <div className="w-full pr-10 md:pr-0 flex items-center gap-2">
          <Radio
            ref={ref.mothermaritalstatus}
            checked={payload.mothermaritalstatus === "Married"}
            id="marriedmother"
            name="mothermaritalstatus"
            value="Married"
            onChange={formChangeHandler}
          />
          <Label htmlFor="marriedmother">Married</Label>
          <Radio
            checked={payload.mothermaritalstatus === "Divorced"}
            id="divorcedmother"
            name="mothermaritalstatus"
            value="Divorced"
            onChange={formChangeHandler}
          />
          <Label htmlFor="divorcedmother">Divorced</Label>
        </div>
        {errorPayload?.mothermaritalstatus && (
            <span className="font-medium text-red-600">{errorPayload.mothermaritalstatus.message}</span>
        )}
      </div>

      {/* Mother Occupation Details */}
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="motheroccupation" value="Mother's Occupation" />
        </div>
        <TextInput
          ref={ref.motheroccupation}
          className="w-full pr-10 md:pr-0"
          value={payload.motheroccupation || ""}
          type="text"
          id="motheroccupation"
          name="motheroccupation"
          onChange={formChangeHandler}
          color={errorPayload?.motheroccupation ? "failure" : undefined}
          helperText={errorPayload?.motheroccupation && <span className="font-medium text-red-600">{errorPayload.motheroccupation.message}</span>}
        />
      </div>

      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="mothercompanyname" value="Company Name" />
        </div>
        <TextInput
          ref={ref.mothercompanyname}
          className="w-full pr-10 md:pr-0"
          value={payload.mothercompanyname || ""}
          type="text"
          id="mothercompanyname"
          name="mothercompanyname"
          onChange={formChangeHandler}
          color={errorPayload?.mothercompanyname ? "failure" : undefined}
          helperText={errorPayload?.mothercompanyname && <span className="font-medium text-red-600">{errorPayload.mothercompanyname.message}</span>}
        />
      </div>

      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="motherbusinessAddress" value="Business Address" />
        </div>
        <TextInput
          ref={ref.motherbusinessAddress}
          className="w-full pr-10 md:pr-0"
          value={payload.motherbusinessAddress || ""}
          type="text"
          id="motherbusinessAddress"
          name="motherbusinessAddress"
          onChange={formChangeHandler}
          color={errorPayload?.motherbusinessAddress ? "failure" : undefined}
          helperText={errorPayload?.motherbusinessAddress && <span className="font-medium text-red-600">{errorPayload.motherbusinessAddress.message}</span>}
        />
      </div>

      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="mothertelephone" value="Telp" />
        </div>
        <TextInput
          ref={ref.mothertelephone}
          className="w-full pr-10 md:pr-0"
          value={payload.mothertelephone || ""}
          type="text"
          id="mothertelephone"
          name="mothertelephone"
          onChange={formChangeHandler}
          color={errorPayload?.mothertelephone ? "failure" : undefined}
          helperText={errorPayload?.mothertelephone && <span className="font-medium text-red-600">{errorPayload.mothertelephone.message}</span>}
        />
      </div>
    </>
  );
});

export default ParentsInformationForm;