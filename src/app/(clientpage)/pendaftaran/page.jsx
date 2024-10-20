"use client";
import Banner from "./_layouts/banner";
import Pagging from "./_layouts/pagging";
import { PendaftaranPayLoad } from "../../../../data";
import useLanguage from "../../../hooks/useLanguage";
import { useEffect, useState } from "react";
import Enrolment from "./_layouts/enrolment";
import Beasiswa from "./_layouts/beasiswa";
import TurSekolah from "./_layouts/tur-sekolah";
import { GetConfig } from "../../../../services/config.service";

const PendaftaranPage = () => {
  const [pendaftaranData, setPendaftaranData] = useState({});
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("enrolment");

  useEffect(() => {
    (async() => {
      try {
        const res = await GetConfig('general', {"type": "pendaftaran"});
        setPendaftaranData(res[0]);
      } catch (error) {console.log(error);}
    })()
  }, [])

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
        <Beasiswa data={pendaftaranData} language={language} />
      )}
      {activeTab === "tur-sekolah" && (
        <TurSekolah data={pendaftaranData} language={language} />
      )}
    </>
  );
};

export default PendaftaranPage;
