"use client";

import { Label, Select } from "flowbite-react";
import { forwardRef } from "react";

const SchoolInformationForm = forwardRef(
  ({ formChangeHandler, payload, yearPayload, errorPayload }, ref) => {
    return (
      <>
        <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
          School Information
        </div>
        <div className="md:inline-flex">
          <div className="mb-2 block ">
            <Label htmlFor="schoolyear" value="School Year" />
          </div>
          <div className="w-full pr-10 md:pr-0">
            <Select
              ref={ref.schoolyear}
              id="schoolyear"
              name="schoolyear"
              required
              value={payload.schoolyear || ""}
              onChange={formChangeHandler}
              color={errorPayload?.schoolyear ? "failure" : undefined}
            >
              <option value="">Select School Year</option>
              {yearPayload?.map((val, idx) => (
                <option key={idx} value={`${val.startYear}-${val.endYear}`}>
                  {`${val.startYear}-${val.endYear}`}
                </option>
              ))}
            </Select>
            {errorPayload?.schoolyear && (
              <span className="font-medium text-red-600">
                {errorPayload.schoolyear.message}
              </span>
            )}
          </div>
        </div>
      </>
    );
  }
);

export default SchoolInformationForm;
