"use client";
import React from "react";
/* import { useLanguageStore } from "../../../../../store/language.store"; */

const Introduction = ({ data, language }) => {
  /* const { language } = useLanguageStore(); */

  return (
    <div id="introduction">
        <div className="mt-10 mb-5 mx-5 md:pl-32 text-[#00305E] sm:justify-center">
          <h1 className="md:text-[35px] text-[30px] font-semibold">
            {data[language].btbpedulititle}
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex-1 flex justify-center items-center p-4">
            <img
              src={`${data.btbcaremage}`}
              alt="btb-peduli1"
              className="w-full h-auto max-w-md md:max-w-lg"
            />
          </div>
          <div className="bg-[#EF802B] flex-1 flex items-center justify-center p-6 md:p-8">
            <p className="text-center text-base md:text-xl md:leading-7 text-white">
              {data[language].text1}
            </p>
          </div>
        </div>

        <div className="text-justify md:mx-32 mt-5 mb-5">
          <p className="md:text-[20px] md:leading-[38px] text-black text-[15px] p-5 md:p-0">
            {data[language].text2}
          </p>
        </div>
        <div className="bg-slate-300 mb-10">
          <div className="flex justify-center text-justify items-center md:py-10 md:px-32 py-5 px-5 mt-5 md:mt-5 text-[#00305E] md:leading-loose leading-normal text-[20px] font-semibold">
            <p className="text-center italic">{data[language].text3}</p>
          </div>
        </div>
      </div>
    );
};

export default Introduction;