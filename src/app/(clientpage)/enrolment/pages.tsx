"use client";
import Banner from "./_layouts/banner";
import Pagging from "./_layouts/pagging";
import { EnrolmentPayload } from "../../../../data";
import useLanguage from "../../../hooks/useLanguage";
import { useState } from "react";
import Steps from "./_layouts/steps";

const EnrolmentPage = () => {
  const [enrolmentData, setEnrolmentData] = useState(EnrolmentPayload);
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("introduction");
  return (
    <>
      <Banner />
      <Pagging
        enrolmentData={enrolmentData}
        language={language}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Steps data={enrolmentData} language={language} />
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

export default EnrolmentPage;
