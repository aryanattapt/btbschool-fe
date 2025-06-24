"use client";
import Banner from "./_layouts/banner";
import Pagging from "./../../_components/paging";
import { useEffect, useState } from "react";
import PeduliLingkungan from "./_layouts/peduli-lingkungan";
import Sukarelawan from "./_layouts/sukarelawan";
import Introduction from "./_layouts/introduction";
import TanganPenolong from "./_layouts/tangan-penolong";
import { usePageData } from "../../../hooks/usePageData";
import Loader from "../../_components/loader";

const BTBPeduliPage = () => {
  const [activeTab, setActiveTab] = useState("introduction");

  const { language, getBTBPeduliPageData, isLoading, navigation } = usePageData();
  const btbPeduliData = usePageData((state) => state.result.btbpeduli);

  useEffect(() => {
    // get data
    getBTBPeduliPageData();

    // url navigation
    const hash = window.location.hash?.substring(1);
    if (!hash) setActiveTab("introduction");
    else {
      setActiveTab(hash);
    }

    // Optionally listen to hash changes dynamically
    const onHashChange = () => {
      const newHash = window.location.hash ? window.location.hash.substring(1) : '';
      setActiveTab(newHash || 'introduction');
    };

    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  } else if (btbPeduliData)
    return (
      <>
        <Banner btbPeduliData={btbPeduliData} language={language} />
        <Pagging
          navbardata={navigation.navbar[language].navbarlink.find(x => x.id == "btb-peduli")}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {activeTab === "introduction" && (
          <Introduction data={btbPeduliData} language={language} />
        )}
        {activeTab === "care-environment" && (
          <PeduliLingkungan data={btbPeduliData} language={language} />
        )}
        {activeTab === "volunteers" && (
          <Sukarelawan data={btbPeduliData} language={language} />
        )}
        {activeTab === "environment" && (
          <TanganPenolong data={btbPeduliData} language={language} />
        )}
      </>
    );
};

export default BTBPeduliPage;
