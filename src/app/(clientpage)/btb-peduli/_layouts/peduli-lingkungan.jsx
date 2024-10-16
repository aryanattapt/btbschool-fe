"use client";
import React from "react";
/* import { useLanguageStore } from "../../../../../store/language.store"; */

const PeduliLingkungan = ({ data, language }) => {
  /* const { language } = useLanguageStore(); */

  return (
    <div>
      <div className="md:mx-32 mx-5 md:py-0 py-9">
        <h2 className="text-[#00305E] xl:text-[50px] xl:my-[35px] md:text-[35px] text-[25px] my-[5px] font-semibold">
          {data[language]?.pedulilingkungantitle}
        </h2>
        <img
          src={`${data?.btbpedulilingkunganimage1}`}
          alt="btb-peduli2"
          className="xl:w-[1460.8px] xl:h-[308px] md:w-screen md:h-auto md:mb-[25px] mb-[10px] lg:h-auto"
        />
        <p className="text-[#00305E] md:text-[30px] md:mb-[25px] text-[19px] mb-[15px]">
          {data[language]?.text4}
        </p>
        <p className="md:text-[20px] md:mb-[25px] text-black text-[14px] mb-[5px]">
          {data[language]?.text5}
        </p>
      </div>
      <div className="md:mx-32 grid grid-cols-1 xl:grid-cols-2 md:grid-cols-1 gap-5 xl:my-[100px] mx-5 mb-5">
        <div>
          <h2 className="text-[#00305E] md:text-[30px] md:my-[35px] font-semibold text-[25px] my-[5px]">
            {data[language]?.text6}
          </h2>
          <p className="md:leading-[38px] md:mr-[25px] md:text-[20px] text-[14px] text-black">
            {data[language]?.text7}
          </p>
        </div>
        <div>
          {
            data?.btbpedulilingkunganimage2 && <img
              src={`${data?.btbpedulilingkunganimage2}`}
              alt="btb-peduli3"
              className="xl:w-[1124px] xl:mb-[25px] md:w-auto mb-[5px] lg:mb-[10px]"
            />
          }
        </div>
      </div>
    </div>
  );
};

export default PeduliLingkungan;