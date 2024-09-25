"use client";
import Banner from "../components/Banner";
import Pagging from "../components/Pagging";
import SD from "../components/SD";
import { useState } from "react";
/* import { useLanguageStore } from "../../../../../store/language.store"; */
import useLanguage from '../../../../hooks/useLanguage';
import { BTBBelajarPayload } from "../../../../../data";
import { Carousel } from "flowbite-react";

const SDPage = () => {
  const [btbBelajarData, setBtbBelajarData] = useState(BTBBelajarPayload);
  /* const { language } = useLanguageStore(); */
  const {language} = useLanguage();

  return (
    <>
      {/* <Banner /> */}
      <Carousel
        slideInterval={3000}
        className="relative h-[400px] md:h-[600px] lg:h-[1000px] xl:h-[100vh] w-full"
      >
        {btbBelajarData[language].sd.bannerImages.map((val, idx) => {
          return (
            <div className="relative h-full w-full" key={idx}>
              <img src={val} alt="bannerSD" className="absolute inset-0 h-full w-full object-cover"></img>
            </div>
          );
        })}
      </Carousel>
      <Pagging />
      <SD />
    </>
  );
};

export default SDPage;
