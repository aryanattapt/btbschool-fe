import React from "react";
import { HiPhone, HiMail } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const BeasiswaPage = ({ data, language, generalSetting }) => {
  return (
    <>
      <div className="md:mx-32 mx-10 text-black leading-loose">
        <div className="mt-10 mb-5 text-[#00305E] sm:justify-center">
          <h1 className="md:text-[35px] text-[25px] font-semibold">
            {data[language]?.beasiswaPagedata?.title}
          </h1>
        </div>
        <p className="text-[14px] md:text-[16px] leading-[35px] text-justify">
          {data[language]?.beasiswaPagedata?.subtitle}
        </p>
        <p className="text-[14px] md:text-[16px] leading-[35px] font-semibold">
          {data[language]?.beasiswaPagedata?.infomartion}
        </p>

        {/* <div className="bg-[#EF802B] text-white rounded-xl my-5 px-4 py-7 2xl:w-2/4 xl:w-2/4 sm:w-auto w-auto">
          {data[language]?.beasiswaPagedata?.detailschool?.map((val, idx) => {
            return (
              <div
                key={idx}
                className={`${
                  idx > 0 && "border-white border-t-[2px] mt-4 pt-4"
                }`}
              >
                <h1 className="font-bold text-base sm:text-xs md:text-[13px] lg:text-base xl:text-xl 2xl:text-2xl ">
                  {val?.schoolName}
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
                  <a
                    className="ml-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg"
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${val?.schoolemail}`}
                    target="_blank"
                  >
                    {val?.schoolemail}
                  </a>
                </div>
              </div>
            );
          })}
        </div> */}

      <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 2xl:gap-4 xl:gap-4 lg:gap-0 sm:gap-0 md:gap-0 sm:gap-0">
        {data[language]?.beasiswaPagedata?.detailschool?.map((val, idx) => (
          <div key={idx}>
            <div className="bg-[#EF802B] text-white rounded-xl my-5 px-4 py-7 sm:w-auto w-auto">
              <h1 className="font-bold text-base sm:text-xs md:text-[13px] lg:text-base xl:text-xl 2xl:text-2xl">
                {val?.schoolName}
              </h1>

              <div className="flex items-center mt-2">
                <FaMapMarkerAlt  className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                <p className="ml-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg">
                  {val?.schoolAddress}
                </p>
              </div>

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
                    href= {`https://api.whatsapp.com/send/?phone=${val2?.hrefwa}`}
                    className="ml-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg"
                  >
                    {val2?.waNumber}
                  </a>
                </div>
              ))}

              <div className="flex items-center mt-2">
                <HiMail className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                <a
                  className="ml-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg"
                  /* href={`https://mail.google.com/mail/?view=cm&fs=1&to=${val?.schoolemail}`} */
                  href={`mailto:${val?.schoolemail}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {val?.schoolemail}
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default BeasiswaPage;
