"use client";
import React from "react";
/* import { useLanguageStore } from "../../../../../store/language.store"; */

const PengenalanPage = ({ data, language }) => {
  /* const { language } = useLanguageStore(); */

  return (
    <>
      <div className="relative">
        <div className="mt-10 mb-5 pl-10 md:pl-32 text-[#00305E] sm:justify-center">
          <h1 className="md:text-[35px] text-[25px] font-semibold">
            {data[language].title}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img
              src={`${data.image1}`}
              alt="PAUD"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="content-center bg-[#EF802B]">
            <div className="p-5 text-left xl:text-[25px] 2xl:text-[25px] text-[14px] md:text-[20px] text-[#000000] text-pretty">
              {data[language].desc}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PengenalanPage;
