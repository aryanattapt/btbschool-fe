"use client";
import {useLanguageStore} from '../../../../../store/language.store';
import {BTBBelajarPayload} from '../../../../../data';
import { useState } from 'react';

const SD = () => {
  const [btbBelajarData, setBtbBelajarData] = useState(BTBBelajarPayload);
  const { language } = useLanguageStore();

  return (
    <>
      <div className="relative">
        <div className="mt-10 mb-5">
            <h1 className="md:text-[35px] text-[30px] font-semibold pl-10 md:pl-32 text-[#00305E]">{btbBelajarData[language]["sd"].title}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex">
            <img 
            src = {`${btbBelajarData.image1}`}
            alt="SD"
            className="h-full w-full object-cover" />
          </div>
          <div className="content-center bg-[#EF802B] p-5">
            <h1 className="text-center md:text-center lg:text-center xl:text-justify text-[20px] md:text-[20px] lg:text-[25px] xl:text-[20px] text-[#000000] text-pretty font-semibold">
              {/* Fundamental yang Menyenangkan */}
              {btbBelajarData[language]["sd"].text1}
            </h1>
            <div className="text-center md:text-center lg:text-center xl:text-justify text-[20px] md:text-[20px] lg:text-[25px] xl:text-[20px] text-[#000000] text-pretty">
              {/* Anak anda akan melanjutkan perjalanan edukatifnya melalui fase pembelajaran yang memotivasi 
              mereka untuk menemukan dan menyadari hal terbaik yang ada pada dirinya dan orang lain. */}
              {btbBelajarData[language]["sd"].text2}
            </div>
          </div>
        </div>
        <div className="mt-10 mb-5 pl-10 md:pl-10 lg:pl-32 xl:pl-32">
          <div className="border-b-8 border-[#EF802B] w-fit">
            <h1 className="text-[30px] font-semibold text-[#00305E]">
              {btbBelajarData[language]["sd"].text3}
            </h1>
          </div>
          <h1 className="text-balance text-[30px] text-[#000000] mt-5">
            {/* Fokus: */}
            Fokus:
          </h1>
        </div>
        {/* kurikulum */}
        <div className="text-[#000000]">
          <div className="grid grid-cols-1 md:grid-cols-2 px-10 md:px-10 lg:px-32 xl:px-32 gap-12">
            <div className="ml-5 text-[16px] md:text-[20px] lg:text-[25px] xl:text-[18px]">
              <ul className="list-disc">
                {btbBelajarData[language]["sd"].kurikulumlist1.map((val, idx) => {
                  return <li key={idx}><strong>{val.title} </strong>
                    {val.content}
                  </li>
                })}
              </ul>
            </div>
            <div className="ml-5 text-[16px] md:text-[20px] lg:text-[25px] xl:text-[18px]">
              <ul className="list-disc">
                {btbBelajarData[language]["sd"].kurikulumlist2.map((val, idx) => {
                  return <li key={idx}><strong>{val.title} </strong>
                    {val.content}
                  </li>
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="activity">
          <div className="mt-20 flex justify-center items-center">
            <div className="border-b-8 border-[#EF802B] w-fit"> 
              <h1 className="text-[30px] font-semibold text-[#00305E]">
                {/* AKTIVITAS */}
                {btbBelajarData[language]["sd"].text5}
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 md:px-10 lg:px-32 xl:px-32 mt-5 text-[16px] md:text-[20px] lg:text-[25px] xl:text-[18px]">
            <div className="flex">
              <div className="flex flex-wrap content-center justify-center h-full">
                <div className="pr-0 lg:pr-10 text-justify text-balance text-[#000000] xl:leading-loose">
                {btbBelajarData[language]["sd"].text6}
                </div>
              </div>
            </div>
            <div className='flex'>
              <div className="w-full h-full">
                <img 
                src = {`${btbBelajarData.image2}`}
                alt="SMP"
                className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          {/* PROGRAM KAMI */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 md:px-10 lg:px-32 xl:px-32 mt-10 text-[16px] md:text-[20px] lg:text-[25px] xl:text-[18px]">
            <div className='flex'>
              <div className="w-full h-full">
                <img 
                src = {`${btbBelajarData.image3}`}
                alt="SMP"
                className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-wrap content-center justify-center h-full">
                <div className="pl-5 lg:pl-10 text-left text-balance text-[#000000]">
                    <div>
                  <h1 className="font-semibold text-[#000000]">
                    {/* PROGRAM KAMI */}
                    {btbBelajarData[language]["sd"].text7}
                  </h1>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <ul className="list-disc">
                      {btbBelajarData[language]["sd"].programlist1.map((val, idx) => {
                        return <li key={idx}>{val}</li>
                      })}
                    </ul>
                  </div>
                  <div>
                    <ul className="list-disc">
                      {btbBelajarData[language]["sd"].programlist2.map((val, idx) => {
                        return <li key={idx}>{val}</li>
                      })}
                    </ul>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-20 flex justify-end items-center pr-10 md:pr-10 lg:pr-32 xl:pr-32 md:text-[16px] lg:text-[25px] xl:text-[18px]">
          <div className="border-b-8 border-[#EF802B] w-fit"> 
            <h1 className="text-[30px] font-semibold text-[#00305E]">
              {btbBelajarData[language]["sd"].text8}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 px-10 md:px-10 lg:px-32 xl:px-32 mt-10">
          <div className='flex'>
            <div className="w-full h-full">
              <img 
              src = {`${btbBelajarData.image4}`}
              alt="SMP"
              className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-wrap content-center justify-center h-full">
              <div className="text-[18px] md:text-[20px] lg:text-[25px] xl:text-[18px] pl-0 xl:pl-5 text-justify">
                <div>
                  <h1 className="font-semibold lg:text-[30px] xl:text-[20px]">
                    {btbBelajarData[language]["sd"].text9}
                  </h1>
                </div>
              <div className='text-left text-justify'>{btbBelajarData[language]["sd"].text10}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 flex justify-center items-center">
            <button type="button" className="md:text-[16px] lg:text-[25px] xl:text-[20px] w-[250px] md:w-[250px] lg:w-[350px] xl:w-[250px] focus:outline-none text-white bg-[#00305E] focus:ring-4 focus:ring-red-300 rounded-lg text-sm px-5 py-2.5 md:py-2.5 lg:py-5 xl:py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              <a href="/contact-us">Contact Us</a> 
            </button>
          </div>
      </div>
    </>
  );
};

export default SD;
