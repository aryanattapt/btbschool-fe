"use client";
import Banner from "./_layouts/banner";
import Pagging from "./_layouts/pagging";
import { useEffect, useState } from "react";
import Enrolment from "./_layouts/enrolment";
import Beasiswa from "./_layouts/beasiswa";
import TurSekolah from "./_layouts/tur-sekolah";
import { usePageData } from '../../../hooks/usePageData';

const PendaftaranPage = () => {
  const [activeTab, setActiveTab] = useState("enrolment");

  const {language, getPendaftaranPageData, isLoading} = usePageData();
  const pendaftaranData = usePageData((state) => state.result.pendaftaranData);
  const generalSetting = usePageData((state) => state.result.generalPayload);

  useEffect(() => {
    getPendaftaranPageData();
  }, [])

  if(isLoading) {
    return <div>loading...</div>
  }
  else if(pendaftaranData)
    return (
      <>
        <Banner />
        <Pagging
          pendaftaranData={pendaftaranData}
          language={language}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {activeTab === "pendaftaran"}
        {activeTab === "enrolment" && (
          <Enrolment data={pendaftaranData} language={language} />
        )}
        {activeTab === "beasiswa" && (
          <Beasiswa data={pendaftaranData} language={language} generalSetting={generalSetting}/>
        )}
        {activeTab === "tur-sekolah" && (
          <TurSekolah data={pendaftaranData} language={language} generalSetting={generalSetting}/>
        )}
      </>
    );
};

export default PendaftaranPage;
