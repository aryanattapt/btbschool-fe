"use client";
import React from "react";

const DetailLayouts = ({ data, language }) => {
  return (
    <>
      <div className="md:mx-32 mx-10 text-black leading-loose">
        <div className="mt-10 mb-5 mx-5 md:pl-32 text-[#00305E] sm:justify-center">
          <h1 className="md:text-[35px] text-[25px] font-semibold">
            {data[language].title}
          </h1>
        </div>
        <p className="text-[14px] md:text-[16px] leading-[35px]">
          {data[language].subtitle}
        </p>
        <p className="text-[14px] md:text-[16px] leading-[35px] font-semibold	">
          {data[language].infomartion}
        </p>

        <div>
          {data[language].detailschool.map((val, idx) => {
            return (
              <div key={idx}>
                <h1 className="font-bold text-base sm:text-xs md:text-[13px] lg:text-base xl:text-xl 2xl:text-2xl pt-4 md:pt-6 lg:pt-8">
                  {val.schoolName}
                </h1>
                <div className="flex items-center mt-2">
                  <HiPhone className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                  <p className="ml-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg">
                    {val.phoneNumber}
                  </p>
                </div>
                {val.schooltlp.map((val1, idx1) => (
                  <div className="flex items-center mt-2" key={idx1}>
                    <HiPhone className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                    <p className="ml-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg">
                      {val1}
                    </p>
                  </div>
                ))}

                {val.schoolhp.map((val2, idx2) => (
                  <div className="flex items-center mt-2" key={idx2}>
                    <AiOutlineWhatsApp className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                    <a
                      href={val2.hrefwa}
                      className="ml-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg"
                    >
                      {val2.waNumber}
                    </a>
                  </div>
                ))}
                <div>
                  <HiMail className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                  <p
                    className="ml-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg"
                    onClick={() =>
                      (window.location.href = "mailto:" + val?.schoolemail)
                    }
                  >
                    {val.schoolemail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DetailLayouts;
