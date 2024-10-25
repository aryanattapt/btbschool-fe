'use client'
import { useEffect } from "react";
import Banner from "./components/Banner";
import Pagging from "./components/Pagging";
import TK from "./components/TK";
import { usePageData } from '../../../hooks/usePageData';

const BTBBelajarPage = () => {
  const {language, getBTBBelajarPageData, isLoading} = usePageData();
  const btbBelajarData = usePageData((state) => state.result.btbbelajar);

  useEffect(() => {
    getBTBBelajarPageData();
  }, []);

  if(isLoading) {
    return <div>loading...</div>
  }
  else if(btbBelajarData)
    return (
      <>
          <Banner />
          <Pagging btbBelajarData={btbBelajarData} language={language}/>
          <TK btbBelajarData={btbBelajarData} language={language}/>
      </>
    );
};

export default BTBBelajarPage;