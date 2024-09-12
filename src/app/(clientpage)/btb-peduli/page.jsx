"use client";
import Banner from "./_layouts/banner";
import Pagging from "./_layouts/pagging";
/* import { useLanguageStore } from "../../../../store/language.store"; */
import { BTBPeduliPayload } from "../../../../data";
import useLanguage from "../../../hooks/useLanguage";
import { useState } from "react";
import PeduliLingkungan from "./_layouts/peduli-lingkungan";
import Sukarelawan from "./_layouts/sukarelawan";
import Introduction from "./_layouts/introduction";
import TanganPenolong from "./_layouts/tangan-penolong";

const BTBPeduliPage = () => {
  const [btbPeduliData, setBtbPeduliData] = useState(BTBPeduliPayload);
  /* const { language } = useLanguageStore(); */
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("introduction");
  return (
    <>
      <Banner />
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
