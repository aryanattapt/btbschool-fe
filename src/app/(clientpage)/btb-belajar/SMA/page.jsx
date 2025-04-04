"use client";
import Pagging from "../components/Pagging";
import SMA from "../components/SMA";
import { Carousel } from "flowbite-react";
import { usePageData } from '../../../../hooks/usePageData';
import { useEffect } from "react";
import Loader from "../../../_components/loader";

const SMAPage = () => {
  const {language, getBTBBelajarPageData, isLoading} = usePageData();
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
        {/* <Banner /> */}
        <Carousel
          slideInterval={3000}
          className="relative h-[400px] md:h-[600px] lg:h-[1000px] xl:h-[100vh] w-full"
        >
          {btbBelajarData[language]?.sma?.bannerImages?.map((val, idx) => {
            return (
              <div className="relative h-full w-full" key={idx}>
                <img src={val} alt="bannerSMA" className="absolute inset-0 h-full w-full object-cover"></img>
              </div>
            );
          })}
        </Carousel>
        <Pagging btbBelajarData={btbBelajarData} language={language}/>
        <SMA btbBelajarData={btbBelajarData} language={language}/>
      </>
    );
};

export default SMAPage;
