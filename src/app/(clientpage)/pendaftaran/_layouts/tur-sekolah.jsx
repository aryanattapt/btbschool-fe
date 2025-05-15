import React from "react";
import { HiPhone, HiMail } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";

const convertPhoneNumber = (input) => {
  try {
    const cleaned = input.replace(/[\s()]+/g, "").replace("+", "");
    const formatted = `+${cleaned.slice(0, 2)}${cleaned.slice(2)}`;
    return formatted;
  } catch (error) {
    return "";
  }
};

const TurSekolahPage = ({ data, language, generalSetting }) => {
  const emailAdmission = data[language]?.beasiswaPagedata?.detailschool?.[0]?.schoolemail;
  return (
    <>
      <div className="md:mx-32 mx-10 text-black leading-loose">
        <div className="mt-10 mb-5 text-[#00305E] sm:justify-center">
          <h1 className="md:text-[35px] text-[25px] font-semibold">
            {data[language]?.turSekolahdata?.title}
          </h1>
        </div>
        <p className="text-[14px] md:text-[16px] leading-[35px]">
          {data[language]?.turSekolahdata?.subtitle}
        </p>
        <p className="text-[14px] md:text-[16px] leading-[35px] font-semibold	">
          {data[language]?.turSekolahdata?.infomartion}
        </p>

        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 2xl:gap-4 xl:gap-4 lg:gap-0 sm:gap-0 md:gap-0 sm:gap-0">
          {
            generalSetting?.contact?.map((val, idx) => {
              return (
                <div key={idx}>
                  <div className="bg-[#EF802B] text-white rounded-xl my-5 px-4 py-7 sm:w-auto w-auto">
                    <h1 className="font-bold text-base sm:text-xs md:text-[13px] lg:text-base xl:text-xl 2xl:text-2xl ">
                      {val?.buildingName}
                    </h1>

                    <div className="flex items-center mt-2">
                      <HiPhone className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                      <p className="ml-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg">
                        {val?.phoneNo}
                      </p>
                    </div>

                    <div className="flex items-center mt-2">
                      <AiOutlineWhatsApp className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                      <a
                        href = {`https://wa.me/${convertPhoneNumber(
                          val?.whatsAppNo1
                        )}`}
                        className="ml-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg"
                      >
                        {val?.whatsAppNo1}
                      </a>
                    </div>

                    <div className="flex items-center mt-2">
                      <AiOutlineWhatsApp className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                      <a
                        href = {`https://wa.me/${convertPhoneNumber(
                          val?.whatsAppNo2
                        )}`}
                        className="ml-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg"
                      >
                        {val?.whatsAppNo2}
                      </a>
                    </div>

                    <div className="flex items-center mt-2">
                      <HiMail className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                      <a
                        className="ml-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg"
                        /* href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAdmission}`}  */
                        href={`mailto:${emailAdmission}`}
                        target="_blank" rel="noopener noreferrer"
                      >
                        {`admission@btbschool.org`}
                      </a>
                    </div>

                    <div>
                      <iframe
                        src={val[`mapsLocationEmbeded${language}`]}
                        className="w-full h-500 md:w-full md:h-64 lg:w-86 lg:h-70"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              )
            })
          }

          {/* {data[language]?.turSekolahdata?.detailschool?.map((val, idx) => {
            return (
              <div key={idx}>
                <div className="bg-[#EF802B] text-white rounded-xl my-5 px-4 py-7 sm:w-auto w-auto">
                  <h1 className="font-bold text-base sm:text-xs md:text-[13px] lg:text-base xl:text-xl 2xl:text-2xl ">
                    {val?.title}
                  </h1>

                  {val?.schooltlp?.map((val1, idx1) => (
                    <div className="flex items-center mt-2" key={idx1}>
                      <HiPhone className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                      <p className="ml-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg">
                        {val1}
                      </p>
                    </div>
                  ))}

                  {val?.schoolhp?.map((val2, idx2) => (
                    <div className="flex items-center mt-2" key={idx2}>
                      <AiOutlineWhatsApp className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                      <a
                        href={val2?.hrefwa}
                        className="ml-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg"
                      >
                        {val2?.waNumber}
                      </a>
                    </div>
                  ))}

                  <div className="flex items-center mt-2">
                    <HiMail className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                    <p
                      className="ml-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg"
                      onClick={() =>
                        (window.location.href = "mailto:" + val?.schoolemail)
                      }
                    >
                      {val?.schoolemail}
                    </p>
                  </div>

                  <div>
                    <iframe
                      src={val?.mapEmbed}
                      className="w-full h-500 md:w-full md:h-64 lg:w-86 lg:h-70"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            );
          })} */}
        </div>
      </div>
    </>
  );
};

export default TurSekolahPage;
