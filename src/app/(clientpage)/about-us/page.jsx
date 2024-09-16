"use client";
import Banner from "./components/banner";
import Pagging from "./components/pagging";
/* import { useLanguageStore } from "../../../../store/language.store"; */
import useLanguage from '../../../hooks/useLanguage';
import { AboutUsPayload } from "../../../../data";
import { useState } from "react";
import Pengenalan from "./components/pengenalan";
import VisiMisi from "./components/visi-misi";
import JenjangPendidikan from "./components/jenjang-pendidikan";

const AboutUsPage = () => {
  const [aboutUsData, setAboutUsData] = useState(AboutUsPayload);
  /* const { language } = useLanguageStore(); */
  const {language} = useLanguage();
  const [activeTab, setActiveTab] = useState("pengenalan");

  return (
    <>
      <Banner />
      <Pagging
        aboutUsData={aboutUsData}
        language={language}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === "pengenalan" && <Pengenalan data={aboutUsData} language={language} />}
      {activeTab === "visi-misi" && <VisiMisi data={aboutUsData} language={language} />}
      {activeTab === "jenjang-pendidikan" && (
        <JenjangPendidikan data={aboutUsData} language={language}/>
      )}

      <div>
        <div className="my-8 md:my-10 bg-[#243F6D]">
          <div className="flex text-center items-center md:py-10 py-5 md:mx-40 mx-10 text-white leading-loose text-[14px] lg:text-[16px] font-semibold">
            {/* Pengajar BTB mendorong para murid untuk dapat menemukan tempatnya di dunia yang memiliki tantangan 
          dan peluang tidak terbatas ini. Mereka membimbing para murid untuk berpikir, bertindak, dan menerima 
          rekannya dan diri mereka sendiri. */}
            {aboutUsData[language].smallparagraph}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
