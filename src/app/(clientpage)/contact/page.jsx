"use client";
import ContactForm from "./_layouts/form";
import Banner from "./_layouts/banner";
import Pagging from "./_layouts/pagging";
import { HiPhone, HiMail } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { ContactUsPayLoad } from "../../../../data";
/* import { useLanguageStore } from "../../../../store/language.store"; */
import useLanguage from "../../../hooks/useLanguage";
import { useEffect, useState } from "react";
import { GetConfig } from "../../../../services/config.service";

const convertPhoneNumber = (input) => {
  try {
    const cleaned = input.replace(/[\s()]+/g, '').replace('+', '');
    const formatted = `+${cleaned.slice(0, 2)}${cleaned.slice(2)}`; 
    return formatted;
  } catch (error) {return "";}
}

const ContactPage = () => {
  const [contactUsData, setcontactUsData] = useState(ContactUsPayLoad);
  /* const { language } = useLanguageStore(); */
  const { language } = useLanguage();

  const [payload, setPayload] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const result = await GetConfig('general', {"type": "generalsetting"});
        console.log(result[0]);
        setPayload(result[0]?.contact);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Banner />
      <Pagging />
      <div
        id="hubungi-kami"
        className="mx-4 sm:mx-10 md:mx-15 lg:mx-25 xl:mx-32"
      >
        <h1 className="mt-10 text-[#00305E] text-2xl md:text-4xl lg:text-5xl font-semibold">
          {contactUsData[language].title}
        </h1>
        <div className="mt-4 text-[#00305E] grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 place-content-center">
          <div
            id="box"
            className="flex-1 bg-[#00305E] rounded-3xl py-4 md:py-6 lg:py-8 flex flex-col justify-between"
          >
            <div className="text-white">
              {/* {contactUsData[language].schoolList.map((val, idx) => (
                <div className="px-4 md:px-6 lg:px-8" key={idx}>
                  <h1 className="font-bold text-base sm:text-xs md:text-[13px] lg:text-base xl:text-xl 2xl:text-2xl pt-4 md:pt-6 lg:pt-8">
                    {val.title}
                  </h1>
                  <h3 className="font-bold text-[16px] sm:text-[18px] md:text-[12px] lg:text-[14px] xl:text-[18px] 2xl:text-[18px] ">
                    {val.subtitle}
                  </h3>
                  <div className="mt-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg leading-relaxed">
                    {val.address}
                  </div>
                  <div className="flex items-center mt-2">
                    <HiPhone className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                    <p className="ml-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg">
                      {val.phoneNumber}
                    </p>
                  </div>
                  {val.waList.map((val1, idx1) => (
                    <div className="flex items-center mt-2" key={idx1}>
                      <AiOutlineWhatsApp className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                      <a
                        href={val1.hrefwa}
                        className="ml-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg"
                      >
                        {val1.waNumber}
                      </a>
                    </div>
                  ))}
                </div>
              ))} */}

              {
                payload?.map((val, idx) => {
                  return <div className="px-4 md:px-6 lg:px-8" key={idx}>
                    <h1 className="font-bold text-base sm:text-xs md:text-[13px] lg:text-base xl:text-xl 2xl:text-2xl pt-4 md:pt-6 lg:pt-8">
                      {val?.buildingName}
                    </h1>
                    <h3 className="font-bold text-[16px] sm:text-[18px] md:text-[12px] lg:text-[14px] xl:text-[18px] 2xl:text-[18px] ">
                      {val?.grade}
                    </h3>
                    <div className="mt-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg leading-relaxed">
                      {val?.address}
                    </div>
                    <div className="flex items-center mt-2">
                      <HiPhone className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                      <p className="ml-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg">
                        {val?.phoneNo}
                      </p>
                    </div>
                      <div className="flex items-center mt-2">
                        <AiOutlineWhatsApp className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                        <a
                          href={`https://wa.me/${convertPhoneNumber(val?.whatsAppNo1)}`}
                          className="ml-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg"
                        >
                          {val?.whatsAppNo1}
                        </a>
                      </div>
                      <div className="flex items-center mt-2">
                        <AiOutlineWhatsApp className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                        <a
                          href={`https://wa.me/${convertPhoneNumber(val?.whatsAppNo2)}`}
                          className="ml-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg"
                        >
                          {val?.whatsAppNo2}
                        </a>
                      </div>
                  </div>
                })
              }

              <div className="mx-4 my-3 flex items-center text-sm text-gray-800 border-t border-gray-200 dark:text-white dark:border-neutral-600"></div>
              <div className="px-4 sm:px-4 md:px-6 lg:px-8 xl:px-8 my-2">
                <div className="flex items-center mt-2">
                  <HiMail className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                  <p
                    className="ml-2 text-sm md:text-base lg:text-base xl:text-lg"
                    onClick={() =>
                      (window.location.href =
                        "mailto:" + (payload.length > 0 && payload[0]?.email))
                    }
                  >
                    {/* {contactUsData[language].email} */}
                    {payload.length > 0 && payload[0]?.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 flex flex-col">
            <p className="text-lg sm:text-lg md:text-xl lg:text-3xl my-5 text-black">
              {contactUsData[language].desc}
            </p>
            <div className="flex-1">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="py-3 flex items-center text-sm text-gray-800 border-t border-gray-200 dark:text-white dark:border-neutral-600"></div>

        <div id="lokasi-kami" className="">
          <h1 className="text-[#00305E] text-2xl md:text-4xl lg:text-5xl font-semibold mb-8">
            {contactUsData[language].titleLocation}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
            {/* {contactUsData[language].mapList.map((val, idx) => (
              <div
                key={idx}
                className="py-4 md:py-6 flex flex-col items-center"
              >
                <h3 className="text-xl md:text-2xl lg:text-3xl text-black font-medium mb-4">
                  {val.title}
                </h3>
                <iframe
                  src={val.mapEmbed}
                  className="w-full h-500 md:w-full md:h-64 lg:w-86 lg:h-70"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            ))} */}

            {
              payload?.map((val, idx) => {
                  return <div
                  key={idx}
                  className="py-4 md:py-6 flex flex-col items-center"
                >
                  <h3 className="text-xl md:text-2xl lg:text-3xl text-black font-medium mb-4">
                    {val?.buildingName}
                  </h3>
                  {
                    val?.mapsLocation && <iframe
                      src={val?.mapsLocation}
                      className="w-full h-500 md:w-full md:h-64 lg:w-86 lg:h-70"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  }
                </div>
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
