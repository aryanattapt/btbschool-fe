'use client'

import { 
    Blockquote, 
    Button, 
    FileInput, 
    Label,
    Select,
    Textarea,
    TextInput
} from "flowbite-react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { HiMail } from "react-icons/hi";

const CareerApplyForm = () => {
    const params = useParams();
    const [isLoading, setIsLoading] = useState(null);
    const [careerPayload, setCareerPayload] = useState({});

    const formChangeHandler = (e) => {
        const { name, value, type, files } = e.target;
        if(type == 'file'){
            setCareerPayload(prevState => ({
                ...prevState,
                [name]: files
            }));
        } else{
            setCareerPayload(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const submitHandler = (e) => {
        setIsLoading(true);
        console.log(careerPayload);

        /* Call API in here... */
        
        setIsLoading(false);
    }

    return <>
        <div className="max-w-full grid gap-3">
            <Blockquote>
                Form Pendaftaran Kerja
            </Blockquote>
            <div>
                <small className="text-gray-500 dark:text-gray-400">
                    Harap lengkapi formulir aplikasi di bawah ini untuk mendaftarkan diri anda.
                </small>
            </div>
            <div>
                <div className="mb-3 block">
                    <Label value="Posisi yang dilamar"/>
                    <Label value=":"/>
                    <Label value="Test"/>
                </div>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="firstname" value="Nama Depan"/>
                </div>
                <TextInput id="firstname" name="firstname" type="text" autoFocus={true} onChange={formChangeHandler}/>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="lastname" value="Nama Belakang" />
                </div>
                <TextInput id="lastname" name="lastname" type="text" onChange={formChangeHandler}/>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="additionalInfo" value="Informasi Tambahan" />
                </div>
                <Textarea id="additionalInfo" name="additionalInfo" required rows={4} onChange={formChangeHandler} />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email" value="Email" />
                </div>
                <TextInput icon={HiMail} type="email" id="email" name="email" onChange={formChangeHandler}/>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="phoneno" value="Nomor Telepon" />
                </div>
                <TextInput id="phoneno" name="phoneno" type="text" addon="+62" onChange={formChangeHandler}/>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="country" value="Negara"/>
                </div>
                <Select id="country" name="country" required defaultValue={""} onChange={formChangeHandler}>
                    <option value="">Select Country</option>
                    <option value="ID">Indonesia</option>
                </Select>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="currentaddress" value="Lokasi Sekarang" />
                </div>
                <Textarea id="currentaddress" name="currentaddress" required rows={4} onChange={formChangeHandler} />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="cvFile" value="Unggah CV" />
                </div>
                <FileInput accept=".pdf" id="cvFile" name="cvFile" helperText="Ukuran Maksimum 2MB. Format PDF" onChange={formChangeHandler}/>
            </div>
            <div>
                <Button type="submit" className="w-full lg:w-auto" disabled={isLoading} onClick={submitHandler}>
                    {
                        isLoading ? <>
                            <Spinner aria-label="Spinner button example" size="sm" />
                            <span className="pl-3">Please Wait...</span>
                        </> : <>
                            Kirim  
                        </>
                    }
                </Button>
            </div>
        </div>
    </>
};

export default CareerApplyForm;