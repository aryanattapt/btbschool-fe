'use client'
import {
    Label, 
    Datepicker,
    Button,
    Spinner,
    Tabs
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
                </Tabs.Item>
            </Tabs>
        </div>
    </>
};

export default PopupMainForm;