"use client";
import Banner from "./_layouts/banner";
import Pagging from "./_layouts/pagging";
import { useLanguageStore } from "../../../../store/language.store";
import { BTBPeduliPayload } from "../../../../data";
import { useState } from "react";

const BTBPeduliPage = () => {
  const [btbPeduliData, setBtbPeduliData] = useState(BTBPeduliPayload);
  const { language } = useLanguageStore();

  return (
    <>
      <Banner />
      <Pagging />
      <div className="mt-10 mb-5 md:pl-32 text-[#00305E] sm:justify-center">
        <h1 className="md:text-[35px] text-[30px] font-semibold">
          {btbPeduliData[language].btbpedulititle}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <img
            src={`${btbPeduliData.btbcaremage}`}
            alt="btb-peduli1"
            className="md:w-[519px]"
          />
        </div>
        <div className="bg-[#EF802B] w-full h-fit md:h-[363px] h-[163px] content-center">
          <p className="text-center	md:text-[25px] md:leading-[38px] text-[15px] p-5 md:p-5">
            {btbPeduliData[language].text1}
          </p>
        </div>
      </div>
      <div className="text-justify md:mx-32 mt-5">
        <p className="md:text-[20px] md:leading-[38px] text-black text-[15px] p-5 md:p-0">
          {btbPeduliData[language].text2}
        </p>
      </div>
      <div className="bg-slate-300">
        <div className="flex justify-center text-justify items-center md:py-10 md:px-32 py-5 px-5 mt-5 md:mt-5 text-[#00305E] md:leading-loose leading-normal text-[20px] font-semibold">
          <p className="text-center italic">{btbPeduliData[language].text3}</p>
        </div>
      </div>

      <div
        className="md:mx-32 mx-5 md:py-0 py-9 font-sans"
        id="peduli-lingkungan"
      >
        <h2 className="text-[#00305E] md:text-[50px] md:my-[35px] text-[25px] my-[5px] font-semibold">
          {btbPeduliData[language].pedulilingkungantitle}
        </h2>
        <img
          src={`${btbPeduliData.btbpedulilingkunganimage1}`}
          alt="btb-peduli2"
          className="md:w-[1460.8px] md:h-[308px] md:mb-[25px] mb-[10px]"
        />
        <p className="text-[#00305E] md:text-[30px] md:mb-[25px] text-[20px] mb-[15px]">
          {btbPeduliData[language].text4}
        </p>
        <p className="md:text-[20px] md:mb-[25px] text-black text-[15px] mb-[5px]">
          {btbPeduliData[language].text5}
        </p>
      </div>
      <div className="md:mx-32 grid grid-cols-1 md:grid-cols-2 gap-5 md:my-[100px] mx-5">
        <div>
          <h2 className="text-[#00305E] md:text-[30px] md:my-[35px] font-semibold	text-[25px] my-[5px]">
            {/* Melibatkan Semua */}
            {btbPeduliData[language].text6}
          </h2>
          <p className="md:leading-[38px] md:mr-[25px] md:text-[20px] text-[15px] text-black">
            {btbPeduliData[language].text7}
          </p>
        </div>
        <div>
          <img
            src={`${btbPeduliData.btbpedulilingkunganimage2}`}
            alt="btb-peduli3"
            className="md:w-[1124px] md:mb-[25px] mb-[5px]"
          />
        </div>
      </div>

      <div className="py-3 flex items-center text-sm text-gray-800 after:flex-1 after:border-t after:border-gray-200 after:mx-6 dark:text-white dark:after:border-neutral-600"></div>

      <div id="sukarelawan">
        <h2 className="md:mx-32 text-[#00305E] md:text-[50px] md:my-[35px] text-[25px] mx-5 my-5 font-semibold">
          {btbPeduliData[language].sukarelawantitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:mb-[25px] mb-[5px]">
          <div>
            <img
              src={`${btbPeduliData.sukarelawanbtbimage1}`}
              alt="btb-peduli2"
              className="md:w-fit md:h-[290px] py-2"
            />
          </div>
          <div>
            <img
              src={`${btbPeduliData.sukarelawanbtbimage2}`}
              alt="btb-peduli2"
              className="md:w-fit md:h-[290px] py-2"
            />
          </div>
          <div>
            <img
              src={`${btbPeduliData.sukarelawanbtbimage3}`}
              alt="btb-peduli2"
              className="md:w-fit md:h-[290px] py-2"
            />
          </div>
        </div>
        <div className="md:mx-32 mx-10 md:mt-20 mt-5">
          <p className="text-[#00305E] sm:text-center md:text-[30px] text-[15px] md:mb-[25px] mb-[5px] font-semibold">
            {btbPeduliData[language].text8}
          </p>
          <p className="md:text-[20px] sm:justify-center md:mb-[25px] text-[15px] mb-[5px] text-black">
            {btbPeduliData[language].text9}
          </p>
        </div>
        <img
          src={`${btbPeduliData.sukarelawanbtbimage4}`}
          alt="btb-peduli7"
          className="md:w-[1460.8px] md:h-[308px]"
        />
      </div>
    </>
  );
};

export default BTBPeduliPage;
