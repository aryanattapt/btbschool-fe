"use client";
import {useLanguageStore} from '../../../../../store/language.store';
import {BTBBelajarPayload} from '../../../../../data';
import { useState } from 'react';
const SMA = () => {
  const [btbBelajarData, setBtbBelajarData] = useState(BTBBelajarPayload);
  const { language } = useLanguageStore();
  
  return (
    <>
      <div className="relative">
        <div className="mt-10 mb-5">
            <h1 className="text-[35px] font-bold px-10 md:pl-32 text-[#00305E]">
              {/* SEKOLAH MENENGAH ATAS */}
              {btbBelajarData[language]["sma"].title}
            </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-[350px]">
            <img 
            // src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/sma 3.jpg"
            src = {`${btbBelajarData.image5}`}
            alt="SMA"
            className="h-[350px] w-full object-cover" />
          </div>
          <div className="content-center bg-[#EF802B]">
            <h1 className="mt-5 md:mt-0 pl-5 text-[20px] md:w-[545px] font-semibold text-[#000000]">
            {/* Menguasai Teknik Bagi Masa Depan Mereka */}
            {btbBelajarData[language]["sma"].introduction.title}
            </h1>
            <div className="px-5 pb-5 md:p-5 text-left text-[20px] text-[#000000] text-pretty">
            {/* Di jenjang pendidikan ini anak anda akan melanjutkan perjalanan edukatifnya melalui fase 
            pembelajaran yang memotivasi mereka untuk menemukan dan menyadari hal terbaik yang ada pada dirinya dan orang lain. */}
            {btbBelajarData[language]["sma"].introduction.paragraph}
            </div>
          </div>
        </div>
        <div className="mt-10 mb-5 px-10 md:pl-32">
          <div className="border-b-8 border-[#EF802B] w-fit">
            <h1 className="text-[30px] font-semibold text-[#00305E]">
              {/* KURIKULUM */}
              {btbBelajarData[language]["sma"].curriculum.title}
            </h1>
          </div>
          <h1 className="text-balance text-[30px] text-[#000000] mt-5">
            {/* The International Baccalaureate (IB) Diploma Programme (DP) */}
            {btbBelajarData[language]["sma"].curriculum.subtitle}
          </h1>
        </div>
        <div className="text-[#000000] px-10 md:px-32 md:text-[16px] lg:text-[25px] xl:text-[18px]">
          <div className="my-5">
            {/* Kurikulum IBDP memiliki kualifikasi terhadap pemahaman nilai pokok ini. Kurikulum ini terbentuk dari nilai pokok dan enam kelompok mata pelajaran.
            Terbentuk dari tiga komponen utama, nilai pokok ini bertujuan untuk memperluas pengalaman belajar para murid dan menantang mereka untuk menggunakan pengetahuan dan kemampuan mereka. */}
            {btbBelajarData[language]["sma"].curriculum.paragraph}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="ml-5">
              <ul className="list-disc">
              {btbBelajarData[language]["sma"].curriculum.components.map((val, idx) => {
                  return <li key={idx}><strong>{val.title} </strong>
                    {val.description}
                  </li>
                })}
                {/* <li><strong>Teori Pengetahuan</strong>- 
                dimana para murid mengetahui dasar ilmu pengetahuan, 
                sehingga mereka mengerti akan ilmu pengetahuan yang mereka pelajari.
                </li>
                <li><strong>Esai Lanjutan</strong>- 
                  merupakan penelitian independen yang disusun secara pribadi dan diselesaikan dalam makalah dengan 4.000 kata.
                </li>
                <li>
                  <strong>Kreativitas, Aktivitas, dan Pelayanan</strong> - dimana para murid menyelesaikan sebuah 
                  proyek yang berhubungan dengan tiga konsep tersebut.
                </li> */}
              </ul>
            </div>
            <div className="ml-5">
              <div>Enam Kelompok Mata Pelajaran adalah:</div>
              <ul className="list-disc mt-2">
                {btbBelajarData[language]["sma"].curriculum.subjectGroups.map((val, idx) => {
                  return <li key={idx}><strong>{val}</strong>
                  </li>
                })}
                {/* <li>
                  <strong>Ilmu Bahasa dan Literatur</strong>
                </li>
                <li>
                  <strong>Kemahiran Berbahasa</strong>
                </li>
                <li>
                  <strong>Pribadi dan Masyarakat</strong>
                </li>
                <li>
                  <strong>Sains</strong>
                </li>
                <li>
                  <strong>Matematika</strong>
                </li>
                <li>
                  <strong>Kesenian</strong>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="my-10 bg-slate-300">
          <div className="flex justify-center text-justify items-center py-10 mx-10 md:mx-20 text-[#00305E] xl:leading-loose md:text-[16px] lg:text-[25px] xl:text-[18px] font-semibold">
            <p >
              {/* Pada dua tahun terakhir mereka di sekolah ini, masing - masing murid ditantang untuk menguasai 
            berbagai kemampuan yang dibutuhkan sesuai dengan jalan pilihan mereka. Mereka didorong untuk mengambil 
            tanggung jawab penuh terhadap pembelajaran mereka, termasuk fokus untuk pengembangan kemampuan yang 
            dibutuhkan untuk kesuksesan dan keahlian dalam enam bidang pilihan mereka. */}
            {btbBelajarData[language]["sma"].activities}
            </p>
          </div>
        </div>
        <div className="mt-10 flex justify-center items-center">
          <div className="border-b-8 border-[#EF802B] w-fit"> 
            <h1 className="text-[30px] font-semibold text-[#00305E]">
              {btbBelajarData[language]["sma"].programs.title}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 md:px-10 lg:px-32 xl:px-32 mt-5 md:text-[16px] lg:text-[25px] xl:text-[18px]">
          <div className="flex">
            <div className="flex flex-wrap content-center justify-center h-full">
              <div className="md:text-[16px] lg:text-[25px] xl:text-[18px] pr-0 lg:pr-10
                lg:text-justify xl:text-left text-balance text-pretty text-[#000000] xl:leading-loose">
              {btbBelajarData[language]["sma"].programs.desc}
              </div>
            </div>
          </div>
          <div className='flex'>
            <div className="w-full h-full">
              <img 
              src = {`${btbBelajarData.image6}`}
              alt="SMP"
              className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        {/* program kami */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 md:px-10 lg:px-32 xl:px-32 mt-10 md:text-[16px] lg:text-[25px] xl:text-[18px]">
          <div className='flex'>
            <div className="w-full h-full">
              <img 
              src = {`${btbBelajarData.image7}`}
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
                  {btbBelajarData[language]["sma"].programs.title}
                </h1>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <ul className="list-disc">
                    {btbBelajarData[language]["sma"].programs.list1.map((val, idx) => {
                      return <li key={idx}>{val}</li>
                    })}
                  </ul>
                </div>
                <div>
                  <ul className="list-disc">
                    {btbBelajarData[language]["sma"].programs.list2.map((val, idx) => {
                        return <li key={idx}>{val}</li>
                    })}
                  </ul>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="diLuarKelas mb-10">
          <div className="mt-10 md:mt-20 flex justify-end items-center pr-10 md:pr-32">
            <div className="border-b-8 border-[#EF802B] w-fit"> 
              <h1 className="text-[30px] font-semibold text-[#00305E]">
                {/* DI LUAR RUANGAN */}
                {btbBelajarData[language]["sma"].outdoor.title}
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 px-10 md:px-10 lg:px-32 xl:px-32 mt-10">
            <div className='flex'>
              <div className="w-full h-full">
                <img 
                src = {`${btbBelajarData.image8}`}
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
                    {btbBelajarData[language]["sma"].outdoor.text}
                  </h1>
                </div>
                <div>{btbBelajarData[language]["sma"].outdoor.paragraph}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-10 flex justify-center items-center">
            <button type="button" className="w-[250px] focus:outline-none text-white bg-[#00305E] focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              <a href="/contact-us">Contact Us</a> 
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SMA;
