'use client'
import { Label } from "flowbite-react";
import CustomEditor from "../../../../../_components/customformeditor";

const PopupForm = ({formChangeHandler, language, payload, name, title}) => {
    return <>
        <div>
            <div className="mb-2 block">
                <Label value={`${title} (${language})`}/>
            </div>
            <CustomEditor onChange={formChangeHandler} id={name} name={`${name}[${language}]`} value={payload[`${name}[${language}]`]}/>
        </div>
    </>
}

export default PopupForm;