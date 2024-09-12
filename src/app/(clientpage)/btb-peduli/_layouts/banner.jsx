"use client";

import { useState } from "react";
/* import {useLanguageStore} from '../../../../../store/language.store'; */
import { BTBPeduliPayload } from "../../../../../data";

const BannerLayouts = () => {
  const [btbPeduliData, setBTBPeduliData] = useState(BTBPeduliPayload);
  /* const { language } = useLanguageStore(); */

  return (
    <>
      <div className="w-100% md:h-[475px]">
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
