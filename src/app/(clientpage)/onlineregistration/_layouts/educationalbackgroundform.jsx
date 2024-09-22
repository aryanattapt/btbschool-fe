"use client";

import { 
    Label, 
    Select, 
    TextInput 
} from "flowbite-react";
import { forwardRef } from "react";

const EducationalBackgroundForm = forwardRef(({ formChangeHandler, payload, errorPayload }, ref) => {
    return (
        <>
            <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                Educational Background
            </div>
            <div className="md:inline-flex">
                <div className="mb-2 block w-72">
                    <Label htmlFor="previousschoolname" value="Previous School Name" />
                </div>
                <div className="w-full pr-10 md:pr-0">
                    <TextInput
                        className="md:w-full pr-10 md:pr-0"
                        ref={ref.previousschoolname}
                        id="previousschoolname"
                        name="previousschoolname"
                        type="text"
                        value={payload.previousschoolname || ''}
                        onChange={formChangeHandler}
                        color={errorPayload?.previousschoolname ? "failure" : undefined}
                        helperText={
                            errorPayload?.previousschoolname && (
                                <span className="font-medium text-red-600">
                                    {errorPayload.previousschoolname.message}
                                </span>
                            )
                        }
                    />
                </div>
            </div>
            <div className="md:inline-flex">
                <div className="mb-2 block w-72">
                    <Label htmlFor="yearlevelprevschool" value="Year Level at Previous School" />
                </div>
                <div className="w-full pr-10 md:pr-0">
                    <TextInput
                        className="md:w-full pr-10 md:pr-0"
                        ref={ref.yearlevelprevschool}
                        id="yearlevelprevschool"
                        name="yearlevelprevschool"
                        type="text"
                        value={payload.yearlevelprevschool || ''}
                        onChange={formChangeHandler}
                        color={errorPayload?.yearlevelprevschool ? "failure" : undefined}
                        helperText={
                            errorPayload?.yearlevelprevschool && (
                                <span className="font-medium text-red-600">
                                    {errorPayload.yearlevelprevschool.message}
                                </span>
                            )
                        }
                    />
                </div>
            </div>
            <div className="md:inline-flex">
                <div className="mb-2 block w-72">
                    <Label htmlFor="nextclass" value="Class to which admission is sought" />
                </div>
                <div className="w-full pr-10 md:pr-0">
                    <Select
                        ref={ref.nextclass}
                        className="md:w-full pr-10 md:pr-0"
                        id="nextclass"
                        name="nextclass"
                        required
                        value={payload.nextclass || ''}
                        onChange={formChangeHandler}
                        color={errorPayload?.nextclass ? "failure" : undefined}
                    >
                        <option value="">Select Class</option>
                        <option value="Nursery">Nursery</option>
                        <option value="Kindergarten 1">Kindergarten 1</option>
                        <option value="Kindergarten 2">Kindergarten 2</option>
                        <option value="Grade 1">Grade 1</option>
                        <option value="Grade 2">Grade 2</option>
                        <option value="Grade 3">Grade 3</option>
                        <option value="Grade 4">Grade 4</option>
                        <option value="Grade 5">Grade 5</option>
                        <option value="Grade 6">Grade 6</option>
                        <option value="Grade 7">Grade 7</option>
                        <option value="Grade 8">Grade 8</option>
                        <option value="Grade 9">Grade 9</option>
                        <option value="Grade 10">Grade 10</option>
                        <option value="Grade 11">Grade 11</option>
                        <option value="Grade 12">Grade 12</option>
                    </Select>
                    {errorPayload?.nextclass && (
                        <span className="font-medium text-red-600">
                            {errorPayload.nextclass.message}
                        </span>
                    )}
                </div>
            </div>
        </>
    );
})

export default EducationalBackgroundForm;