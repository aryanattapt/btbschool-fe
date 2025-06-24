'use client'
import { useEffect } from "react";
import Banner from "./components/Banner";
import Pagging from "./../../_components/paging";
import TK from "./components/TK";
import { usePageData } from '../../../hooks/usePageData';
import Loader from "../../_components/loader";

const BTBBelajarPage = () => {
  const {language, getBTBBelajarPageData, isLoading, navigation} = usePageData();
  const btbBelajarData = usePageData((state) => state.result.btbbelajar);

  useEffect(() => {
    getBTBBelajarPageData();
  }, []);

  if(isLoading) {
    return <Loader/>;
  }
  else if(btbBelajarData)
    return (
      <>
          <Banner btbBelajarData={btbBelajarData}/>
          <Pagging navbardata={navigation.navbar[language].navbarlink.find(x => x.id == "learnatbtb")}/>
          <TK btbBelajarData={btbBelajarData} language={language}/>
      </>
    );
};

export default BTBBelajarPage;