"use client";
import {
  Datepicker,
  Label,
  Radio,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import { HiMail } from "react-icons/hi";
import AgGridTableForm from "./aggrid.form";
import { forwardRef } from "react";

const columnDefs = [
  {
    width: "100vw",
    filter: false,
    sortable: false,
    resizable: false,
    suppressHeaderMenuButton: true,
    suppressMovable: true,
    enableRowGroup: false,
    suppressAutoSize: true,
    suppressSizeToFit: true,
    headerName: "No",
    colId: "rownumber",
    headerClass: "cell-center",
    cellStyle: { textAlign: "right" },
    valueGetter: "node.rowIndex + 1",
    valueFormatter: 'node?.rowPinned ? "" : x',
    editable: false,
  },
  {
    headerName: "Language",
    field: "language",
    filter: false,
    sortable: false,
    resizable: false,
    suppressHeaderMenuButton: true,
    suppressMovable: true,
    enableRowGroup: false,
    suppressAutoSize: true,
    suppressSizeToFit: true,
    headerClass: "cell-center",
    cellStyle: { textAlign: "left" },
    width: "800vw",
    editable: true,
  },
];

const StudentDetailForm = forwardRef(
  (
    {
      nationalityPayload,
      formChangeHandler,
      datePickerHandler,
      payload,
      errorPayload,
    },
    ref
  ) => {
    return (
      <>
        <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
          Student Detail
        </div>
        <div className="md:inline-flex">
          <div className="mb-2 block w-72">
            <Label htmlFor="firstname" value="First Name" />
          </div>
          <TextInput
            ref={ref.firstname}
            className="w-full pr-10 md:pr-0"
            value={payload.firstname || ""}
            id="firstname"
            name="firstname"
            type="text"
            autoFocus={true}
            onChange={formChangeHandler}
            required
            color={errorPayload?.firstname ? "failure" : undefined}
            helperText={
              errorPayload?.firstname && (
                <span className="font-medium text-red-600">
                  {errorPayload.firstname.message}
                </span>
              )
            }
          />
        </div>
        <div className="md:inline-flex">
          <div className="mb-2 block w-72">
            <Label htmlFor="middlename" value="Middle Name" />
          </div>
          <TextInput
            className="w-full pr-10 md:pr-0"
            value={payload.middlename || ""}
            id="middlename"
            name="middlename"
            type="text"
            onChange={formChangeHandler}
            color={errorPayload?.middlename ? "failure" : undefined}
            helperText={
              errorPayload?.middlename && (
                <span className="font-medium text-red-600">
                  {errorPayload.middlename.message}
                </span>
              )
            }
          />
        </div>
        <div className="md:inline-flex">
          <div className="mb-2 block w-72">
            <Label htmlFor="lastname" value="Last Name" />
          </div>
          <TextInput
            className="w-full pr-10 md:pr-0"
            value={payload.lastname || ""}
            id="lastname"
            name="lastname"
            type="text"
            onChange={formChangeHandler}
            required
            color={errorPayload?.lastname ? "failure" : undefined}
            helperText={
              errorPayload?.lastname && (
                <span className="font-medium text-red-600">
                  {errorPayload.lastname.message}
                </span>
              )
            }
          />
        </div>
        <div className="md:inline-flex">
          <div className="mb-2 block w-72">
            <Label htmlFor="birthplace" value="Place & Date of Birth" />
          </div>
          <div className="sm:inline-flex w-full pr-10 md:pr-0">
            <div className="w-full sm:w-1/2 sm:pr-2">
              <TextInput
                ref={ref.birthplace}
                className="w-full sm:pr-10 md:pr-0"
                value={payload.birthplace || ""}
                id="birthplace"
                name="birthplace"
                type="text"
                onChange={formChangeHandler}
                color={errorPayload?.birthplace ? "failure" : undefined}
                helperText={
                  errorPayload?.birthplace && (
                    <span className="font-medium text-red-600">
                      {errorPayload.birthplace.message}
                    </span>
                  )
                }
              />
            </div>
            <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
              <Datepicker
                ref={ref.birthdate}
                value={payload.birthdate || ""}
                id="birthdate"
                name="birthdate"
                language="en-id"
                showClearButton={false}
                showTodayButton={false}
                onSelectedDateChanged={(date) =>
                  datePickerHandler("birthdate", date)
                }
                color={errorPayload?.birthdate ? "failure" : undefined}
                helperText={
                  errorPayload?.birthdate && (
                    <span className="font-medium text-red-600">
                      {errorPayload.birthdate.message}
                    </span>
                  )
                }
              />
            </div>
          </div>
        </div>
        <div className="md:inline-flex">
          <div className="mb-2 block w-72">
            <Label htmlFor="nationality" value="Nationality" />
          </div>
          <Select
            ref={ref.nationality}
            className="w-full pr-10 md:pr-0"
            value={payload.nationality || ""}
            id="nationality"
            name="nationality"
            required
            onChange={formChangeHandler}
            color={errorPayload?.nationality ? "failure" : undefined}
          >
            <option key="default" value="">
              Select Nationality
            </option>
            {nationalityPayload.map((val, idx) => (
              <option key={idx} value={val}>
                {val}
              </option>
            ))}
          </Select>
          {errorPayload?.nationality && (
            <span className="font-medium text-red-600">
              {errorPayload.nationality.message}
            </span>
          )}
        </div>
        <div className="md:inline-flex">
          <div className="mb-2 block w-72">
            <Label htmlFor="religion" value="Religion" />
          </div>
          <Select
            ref={ref.religion}
            className="w-full pr-10 md:pr-0"
            value={payload.religion || ""}
            id="religion"
            name="religion"
            required
            onChange={formChangeHandler}
            color={errorPayload?.religion ? "failure" : undefined}
          >
            <option value="">Select Religion</option>
            <option value="Islam">Islam</option>
            <option value="Kristen">Kristen</option>
            <option value="Katolik">Katolik</option>
            <option value="Buddha">Buddha</option>
            <option value="Hindu">Hindu</option>
            <option value="Konghucu">Konghucu</option>
          </Select>
          {errorPayload?.religion && (
            <span className="font-medium text-red-600">
              {errorPayload.religion.message}
            </span>
          )}
        </div>
        <div className="md:inline-flex">
          <div className="mb-2 block w-72">
            <Label htmlFor="gender" value="Gender" />
          </div>
          <div
            className="flex items-center gap-2 w-full pr-10 md:pr-0"
            id="gender"
          >
            <Radio
              ref={ref.gender}
              checked={payload.gender === "male"}
              id="genderMale"
              name="gender"
              value="male"
              onChange={formChangeHandler}
              color={errorPayload?.gender ? "failure" : undefined}
            />
            <Label htmlFor="genderMale">Male</Label>
            <Radio
              checked={payload.gender === "female"}
              id="genderFemale"
              name="gender"
              value="female"
              onChange={formChangeHandler}
              color={errorPayload?.gender ? "failure" : undefined}
            />
            <Label htmlFor="genderFemale">Female</Label>
          </div>
          {errorPayload?.gender && (
            <span className="font-medium text-red-600">
              {errorPayload.gender.message}
            </span>
          )}
        </div>
        <div className="md:inline-flex">
          <div className="mb-2 block w-72">
            <Label htmlFor="address" value="Address" />
          </div>
          <Textarea
            ref={ref.address}
            className="w-full pr-10 md:pr-0"
            value={payload.address || ""}
            id="address"
            name="address"
            required
            rows={4}
            onChange={formChangeHandler}
            color={errorPayload?.address ? "failure" : undefined}
            helperText={
              errorPayload?.address && (
                <span className="font-medium text-red-600">
                  {errorPayload.address.message}
                </span>
              )
            }
          />
        </div>
        <div className="md:inline-flex">
          <div className="mb-2 block w-72">
            <Label htmlFor="phoneno" value="Phone No" />
          </div>
          <TextInput
            ref={ref.phonenoError}
            className="w-full pr-10 md:pr-0"
            value={payload.phoneno || ""}
            id="phoneno"
            name="phoneno"
            type="text"
            onChange={formChangeHandler}
            color={errorPayload?.phoneno ? "failure" : undefined}
            helperText={
              errorPayload?.phoneno && (
                <span className="font-medium text-red-600">
                  {errorPayload.phoneno.message}
                </span>
              )
            }
          />
        </div>
        <div className="md:inline-flex">
          <div className="mb-2 block w-72">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            ref={ref.emailError}
            className="w-full pr-10 md:pr-0"
            value={payload.email || ""}
            icon={HiMail}
            id="email"
            name="email"
            type="email"
            onChange={formChangeHandler}
            color={errorPayload?.email ? "failure" : undefined}
            helperText={
              errorPayload?.email && (
                <span className="font-medium text-red-600">
                  {errorPayload.email.message}
                </span>
              )
            }
          />
        </div>
        <div className="md:inline-flex h-fit">
          <div className="mb-2 block w-72">
            <Label
              htmlFor="languagespoken"
              value="Language(s) Spoken at Home"
            />
          </div>
          <div
            className="ag-theme-quartz pr-10 md:pr-0 mb-12"
            style={{ height: "300px", width: "100%" }}
          >
            <AgGridTableForm
              name="languagespoken"
              formChangeHandler={formChangeHandler}
              payload={payload.languagespoken || []}
              columnDefs={columnDefs}
            />
          </div>
          {errorPayload["languagespoken"] && (
            <span className="text-red-600 mt-1 text-sm">
              {errorPayload["languagespoken"].message}
            </span>
          )}
        </div>
      </>
    );
  }
);

export default StudentDetailForm;
