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
      <div id="hubungi-kami" className="xl:mx-32 mx-[20px] md:mx-20">
        <h1 className="mt-10 text-[#00305E] xl:text-[50px] md:text-[40px] lg:text-[40px] text-[25px] font-semibold	">
          {contactUsData[language].title}
        </h1>
        <div className="text-[#00305E] grid grid-cols-1 md:grid-cols-3 mb-10">
          <div className="col-span-2">
            <p className="xl:text-[30px] md:text-[25px] text-[16px] lg:text-[25px] my-5 text-black">
              {contactUsData[language].desc}
            </p>
            <div className="flex-col">
              <ContactForm />
            </div>
          </div>
          <div className="md:mt-0 mt-5">
            <div className="xl:h-auto md:h-auto md:w-[250px] h-auto lg:h-auto lg:w-auto bg-[#EF802B] rounded-3xl mx-5 lg:mx-2 py-4 xl:py-0 md:py-6 lg:py-0 place-content-center">
              <div className="text-white pb-10">
                {contactUsData[language].schoolList.map((val, idx) => {
                  return (
                    <div className="header px-5 xl:px-15 md:px-10" key={idx}>
                      <h1 className="font-bold xl:text-[31px] md:text-[20px] text-[15px] lg:text-[20px] pt-10">
                        {val.title}
                      </h1>
                      <div className="address mt-2 leading-loose xl:text-[20px] md:text-[18px] text-[13px] lg:text-[21px]">
                        {val.address}
                      </div>
                      <div className="flex flex-nowrap">
                        <div>
                          <HiPhone className="md:size-6" />
                        </div>
                        <div className="ml-4">
                          <p className="xl:text-[20px] md:text-[18px] text-[13px] lg:">
                            {val.phoneNumber}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-nowrap md:mt-2">
                        <div>
                          <AiOutlineWhatsApp className="md:size-6" />
                        </div>
                        <div className="ml-4">
                          <a
                            href={val.hrefwa}
                            className="md:text-[20px] text-[13px]"
                          >
                            {val.waNumber}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="py-3 flex items-center text-sm text-gray-800 after:flex-1 after:border-t after:border-gray-200 after:mx-6 dark:text-white dark:after:border-neutral-600"></div>

                <div className="header px-5 md:px-15">
                  <div className="flex flex-nowrap md:mt-2">
                    <div>
                      <HiMail className="md:size-6" />
                    </div>
                    <div className="ml-4">
                      <p className="md:text-[20px] text-[13px] lg:text-[17px]">
                        {contactUsData[language].email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3 flex items-center text-sm text-gray-800 after:flex-1 after:border-t after:border-gray-200 after:mx-6 dark:text-white dark:after:border-neutral-600"></div>

      <div id="lokasi-kami" className="md:m-[60px] m-[8px]">
        <h1 className="text-[#00305E] md:text-[50px] text-[25px] lg:text-[40px] font-semibold">
          {contactUsData[language].titleLocation}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
          {contactUsData[language].mapList.map((val, idx) => {
            return (
              <div key={idx} className="py-5 md:py-0">
                <h3 className="xl:text-[35px] md:text-[25px] text-[18px] lg:text-[20px] text-black font-medium">
                  {val.title}
                </h3>
                <iframe
                  src={`${val.mapEmbed}`}
                  className="w-[248px] h-[248px] xl:w-[548px] xl:h-[474px] lg:w-[348px] lg:h-[348px] md:w-[248px] md:h-[248px]"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ContactPage;
