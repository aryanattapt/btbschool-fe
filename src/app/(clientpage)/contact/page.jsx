"use client";
import ContactForm from "./_layouts/form";
import Banner from "./_layouts/banner";
import Pagging from "./_layouts/pagging";
import { HiPhone, HiMail } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { ContactUsPayLoad } from "../../../../data";
import { useLanguageStore } from "../../../../store/language.store";
import { useState } from "react";

const ContactPage = () => {
  const [contactUsData, setcontactUsData] = useState(ContactUsPayLoad);
  const { language } = useLanguageStore();
  return (
    <>
      <Banner />
      <Pagging />
      <div id="hubungi-kami" className="mx-4 md:mx-16 lg:mx-32">
        <h1 className="mt-10 text-[#00305E] text-2xl md:text-4xl lg:text-5xl font-semibold">
          {contactUsData[language].title}
        </h1>
        <div className="text-[#00305E] grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
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
                    <a
                      href={val.hrefwa}
                      className="ml-2 text-sm md:text-base lg:text-lg"
                    >
                      {val.waNumber}
                    </a>
                  </div>
                </div>
              ))}
              {/* <div className="py-3 flex items-center text-sm text-gray-800 border-t border-gray-200 dark:text-white dark:border-neutral-600"></div> */}
              <div className="px-4 md:px-6 lg:px-8 mt-12">
                <div className="flex items-center mt-2">
                  <HiMail className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                  <p className="ml-2 text-sm md:text-base lg:text-lg" onClick={() => window.location.href = "mailto:" + contactUsData[language]?.email} >
                    {contactUsData[language].email}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 flex flex-col">
            <p className="text-lg md:text-2xl lg:text-3xl my-5 text-black">
              {contactUsData[language].desc}
            </p>
            <div className="flex-1">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="py-3 flex items-center text-sm text-gray-800 border-t border-gray-200 dark:text-white dark:border-neutral-600"></div>

        <div id="lokasi-kami" className="mx-4 md:mx-8 lg:mx-16">
          <h1 className="text-[#00305E] text-2xl md:text-4xl lg:text-5xl font-semibold text-center mb-8">
            {contactUsData[language].titleLocation}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8  place-items-center">
            {contactUsData[language].mapList.map((val, idx) => (
              <div
                key={idx}
                className="py-4 md:py-6 flex flex-col items-center"
              >
                <h3 className="text-xl md:text-2xl lg:text-3xl text-black font-medium mb-4">
                  {val.title}
                </h3>
                <iframe
                  src={val.mapEmbed}
                  className="w-full max-w-md h-56 md:w-full md:h-64 lg:w-86 lg:h-70"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
