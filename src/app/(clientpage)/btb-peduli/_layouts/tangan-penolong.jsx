"use client";
import React from "react";
/* import { useLanguageStore } from "../../../../../store/language.store"; */

const TanganPenolong = ({ data, language }) => {
  /* const { language } = useLanguageStore(); */

  return (
    <div id="tangan-penolong">
      <div className="flex flex-col items-start">
        <h2 className="text-[#00305E] text-[25px] md:text-[50px] font-semibold mx-5 my-5 md:mx-32 md:my-[35px] mb-5">
          {data[language].tanganpenolongtitle}
        </h2>
        <img
          src={`${data.btbpedulilingkunganimage1}`}
          alt="btb-peduli2"
          className="w-full xl:h-[290px] md:h-auto object-cover mb-4"
        />
        <div className="mx-10 md:mx-32 mt-5 md:mt-20 mb-5">
          <p className="text-[#00305E] text-[14px] sm:text-center md:text-[30px] font-semibold md:mb-[25px] mb-[5px]">
            {data[language].text10}
          </p>
          <p className="text-black text-[14px] md:text-[20px] mb-[5px] md:mb-[25px]">
            {data[language].text11}
          </p>
          <p className="text-black text-[14px] md:text-[20px] mb-[5px] md:mb-[25px]">
            {data[language].text12}
          </p>
        </div>
        <img
          src={`${data.sukarelawanbtbimage4}`}
          alt="btb-peduli7"
          className="w-full xl:w-[1460.8px] xl:h-[308px] object-cover mb-5"
        />
        <div className="mx-10 md:mx-32 mt-5 md:mt-20 mb-5">
          <p className="text-black text-[15px] md:text-[20px] mb-[5px] md:mb-[25px]">
            {data[language].text13}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TanganPenolong;
