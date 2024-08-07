"use client";
import {useLanguageStore} from '../../../../../store/language.store';
import {BTBBelajarPayload} from '../../../../../data';
import { useState } from 'react';

const banner = () => {
  return (
    <>
      {/* <div className="relative h-[475px] w-full">
        <img
          // src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/belajarDiBtb.jpg"
          src = {`${btbBelajarData.bannerimage}`}
          alt="/belajarDiBtb.jpg"
          className="h-[475px] w-full object-cover"
        />
      </div> */}
      <div className="relative md:h-[475px]">
        <img
          src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/bannercontact.jpeg"
          alt="bannercontact"
          className="md:h-full md:w-full object-cover"
        />
      </div>
    </>
  );
};

export default banner;
