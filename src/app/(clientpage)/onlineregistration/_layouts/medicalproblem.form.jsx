"use client";

import { 
    Checkbox, 
    Label, 
    Radio, 
    TextInput 
} from "flowbite-react";
import { forwardRef, useState } from "react";

const MedicalProblemForm = forwardRef(({ formChangeHandler, payload, errorPayload }, ref) => {
    const [isShowLimitationExplain, setIsShowLimitationExplain] = useState(false);
    const [isShowSurgeryExplain, setIsShowSurgeryExplain] = useState(false);

    const handleRadioChange = (e) => {
        const { name, value } = e.target;
        formChangeHandler(e);
        if (name === 'limitationofphysical') {
            setIsShowLimitationExplain(value === 'Yes');
        }
        if (name === 'surgeryoperation') {
            setIsShowSurgeryExplain(value === 'Yes');
        }
    };

    const getLimitationOfPhysicalRef = (index) => {
        if(index === 0) return {ref : ref.limitationofphysical}
    }
    const getSurgeryOperationRef = (index) => {
        if(index === 0) return {ref : ref.surgeryoperation}
    }

    return (
        <>
            <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                Medical Problem
            </div>

            <div className="md:inline-flex">
                <div className="mb-2 block md:w-72">
                    <Label htmlFor="alergicoption" value="Does your child have an allergy to any following?" />
                </div>
                <div className="md:w-full flex items-center gap-2" id="alergicoption">
                    {['a particular food item (e.g. shrimp)', 'insect sting', 'penicillin', 'other'].map((option) => (
                        <div key={option} className="flex items-center gap-2">
                            <Radio
                                checked={payload.alergicoption === option}
                                id={`${option}option`}
                                name="alergicoption"
                                value={option}
                                onChange={formChangeHandler}
                            />
                            <Label htmlFor={`${option}option`}>{option}</Label>
                        </div>
                    ))}
                    {errorPayload?.alergicoption && (
                        <span className="font-medium text-red-600">{errorPayload.alergicoption.message}</span>
                    )}
                </div>
            </div>

            <div className="md:inline-flex">
                <div className="mb-2 block md:w-72">
                    <Label htmlFor="natureofallergy" value="Please specify the nature of the allergy (doctor's certificate required)" />
                </div>
                <TextInput
                    className="md:w-full"
                    value={payload.natureofallergy || ''}
                    id="natureofallergy"
                    name="natureofallergy"
                    type="text"
                    onChange={formChangeHandler}
                    color={errorPayload?.natureofallergy ? "failure" : undefined}
                    helperText={errorPayload?.natureofallergy && <span className="font-medium text-red-600">{errorPayload.natureofallergy.message}</span>}
                />
            </div>

            <div className="md:inline-flex">
                <div className="mb-2 block md:w-72">
                    <Label htmlFor="limitationofphysical" value="Does your child suffer any limitation on physical activity?" />
                </div>
                <div className="md:w-full flex items-center gap-2" id="limitationofphysical">
                    {['No', 'Yes'].map((option, idx) => (
                        <div key={option} className="flex items-center gap-2">
                            <Radio
                                {...getLimitationOfPhysicalRef(idx)}
                                checked={payload.limitationofphysical === option}
                                id={`limitationofphysical${option.toLowerCase()}`}
                                name="limitationofphysical"
                                value={option}
                                onChange={handleRadioChange}
                            />
                            <Label htmlFor={`limitationofphysical${option.toLowerCase()}`}>{option}</Label>
                        </div>
                    ))}
                    {isShowLimitationExplain && (
                        <TextInput
                            ref={ref.limitationofphysicalexplain}
                            value={payload.limitationofphysicalexplain || ''}
                            id="limitationofphysicalexplain"
                            name="limitationofphysicalexplain"
                            type="text"
                            onChange={formChangeHandler}
                            className="md:w-full"
                        />
                    )}
                    {errorPayload?.limitationofphysical && (
                        <span className="font-medium text-red-600">{errorPayload.limitationofphysical.message}</span>
                    )}
                </div>
            </div>

            <div className="md:inline-flex">
                <div className="mb-2 block md:w-72">
                    <Label htmlFor="surgeryoperation" value="Has your child had any surgery or operation?" />
                </div>
                <div className="md:w-full flex items-center gap-2" id="surgeryoperation">
                    {['No', 'Yes'].map((option, idx) => (
                        <div key={option} className="flex items-center gap-2">
                            <Radio
                                {...getSurgeryOperationRef(idx)}
                                checked={payload.surgeryoperation === option}
                                id={`surgeryoperation${option.toLowerCase()}`}
                                name="surgeryoperation"
                                value={option}
                                onChange={handleRadioChange}
                            />
                            <Label htmlFor={`surgeryoperation${option.toLowerCase()}`}>{option}</Label>
                        </div>
                    ))}
                    {isShowSurgeryExplain && (
                        <TextInput
                            ref={ref.surgeryoperationexplain}
                            value={payload.surgeryoperationexplain || ''}
                            id="surgeryoperationexplain"
                            name="surgeryoperationexplain"
                            type="text"
                            onChange={formChangeHandler}
                            className="md:w-full"
                        />
                    )}
                    {errorPayload?.surgeryoperation && (
                        <span className="font-medium text-red-600">{errorPayload.surgeryoperation.message}</span>
                    )}
                </div>
            </div>

            <div className="md:inline-flex">
                <div className="mb-2 block md:w-72">
                    <Label htmlFor="medicalproblemoptions" value="Has your child had or contracted any of the following medical problems?" />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4" id="medicalproblemoptions">
                    {[
                        'asthma', 'eczema', 'convulsions', 'chicken pox', 'german measles', 'heart problems',
                        'tuberculosis', 'scarlet fever', 'mumps', 'epilepsy', 'measles', 'diabetes',
                        'nightmares', 'nosebleeds', 'hiv', 'autism', 'whooping cough', 'rheumatic fever',
                        'visual/eye', 'kidney/urinary infection', 'frequent headaches', 'hearing difficulties',
                        'persistent ear infections', 'persistent chest infections', 'Attention Deficit Disorder (ADD)',
                        'Attention Deficit Hyperactivity Disorder (ADHD)'
                    ].map((problem) => (
                        <div key={problem} className="flex items-center gap-2">
                            <Checkbox
                                checked={payload.medicalproblemoptions?.includes(problem)}
                                id={`${problem}options`}
                                name="medicalproblemoptions"
                                value={problem}
                                onChange={formChangeHandler}
                            />
                            <Label htmlFor={`${problem}options`}>{problem}</Label>
                        </div>
                    ))}
                    {errorPayload?.medicalproblemoptions && (
                        <span className="font-medium text-red-600">{errorPayload.medicalproblemoptions.message}</span>
                    )}
                </div>
            </div>

            <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
                Specific Disability
            </div>

            <div className="md:inline-flex">
                <div className="mb-2 block md:w-72">
                    <Label htmlFor="specificdisability" value="Please explain whether your child has specific disability (emotional, cognitive) that could affect her/his ability to learn" />
                </div>
                <TextInput
                    className="w-full"
                    value={payload.specificdisability || ''}
                    id="specificdisability"
                    name="specificdisability"
                    type="text"
                    onChange={formChangeHandler}
                    color={errorPayload?.specificdisability ? "failure" : undefined}
                    helperText={errorPayload?.specificdisability && <span className="font-medium text-red-600">{errorPayload.specificdisability.message}</span>}
                />
            </div>
        </>
    );
});

export default MedicalProblemForm;