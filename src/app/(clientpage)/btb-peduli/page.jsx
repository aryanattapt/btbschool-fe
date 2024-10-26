"use client";
import Banner from "./_layouts/banner";
import Pagging from "./_layouts/pagging";
import { useEffect, useState } from "react";
import PeduliLingkungan from "./_layouts/peduli-lingkungan";
import Sukarelawan from "./_layouts/sukarelawan";
import Introduction from "./_layouts/introduction";
import TanganPenolong from "./_layouts/tangan-penolong";
import { usePageData } from '../../../hooks/usePageData';

const BTBPeduliPage = () => {
  const [activeTab, setActiveTab] = useState("introduction");

  const {language, getBTBPeduliPageData, isLoading} = usePageData();
  const btbPeduliData = usePageData((state) => state.result.btbpeduli);

  useEffect(() => {
    getBTBPeduliPageData();
  }, []);

  if(isLoading) {
    return <div>loading...</div>
  }
  else if(btbPeduliData)
    return (
      <>
        <Banner btbPeduliData={btbPeduliData} language={language}/>
        <Pagging
          btbPeduliData={btbPeduliData}
          language={language}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {activeTab === "introduction" && (
          <Introduction data={btbPeduliData} language={language} />
        )}
        {activeTab === "peduli-lingkungan" && (
          <PeduliLingkungan data={btbPeduliData} language={language} />
        )}
        {activeTab === "sukarelawan" && (
          <Sukarelawan data={btbPeduliData} language={language} />
        )}
        {activeTab === "tangan-penolong" && (
          <TanganPenolong data={btbPeduliData} language={language} />
        )}
      </>
    );
};

export default BTBPeduliPage;
