'use client'
import { 
    Button,
    Label, 
    Spinner, 
    TextInput, 
    Textarea 
} from "flowbite-react";
import { useState } from "react";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(null);

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
                    <Label htmlFor="phoneno" value="Nomor Telepon" />
                </div>
                <TextInput id="phoneno" type="text" addon="+62"/>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email" value="Email" />
                </div>
                <TextInput icon={HiMail} type="email" />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="message" value="Pesan" />
                </div>
                <Textarea id="message" placeholder="Tuliskan Pesan anda..." required rows={4} />
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

export default ContactForm;