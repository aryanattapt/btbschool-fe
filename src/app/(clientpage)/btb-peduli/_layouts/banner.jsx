"use client";

import { useState } from "react";
import {useLanguageStore} from '../../../../../store/language.store';
import {BTBPeduliPayload} from '../../../../../data';

const BannerLayouts = () => {
  const [btbPeduliData, setBTBPeduliData] = useState(BTBPeduliPayload);
  const { language } = useLanguageStore();

  return (
    <>
      <div className="relative md:h-[475px]">
        <img
          src={`${btbPeduliData.bannerimage}`}
          alt="bannerbtbpeduli"
          className="md:h-full md:w-full object-cover"
        />
      </div>
    </>
  );
};

export default BannerLayouts;
