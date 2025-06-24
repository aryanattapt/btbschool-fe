"use client";
import CeritaAlumni from "./_layouts/cerita-alumni";
import PendaftaranAlumni from "./_layouts/pendaftaran-alumni";
import Banner from "./_layouts/banner";
import Pagging from "./../../_components/paging";
import { useEffect, useState } from "react";
import { usePageData } from "../../../hooks/usePageData";
import Loader from "../../_components/loader";

const AlumniPage = () => {
  const [activeTab, setActiveTab] = useState("story");
  const { language, getAlumniPageData, isLoading, navigation } = usePageData();
  const alumniPayload = usePageData((state) => state.result.alumni);
  const alumniStoryPayload = usePageData((state) => state.result.alumniStory);
  const alumniUniversityPayload = usePageData(
    (state) => state.result.alumniUniversity
  );
  const instagramFeed = usePageData((state) => state.result.instagramFeed);

  useEffect(() => {
    // get data
    getAlumniPageData();

    // url navigation
    const hash = window.location.hash?.substring(1);
    if (!hash) setActiveTab("story");
    else {
      setActiveTab(hash);
    }

    // Optionally listen to hash changes dynamically
    const onHashChange = () => {
      const newHash = window.location.hash ? window.location.hash.substring(1) : '';
      setActiveTab(newHash || 'story');
    };

    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  } else if (alumniPayload)
    return (
      <>
        <Banner alumniPayload={alumniPayload} />
        
        <Pagging
          navbardata={navigation.navbar[language].navbarlink.find(x => x.id == "alumni")}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {activeTab === "story" && (
          <CeritaAlumni
            alumniPayload={alumniPayload}
            alumniStoryPayload={alumniStoryPayload}
            alumniUniversityPayload={alumniUniversityPayload}
            language={language}
            instagramFeed={instagramFeed}
          />
        )}

        {activeTab === "registration" && (
          <PendaftaranAlumni
            alumniPayload={alumniPayload}
            language={language}
          />
        )}
      </>
    );
};

export default AlumniPage;
