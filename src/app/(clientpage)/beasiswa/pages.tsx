"use client";
import Banner from "./_layouts/banner";
import Pagging from "./_layouts/pagging";
import { BeasiswaPayLoad } from "../../../../data";
import useLanguage from "../../../hooks/useLanguage";
import { useState } from "react";

const BeasiswaPage = () => {
  const [beasiswaData, setBeasiswaData] = useState(BeasiswaPayLoad);
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("introduction");
  return (
    <>
      <Banner />
      <Pagging
        beasiswaData={beasiswaData}
        language={language}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* {activeTab === "introduction" && (
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
      )} */}
    </>
  );
};

export default BeasiswaPage;
