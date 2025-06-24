"use client";
import Banner from "./_layouts/banner";
import Pagging from "./../../_components/paging";
import { useEffect, useState } from "react";
import Enrolment from "./_layouts/enrolment";
import Beasiswa from "./_layouts/beasiswa";
import TurSekolah from "./_layouts/tur-sekolah";
import { usePageData } from "../../../hooks/usePageData";
import Loader from "../../_components/loader";

const PendaftaranPage = () => {
  const [activeTab, setActiveTab] = useState("enrolment");

  const { language, getPendaftaranPageData, isLoading, navigation } = usePageData();
  const pendaftaranData = usePageData((state) => state.result.pendaftaranData);
  const generalSetting = usePageData((state) => state.result.generalPayload);

  useEffect(() => {
    // get data
    getPendaftaranPageData();

    // url navigation
    const hash = window.location.hash?.substring(1);
    if (!hash) setActiveTab("enrolment");
    else {
      setActiveTab(hash);
    }

    // Optionally listen to hash changes dynamically
    const onHashChange = () => {
      const newHash = window.location.hash ? window.location.hash.substring(1) : '';
      setActiveTab(newHash || 'enrolment');
    };

    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  } else if (pendaftaranData)
    return (
      <>
        <Banner payload={pendaftaranData} />
        <Pagging
          navbardata={navigation.navbar[language].navbarlink.find(x => x.id == "registration")}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {activeTab === "enrolment" && (
          <Enrolment data={pendaftaranData} language={language} />
        )}
        {activeTab === "scholarship" && (
          <Beasiswa
            data={pendaftaranData}
            language={language}
            generalSetting={generalSetting}
          />
        )}
        {activeTab === "school-tour" && (
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
