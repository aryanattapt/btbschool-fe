"use client";
import Banner from "../components/Banner";
import Pagging from "../components/Pagging";
import SMA from "../components/SMA";
import { useState } from "react";
import { useLanguageStore } from "../../../../../store/language.store";
import { BTBBelajarPayload } from "../../../../../data";
import { Carousel } from "flowbite-react";

const SMAPage = () => {
  const [btbBelajarData, setBtbBelajarData] = useState(BTBBelajarPayload);
  const { language } = useLanguageStore();
  return (
    <>
      {/* <Banner /> */}
      <Carousel
        slideInterval={12000}
        className="relative h-[400px] md:h-[600px] lg:h-[1000px] xl:h-[100vh] w-full"
      >
        {btbBelajarData[language].sma.bannerImages.map((val, idx) => {
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
      <SMA />
    </>
  );
};

export default SMAPage;
