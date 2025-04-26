"use client";
import CeritaAlumni from "./_layouts/cerita-alumni";
import PendaftaranAlumni from "./_layouts/pendaftaran-alumni";
import Banner from "./_layouts/banner";
import Pagging from "./_layouts/pagging";
import { useEffect, useState } from "react";
import { usePageData } from "../../../hooks/usePageData";
import Loader from "../../_components/loader";

const AlumniPage = () => {
  const [activeTab, setActiveTab] = useState("cerita-alumni");
  const { language, getAlumniPageData, isLoading } = usePageData();
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
    if (!hash) setActiveTab("cerita-alumni");
    else {
      const hashId = {
        story: "cerita-alumni",
        registration: "pendaftaran-alumni",
      };
      setActiveTab(hashId[hash]);
    }
  }, []);

  if (isLoading) {
    return <Loader />;
  } else if (alumniPayload)
    return (
      <>
        <Banner alumniPayload={alumniPayload} />
        <Pagging
          alumniPayload={alumniPayload}
          language={language}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {activeTab === "cerita-alumni" && (
          <CeritaAlumni
            alumniPayload={alumniPayload}
            alumniStoryPayload={alumniStoryPayload}
            alumniUniversityPayload={alumniUniversityPayload}
            language={language}
            instagramFeed={instagramFeed}
          />
        )}

        {activeTab === "pendaftaran-alumni" && (
          <PendaftaranAlumni
            alumniPayload={alumniPayload}
            language={language}
          />
        )}
      </>
    );
};

export default AlumniPage;
