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
  const [alumniStoryPayload, setAlumniStoryPayload] = useState([]);
  const [alumniUniversityPayload, setAlumniUniversityPayload] = useState([]);
  const {language} = useLanguage();
  const [activeTab, setActiveTab] = useState("cerita-alumni");

  useEffect(() => {
    fetchConfig();
  }, [])

  const fetchConfig = async () => {
      const alumniType = 'alumni';
      const alumniStoryType = 'alumni.story';
      const alumniUniversityType = 'alumni.university';
      try {
          const result = await GetConfig('general', {
              "type": {
                  "$in": [alumniType, alumniStoryType, alumniUniversityType]
              }
          });

          console.log(result.filter(val => val.type === alumniStoryType));
          console.log(result.filter(val => val.type === alumniUniversityType));
          setAlumniPayload(result.find(val => val.type === alumniType));
          setAlumniStoryPayload(result.filter(val => val.type === alumniStoryType));
          setAlumniUniversityPayload(result.filter(val => val.type === alumniUniversityType));
      } catch (error) {console.log(error)}
  }

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
          <CeritaAlumni alumniPayload={alumniPayload} alumniStoryPayload={alumniStoryPayload} alumniUniversityPayload = {alumniUniversityPayload} language={language} />
      )}

      {activeTab === "registertext" && (
          <PendaftaranAlumni alumniPayload={alumniPayload} language={language} />
      )}
    </>
  );
};

export default AlumniPage;
