"use client";
/* import {useLanguageStore} from '../../../../../store/language.store'; */
import {BulletinSpotlightPayload} from '../../../../../data';
import { useState } from 'react';

const Banner = () => {
  const [bulletinSpotlightData, setBulletinSpotlightData] = useState(BulletinSpotlightPayload);
  /* const { language } = useLanguageStore(); */

  return (
    <>
      <div className="relative h-[475px] w-full">
        <img
          src = {`${bulletinSpotlightData.bannerImage}`}
          alt="/bulletinSpotlight.jpg"
          className="h-[475px] w-full object-cover"
        />
      </div>
    </>
  );
};

export default Banner;
