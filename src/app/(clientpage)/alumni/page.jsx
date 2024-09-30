"use client";
import CeritaAlumni from "./_layouts/cerita-alumni";
import PendaftaranAlumni from "./_layouts/pendaftaran-alumni";
import Banner from "./_layouts/banner";
import Pagging from "./_layouts/pagging";
import useLanguage from "../../../hooks/useLanguage";
import { useState } from "react";
import {AlumniPayload} from '../../../../data';

const AlumniPage = () => {
  const [alumniPayload, setAlumniPayload] = useState(AlumniPayload);
  const {language} = useLanguage();
  const [activeTab, setActiveTab] = useState("cerita-alumni");

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
