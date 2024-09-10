"use client";
import Pagging from "../components/Pagging";
import TK from "../components/TK";
import { useState } from "react";
/* import { useLanguageStore } from "../../../../../store/language.store"; */
import { BTBBelajarPayload } from "../../../../../data";
import { Carousel } from "flowbite-react";
import useLanguage from "../../../../hooks/useLanguage";

const TKPage = () => {
  const [btbBelajarData, setBtbBelajarData] = useState(BTBBelajarPayload);
  /* const { language } = useLanguageStore(); */
  const {language} = useLanguage();

  return (
    <>
      {/* <Banner /> */}
      <Carousel
        slideInterval={12000}
        className="relative h-[400px] md:h-[600px] lg:h-[1000px] xl:h-[100vh] w-full"
      >
        {btbBelajarData[language].tk.bannerImages.map((val, idx) => {
          return (
            <div className="relative h-full w-full" key={idx}>
              <div
                className="bg-cover absolute inset-0"
                style={{ backgroundImage: `url(${val})` }}
              ></div>
            </div>
          );
        })}
      </Carousel>
      <Pagging />
      <TK />
    </>
  );
};

export default TKPage;
