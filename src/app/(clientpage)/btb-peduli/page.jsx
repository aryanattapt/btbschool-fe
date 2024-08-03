'use client'
import Banner from "./_layouts/banner";
import Pagging from "./_layouts/pagging";
import {useLanguageStore} from '../../../../store/language.store';
import {BTBPeduliPayload} from '../../../../data';
import { useState } from "react";

const BTBPeduliPage = () => {
  const [btbPeduliData, setBtbPeduliData] = useState(BTBPeduliPayload);
  const { language } = useLanguageStore();

  return (
    <>
      <Banner />
      <Pagging />
      <h1 className="md:mx-[76px] font-sans text-[#00305E] md:text-[60px] font-semibold">
        {/* BTB CARE */}
        {btbPeduliData[language].btbpedulititle}
      </h1>
      <div className="flex flex-nowrap md:ml-[76px] font-sans">
        <div>
          <img
            src={`${btbPeduliData.btbcaremage}`}
            alt="btb-peduli1"
            className="md:w-[519px]"
          />
        </div>
        <div className="bg-[#EF802B] md:w-[640px] md:h-[363px] content-center	">
          <p className="text-center	md:text-[20px] md:leading-[38px]">
            {/* BTB Peduli adalah program komunitas dari sekolah BTB yang bertujuan
            menyatukan semua orang, menginspirasi perubahan, dan memberikan
            dampak positif bagi hidup orang banyak, hal ini merupakan cara BTB
            untuk memberikan kembali kepada masyarakat. */}
            {btbPeduliData[language].text1}
          </p>
        </div>
      </div>
      <div className="content-center md:mx-[76px] ">
        <p className="md:text-[20px] md:leading-[38px] text-black">
          {/* BTB Peduli berharap untuk menanamkan kepedulian sosial lingkungan yang
          kuat dan bertanggung jawab dalam pribadi setiap murid, mulai dari
          kelompok bermain hingga sekolah menengah atas.  Program ini termasuk
          BTB Peduli Lingkungan, Sukarelawan BTB, dan Tangan Penolong BTB
          ditambah lagi tim khusus bencana alam. */}
          {btbPeduliData[language].text2}
        </p>
      </div>
      <div className="content-center md:mx-[76px] md:my-[70px]">
        <p className="md:text-[30px] md:leading-[38px] text-[#00305E] italic ">
          {/* “Tujuan BTB Peduli adalah mengembangkan individual muda yang inovatif
          dan peduli sehingga bisa tumbuh menjadi orang yang bertanggung jawab
          ditengah masyarakat global.” */}
          {btbPeduliData[language].text3}
        </p>
      </div>

      <div className="py-3 flex items-center text-sm text-gray-800 after:flex-1 after:border-t after:border-gray-200 after:mx-6 dark:text-white dark:after:border-neutral-600"></div>

      <div className="md:mx-[76px] font-sans" id="peduli-lingkungan">
        <h2 className="text-[#00305E] md:text-[50px] md:my-[35px] font-medium	">
          {/* BTB PEDULI LINGKUNGAN */}
          {btbPeduliData[language].pedulilingkungantitle}
        </h2>
        <img
          // src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/btb-peduli2.png"
          src= {`${btbPeduliData.btbpedulilingkunganimage1}`}
          alt="btb-peduli2"
          className="md:w-[1124px] md:mb-[25px]"
        />
        <p className="text-[#00305E] text-[30px] md:mb-[25px]">
          {/* Bumi kita merupakan warisan yang akan terus diturunkan dari generasi
          ke generasi. */}
          {btbPeduliData[language].text4}
        </p>
        <p className="md:text-[20px] md:mb-[25px] text-black">
          {/* BTB Peduli berharap untuk menanamkan kepedulian sosial lingkungan yang
          kuat dan bertanggung jawab dalam pribadi setiap murid, mulai dari
          kelompok bermain hingga sekolah menengah atas. Program ini termasuk
          BTB Peduli Lingkungan, Sukarelawan BTB, dan Tangan Penolong BTB
          ditambah lagi tim khusus bencana alam. */}
          {btbPeduliData[language].text5}
        </p>
      </div>
      <div className="flex flex-nowrap md:mx-[76px] gap-5 md:my-[100px]">
        <div>
          <h2 className="text-[#00305E] md:text-[30px] md:my-[35px] font-semibold	">
            {/* Melibatkan Semua */}
            {btbPeduliData[language].text6}
          </h2>
          <p className="md:leading-[38px] md:mr-[25px] md:text-[20px] text-black">
            {/* Kegiatan BTB Green Hands melibatkan setiap murid untuk menanam pohon
            sebagai bagian dari inisiatif global untuk mengurangi efek perubahan
            iklim dan pemanasan global. */}
            {btbPeduliData[language].text7}
          </p>
        </div>
        <div>
          <img
            // src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/btb-peduli3.jpeg"
            src= {`${btbPeduliData.btbpedulilingkunganimage2}`}
            alt="btb-peduli3"
            className="md:w-[1124px] md:mb-[25px]"
          />
        </div>
      </div>

      <div className="py-3 flex items-center text-sm text-gray-800 after:flex-1 after:border-t after:border-gray-200 after:mx-6 dark:text-white dark:after:border-neutral-600"></div>

      <div className=" font-sans" id="sukarelawan">
        <h2 className="text-[#00305E] md:text-[50px] md:my-[35px] md:mx-[76px]">
          {/* SUKARELAWAN BTB */}
          {btbPeduliData[language].sukarelawantitle}
        </h2>
        <div className="flex flex-wrap md:mb-[25px]">
          <div>
            <img
              // src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/btb-peduli4.png"
              src= {`${btbPeduliData.sukarelawanbtbimage1}`}
              alt="btb-peduli2"
              className="md:w-[449px] md:h-[290px]"
            />
          </div>
          <div>
            <img
              // src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/btb-peduli5.jpeg"
              src= {`${btbPeduliData.sukarelawanbtbimage2}`}
              alt="btb-peduli2"
              className="md:w-[449px] md:h-[290px]"
            />
          </div>
          <div>
            <img
              // src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/btb-peduli6.jpeg"
              src= {`${btbPeduliData.sukarelawanbtbimage3}`}
              alt="btb-peduli2"
              className="md:w-[449px] md:h-[290px]"
            />
          </div>
        </div>

        <p className="text-[#00305E] md:text-[30px] md:mb-[25px] font-semibold md:mx-[76px]">
          {/* KOMITMEN UNTUK MELAYANI */}
          {btbPeduliData[language].text8}
        </p>
        <p className="md:text-[20px] md:mb-[25px] md:mx-[76px] text-black">
          {/* Setiap murid BTB diajak untuk berpartisipasi dengan menjadi
          sukarelawan dalam program yang disesuaikan dengan kelompok umur
          mereka. Sebagai contoh para murid Kelompok Bermain dan Sekolah Dasar
          dapat berkontribusi dengan menyiapkan dan membungkus kado, serta
          mengunjungi panti asuhan. Murid Sekolah Menengah dapat menjadi
          sukarelawan untuk mengajar anak-anak yang kurang beruntung sedangkan
          murid Sekolah Menengah Atas dapat mengunjungi panti jompo. */}
          {btbPeduliData[language].text9}
        </p>
        <img
          // src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/btb-peduli7.jpeg"
          src= {`${btbPeduliData.sukarelawanbtbimage4}`}
          alt="btb-peduli7"
          className="md:w-[1460.8px] md:h-[308px]"
        />
      </div>
    </>
  );
};

export default BTBPeduliPage;
