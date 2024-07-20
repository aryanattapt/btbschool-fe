"use client";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const FooterComponent = () => {
  return (
    <>
      <Footer container className="bg-[#00305E] text-white font-sans">
        <div className="w-full">
          <div className="grid grid-cols-2 gap-2 ">
            <div className="w-[478px] h-[111px] md:my-[50px] md:mx-[174px]">
              <img
                src="./LogoFooter.png"
                alt="logo btb"
                className="md:mb-[40px]"
              />
              <p className="md:my-[5px] md:text-[20px]">Connect With Us</p>
              <div className="flex flex-nowrap">
                <div>
                  <span>
                    <svg
                      class="h-8 w-8 text-white-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                </div>
                <div className="md:ml-[15px]">
                  <p className="md:my-[5px] md:text-[20px]">
                    admission@btbschool.org
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="ml-[75px] md:leading-[64px]">
                <h1 className="font-semibold md:text-[30px] ">Our Campuses</h1>
                <div className="flex flex-wrap md:mb-[30px]">
                  <div className="md:mr-[15px]">
                    <svg
                      class="h-8 w-8 text-white-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <line x1="18" y1="6" x2="18" y2="6.01" />{" "}
                      <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />{" "}
                      <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />{" "}
                      <line x1="9" y1="4" x2="9" y2="17" />{" "}
                      <line x1="15" y1="15" x2="15" y2="20" />
                    </svg>
                  </div>
                  <div className="md:ml-[15px]">
                    <p className="leading-[1.5rem] md:text-[20px]">
                      Pluit Campus Pluit Timur Blok MM
                      <br></br>
                      (021) 6698888
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap md:mb-[30px]">
                  <div className="md:mr-[15px]">
                    <svg
                      class="h-8 w-8 text-white-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <line x1="18" y1="6" x2="18" y2="6.01" />{" "}
                      <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />{" "}
                      <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />{" "}
                      <line x1="9" y1="4" x2="9" y2="17" />{" "}
                      <line x1="15" y1="15" x2="15" y2="20" />
                    </svg>
                  </div>
                  <div className="md:ml-[15px]">
                    <p className="leading-[1.5rem] md:text-[20px]">
                      Taman Pluit Putri, Jakarta Utara
                      <br></br>
                      (021) 6685858
                    </p>
                  </div>
                </div>
                <div className="">
                  <h2 className="md:text-[20px]">Page Navigation</h2>
                  <div className="grid grid-cols-2 gap-4 sm:mt-3 sm:grid-cols-4 ">
                    <div>
                      {/* <Footer.Title title="about" /> */}
                      <Footer.LinkGroup col>
                        <Footer.Link href="#" className="text-white">
                          Daftar
                        </Footer.Link>
                      </Footer.LinkGroup>
                    </div>
                    <div>
                      {/* <Footer.Title title="Follow us" /> */}
                      <Footer.LinkGroup col>
                        <Footer.Link href="#" className="text-white">
                          Karir
                        </Footer.Link>
                      </Footer.LinkGroup>
                    </div>
                    <div>
                      {/* <Footer.Title title="Legal" /> */}
                      <Footer.LinkGroup col>
                        <Footer.Link href="#" className="text-white">
                          Alumni
                        </Footer.Link>
                      </Footer.LinkGroup>
                    </div>
                    <div>
                      {/* <Footer.Title title="Legal" /> */}
                      <Footer.LinkGroup col>
                        <Footer.Link href="./contact" className="text-white">
                          Kontak
                        </Footer.Link>
                      </Footer.LinkGroup>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Flowbite™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default FooterComponent;
