"use client";
import { useLanguageStore } from "../../../../../store/language.store";
import { BTBBelajarPayload } from "../../../../../data";
import { useState } from "react";
import { Carousel } from "flowbite-react";

const Banner = () => {
  const [btbBelajarData, setBtbBelajarData] = useState(BTBBelajarPayload);
  const { language } = useLanguageStore();

  return (
    <>
      <Carousel
        slideInterval={12000}
        className="relative h-[400px] md:h-[600px] lg:h-[1000px] xl:h-[100vh] w-full"
      >
        {btbBelajarData.albumimage.map((val, idx) => {
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
    </>
  );
};

export default Banner;