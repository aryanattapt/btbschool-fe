'use client'

import { 
    Checkbox,
    HR,
    Label, 
    Radio,
    TextInput
} from "flowbite-react";

const MedicalProblemForm = () => {
    return <>
        <div>
            <HR.Text text="Medical Problem"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="alergicoption" value="Does your child have an allergy to any following?"/>
            </div>
            <div className="flex items-center gap-2" id="alergicoption">
                <Radio id="foodalergyoption" name="alergicoption" value="a particular food item (e.g. shrim)"/>
                <Label htmlFor="foodalergyoption">a particular food item (e.g. shrim)</Label>
                <Radio id="insectstringoption" name="alergicoption" value="insect string"/>
                <Label htmlFor="insectstringoption">insect string</Label>
                <Radio id="penicilinoption" name="alergicoption" value="penicilin"/>
                <Label htmlFor="penicilinoption">penicilin</Label>
                <Radio id="otheroption" name="alergicoption" value="other"/>
                <Label htmlFor="otheroption">other</Label>
            </div>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="natureofallergy" value="Please specify the nature of the allergy (doctor's certificate required)"/>
            </div>
            <TextInput id="natureofallergy" type="text"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="limitationofphysical" value="Does your child suffer any limitation on physical activity?"/>
            </div>
            <div className="flex items-center gap-2" id="limitationofphysical">
                <Radio id="limitationofphysicalno" name="limitationofphysical" value="No"/>
                <Label htmlFor="limitationofphysicalno">No</Label>
                <Radio id="limitationofphysicalyes" name="limitationofphysical" value="Yes"/>
                <Label htmlFor="limitationofphysicalyes">Yes, please explain</Label>
                <TextInput id="limitationofphysicalexplain" type="text"/>
            </div>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="surgeryoperation" value="Has your child had any surgery or operation?"/>
            </div>
            <div className="flex items-center gap-2" id="surgeryoperation">
                <Radio id="surgeryoperationno" name="surgeryoperation" value="No"/>
                <Label htmlFor="surgeryoperationno">No</Label>
                <Radio id="surgeryoperationyes" name="surgeryoperation" value="Yes"/>
                <Label htmlFor="surgeryoperationyes">Yes, please explain</Label>
                <TextInput id="surgeryoperationexplain" type="text"/>
            </div>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="medicalproblemoptions" value="Has your child had or contracted any of the following medical problem?"/>
            </div>
            <div className="flex items-center gap-2" id="medicalproblemoptions">
                <Checkbox id="asthmaoptions" name="medicalproblemoptions"/>
                <Label htmlFor="asthmaoptions">Asthma</Label>
                <Checkbox id="hivoptions" name="medicalproblemoptions"/>
                <Label htmlFor="hivoptions">HIV</Label>
                <Checkbox id="diabetesoptions" name="medicalproblemoptions"/>
                <Label htmlFor="diabetesoptions">Diabetes</Label>
            </div>
        </div>
        <div>
            <HR.Text text="Specific Disability"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="specificdisability" value="Please explain whether your child has specific disability (emotional, cognitive) that could affect her/his ability to learn"/>
            </div>
            <TextInput id="specificdisability" type="text"/>
        </div>
    </>
}

export default MedicalProblemForm;