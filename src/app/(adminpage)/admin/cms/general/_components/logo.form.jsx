'use client'
import { 
    FileInput, 
    Label 
} from "flowbite-react";
import { useRef } from "react";

const LogoForm = ({formChangeHandler, language}) => {
    const fileInputRef = useRef(null);

    const clearFile = () => {
        fileInputRef.current.value = null;
    }

    const inputChangeHandler = (e) => {
        const { name, files } = e.target;
        const validFiles = [];
        const maxFileSize = 20 * 1024 * 1024;
        Object.keys(files).forEach((key) => {
            const file = files[key];
            if (file.type.startsWith('image/')) {
                if (file.size <= maxFileSize) {
                    validFiles.push(file);
                } else {
                    clearFile(name);
                    alert(`${file.name} exceeds the maximum size of 5 MB.`);
                }
            } else {
                clearFile(name);
                alert(`${file.name} is not a valid image file.`);
            }
        });

        if (validFiles.length > 0) {
            formChangeHandler(e);
        }
    }

    return <>
        <div className="w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
            {`Logo (${language})`}
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor={`logo[${language}]`} value="" />
            </div>
            <FileInput accept="image/*" multiple={true} id={`logo[${language}]`} ref={fileInputRef} name={`logo[${language}]`} helperText="Ukuran Maksimum 5 MB. Format Gambar(.jpg) dengan menggunakan aspect ratio wide Misal 1920x1080px" onChange={inputChangeHandler}/>
        </div>
    </>
}

export default LogoForm;