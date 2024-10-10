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

const CareerApplyForm = ({params}) => {
    const [isLoading, setIsLoading] = useState(null);
    const [careerPayload, setCareerPayload] = useState({"careerid": params.id});

    const [nationalityPayload, setNationalityPayload] = useState([]);

    /* State google recaptcha */
    const [captchaValue, setCaptchaValue] = useState(null);
    const [isRecaptchaValidated, setIsRecaptchaValidated] = useState(false);
    const captchaRef = useRef();

    const formChangeHandler = (e) => {
        const { name, value, type, files } = e.target;
        console.log(name);
        console.log(convertPhoneNumberToInternational(value));
        if(name === 'phoneno'){
            console.log('masuk');
            setCareerPayload(prevState => ({
                ...prevState,
                [name]: convertPhoneNumberToInternational(value),
            }));
        } else if(type == 'file'){
            Object.keys(files).map((val) => {
                setCareerPayload(prevState => ({
                    ...prevState,
                    [name]: prevState[name] ? [...prevState[name], files[val]] : [files[val]]
                }));
            });
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

    const submitHandler = async (e) => {
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
            let errorMessage = err?.message || 'Something went wrong!';
            if (typeof err === "string") {
                errorMessage = err
            } else if(typeof err === "object" && Object.keys(err.error).length > 0) {
                errorMessage = "";
                Object.keys(err.error).map(val => {
                    errorMessage += err.error[val]?.message + '<br/>'
                })
            }

            Swal.fire({
                allowOutsideClick: false,
                title: "Career Submission Notification!",
                html: errorMessage,
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
                <TextInput id="firstname" name="firstname" type="text" value={careerPayload.firstname || ''} autoFocus={true} onChange={formChangeHandler}/>
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
                <Textarea id="additionalInfo" name="additionalInfo" value={careerPayload.additionalInfo || ''} required rows={4} onChange={formChangeHandler} />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email" value="Email" />
                </div>
                <TextInput icon={HiMail} type="email" id="email" name="email" value={careerPayload.email || ''} onChange={formChangeHandler}/>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="phoneno" value="Nomor Telepon" />
                </div>
                <TextInput id="phoneno" name="phoneno" type="text" value={careerPayload.phoneno || ''} onChange={formChangeHandler}/>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="country" value="Negara"/>
                </div>
                <Select id="country" name="country" required value={careerPayload.country || ''} onChange={formChangeHandler}>
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
                <Textarea id="currentaddress" name="currentaddress" required rows={4} value={careerPayload.currentaddress || ''} onChange={formChangeHandler} />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="cvFile" value="Unggah CV" />
                </div>
                <FileInput accept=".pdf" id="cvFile" name="cvFile" helperText="Ukuran Maksimum 2MB. Format PDF" onChange={formChangeHandler}/>
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