"use client";
import { useEffect, useState } from "react";
import { usePageData } from "../../../hooks/usePageData";
import Loader from "../../_components/loader";
import BTBKnightBanner from "./_layouts/Banner";
import BtbKnightPaging from "./_layouts/Paging";
import BtbKnightOpening from "./_layouts/Opening";
import BtbKnightPurpose from "./_layouts/Purpose";
import BtbKnightClosing from "./_layouts/Closing";
import BtbKnightGallery from "./_layouts/Gallery";

const BTBKnight = () => {
  const [activeTab, setActiveTab] = useState("introduction");

  const { language, getBTBKnightPageData, isLoading } = usePageData();
  const btbKnightData = usePageData((state) => state.result.btbknight);

  useEffect(() => {
    getBTBKnightPageData();
  }, []);

  if (isLoading) {
    return <Loader />;
  } else if (btbKnightData)
    return (
      <>
        <BTBKnightBanner btbKnightData={btbKnightData} />
        <BtbKnightPaging btbKnightData={btbKnightData} language={language} />
        <div className="flex flex-col gap-y-24 px-10 md:px-10 lg:px-32">
          <BtbKnightOpening btbKnightData={btbKnightData} language={language} />
          <BtbKnightPurpose btbKnightData={btbKnightData} language={language} />
          <BtbKnightClosing btbKnightData={btbKnightData} language={language} />
          <BtbKnightGallery btbKnightData={btbKnightData} language={language} />
        </div>
      </>
    );
};

export default BTBKnight;
