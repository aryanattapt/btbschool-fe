'use client'

import { 
    Blockquote,
    Button,
    Checkbox,
    Datepicker,
    FileInput,
    Label, 
    Radio, 
    TextInput 
} from "flowbite-react";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { HiMail } from "react-icons/hi";

const AlumniForm = () => {
    const [isLoading, setIsLoading] = useState(null);
    const [alumniPayload, setAlumniPayload] = useState({});

    const formChangeHandler = (e) => {
        const { name, value, type, files } = e.target;
        if(type == 'file'){
            setAlumniPayload(prevState => ({
                ...prevState,
                [name]: files
            }));
        } else if(type == 'checkbox'){
            if(e.target.checked){
                setAlumniPayload(prevState => ({
                    ...prevState,
                    [name]: prevState[name] ? [...prevState[name], value] : [value  ]
                }));
            } else{
                setAlumniPayload(prevState => ({
                    ...prevState,
                    [name]: prevState[name].filter(val => val !== value)
                }));
            }
        }
        else{
            setAlumniPayload(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const submitHandler = (e) => {
        setIsLoading(true);
        console.log(alumniPayload);

        /* Call API in here... */
        
        setIsLoading(false);
    }

    const datePickerHandler = (name, value) => {
        setAlumniPayload(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return <>
        <div className="max-w-full grid gap-3">
            <Blockquote>
                Informasi Alumni
            </Blockquote>
            <div>
                <small className="text-gray-500 dark:text-gray-400">
                    Sebagai alumni dari sekolah BTB, kami ingin mengenal anda lebih jauh. Silahkan isi formulir berikut ini. Kami menunggu respon kalian.
                </small>
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
                    <Label htmlFor="birthdate" value="Tanggal Lahir" />
                </div>
                <Datepicker id="birthdate" name="birthdate" language="en-id" onSelectedDateChanged={date => datePickerHandler('birthdate', date)} />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="laststudentyear" value="Tahun Terakhir di BTB" />
                </div>
                <ReactDatePicker id="laststudentyear" name="laststudentyear" dateFormat={"yyyy"} selected={alumniPayload?.laststudentyear || ''} showYearPicker onChange={date => datePickerHandler('laststudentyear', date)}/>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="edukasiOptions" value="Edukasi"/>
                </div>
                <div className="flex items-center gap-2" id="edukasiOptions">
                    <Checkbox id="edukasiOptionSarjana" name="edukasiOptions" value="sarjana" onChange={formChangeHandler}/>
                    <Label htmlFor="edukasiOptionSarjana">Sarjana</Label>
                    <Checkbox id="edukasiOptionPascaSarjana" name="edukasiOptions" value="pascasarjana" onChange={formChangeHandler}/>
                    <Label htmlFor="edukasiOptionPascaSarjana">Pasca Sarjana</Label>
                </div>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="statusKerjaOptions" value="Profesi Sekarang"/>
                </div>
                <div className="flex items-center gap-2" id="statusKerjaOptions">
                    <Radio id="statusKerjaOptionIya" name="statusKerjaOptions" value="kerja" onChange={formChangeHandler}/>
                    <Label htmlFor="statusKerjaOptionIya">Ya</Label>
                    <Radio id="statusKerjaOptionTidak" name="statusKerjaOptions" value="belumkerja" onChange={formChangeHandler}/>
                    <Label htmlFor="statusKerjaOptionTidak">Belum Bekerja</Label>
                </div>
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
                    <Label htmlFor="photoFile" value="Unggah Foto" />
                </div>
                <FileInput accept="image/*" id="photoFile" name="photoFile" helperText="Ukuran Maksimum 2MB. Format Gambar (.jpg, .png)" onChange={formChangeHandler}/>
            </div>
            <div>
                <small className="text-gray-500 dark:text-gray-400">
                    Untuk informasi atau pertanyaan lebih lanjut, silahkan kirim email ke alumni@btbschool.org.
                </small>
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
    </>;
}

export default AlumniForm;