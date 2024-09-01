"use client";
import Banner from "./_layouts/banner";
import Pagging from "./_layouts/pagging";
import { useLanguageStore } from "../../../../store/language.store";
import { BTBPeduliPayload } from "../../../../data";
import { useState } from "react";
import PeduliLingkungan from "./_layouts/peduli-lingkungan";
import Sukarelawan from "./_layouts/sukarelawan";
import Introduction from "./_layouts/introduction";

const BTBPeduliPage = () => {
  const [btbPeduliData, setBtbPeduliData] = useState(BTBPeduliPayload);
  const { language } = useLanguageStore();
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

      {activeTab === "introduction" && <Introduction data={btbPeduliData} />}
      {activeTab === "peduli-lingkungan" && (
        <PeduliLingkungan data={btbPeduliData} />
      )}
      {activeTab === "sukarelawan" && <Sukarelawan data={btbPeduliData} />}
    </>
  );
};

export default BTBPeduliPage;
