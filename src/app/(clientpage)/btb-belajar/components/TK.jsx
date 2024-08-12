"use client";
import {useLanguageStore} from '../../../../../store/language.store';
import {BTBBelajarPayload} from '../../../../../data';
import { useState } from 'react';

const TK = () => {
  const [btbBelajarData, setBtbBelajarData] = useState(BTBBelajarPayload);
  const { language } = useLanguageStore();
  return (
    <>
      <div className="relative">
        <div className="mt-10 mb-5">
          <h1 className="md:text-[35px] text-[30px] font-semibold pl-10 md:pl-32 text-[#00305E]">
            {btbBelajarData[language].tk.title}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img
              src = {`${btbBelajarData.image13}`}
              alt="PAUD"
              className="h-[350px] w-full object-cover"
            />
          </div>
          <div className="bg-[#EF802B] w-full h-fit md:h-[350px] h-[163px] content-center">
            <p className="text-center	md:text-[25px] md:leading-[38px] text-[15px] p-5">
              {btbBelajarData[language].tk.introduction.paragraph}
            </p>
          </div>
        </div>
        <div className="mt-10 mb-5 pl-10 md:pl-32">
          <div className="border-b-8 border-[#EF802B] w-fit">
            <h1 className="text-[30px] font-semibold text-[#00305E]">
              {btbBelajarData[language].tk.curriculum.title}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 px-10 md:px-32 mt-5 gap-12">
          <div className="text-[#000000] text-[18px] md:text-[16px]">
            <h1 className="text-balance text-[30px]">Fokus:</h1>
            <div className="ml-5">
              <ul className="list-disc">
                 {btbBelajarData[language].tk.curriculum.components1.map((val, idx) => {
                      return <li key={idx}>
                      {val}
                    </li> 
                  })}
              </ul>
            </div>
            <div className="mt-2 text-pretty">
              {btbBelajarData[language].tk.curriculum.desc1}
            </div>
          </div>
          <div className="text-[#000000] text-[18px] md:text-[16px]">
            <h1 className="text-balance text-[30px]">Subyek Spesial:</h1>
            <div className="ml-5">
              <ul className="list-disc">
                {btbBelajarData[language].tk.curriculum.components2.map((val, idx) => {
                      return <li key={idx}>
                      {val}
                    </li> 
                  })}
              </ul>
            </div>
            <div className="mt-2 text-justify text-pretty">
              {btbBelajarData[language].tk.curriculum.desc2}
            </div>
          </div>
        </div>
        <div className="mt-20 flex justify-center items-center">
          <div className="border-b-8 border-[#EF802B] w-fit">
            <h1 className="text-[30px] font-semibold text-[#00305E]">
              {btbBelajarData[language].tk.activity.title}
            </h1>
          </div>
        </div>
        <div className="md:h-[305px] px-10 md:pl-32 md:mt-5">
          <div className="flex flex-wrap">
            <div className="py-10 text-[18px] md:text-[16px] pr-10 text-justify text-pretty text-[#000000] w-[545px]">
              {btbBelajarData[language].tk.activity.content}
            </div>
            <div className="h-[305px] md:w-[518px]">
              <img
                src = {`${btbBelajarData.image14}`}
                alt="PAUD"
                className="h-[305px] md:w-[518px] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="md:h-[305px] px-10 md:pl-32 mt-5">
          <div className="flex flex-wrap">
            <div className="h-[325px] w-[518px]">
              <img
                src = {`${btbBelajarData.image15}`}
                alt="PAUD"
                className="h-[305px] w-full object-cover"
              />
            </div>
            <div className="md:pb-10 md:pl-10">
              <h1 className="text-[18px] font-semibold text-[#000000]">
                {btbBelajarData[language].tk.programs.title}
              </h1>
              <div className="pl-3 text-[#000000] md:w-[545px]">
                <ul className="list-disc">
                  {btbBelajarData[language].tk.programs.list1.map((val, idx) => {
                      return <li key={idx}>
                      {val}
                    </li> 
                  })}
                </ul>
                <div className="pt-1">
                  {btbBelajarData[language].tk.programs.desc}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mb-10 flex flex-col justify-end">
          <div className="mt-20 flex justify-end items-center px-10 md:px-32">
            <div className="border-b-8 border-[#EF802B]">
              <h1 className="text-[30px] font-semibold text-[#00305E]">
                {/* DI LUAR RUANGAN */}
                {btbBelajarData[language].tk.outdoor.title}
              </h1>
            </div>
          </div>
          <div className="md:h-[305px] px-10 md:pl-32 mt-5 text-[18px] md:text-[16px] ">
            <div className="flex flex-wrap">
              <div>
                <img
                  src = {`${btbBelajarData.image16}`}
                  alt="PAUD"
                  className="md:h-[305px] md:w-[518px] object-cover"
                />
              </div>
              <div className="md:pb-10 md:pl-10">
                <h1 className="text-[18px] md:w-[545px] font-semibold text-[#000000]">
                  {btbBelajarData[language].tk.outdoor.text}
                </h1>
                <div className="text-[#000000] md:w-[545px] leading-loose">
                  {btbBelajarData[language].tk.outdoor.paragraph}
                </div>
              </div>
            </div>
          </div>
          <div className="my-5 md:mt-10 flex justify-center items-center">
            <button
              type="button"
              className="w-[250px] focus:outline-none text-white bg-[#00305E] focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              <a href="/contact-us">Contact Us</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TK;
