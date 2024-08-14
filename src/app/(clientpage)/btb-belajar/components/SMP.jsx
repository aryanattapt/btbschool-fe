"use client";
import {useLanguageStore} from '../../../../../store/language.store';
import {BTBBelajarPayload} from '../../../../../data';
import { useState } from 'react';

const SMP = () => {
  const [btbBelajarData, setBtbBelajarData] = useState(BTBBelajarPayload);
  const { language } = useLanguageStore();
  
  return (
    <>
      <div className="relative">
        <div className="mt-10 mb-5">
            <h1 className="text-[30px] md:text-[35px] font-bold ml-10 md:ml-32 lg:ml-32 xl:ml-32 text-[#00305E]">
              {/* SEKOLAH MENENGAH */}
              {btbBelajarData[language].smp.title}
            </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-[350px] md:h-[350px] lg:h-[400px] xl:h-[350px]">
            <img 
            src = {`${btbBelajarData.image9}`}
            alt="SMP"
            className="h-[350px] md:h-[350px] lg:h-[400px] xl:h-[350px] w-full object-cover" />
          </div>
          <div className="content-center bg-[#EF802B]">
            <h1 className="pt-5 px-10 md:pl-5 text-[20px] font-semibold text-[#000000]">
            {/* Pengalaman Yang Kaya, Pilihan dan Tantangan */}
            {btbBelajarData[language].smp.introduction.title}
            </h1>
            <div className="md:p-5 px-10 py-3 text-left text-[20px] text-[#000000] text-pretty">
            {/* Para murid ditantang untuk mengembangkan pribadi mereka pada tahun transisi yang penting 
            di sekolah menengah ini, baik di dalam ataupun di luar kelas. 
            Tujuan dari fase ini adalah untuk memperluas pandangan mereka terhadap diri sendiri untuk 
            dapat menemukan kemampuan mereka pada subjek berbeda dan melanjutkan eksplorasi 
            mereka pada dunia di luar lingkungan sekolah. */}
            {btbBelajarData[language].smp.introduction.paragraph}
            </div>
          </div>
        </div>
        <div className="mt-10 mb-5 pl-10 md:pl-32">
          <div className="border-b-8 border-[#EF802B] w-fit">
            <h1 className="text-[30px] font-semibold text-[#00305E]">
              {/* KURIKULUM */}
              {btbBelajarData[language].smp.curriculum.title}
            </h1>
          </div>
          <h1 className="text-balance text-[30px] text-[#000000] mt-5">
            {/* Fokus: */}
            {btbBelajarData[language].smp.curriculum.subtitle}
          </h1>
        </div>
        <div className="text-[#000000]">
          <div className="grid grid-cols-1 md:grid-cols-2 px-10 md:px-32 gap-12">
            <div className="ml-5 md:text-[16px] lg:text-[25px] xl:text-[18px]">
              <ul className="list-disc">
              {btbBelajarData[language].smp.curriculum.components1.map((val) => {
                  return <li><strong>{val.title}</strong> 
                  {val.description}
                </li> 
              })}
                {/* <li><strong>Bahasa Inggris</strong>- 
                  Mengembangkan kemampuan berbahasa secara kreatif meliputi 
                  mempelajari berbagai literasi dan membina kebiasaan belajar.
                </li>
                <li><strong>Bahasa Mandarin</strong>- 
                  Memberikan kesempatan para murid untuk menguasai bahasa asing.
                </li>
                <li>
                  <strong>Perniagaan</strong> - Memberikan tantangan pada para murid dalam area seperti Ekonomi, 
                  Akuntansi, dan Bisnis.
                </li>
                <li>
                  <strong>Matematika</strong>- Berperan penting dalam teknologi baru 
                  dan mengembangkan kemampuan baca tulis para murid. 
                  Kemampuan ini membantu mereka untuk lebih mengerti dunia.
                </li> */}
              </ul>
            </div>
            <div className="ml-5 md:text-[16px] lg:text-[25px] xl:text-[18px]">
              <ul className="list-disc">
                {/* <li>
                  <strong>Sains</strong> - Keberagaman, kesinambungan, dan konservasi adalah elemen penting pada mata pelajaran ini.
                </li>
                <li>
                  <strong>TIK (Teknologi Informasi dan Komputer)</strong> - Mengenalkan para murid pada bidang teknologi terbaru.
                </li>
                <li>
                  <strong>Pendidikan Jasmani</strong> - Memberikan para murid trik dan strategi untuk 
                  menghadapi stress, konflik, dan berbagai masalah kesehatan dan gaya hidup.
                </li>
                <li>
                  <strong>Musik, Kemampuan berdialog Bahasa Inggris, Agama, dan Kewarganegaraan</strong> juga merupakan mata pelajaran yang menjadi bagian dalam kurikulum.
                </li> */}
                {btbBelajarData[language].smp.curriculum.components2.map((val) => {
                  return <li><strong>{val.title}</strong>
                  {val.description}
                </li> 
              })}
              </ul>
            </div>
          </div>
        </div>
        <div className="my-10 bg-slate-300">
          <div className="flex md:text-[16px] lg:text-[25px] xl:text-[18px] text-justify justify-center items-center py-10 mx-10 text-[#00305E] font-semibold">
            {/* Sertifikasi ‘The Cambridge International General Certificate of Secondary Education’ 
            (IGCSE) akan diberikan kepada lulusan murid tingkat 10 yang memenuhi kualifikasi dari sertifikat tersebut. 
            Para murid juga akan mendapatkan raport yang mencakup nilai mereka pada Tingkat 9 dan Tingkat 10. */}
            {btbBelajarData[language].smp.curriculum.paragraph}
          </div>
        </div>
        <div className="activity">
          <div className="mt-10 flex justify-center items-center">
            <div className="border-b-8 border-[#EF802B] w-fit"> 
              <h1 className="text-[30px] font-semibold text-[#00305E]">
                {/* AKTIVITAS */}
                {btbBelajarData[language].smp.activity.title}
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 md:px-10 lg:px-32 xl:px-32 mt-5 md:text-[16px] lg:text-[25px] xl:text-[18px]">
            <div className="flex">
              <div className="flex flex-wrap content-center justify-center h-full">
                <div className="md:text-[16px] lg:text-[25px] xl:text-[18px] pr-0 lg:pr-10
                  text-left text-balance text-[#000000] xl:leading-loose">
                {btbBelajarData[language].smp.activity.content}
                </div>
              </div>
            </div>
            <div className='flex'>
              <div className="w-full h-full">
                <img 
                src = {`${btbBelajarData.image10}`}
                alt="SMP"
                className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          {/* program kami  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 md:px-10 lg:px-32 xl:px-32 mt-10 md:text-[16px] lg:text-[25px] xl:text-[18px]">
            <div className='flex'>
              <div className="w-full h-full">
                <img 
                src = {`${btbBelajarData.image11}`}
                alt="SMP"
                className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-wrap content-center justify-center h-full">
                <div className="md:text-[16px] lg:text-[25px] xl:text-[18px] pl-10 lg:pl-10
                  text-left text-balance text-[#000000]">
                    <div>
                  <h1 className="font-semibold text-[#000000]">
                    {/* PROGRAM KAMI */}
                    {btbBelajarData[language].smp.programs.title}
                  </h1>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <ul className="list-disc">
                      {btbBelajarData[language].smp.programs.list1.map((val) => {
                          return <li>
                          {val}
                        </li> 
                      })}
                    </ul>
                  </div>
                  <div>
                    <ul className="list-disc">
                      {btbBelajarData[language].smp.programs.list2.map((val) => {
                          return <li>
                          {val}
                        </li> 
                      })}
                    </ul>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* DI LUAR RUANGAN */}
          <div className="mt-10 md:mt-20 flex justify-end items-center pr-10 md:pr-32 md:text-[16px] lg:text-[25px] xl:text-[18px]">
            <div className="border-b-8 border-[#EF802B] w-fit"> 
              <h1 className="text-[30px] font-semibold text-[#00305E]">
                {btbBelajarData[language].smp.outdoor.title}
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 px-10 md:px-10 lg:px-32 xl:px-32 mt-10">
            <div className='flex'>
              <div className="w-full h-full">
                <img 
                src = {`${btbBelajarData.image10}`}
                alt="SMP"
                className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-wrap content-center justify-center h-full">
                <div className="md:text-[16px] lg:text-[25px] xl:text-[18px] pl-0 xl:pl-5
                  text-justify md:text-left lg:text-left xl:text-left">
                    <div>
                  <h1 className="font-semibold lg:text-[30px] xl:text-[20px]">
                    {btbBelajarData[language].smp.outdoor.text}
                  </h1>
                </div>
                <div>{btbBelajarData[language].smp.outdoor.paragraph}</div>
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
      </div>
    </>
  );
};

export default SMP;
