"use client";

import { Footer } from "flowbite-react";
import { BsFacebook, BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { FaMapPin, FaCalendar, FaQuestion, FaPhoneAlt } from "react-icons/fa";
import { useLanguageStore } from "../../../store/language.store";
import { FooterPayload } from "../../../data";
import { useState } from "react";

const FooterComponent = () => {
  const [footerPayload, setFooterPayload] = useState(FooterPayload);
  const { language } = useLanguageStore();

  return (
    <>
      <Footer className="bg-[#00305E] text-white rounded-none">
        <div className="w-full md:mt-5 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center md:my-[50px] mx-10">
            <div className="md:w-[478px] md:h-[111px] md:ml-28 md:mt-2">
              <img
                src={footerPayload[language].logourl}
                alt="logo btb"
                className="md:mb-[40px] mb-[20px]"
              />
              <div className="md:my-[5px] my-[5px] text-center md:text-left">
                <div className="text-[20px] md:text-[30px] font-semibold md:mr-10 mr-4 ">
                  {footerPayload[language].connecttitle}
                </div>
                <div className="inline-flex mt-2">
                <a href={`${footerPayload.facebook}`} className="mr-2">
                  <BsFacebook />
                </a>
                <a href={`${footerPayload.instagram}`} className="mx-2">
                  <BsInstagram />
                </a>
                <a href={`${footerPayload.twitter}`} className="mx-2">
                  <BsTwitter />
                </a>
                <a href={`${footerPayload.youtube}`} className="mx-2">
                  <BsYoutube />
                </a>
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
                      {footerPayload.email}
                    </div>
                  </a>
                </div>
              </div>
              <div className="md:py-0 py-4 text-center md:text-left md:mt-5">
                  <h2 className="font-semibold md:text-[30px] text-[20px]">
                    {footerPayload[language].pagenavtitle}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 sm:mt-3 sm:grid-cols-1 md:mr-10">
                    {footerPayload[language].url.map((val, idx) => {
                      return (
                        <div key={idx}>
                          <Footer.LinkGroup col>
                            <Footer.Link
                              href={`${val.url}`}
                              className="text-white text-[15px] md:text-[15px] md:mt-0 mt-2 underline"
                            >
                              {val.content}
                            </Footer.Link>
                          </Footer.LinkGroup>
                        </div>
                      );
                    })}
                  </div>
                </div>
            </div>
            <div>
              <div>
                <h1 className="font-semibold md:text-[30px] text-[20px] md:text-left text-center">
                  {footerPayload[language].schooltitle}
                </h1>
                {footerPayload.location.map((val, idx) => {
                  return (
                    <div className="flex flex-wrap mt-2 md:mt-2" key={idx}>
                      <div className="md:mr-[15px] mr-2">
                        <FaMapPin/>
                      </div>
                      <div className="md:text-[20px] text-[15px] md:text-left text-center">
                        <div className="md:leading-[1.5rem] font-semibold flex md:text-left">
                          {val.address}
                        </div>
                        <div className="mt-2 md:text-left">
                          <a href={`https://wa.me/${val.phoneno}`}>
                            {val.phoneno}
                          </a>
                        </div>
                        <div className="mt-2 md:text-left">
                          <a href={`https://wa.me/${val.phoneno2}`}>
                            {val.phoneno2}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="grid grid-cols-2 md:grid-cols-4 md:mt-[15px] md:gap-0">
                  <div className="md:mt-2 mt-10 justify-self-center flex flex-col items-center">
                    <button className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex justify-center items-center transform rotate-45">
                      <FaCalendar className="text-white text-xl -rotate-45" />
                    </button>
                    <div className="text-center mt-4 md:hidden">Calendar</div>
                  </div>
                  <div className="md:mt-2 mt-10 justify-self-center flex flex-col items-center">
                    <button className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex justify-center items-center transform rotate-45">
                      <FaQuestion className="text-white text-xl -rotate-45" />
                    </button>
                    <div className="text-center mt-4 md:hidden">FAQ</div>
                  </div>
                  <div className="md:mt-2 mt-10 justify-self-center flex flex-col items-center">
                    <button className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex flex-col justify-center items-center transform rotate-45">
                      <FaPhoneAlt className="text-white text-xl -rotate-45" />
                    </button>
                    <div className="text-center mt-4 md:hidden">Phone</div>
                  </div>
                  <div className="md:mt-2 mt-10 justify-self-center flex flex-col items-center">
                    <button className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex justify-center items-center transform rotate-45">
                      <FaQuestion className="text-white text-xl -rotate-45" />
                    </button>
                    <div className="text-center mt-4 md:hidden">FAQ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="h-px my-5 bg-gray-600 border-0" />
          {/* <Footer.Divider /> */}
          <div className="w-full flex items-center justify-between px-10 md:px-32 mb-5">
            <Footer.Copyright href="/" by="Bina Tunas Bangsa™" year={2024} />
          </div>
        </div>
      </Footer>
    </>
  );
};

export default FooterComponent;
