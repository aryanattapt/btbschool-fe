"use client";

import { Footer } from "flowbite-react";
import { BsFacebook, BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import {
  FaMapPin,
  FaCalendar,
  FaBook,
  FaQuestion,
  FaWhatsapp,
} from "react-icons/fa";
import { MdAppRegistration } from "react-icons/md";
/* import { useLanguageStore } from "../../../store/language.store"; */
import { FooterPayload } from "../../../data";
import { useState } from "react";
import useLanguage from "../../hooks/useLanguage";

const convertPhoneNumber = (input) => {
  try {
    const cleaned = input.replace(/[\s()]+/g, "").replace("+", "");
    const formatted = `+${cleaned.slice(0, 2)}${cleaned.slice(2)}`;
    return formatted;
  } catch (error) {
    return "";
  }
};

const FooterComponent = ({ payload }) => {
  const [footerPayload, _] = useState(FooterPayload);
  /* const { language } = useLanguageStore(); */
  const { language } = useLanguage();

  return (
    <>
      <Footer className="bg-[#00305E] text-white rounded-none">
        <div className="w-full md:mt-5 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center md:my-[50px] mx-10">
            <div className="md:w-[478px] md:h-[111px] md:ml-28 md:mt-2">
              <img
                /* src={footerPayload[language].logourl} */
                src={payload[language]?.logo}
                alt="logo btb"
                className="md:mb-[40px] mb-[20px] md:w-[70%] md:h-auto lg:w-[80%] lg:h-auto xl:w-auto xl:h-auto"
              />
              <div className="md:my-[5px] my-[5px] text-center md:text-left">
                <div className="text-[20px] md:text-[30px] font-semibold md:mr-10 mr-4 ">
                  {footerPayload[language].connecttitle}
                </div>
              </div>
              <div className="text-center md:text-left">
                <div>
                  <a
                    href={`mailto:${footerPayload.email}`}
                    className="inline-flex underline"
                  >
                    <MdMailOutline className="md:mt-2 size-5" />
                    <div className="pb-2 md:ml-[10px] ml-[5px] md:text-[20px] text-[13px] items-center">
                      {/* {footerPayload.email} */}
                      {payload?.contact?.length > 0 &&
                        payload?.contact[0]?.email}
                    </div>
                  </a>
                </div>
              </div>
              {/* <div className="md:py-0 py-4 text-center md:text-left md:mt-5">
                <h2 className="font-semibold md:text-[30px] text-[20px]">
                  {footerPayload[language].pagenavtitle}
                </h2>
                <div className="xl:flex xl:flex-wrap 2xl:flex 2xl:flex-wrap md:flex md:flex-wrap sm:grid grid grid-cols-2 sm:grid-cols-2 sm:mt-3 sm:grid-cols-1">
                  {footerPayload[language].url.map((val, idx) => {
                    return (
                      <div key={idx} className="xl:mr-7 2xl:mr-7 md:mr-7">
                        <a
                          href={`${val.url}`}
                          className="text-white text-[15px] underline"
                        >
                          {val.content}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div> */}
            </div>
            <div>
              <h1 className="font-semibold md:text-[30px] text-[20px] md:text-left text-center">
                {footerPayload[language].schooltitle}
              </h1>

              {/* {footerPayload.location.map((val, idx) => {
                return (
                  <div key={idx}>
                    <div className="flex flex-wrap mt-2 md:mt-0 xl:mt-2">
                      <div className="md:mr-1 mr-2 xl:mr-[15px]">
                        <FaMapPin />
                      </div>
                      <div className="xl:text-[20px] md:text-[18px] text-[14.7px] md:text-left text-center">
                        <div className="xl:leading-[1.5rem] font-semibold flex xl:text-left">
                          {val.address}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap mt-2 md:mt-0 xl:mt-2">
                      <div className="mt-1 md:mr-1 mr-2 xl:mr-[15px]">
                        <FaWhatsapp />
                      </div>
                      <div className="xl:text-[20px] md:text-[18px] text-[15px] md:text-left">
                        <a href={`https://wa.me/${val.phoneno}`}>
                          {val.phoneno}
                        </a>
                        <div className="mt-2 md:text-left"></div>
                      </div>
                    </div>
                    <div className="flex flex-wrap mt-2 md:mt-0 xl:mt-2">
                      <div className="mt-1 md:mr-1 mr-2 xl:mr-[15px]">
                        <FaWhatsapp />
                      </div>
                      <div className="xl:text-[20px] md:text-[18px] text-[15px] md:text-left">
                        <a href={`https://wa.me/${val.phoneno2}`}>
                          {val.phoneno2}
                        </a>
                        <div className="mt-2 md:text-left"></div>
                      </div>
                    </div>
                  </div>
                );
              })} */}

              {payload?.contact?.map((val, idx) => {
                return (
                  <div key={idx}>
                    <div className="flex flex-wrap mt-2 md:mt-0 xl:mt-2">
                      <div className="md:mr-1 mr-2 xl:mr-[15px]">
                        <FaMapPin />
                      </div>
                      <div className="xl:text-[20px] md:text-[18px] text-[14.7px] md:text-left text-center">
                        <div className="xl:leading-[1.5rem] font-semibold flex xl:text-left">
                          <a href={val?.mapsLocationEmbeded} target="_blank">
                            {val?.address}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap mt-2 md:mt-0 xl:mt-2">
                      <div className="mt-1 md:mr-1 mr-2 xl:mr-[15px]">
                        <FaWhatsapp />
                      </div>
                      <div className="xl:text-[20px] md:text-[18px] text-[15px] md:text-left">
                        <a
                          href={`https://wa.me/${convertPhoneNumber(
                            val?.whatsAppNo1
                          )}`}
                        >
                          {val?.whatsAppNo1}
                        </a>
                        <div className="mt-2 md:text-left"></div>
                      </div>
                    </div>
                    <div className="flex flex-wrap mt-2 md:mt-0 xl:mt-2">
                      <div className="mt-1 md:mr-1 mr-2 xl:mr-[15px]">
                        <FaWhatsapp />
                      </div>
                      <div className="xl:text-[20px] md:text-[18px] text-[15px] md:text-left">
                        <a
                          href={`https://wa.me/${convertPhoneNumber(
                            val?.whatsAppNo2
                          )}`}
                        >
                          {val?.whatsAppNo2}
                        </a>
                        <div className="mt-2 md:text-left"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 md:mt-[15px] md:gap-6 xl:gap-12">
                {/* <div className="md:mt-2 mt-10 justify-self-center flex flex-col items-center">
                  <a href="/calendar-academic">
                    <button
                      title="Calendar"
                      className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex justify-center items-center transform rotate-45"
                    >
                      <FaCalendar className="text-white text-xl -rotate-45" />
                    </button>
                  </a>
                  <div className="text-center mt-4 md:hidden">Calendar</div>
                </div>
                <div className="md:mt-2 mt-10 justify-self-center flex flex-col items-center">
                  <a href="/bulletinspotlight">
                    <button
                      title="Bulletin"
                      className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex justify-center items-center transform rotate-45"
                    >
                      <FaQuestion className="text-white text-xl -rotate-45" />
                    </button>
                  </a>
                  <div className="text-center mt-4 md:hidden">Bulletin</div>
                </div>
                <div className="md:mt-2 mt-10 justify-self-center flex flex-col items-center">
                  <a href="/onlineregistration">
                    <button
                      title="Registration"
                      className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex justify-center items-center transform rotate-45"
                    >
                      <MdAppRegistration className="text-white text-xl -rotate-45" />
                    </button>
                  </a>
                  <div className="text-center mt-4 md:hidden">Registration</div>
                </div>
                <div className="md:mt-2 mt-10 justify-self-center flex flex-col items-center">
                  <a href="/help">
                    <button
                      title="FAQ"
                      className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex flex-col justify-center items-center transform rotate-45"
                    >
                      <FaQuestion className="text-white text-xl -rotate-45" />
                    </button>
                  </a>
                  <div className="text-center mt-4 md:hidden">FAQ</div>
                </div> */}

                {payload?.floatingbuttons?.map((val, idx) => {
                  return (
                    <div
                      className="md:mt-2 mt-10 justify-self-center flex flex-col items-center"
                      key={idx}
                    >
                      <a href={val?.link}>
                        <button
                          title={val?.name}
                          className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex flex-col justify-center items-center transform rotate-45"
                        >
                          {val?.logo && (
                            <img
                              src={val?.logo}
                              alt="icon"
                              className="w-10 h-10 object-cover -rotate-45"
                            />
                          )}
                        </button>
                      </a>
                      <div className="text-center mt-4 md:hidden">
                        {val?.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <hr className="h-px my-5 bg-gray-600 border-0" />
          {/* <Footer.Divider /> */}
          <div className="w-full flex items-center justify-between px-10 md:px-32 mb-5">
            <Footer.Copyright href="/" by="Bina Tunas Bangsa™" year={2024} />
            <div className="flex space-x-6 sm:mt-0 sm:justify-center">
              {/* <a href={footerPayload.instagram} target="_blank">
                <BsInstagram />
                </a>
                <a href={footerPayload.youtube} target="_blank">
                <BsYoutube />
                </a> */}

              {payload?.socialmedia?.map((val, idx) => {
                return (
                  <a href={val?.link} target="_blank" key={idx}>
                    {val?.logo && (
                      <img
                        src={val?.logo}
                        alt="icon"
                        className="w-6 h-6 object-cover"
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default FooterComponent;
