"use client";
import { ContactUsPayLoad } from "../../../../../data";
import { useLanguageStore } from "../../../../../store/language.store";
import { useState } from "react";

const BannerLayouts = () => {
  const [contactUsData, setcontactUsData] = useState(ContactUsPayLoad);
  const { language } = useLanguageStore();
  return (
    <>
      <div className="relative md:h-[475px]">
        <img
          src={`${contactUsData.bannerImage}`}
          alt="bannercontact"
          className="md:h-full md:w-full object-cover"
        />
      </div>
    </>
  );
};

export default BannerLayouts;
