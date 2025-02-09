import { Footer } from "flowbite-react";
import { MdMailOutline } from "react-icons/md";
import {
  FaMapPin,
  FaWhatsapp,
} from "react-icons/fa";
import { usePageData } from '../../hooks/usePageData';

const convertPhoneNumber = (input) => {
  try {
    const cleaned = input.replace(/[\s()]+/g, "").replace("+", "");
    const formatted = `+${cleaned.slice(0, 2)}${cleaned.slice(2)}`;
    return formatted;
  } catch (error) {
    return "";
  }
};

const FooterComponent = () => {
  const {language, isLoading} = usePageData();
  const payload = usePageData((state) => state.result.generalPayload);
  const footerPayload = usePageData((state) => state.footerPayload);
  const linkEmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${footerPayload.email}`;

  if(isLoading) {
    return <></>
  }
  else if(payload)
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
                      href={linkEmail}
                      className="inline-flex underline"
                      target="_blank" rel="noopener noreferrer"
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
              </div>
              <div>
                <h1 className="font-semibold md:text-[30px] text-[20px] md:text-left text-center">
                  {footerPayload[language].schooltitle}
                </h1>
                {payload?.contact?.map((val, idx) => {
                  return (
                    <div key={idx}>
                      <div className="flex flex-wrap mt-2 md:mt-0 xl:mt-2">
                        <div className="xl:text-[20px] md:text-[18px] text-[14.7px] md:text-left text-center">
                          <div className="xl:leading-[1.5rem] font-bold flex xl:text-left">
                            {val?.buildingName}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap mt-2 md:mt-0 xl:mt-2">
                        <div className="md:mr-1 mr-2 xl:mr-[15px]">
                          <FaMapPin />
                        </div>
                        <div className="xl:text-[20px] md:text-[18px] text-[14.7px] md:text-left text-center">
                          <div className="xl:leading-[1.5rem] flex xl:text-left">
                            <a href={val?.mapsLocation} target="_blank">
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
              {/* <div className="flex space-x-6 sm:mt-0 sm:justify-center">
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
              </div> */}
            </div>
          </div>
        </Footer>
      </>
    );
};

export default FooterComponent;
