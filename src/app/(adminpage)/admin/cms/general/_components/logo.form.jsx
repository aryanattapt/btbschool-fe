'use client'
import { 
    FileInput, 
    Label 
} from "flowbite-react";

const LogoForm = ({formChangeHandler, language}) => {
    return <>
        <div className="w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
            {`Logo (${language})`}
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor={`logo[${language}]`} value="" />
            </div>
            <FileInput accept="image/*" multiple={true} id={`logo[${language}]`} name={`logo[${language}]`} helperText="Ukuran Maksimum 2MB. Format Gambar" onChange={formChangeHandler}/>
        </div>
    </>
}

export default LogoForm;