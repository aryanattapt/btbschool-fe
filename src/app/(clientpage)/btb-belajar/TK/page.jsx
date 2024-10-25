"use client";
import { useEffect } from "react";
import Pagging from "../components/Pagging";
import TK from "../components/TK";
import { Carousel } from "flowbite-react";
import { usePageData } from '../../../../hooks/usePageData';

const TKPage = () => {
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
        {/* <Banner /> */}
        <Carousel
          slideInterval={3000}
          className="relative h-[400px] md:h-[600px] lg:h-[1000px] xl:h-[100vh] w-full"
        >
          {btbBelajarData[language]?.tk?.bannerImages?.map((val, idx) => {
            return (
              <div className="relative h-full w-full" key={idx}>
                <img src={val} alt="bannerTK" className="absolute inset-0 h-full w-full object-cover"></img>
              </div>
            );
          })}
        </Carousel>
        <Pagging btbBelajarData={btbBelajarData} language={language}/>
        <TK btbBelajarData={btbBelajarData} language={language}/>
      </>
    );
};

export default TKPage;
