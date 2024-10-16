'use client'
import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Pagging from "./components/Pagging";
import TK from "./components/TK";
import { GetConfig } from "../../../../services/config.service";

const BTBBelajarPage = () => {
  const [btbBelajarData, setBtbBelajarData] = useState({});

  useEffect(() => {
    try {
      GetConfig('general', {"type": "btbbelajar"})
      .then((res) => setBtbBelajarData(res[0]))
      .catch((err) => console.log(err))
    } catch (error) {console.log(error);}
  }, [])

    return (
    <>
        <Banner />
        <Pagging btbBelajarData={btbBelajarData}/>
        <TK btbBelajarData={btbBelajarData}/>
    </>
  );
};

export default BTBBelajarPage;