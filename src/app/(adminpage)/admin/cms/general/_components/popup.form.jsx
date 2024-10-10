'use client'
import {
    Label,
    Tabs,
    TextInput,
    Radio
} from "flowbite-react";
import PopupInputForm from './popupinput.form';

const PopupMainForm = ({payload, formChangeHandler}) => {
    return <>
        <div className="mt-20 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
            Popup Form
        </div>
        <div className="max-w-full">
            <Tabs aria-label="Default tabs" variant="default">
                <Tabs.Item active title="Indonesia">
                    <div className="mb-4">
                        <PopupInputForm title="Title" name="popuptitle" payload={payload} formChangeHandler={formChangeHandler} language={"ID"}/>
                    </div>
                    <div className="mt-4 mb-4">
                        <PopupInputForm title="Subtitle 1" name="popupsubtitle" payload={payload} formChangeHandler={formChangeHandler} language={"ID"}/>
                    </div>
                    <div className="mt-4 mb-4">
                        <PopupInputForm title="Subtitle 2" name="popupsubtitle2" payload={payload} formChangeHandler={formChangeHandler} language={"ID"}/>
                    </div>
                    <div className="mt-4 mb-4">
                        <PopupInputForm title="Button Text" name="buttontext" payload={payload} formChangeHandler={formChangeHandler} language={"ID"}/>
                    </div>
                </Tabs.Item>
                <Tabs.Item active title="English">
                <div className="mb-4">
                        <PopupInputForm title="Title" name="popuptitle" payload={payload} formChangeHandler={formChangeHandler} language={"EN"}/>
                    </div>
                    <div className="mt-4 mb-4">
                        <PopupInputForm title="Subtitle 1" name="popupsubtitle" payload={payload} formChangeHandler={formChangeHandler} language={"EN"}/>
                    </div>
                    <div className="mt-4 mb-4">
                        <PopupInputForm title="Subtitle 2" name="popupsubtitle2" payload={payload} formChangeHandler={formChangeHandler} language={"EN"}/>
                    </div>
                    <div className="mt-4 mb-4">
                        <PopupInputForm title="Button Text" name="buttontext" payload={payload} formChangeHandler={formChangeHandler} language={"EN"}/>
                    </div>
                </Tabs.Item>
            </Tabs>
            <div className="mt-4 mb-4">
                <div className="mb-2 block">
                    <Label value="Button Link"/>
                </div>
                <TextInput name={`buttonlink`} value={payload[`buttonlink`]} onChange={formChangeHandler}/>
            </div>
            <div className="mt-4 mb-4">
                <div className="mb-2 block">
                    <Label value="Link"/>
                </div>
                <TextInput name={`link`} value={payload[`link`]} onChange={formChangeHandler}/>
            </div>
            <div className="mt-4">
                <div className="mb-2 block">
                    <Label value="Show Popup"/>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Radio checked={payload?.showpopup == 'true'} id="showpopuptrue" name="showpopup" value="true" onChange={formChangeHandler}/>
                    <Label className="mr-4">True</Label>
                    <Radio checked={payload?.showpopup == 'false'} id="showpopupfalse" name="showpopup" value="false" onChange={formChangeHandler}/>
                    <Label className="mr-4">False</Label>
                </div>
            </div>
        </div>
    </>
};

export default PopupMainForm;