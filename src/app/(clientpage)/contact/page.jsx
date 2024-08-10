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
      <div id="hubungi-kami" className="md:mx-32 mx-[20px]">
        <h1 className="mt-10 text-[#00305E] md:text-[50px] text-[25px] font-semibold	">
          {contactUsData[language].title}
        </h1>
        <div className="text-[#00305E] grid grid-cols-1 md:grid-cols-3 mb-10">
          <div className="col-span-2">
            <p className="md:text-[30px] text-[16px] my-5 text-black">
              {contactUsData[language].desc}
            </p>
            <div className="flex-col">
              <ContactForm />
            </div>
          </div>
          <div className="md:mt-0 mt-5">
            <div className="md:h-screen h-auto bg-[#EF802B] rounded-3xl mx-5 py-4 md:py-0 place-content-center">
              <div className="text-white pb-10">
                {contactUsData[language].schoolList.map((val, idx) => {
                  return (
                    <div className="header px-5 md:px-15" key={idx}>
                      <h1 className="font-bold md:text-[31px] text-[15px] pt-10">
                        {val.title}
                      </h1>
                      <div className="address mt-2 leading-loose md:text-[20px] text-[13px]">
                        {val.address}
                      </div>
                      <div className="flex flex-nowrap">
                        <div>
                          <HiPhone className="md:size-6" />
                        </div>
                        <div className="ml-4">
                          <p className="md:text-[20px] text-[13px]">
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
                      <p className="md:text-[20px] text-[13px]">
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
        <h1 className="text-[#00305E] md:text-[50px] text-[25px] font-semibold">
          {contactUsData[language].titleLocation}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
          {contactUsData[language].mapList.map((val, idx) => {
            return (
              <div key={idx} className="py-5 md:py-0">
                <h3 className="md:text-[35px] text-[18px] text-black font-medium">
                  {val.title}
                </h3>
                <iframe
                  src={`${val.mapEmbed}`}
                  className="w-[248px] h-[248px] md:w-[548px] md:h-[474px] "
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
