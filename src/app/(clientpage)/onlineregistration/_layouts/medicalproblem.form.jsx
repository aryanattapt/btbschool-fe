'use client'
import { 
    Checkbox,
    HR,
    Label, 
    Radio,
    TextInput
} from "flowbite-react";
import { useState } from "react";

const MedicalProblemForm = ({formChangeHandler, payload}) => {
    const [isShowlimitationofphysicalexplain, setIsShowlimitationofphysicalexplain] = useState(false);
    const [isShowsurgeryoperationexplain, setIsShowsurgeryoperationexplain] = useState(false);

    const customOnChangeHandler = (e) => {
        formChangeHandler(e);
        const { name, value } = e.target;
        if(name == 'limitationofphysical'){
            setIsShowlimitationofphysicalexplain(value == 'Yes');
        } if(name == 'surgeryoperation'){
            setIsShowsurgeryoperationexplain(value == 'Yes');
        }
    }

    return <>
        <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
            Medical Problem
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block md:w-72">
                <Label htmlFor="alergicoption" value="Does your child have an allergy to any following?"/>
            </div>
            <div className="md:w-full flex items-center gap-2" id="alergicoption">
                <Radio checked={payload.alergicoption == 'a particular food item (e.g. shrim)'} id="foodalergyoption" name="alergicoption" value="a particular food item (e.g. shrim)" onChange={formChangeHandler}/>
                <Label htmlFor="foodalergyoption">a particular food item (e.g. shrim)</Label>
                <Radio checked={payload.alergicoption == 'insect string'} id="insectstringoption" name="alergicoption" value="insect string" onChange={formChangeHandler}/>
                <Label htmlFor="insectstringoption">insect string</Label>
                <Radio checked={payload.alergicoption == 'penicilin'} id="penicilinoption" name="alergicoption" value="penicilin" onChange={formChangeHandler}/>
                <Label htmlFor="penicilinoption">penicilin</Label>
                <Radio checked={payload.alergicoption == 'other'} id="otheroption" name="alergicoption" value="other" onChange={formChangeHandler}/>
                <Label htmlFor="otheroption">other</Label>
            </div>
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block md:w-72">
                <Label htmlFor="natureofallergy" value="Please specify the nature of the allergy (doctor's certificate required)"/>
            </div>
            <TextInput className="md:w-full" value={payload.natureofallergy || ''} id="natureofallergy" name="natureofallergy" type="text" onChange={formChangeHandler}/>
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block md:w-72">
                <Label htmlFor="limitationofphysical" value="Does your child suffer any limitation on physical activity?"/>
            </div>
            <div className="md:w-full flex items-center gap-2" id="limitationofphysical">
                <Radio checked={payload.limitationofphysical == 'No'} id="limitationofphysicalno" name="limitationofphysical" value="No" onChange={customOnChangeHandler}/>
                <Label htmlFor="limitationofphysicalno">No</Label>
                <Radio checked={payload.limitationofphysical == 'Yes'} id="limitationofphysicalyes" name="limitationofphysical" value="Yes" onChange={customOnChangeHandler}/>
                <Label htmlFor="limitationofphysicalyes">Yes, please explain</Label>
                <TextInput value={payload.limitationofphysicalexplain || ''} id="limitationofphysicalexplain" name="limitationofphysicalexplain"  type="text" onChange={formChangeHandler} className={isShowlimitationofphysicalexplain ? 'block	' : 'hidden'}/>
            </div>
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block md:w-72">
                <Label htmlFor="surgeryoperation" value="Has your child had any surgery or operation?"/>
            </div>
            <div className="md:w-full flex items-center gap-2" id="surgeryoperation">
                <Radio checked={payload.surgeryoperation == 'No'} id="surgeryoperationno" name="surgeryoperation" value="No" onChange={customOnChangeHandler}/>
                <Label htmlFor="surgeryoperationno">No</Label>
                <Radio checked={payload.surgeryoperation == 'Yes'} id="surgeryoperationyes" name="surgeryoperation" value="Yes" onChange={customOnChangeHandler}/>
                <Label htmlFor="surgeryoperationyes">Yes, please explain</Label>
                <TextInput value={payload.surgeryoperationexplain || ''} id="surgeryoperationexplain" name="surgeryoperationexplain" type="text" onChange={formChangeHandler} className={isShowsurgeryoperationexplain ? 'block	' : 'hidden'}/>
            </div>
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block md:w-72">
                <Label htmlFor="medicalproblemoptions" value="Has your child had or contracted any of the following medical problem?"/>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4" id="medicalproblemoptions">
                <div className="flex items-center gap-2">
                    <Checkbox checked={payload.medicalproblemoptions?.includes('asthma')} id="asthmaoptions" name="medicalproblemoptions" value="asthma" onChange={formChangeHandler}/>
                    <Label htmlFor="asthmaoptions">Asthma</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox checked={payload.medicalproblemoptions?.includes('eczema')} id="eczemaoptions" name="medicalproblemoptions" value="eczema" onChange={formChangeHandler}/>
                    <Label htmlFor="eczemaoptions">Eczema</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox checked={payload.medicalproblemoptions?.includes('convulsions')} id="convulsionsoptions" name="medicalproblemoptions" value="convulsions" onChange={formChangeHandler}/>
                    <Label htmlFor="convulsionsoptions">Convulsions</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox checked={payload.medicalproblemoptions?.includes('chicken pox')} id="chickenpoxoptions" name="medicalproblemoptions" value="chicken pox" onChange={formChangeHandler}/>
                    <Label htmlFor="chickenpoxoptions">Chicken pox</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox checked={payload.medicalproblemoptions?.includes('german measles')} id="germanmeaslesoptions" name="medicalproblemoptions" value="german measles" onChange={formChangeHandler}/>
                    <Label htmlFor="germanmeaslesoptions">German measles</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox checked={payload.medicalproblemoptions?.includes('heart problems')} id="heartproblemsoptions" name="medicalproblemoptions" value="heart problems" onChange={formChangeHandler}/>
                    <Label htmlFor="heartproblemsoptions">Heart problems</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox checked={payload.medicalproblemoptions?.includes('tuberculosis')} id="tuberculosisoptions" name="medicalproblemoptions" value="tuberculosis" onChange={formChangeHandler}/>
                    <Label htmlFor="tuberculosisoptions">Tuberculosis</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox checked={payload.medicalproblemoptions?.includes('scarlet fever')} id="scarletfeveroptions" name="medicalproblemoptions" value="scarlet fever" onChange={formChangeHandler}/>
                    <Label htmlFor="scarletfeveroptions">Scarlet fever</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox checked={payload.medicalproblemoptions?.includes('mumps')} id="mumpsoptions" name="medicalproblemoptions" value="mumps" onChange={formChangeHandler}/>
                    <Label htmlFor="mumpsoptions">Mumps</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox checked={payload.medicalproblemoptions?.includes('epilepsy')} id="epilepsyoptions" name="medicalproblemoptions" value="epilepsy" onChange={formChangeHandler}/>
                    <Label htmlFor="epilepsyoptions">Epilepsy</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox checked={payload.medicalproblemoptions?.includes('measles')} id="measlesoptions" name="medicalproblemoptions" value="measles" onChange={formChangeHandler}/>
                    <Label htmlFor="measlesoptions">Measles</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox checked={payload.medicalproblemoptions?.includes('diabetes')} id="diabetesoptions" name="medicalproblemoptions" value="diabetes" onChange={formChangeHandler}/>
                    <Label htmlFor="diabetesoptions">Diabetes</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox checked={payload.medicalproblemoptions?.includes('nightmares')} id="nightmaresoptions" name="medicalproblemoptions" value="nightmares" onChange={formChangeHandler}/>
                    <Label htmlFor="nightmaresoptions">Nightmares</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox checked={payload.medicalproblemoptions?.includes('nosebleeds')} id="nosebleedsoptions" name="medicalproblemoptions" value="nosebleeds" onChange={formChangeHandler}/>
                    <Label htmlFor="nosebleedsoptions">Nosebleeds</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox checked={payload.medicalproblemoptions?.includes('hiv')} id="hivoptions" name="medicalproblemoptions" value="hiv" onChange={formChangeHandler}/>
                    <Label htmlFor="hivoptions">HIV</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox checked={payload.medicalproblemoptions?.includes('autism')} id="autismoptions" name="medicalproblemoptions" value="autism" onChange={formChangeHandler}/>
                    <Label htmlFor="autismoptions">Autism</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox checked={payload.medicalproblemoptions?.includes('whooping cough')} id="whoopingcoughoptions" name="medicalproblemoptions" value="whooping cough" onChange={formChangeHandler}/>
                    <Label htmlFor="whoopingcoughoptions">Whooping cough</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox checked={payload.medicalproblemoptions?.includes('rheumatic fever')} id="rheumaticfeveroptions" name="medicalproblemoptions" value="rheumatic fever" onChange={formChangeHandler}/>
                    <Label htmlFor="rheumaticfeveroptions">Rheumatic fever</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox checked={payload.medicalproblemoptions?.includes('visual/eye')} id="visualeyeoptions" name="medicalproblemoptions" value="visual/eye" onChange={formChangeHandler}/>
                    <Label htmlFor="visualeyeoptions">Visual/ Eye</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox checked={payload.medicalproblemoptions?.includes('kidney/urinary infection')} id="kidneyurinaryinfectionoptions" name="medicalproblemoptions" value="kidney/urinary infection" onChange={formChangeHandler}/>
                    <Label htmlFor="kidneyurinaryinfectionoptions">Kidney/ Urinary infection</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox checked={payload.medicalproblemoptions?.includes('frequent headaches')} id="frequentheadachesoptions" name="medicalproblemoptions" value="frequent headaches" onChange={formChangeHandler}/>
                    <Label htmlFor="frequentheadachesoptions">Frequent headaches</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox checked={payload.medicalproblemoptions?.includes('hearing difficulties')} id="hearingdifficultiesoptions" name="medicalproblemoptions" value="hearing difficulties" onChange={formChangeHandler}/>
                    <Label htmlFor="hearingdifficultiesoptions">Hearing difficulties</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox checked={payload.medicalproblemoptions?.includes('persistent ear infections')} id="persistentearinfectionsoptions" name="medicalproblemoptions" value="persistent ear infections" onChange={formChangeHandler}/>
                    <Label htmlFor="persistentearinfectionsoptions">Persistent ear infections</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox checked={payload.medicalproblemoptions?.includes('persistent chest infections')} id="persistentchestinfectionsoptions" name="medicalproblemoptions" value="persistent chest infections" onChange={formChangeHandler}/>
                    <Label htmlFor="persistentchestinfectionsoptions">Persistent chest infections</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox checked={payload.medicalproblemoptions?.includes('Attention Deficit Disorder (ADD)')} id="attentiondeficitsyndromeoptions" name="medicalproblemoptions" value="Attention Deficit Disorder (ADD)" onChange={formChangeHandler}/>
                    <Label htmlFor="attentiondeficitsyndromeoptions">Attention Deficit Disorder (ADD)</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox checked={payload.medicalproblemoptions?.includes('Attention Deficit Hyperactivity Disorder (ADHD)')} id="attentiondeficitsyndromeoptions" name="medicalproblemoptions" value="Attention Deficit Hyperactivity Disorder (ADHD)" onChange={formChangeHandler}/>
                    <Label htmlFor="attentiondeficitsyndromeoptions">Attention Deficit Hyperactivity Disorder (ADHD)</Label>
                </div>
            </div>
        </div>
        <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
            Specific Disability
        </div>
        <div className="md:inline-flex">
            <div className="mb-2 block md:w-72">
                <Label htmlFor="specificdisability" value="Please explain whether your child has specific disability (emotional, cognitive) that could affect her/his ability to learn"/>
            </div>
            <TextInput className="w-full" value={payload.specificdisability || ''} id="specificdisability" name="specificdisability" type="text" onChange={formChangeHandler}/>
        </div>
    </>
}

export default MedicalProblemForm;