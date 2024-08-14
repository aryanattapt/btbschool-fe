"use client";
import { ContactUsPayLoad } from "../../../../../data";
import { useLanguageStore } from "../../../../../store/language.store";
import { useState } from "react";

const BannerLayouts = () => {
  const [contactUsData, setcontactUsData] = useState(ContactUsPayLoad);
  const { language } = useLanguageStore();
  return (
    <>
      <div className="relative h-[475px] w-full">
        <img
          src = {`${contactUsData.bannerImage}`}
          alt="bannercontact"
          className="h-[475px] w-full object-cover"
        />
      </div>
    </>
  );
};

export default BannerLayouts;
