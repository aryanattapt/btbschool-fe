'use client'
const { Button } = require("flowbite-react")
import { useState } from "react";
import { ContactUsPayLoad } from "../../../../../data";
import { HelpPayload } from "../../../../../data";
/* import { useLanguageStore } from "../../../../../store/language.store"; */
import { HiMail, HiPhone } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import useLanguage from "../../../../hooks/useLanguage";

const InformasiPendaftaran = () => {
    const [contactUsData, setcontactUsData] = useState(ContactUsPayLoad);
    const [helpData, setHelpData] = useState(HelpPayload);
    /* const { language } = useLanguageStore(); */
    const {language} = useLanguage();

    return <div className="p-4">
        <h1 className="text-2xl font-bold text-[#00305E] text-center mb-6">
            {helpData[language].secondTitle}
        </h1>
        <div className="bg-white p-6 mb-4">
            <h2 className="text-xl font-bold mb-4 text-[#00305E]">Temukan Informasi</h2>
            <p className="mb-4 text-[#00305E]">Memiliki pertanyaan mengenai kehidupan di sekolah BTB, bagaimana kegiatan belajar mengajar dan aktivitas di lingkungan BTB?</p>
            {/* <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="mailto:admission@btbschool.org" className="block bg-blue-600 text-white py-2 px-4 rounded-lg text-center">ADMISSION@BTBSCHOOL.ORG</a>
                <a href="tel:0216698888" className="block bg-blue-600 text-white py-2 px-4 rounded-lg text-center">0216698888</a>
            </div> */}
            <div
                id="box"
                className="flex-1 bg-[#00305E] rounded-3xl py-4 md:py-6 lg:py-8 flex flex-col justify-between"
            >
                <div className="text-white">
                {contactUsData[language].schoolList.map((val, idx) => (
                    <div className="px-4 md:px-6 lg:px-8" key={idx}>
                    <h1 className="font-bold text-lg md:text-xl lg:text-2xl pt-4 md:pt-6 lg:pt-8">
                        {val.title}
                    </h1>
                    <div className="mt-2 text-sm md:text-base lg:text-lg leading-relaxed">
                        {val.address}
                    </div>
                    <div className="flex items-center mt-2">
                        <HiPhone className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                        <p className="ml-2 text-sm md:text-base lg:text-lg">
                        {val.phoneNumber}
                        </p>
                    </div>
                    <div className="flex items-center mt-2">
                        <AiOutlineWhatsApp className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                        <a href={val.hrefwa} className="ml-2 text-sm md:text-base lg:text-lg">
                        {val.waNumber}
                        </a>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
        <div className="bg-white p-6 mb-4">
            <h2 className="text-xl font-bold mb-4 text-[#00305E]">Alur Pendaftaran</h2>
            <div className="relative">
                <img
                    src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/banneraboutus.jpg"
                    alt="banneraboutus"
                    className="w-full object-cover"
                />
            </div>
        </div>
        <div className="flex justify-center">
            <Button onClick={() => {window.location.href='/onlineregistration'}}>
                Click here to Register
            </Button>
        </div>
    </div>
}

export default InformasiPendaftaran;