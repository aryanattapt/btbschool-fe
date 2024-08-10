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
      {/* <div className="relative md:h-[475px]">
        <img
          // src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/belajarDiBtb.jpg"
          src = {`${btbBelajarData.bannerimage}`}
          alt="/belajarDiBtb.jpg"
          className="md:h-full md:w-full object-cover"
        />
      </div> */}

      <Carousel
        slideInterval={12000}
        className="relative md:h-[100vh] w-full h-[400px]"
      >
        {btbBelajarData.albumimage.map((val, idx) => {
          return (
            <div className="relative h-full w-full" key={idx}>
              <div
                className={`bg-cover absolute inset-0`}
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
