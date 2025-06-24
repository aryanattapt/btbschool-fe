"use client";
import { useEffect, useState } from "react";
import { usePageData } from "../../../hooks/usePageData";
import Loader from "../../_components/loader";
import BTBKnightBanner from "./_layouts/Banner";
// import BtbKnightPaging from "./_layouts/Paging";
import Pagging from "./../../_components/paging";
import BtbKnightOpening from "./_layouts/Opening";
import BtbKnightPurpose from "./_layouts/Purpose";
import BtbKnightClosing from "./_layouts/Closing";
import BtbKnightGallery from "./_layouts/Gallery";
import BtbKnightQuote from "./_layouts/Quote";

const BTBKnight = () => {
  const { language, getBTBKnightPageData, isLoading, navigation } = usePageData();
  const btbKnightData = usePageData((state) => state.result.btbknight);

  useEffect(() => {
    getBTBKnightPageData();
  }, []);

  const ScrollToHash = () => {
    useEffect(() => {
      const hash = window.location.hash; // contoh: #gallery
      if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, []);

    return null; // ini hanya logic, gak render apapun
  };

  if (isLoading) {
    return <Loader />;
  } else if (btbKnightData)
    return (
      <div className="overflow-hidden">
        <ScrollToHash />
        <BTBKnightBanner btbKnightData={btbKnightData} />
        {/* <BtbKnightPaging btbKnightData={btbKnightData} language={language} /> */}
        <Pagging navbardata={navigation.navbar[language].navbarlink.find(x => x.id == "btbknights")}/>
        <div className="flex flex-col gap-y-12 md:gap-y-24 px-10 lg:px-32">
          <BtbKnightOpening btbKnightData={btbKnightData} language={language} />
          <BtbKnightPurpose btbKnightData={btbKnightData} language={language} />
          <BtbKnightClosing btbKnightData={btbKnightData} language={language} />
          <BtbKnightGallery images={btbKnightData?.gallery} />
        </div>
        <BtbKnightQuote btbKnightData={btbKnightData} language={language} />
      </div>
    );
};

export default BTBKnight;
