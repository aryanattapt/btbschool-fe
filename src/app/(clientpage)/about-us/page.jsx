"use client";
import Banner from "./components/banner";
import Pagging from "./components/pagging";
import { useEffect, useState } from "react";
import Pengenalan from "./components/pengenalan";
import VisiMisi from "./components/visi-misi";
import JenjangPendidikan from "./components/jenjang-pendidikan";
import { usePageData } from "../../../hooks/usePageData";
import Loader from "../../_components/loader";

const AboutUsPage = () => {
  const [activeTab, setActiveTab] = useState("pengenalan");
  const { language, getAboutUsPageData, isLoading } = usePageData();
  const aboutUsData = usePageData((state) => state.result.aboutus);
  const gradelistData = usePageData((state) => state.result.gradelist);

  useEffect(() => {
    // get data
    getAboutUsPageData();

    // url navigation
    const hash = window.location.hash?.substring(1);
    if (!hash) setActiveTab("pengenalan");
    else {
      const hashId = {
        introduction: "pengenalan",
        "vision-mission": "visi-misi",
        education: "jenjang-pendidikan",
      };
      setActiveTab(hashId[hash]);
    }
  }, []);

  if (isLoading) {
    return <Loader />;
  } else if (aboutUsData)
    return (
      <>
        <Banner payload={aboutUsData} />
        <Pagging
          aboutUsData={aboutUsData}
          language={language}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {activeTab === "pengenalan" && (
          <Pengenalan data={aboutUsData} language={language} />
        )}
        {activeTab === "visi-misi" && (
          <VisiMisi data={aboutUsData} language={language} />
        )}
        {activeTab === "jenjang-pendidikan" && (
          <JenjangPendidikan data={gradelistData} language={language} />
        )}

        <div>
          <div className="my-8 md:my-10 bg-[#243F6D]">
            <div className="flex text-center items-center md:py-10 py-5 md:mx-40 mx-10 text-white leading-loose text-[14px] lg:text-[16px] font-semibold">
              {/* Pengajar BTB mendorong para murid untuk dapat menemukan tempatnya di dunia yang memiliki tantangan 
          dan peluang tidak terbatas ini. Mereka membimbing para murid untuk berpikir, bertindak, dan menerima 
          rekannya dan diri mereka sendiri. */}
              {aboutUsData[language]?.smallparagraph}
            </div>
          </div>
        </div>
      </>
    );
};

export default AboutUsPage;
