'use client'

import { 
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
    const [laststudentyear, setLaststudentyear] = useState(new Date());

    return <>
         <div className="max-w-full grid gap-3">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="firstname" value="Nama Depan" autoFocus={true} />
                </div>
                <TextInput id="firstname" type="text"/>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="lastname" value="Nama Belakang" />
                </div>
                <TextInput id="lastname" type="text"/>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="birthdate" value="Tanggal Lahir" />
                </div>
                <Datepicker id="birthdate" language="en-id"/>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="laststudentyear" value="Tahun Terakhir di BTB" />
                </div>
                <ReactDatePicker id="laststudentyear" dateFormat={"yyyy"} selected={laststudentyear} onChange={(date) => setLaststudentyear(date)} showYearPicker/>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="edukasiOptions" value="Edukasi"/>
                </div>
                <div className="flex items-center gap-2" id="edukasiOptions">
                    <Checkbox id="edukasiOptionSarjana" name="edukasiOptions"/>
                    <Label htmlFor="edukasiOptionSarjana">Sarjana</Label>
                    <Checkbox id="edukasiOptionPascaSarjana" name="edukasiOptions"/>
                    <Label htmlFor="edukasiOptionPascaSarjana">Pasca Sarjana</Label>
                </div>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="statusKerjaOptions" value="Profesi Sekarang"/>
                </div>
                <div className="flex items-center gap-2" id="statusKerjaOptions">
                    <Radio id="statusKerjaOptionIya" name="statusKerjaOptions"/>
                    <Label htmlFor="statusKerjaOptionIya">Ya</Label>
                    <Radio id="statusKerjaOptionTidak" name="statusKerjaOptions"/>
                    <Label htmlFor="statusKerjaOptionTidak">Belum Bekerja</Label>
                </div>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email" value="Email" />
                </div>
                <TextInput icon={HiMail} type="email" />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="phoneno" value="Nomor Telepon" />
                </div>
                <TextInput id="phoneno" type="text" addon="+62"/>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="photoFile" value="Unggah Foto" />
                </div>
                <FileInput accept="image/png, image/jpeg" id="photoFile" helperText="Ukuran Maksimum 2MB. Format Gambar (.jpg, .png)"/>
            </div>
            <div>
                <Button type="submit" className="w-full lg:w-auto" disabled={isLoading}>
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