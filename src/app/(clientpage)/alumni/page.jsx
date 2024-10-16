"use client";
import CeritaAlumni from "./_layouts/cerita-alumni";
import PendaftaranAlumni from "./_layouts/pendaftaran-alumni";
import Banner from "./_layouts/banner";
import Pagging from "./_layouts/pagging";
import useLanguage from "../../../hooks/useLanguage";
import { useEffect, useState } from "react";
import {AlumniPayload} from '../../../../data';
import { GetConfig } from "../../../../services/config.service";

const AlumniPage = () => {
  const [alumniPayload, setAlumniPayload] = useState({});
  const {language} = useLanguage();
  const [activeTab, setActiveTab] = useState("cerita-alumni");

  useEffect(() => {
    try {
      GetConfig('general', {"type": "alumni"})
      .then((res) => setAlumniPayload(res[0]))
      .catch((err) => console.log(err))
    } catch (error) {console.log(error);}
  }, [])

  return (
    <>
      <Banner />
      <Pagging
        alumniPayload={alumniPayload}
        language={language}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === "cerita-alumni" && (
          <CeritaAlumni data={alumniPayload} language={language} />
      )}

      {activeTab === "registertext" && (
          <PendaftaranAlumni data={alumniPayload} language={language} />
      )}
    </>
  );
};

export default AlumniPage;
