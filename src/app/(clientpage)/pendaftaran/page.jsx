"use client";
import Banner from "./_layouts/banner";
import Pagging from "./_layouts/pagging";
import { useEffect, useState } from "react";
import Enrolment from "./_layouts/enrolment";
import Beasiswa from "./_layouts/beasiswa";
import TurSekolah from "./_layouts/tur-sekolah";
import { usePageData } from "../../../hooks/usePageData";
import Loader from "../../_components/loader";

const PendaftaranPage = () => {
  const [activeTab, setActiveTab] = useState("enrolment");

  const { language, getPendaftaranPageData, isLoading } = usePageData();
  const pendaftaranData = usePageData((state) => state.result.pendaftaranData);
  const generalSetting = usePageData((state) => state.result.generalPayload);

  useEffect(() => {
    // get data
    getPendaftaranPageData();

    // url navigation
    const hash = window.location.hash?.substring(1);
    if (!hash) setActiveTab("enrolment");
    else {
      const hashId = {
        enrolment: "enrolment",
        scholarship: "beasiswa",
        "school-tour": "tur-sekolah",
      };
      setActiveTab(hashId[hash]);
    }
  }, []);

  if (isLoading) {
    return <Loader />;
  } else if (pendaftaranData)
    return (
      <>
        <Banner payload={pendaftaranData} />
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
          <Beasiswa
            data={pendaftaranData}
            language={language}
            generalSetting={generalSetting}
          />
        )}
        {activeTab === "tur-sekolah" && (
          <TurSekolah
            data={pendaftaranData}
            language={language}
            generalSetting={generalSetting}
          />
        )}
      </>
    );
};

export default PendaftaranPage;
