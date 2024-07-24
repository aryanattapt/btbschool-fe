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
        <div>
            <HR.Text text="Medical Problem"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="alergicoption" value="Does your child have an allergy to any following?"/>
            </div>
            <div className="flex items-center gap-2" id="alergicoption">
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
        <div>
            <div className="mb-2 block">
                <Label htmlFor="natureofallergy" value="Please specify the nature of the allergy (doctor's certificate required)"/>
            </div>
            <TextInput value={payload.natureofallergy || ''} id="natureofallergy" name="natureofallergy" type="text" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="limitationofphysical" value="Does your child suffer any limitation on physical activity?"/>
            </div>
            <div className="flex items-center gap-2" id="limitationofphysical">
                <Radio checked={payload.limitationofphysical == 'No'} id="limitationofphysicalno" name="limitationofphysical" value="No" onChange={customOnChangeHandler}/>
                <Label htmlFor="limitationofphysicalno">No</Label>
                <Radio checked={payload.limitationofphysical == 'Yes'} id="limitationofphysicalyes" name="limitationofphysical" value="Yes" onChange={customOnChangeHandler}/>
                <Label htmlFor="limitationofphysicalyes">Yes, please explain</Label>
                <TextInput value={payload.limitationofphysicalexplain || ''} id="limitationofphysicalexplain" name="limitationofphysicalexplain"  type="text" onChange={formChangeHandler} className={isShowlimitationofphysicalexplain ? 'block	' : 'hidden'}/>
            </div>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="surgeryoperation" value="Has your child had any surgery or operation?"/>
            </div>
            <div className="flex items-center gap-2" id="surgeryoperation">
                <Radio checked={payload.surgeryoperation == 'No'} id="surgeryoperationno" name="surgeryoperation" value="No" onChange={customOnChangeHandler}/>
                <Label htmlFor="surgeryoperationno">No</Label>
                <Radio checked={payload.surgeryoperation == 'Yes'} id="surgeryoperationyes" name="surgeryoperation" value="Yes" onChange={customOnChangeHandler}/>
                <Label htmlFor="surgeryoperationyes">Yes, please explain</Label>
                <TextInput value={payload.surgeryoperationexplain || ''} id="surgeryoperationexplain" name="surgeryoperationexplain" type="text" onChange={formChangeHandler} className={isShowsurgeryoperationexplain ? 'block	' : 'hidden'}/>
            </div>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="medicalproblemoptions" value="Has your child had or contracted any of the following medical problem?"/>
            </div>
            <div className="flex items-center gap-2" id="medicalproblemoptions">
                <Checkbox checked={payload.medicalproblemoptions == 'asthma'} id="asthmaoptions" name="medicalproblemoptions" value="asthma" onChange={formChangeHandler}/>
                <Label htmlFor="asthmaoptions">Asthma</Label>
                <Checkbox checked={payload.medicalproblemoptions == 'hiv'} id="hivoptions" name="medicalproblemoptions" value="hiv" onChange={formChangeHandler}/>
                <Label htmlFor="hivoptions">HIV</Label>
                <Checkbox checked={payload.medicalproblemoptions == 'diabetes'} id="diabetesoptions" name="medicalproblemoptions" value="diabetes" onChange={formChangeHandler}/>
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
            <TextInput value={payload.specificdisability || ''} id="specificdisability" name="specificdisability" type="text" onChange={formChangeHandler}/>
        </div>
    </>
}

export default MedicalProblemForm;