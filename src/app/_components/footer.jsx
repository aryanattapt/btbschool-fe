"use client";

import { Footer } from "flowbite-react";
import { BsFacebook, BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { FaMapPin, FaCalendar, FaQuestion, FaPhoneAlt } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <>
      <Footer className="bg-[#00305E] text-white font-sans">
        <div className="w-full md:mt-5 mt-10">
          <div className="grid grid-cols-2 gap-2 md:my-[50px]">
            <div className="md:w-[478px] md:h-[111px] md:ml-28 md:mt-2">
              <img
                src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/LogoFooter.png"
                alt="logo btb"
                className="md:mb-[40px] mb-[20px]"
              />
              <div className="md:my-[5px] my-[5px] inline-flex">
                <div className="md:text-[20px] md:mr-10 mr-4 ">
                  Connect With Us
                </div>
                <a href="http://www.facebook.com" className="m-2">
                  <BsFacebook />
                </a>
                <a href="http://www.instagram.com" className="m-2">
                  <BsInstagram />
                </a>
                <a href="http://www.twitter.com" className="m-2">
                  <BsTwitter />
                </a>
                <a href="http://www.youtube.com" className="m-2">
                  <BsYoutube />
                </a>
              </div>
              <div className="flex flex-nowrap">
                <div>
                  <a
                    href="mailto:admission@btbschool.org"
                    className="inline-flex underline"
                  >
                    <MdMailOutline className="md:mt-2 md:size-6 size-5" />
                    <div className="pb-2 md:ml-[10px] ml-[5px] md:text-[20px] text-[13px]">
                      admission@btbschool.org
                    </div>
                  </a>
                </div>
              </div>
              <dviv className="grid grid-cols-2 md:grid-cols-4 md:mt-[15px]">
                <div>
                  <button className="w-[54.21px] bg-[#EF802B] h-[54.21px] rotate-[43.31deg]">
                    <FaCalendar className="size-6 rotate-0" />
                  </button>
                </div>
                <div>
                  <button className="w-[54.21px] bg-[#EF802B] h-[54.21px] rotate-[43.31deg]">
                    <FaQuestion className="size-6 rotate-0" />
                  </button>
                </div>
                <div>
                  <button className="w-[54.21px] bg-[#EF802B] h-[54.21px] rotate-[43.31deg]">
                    <FaPhoneAlt className="size-6 rotate-0" />
                  </button>
                </div>
                <div>
                  <button className="w-[54.21px] bg-[#EF802B] h-[54.21px] rotate-[43.31deg]">
                    <FaQuestion className="size-6 rotate-0" />
                  </button>
                </div>
              </dviv>
            </div>
            <div>
              <div className="md:ml-[75px] ml-[15px]">
                <h1 className="font-semibold md:text-[30px] text-[20px]">
                  Our Campuses
                </h1>
                <div className="flex flex-wrap mt-2 md:mt-2">
                  <div className="md:mr-[15px] mr-[0px]">
                    <FaMapPin />
                  </div>
                  <div className="md:ml-[15px] md:text-[20px] text-[13px]">
                    <div className="md:leading-[1.5rem] leading-[1rem]">
                      Pluit Campus Pluit Timur Blok MM
                    </div>
                    <div className="mt-[0.5px] md:mt-2">(021) 6698888</div>
                  </div>
                </div>
                <div className="flex flex-wrap md:mb-[30px] mb-[10px] md:mt-2 mt-4">
                  <div className="md:mr-[15px] mr-[5px]">
                    <FaMapPin />
                  </div>
                  <div className="md:ml-[15px] md:text-[20px] text-[13px]">
                    <div className="md:leading-[1.5rem] leading-[1rem]">
                      Taman Pluit Putri, Jakarta Utara
                    </div>
                    <div className="mt-[0.5px] md:mt-2">(021) 6685858</div>
                  </div>
                </div>
                <div className="">
                  <h2 className="font-semibold md:text-[30px] text-[15px]">
                    Page Navigation
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 sm:mt-3 sm:grid-cols-1">
                    <div>
                      <Footer.LinkGroup col>
                        <Footer.Link
                          href="/onlineregistration"
                          className="text-white text-[12px] md:text-[15px]"
                        >
                          Daftar
                        </Footer.Link>
                      </Footer.LinkGroup>
                    </div>
                    <div>
                      <Footer.LinkGroup col>
                        <Footer.Link
                          href="/career"
                          className="text-white text-[12px] md:text-[15px]"
                        >
                          Karir
                        </Footer.Link>
                      </Footer.LinkGroup>
                    </div>
                    <div>
                      <Footer.LinkGroup col>
                        <Footer.Link
                          href="/alumni"
                          className="text-white text-[12px] md:text-[15px]"
                        >
                          Alumni
                        </Footer.Link>
                      </Footer.LinkGroup>
                    </div>
                    <div>
                      <Footer.LinkGroup col>
                        <Footer.Link
                          href="/contact"
                          className="text-white text-[12px] md:text-[15px]"
                        >
                          Kontak
                        </Footer.Link>
                      </Footer.LinkGroup>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="h-px my-5 bg-gray-600 border-0" />

          {/* <Footer.Divider /> */}
          <div className="w-full sm:flex sm:items-center sm:justify-between px-28 mb-5">
            <Footer.Copyright href="/" by="Bina Tunas Bangsa™" year={2024} />
            <div className="flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsYoutube} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default FooterComponent;
