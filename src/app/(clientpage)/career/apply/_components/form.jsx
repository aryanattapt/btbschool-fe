'use client'
import { 
    Blockquote, 
    Button, 
    FileInput, 
    Label,
    Select,
    Textarea,
    TextInput,
    Spinner
} from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { HiMail } from "react-icons/hi";
import { SubmitCareer, ValidateSubmitCareer } from '../../../../../../services/career.service';
import { UploadAttachment } from '../../../../../../services/attachment.service';
import Swal from "sweetalert2";
import {
    convertPhoneNumberToInternational
  } from "../../../../../../helpers/string.helper";
import Recaptcha from '../../../../_components/recaptcha';
import {
  ValidateGoogleRecaptcha
} from '../../../../../../services/googlerecaptcha.service'
import { GetCountry } from '../../../../../../services/country.service'

const labelTemplate = {
    firstname: 'First Name',
    additionalInfo: 'Additional Info',
    email: 'Email',
    phoneno: 'Phone No',
    country: 'Country',
    currentaddress: 'Current Address',
    cvFile: 'CV File'
}

const CareerApplyForm = ({params}) => {
    const [errorPayload, setErrorPayload] = useState({
        firstname: '',
        additionalInfo: '',
        email: '',
        phoneno: '',
        country: '',
        currentaddress: '',
        cvFile: ''
    });
    const [isLoading, setIsLoading] = useState(null);
    const [careerPayload, setCareerPayload] = useState({"careerid": params.id});
    const [nationalityPayload, setNationalityPayload] = useState([]);

    /* State google recaptcha */
    const [captchaValue, setCaptchaValue] = useState(null);
    const [isRecaptchaValidated, setIsRecaptchaValidated] = useState(false);
    const captchaRef = useRef();

    const fileInputRef = useRef(null);
    const clearFile = (name) => {
        fileInputRef.current.value = null;
        setCareerPayload(prevState => ({
            ...prevState,
            [name]: null,
        }));
    }

    const makeFormValid = (name) => { 
        if(errorPayload[name]){
            setErrorPayload(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const formChangeHandler = (e) => {
        const { name, value, type, files } = e.target;
        if(name === 'phoneno'){
            makeFormValid('phoneno')
            setCareerPayload(prevState => ({
                ...prevState,
                [name]: convertPhoneNumberToInternational(value),
            }));
        } else if(type == 'file'){
            if(files.length > 0){
                makeFormValid('cvFile')
                const validFiles = [];
                const maxFileSize = 5 * 1024 * 1024;
                Object.keys(files).forEach((key) => {
                    const file = files[key];
                    if (file.type === 'application/pdf') {
                        if (file.size <= maxFileSize) {
                            validFiles.push(file);
                        } else {
                            clearFile(name);
                            alert(`${file.name} exceeds the maximum size of 5 MB.`);
                        }
                    } else {
                        clearFile(name);
                        alert(`${file.name} is not a valid PDF file.`);
                    }
                });
    
                if (validFiles.length > 0) {
                    setCareerPayload(prevState => ({
                        ...prevState,
                        [name]: prevState[name] ? [...prevState[name], ...validFiles] : validFiles
                    }));
                }
            } else {
                setCareerPayload(prevState => ({
                    ...prevState,
                    cvFile: []
                }))
            }
        } else if(type == 'checkbox'){
            if(e.target.checked){
                setCareerPayload(prevState => ({
                    ...prevState,
                    [name]: prevState[name] ? [...prevState[name], value] : [value]
                }));
            } else{
                setCareerPayload(prevState => ({
                    ...prevState,
                    [name]: prevState[name].filter(val => val !== value)
                }));
            }
        }
        else{
            makeFormValid(name)
            setCareerPayload(prevState => ({
                ...prevState,
                [name]:  value
            }));
        }
    };

    useEffect(() => {
        (async () => {
            const collectedPromise = [];
            collectedPromise.push(GetCountry());

            try {
                const [country] = await Promise.all(collectedPromise);
                setNationalityPayload(country);
            } catch (error) {console.log(error);}
        })();
    }, []);

    const submitValidation = () => {
        let flag = true
        
        Object.keys(errorPayload).forEach((key) => {
            if(key === 'cvFile' && careerPayload?.['cvFile']?.length === 0){
                flag = false
                errorPayload[key] = `${labelTemplate[key]} is required`
            } else if (!careerPayload?.[key]){
                flag = false
                errorPayload[key] = `${labelTemplate[key]} is required`
            }
            setErrorPayload({...errorPayload})
        })
        return flag
    }

    const setErrorMessageFromApi = (err) => {
        Object.keys(err).forEach((key) => {
            setErrorPayload((prev) => ({
                ...prev,
                [key] : err[key]['message'].replace(key, labelTemplate[key])
            }))
        })
    }

    const submitHandler = async (e) => {
        if(!submitValidation()) return Swal.fire('Error', 'Please fill all the error field', 'error')
        if(!captchaValue) return Swal.fire('Error', 'Please make sure you are not a Robot by clicking the Captcha', 'error')
        try {
            setIsLoading(true);
            await ValidateSubmitCareer(careerPayload);
            if (!isRecaptchaValidated) {
                await ValidateGoogleRecaptcha(captchaValue);
                setIsRecaptchaValidated(true);
            }
            
            const formData = new FormData();
            careerPayload?.cvFile?.forEach((val) => {
                formData.append('cvFile', val);
            });

            const res = await UploadAttachment('career', formData);
            const careerSubmitPayload = { ...careerPayload };
            careerSubmitPayload.attachment = res.data;
            delete careerSubmitPayload.cvFile;
    
            await SubmitCareer(careerSubmitPayload);
    
            Swal.fire({
                allowOutsideClick: false,
                title: 'Career Submission Notification!',
                text: "Success submit Career! Refreshing page in 5 seconds...",
                icon: 'info',
            });

            setTimeout(() => {
                window.location.href = '/career';
            }, 5000);
        } catch (err) {
            console.log({err})
            // setErrorPayload(err.error);
            setErrorMessageFromApi(err.error)
            Swal.fire({
                allowOutsideClick: false,
                title: "Career Submission Notification!",
                html: err.message,
                icon: "error",
            });
        } finally {
            setIsLoading(false);
        }
    };    

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
            {/* <div>
                <div className="mb-3 block">
                    <Label value="Posisi yang dilamar"/>
                    <Label value=":"/>
                    <Label value="Test"/>
                </div>
            </div> */}
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="firstname" value="Nama Depan"/>
                </div>
                <TextInput id="firstname" name="firstname" type="text" value={careerPayload.firstname || ''} autoFocus={true} onChange={formChangeHandler} 
                    color={errorPayload?.firstname && 'failure'}
                    helperText={
                      errorPayload?.firstname && <span className="font-medium">{errorPayload?.firstname}</span>
                    }     
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="lastname" value="Nama Belakang" />
                </div>
                <TextInput id="lastname" name="lastname" type="text" value={careerPayload.lastname || ''} onChange={formChangeHandler}/>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="additionalInfo" value="Informasi Tambahan" />
                </div>
                <Textarea id="additionalInfo" name="additionalInfo" value={careerPayload.additionalInfo || ''} required rows={4} onChange={formChangeHandler} 
                    color={errorPayload?.additionalInfo && 'failure'}
                    helperText={
                      errorPayload?.additionalInfo && <span className="font-medium">{errorPayload?.additionalInfo}</span>
                    }
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email" value="Email" />
                </div>
                <TextInput icon={HiMail} type="email" id="email" name="email" value={careerPayload.email || ''} onChange={formChangeHandler}
                    color={errorPayload?.email && 'failure'}
                    helperText={
                      errorPayload?.email && <span className="font-medium">{errorPayload?.email}</span>
                    }
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="phoneno" value="Nomor Telepon" />
                </div>
                <TextInput id="phoneno" name="phoneno" type="text" value={careerPayload.phoneno || ''} onChange={formChangeHandler}
                    color={errorPayload?.phoneno && 'failure'}
                    helperText={
                      errorPayload?.phoneno && <span className="font-medium">{errorPayload?.phoneno}</span>
                    }
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="country" value="Negara"/>
                </div>
                <Select id="country" name="country" required value={careerPayload.country || ''} onChange={formChangeHandler} 
                    color={errorPayload?.country && 'failure'}
                    helperText={
                      errorPayload?.country && <span className="font-medium">{errorPayload?.country}</span>
                    }
                >
                    <option value="">Select Country</option>
                    {
                        nationalityPayload.map((val, idx) => {
                            return <option key={idx} value={`${val}`}>{val}</option>
                        })
                    }
                </Select>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="currentaddress" value="Lokasi Sekarang" />
                </div>
                <Textarea id="currentaddress" name="currentaddress" required rows={4} value={careerPayload.currentaddress || ''} onChange={formChangeHandler} 
                    color={errorPayload?.currentaddress && 'failure'}
                    helperText={
                      errorPayload?.currentaddress && <span className="font-medium">{errorPayload?.currentaddress}</span>
                    }
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="cvFile" value="Unggah CV" />
                </div>
                <FileInput value={careerPayload?.cvFile?.filename} accept=".pdf" id="cvFile" name="cvFile" ref={fileInputRef} onChange={formChangeHandler}
                    color={errorPayload?.cvFile && 'failure'}
                    helperText={
                      errorPayload?.cvFile 
                        ? <span className="font-medium">{errorPayload?.currentaddress}</span>
                        : "Ukuran Maksimum 5 MB. Format PDF"
                    }
                />
            </div>
            <div>
                <Recaptcha
                    recaptchaRef={captchaRef}
                    handleRecaptchaChange={(value) => setCaptchaValue(value)}
                    handleRecaptchaExpired={() => {setCaptchaValue(null); setIsRecaptchaValidated(false)}}
                />
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