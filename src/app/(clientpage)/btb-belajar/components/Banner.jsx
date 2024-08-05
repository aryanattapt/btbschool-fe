"use client";
import {useLanguageStore} from '../../../../../store/language.store';
import {BTBBelajarPayload} from '../../../../../data';
import { useState } from 'react';

const Banner = () => {
  const [btbBelajarData, setBtbBelajarData] = useState(BTBBelajarPayload);
  const { language } = useLanguageStore();

  return (
    <>
      <div className="relative h-[475px] w-full">
        <img
          // src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/belajarDiBtb.jpg"
          src = {`${btbBelajarData.bannerimage}`}
          alt="/belajarDiBtb.jpg"
          className="h-[475px] w-full object-cover"
        />
      </div>
    </>
  );
};

export default Banner;
