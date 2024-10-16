"use client";
import Banner from "../components/Banner";
import Pagging from "../components/Pagging";
import SMA from "../components/SMA";
import { useEffect, useState } from "react";
/* import { useLanguageStore } from "../../../../../store/language.store"; */
import { BTBBelajarPayload } from "../../../../../data";
import { Carousel } from "flowbite-react";
import useLanguage from "../../../../hooks/useLanguage";
import { GetConfig } from "../../../../../services/config.service";

const SMAPage = () => {
  const [btbBelajarData, setBtbBelajarData] = useState({});
  /* const { language } = useLanguageStore(); */
  const {language} = useLanguage();

  useEffect(() => {
    try {
      GetConfig('general', {"type": "btbbelajar"})
      .then((res) => setBtbBelajarData(res[0]))
      .catch((err) => console.log(err))
    } catch (error) {console.log(error);}
  }, [])

  return (
    <>
      {/* <Banner /> */}
      <Carousel
        slideInterval={3000}
        className="relative h-[400px] md:h-[600px] lg:h-[1000px] xl:h-[100vh] w-full"
      >
        {btbBelajarData[language]?.sma?.bannerImages?.map((val, idx) => {
          return (
            <div className="relative h-full w-full" key={idx}>
              <img src={val} alt="bannerSMA" className="absolute inset-0 h-full w-full object-cover"></img>
            </div>
          );
        })}
      </Carousel>
      <Pagging btbBelajarData={btbBelajarData}/>
      <SMA btbBelajarData={btbBelajarData}/>
    </>
  );
};

export default SMAPage;
