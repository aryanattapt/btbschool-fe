"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import WorldMapChart from "./world-map";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderStyles.css";
import useComponentWidth from "../../../../hooks/useComponentWidth";
import RegionModal from "./RegionModal";
import InstagramFeedsComponent from "../../../_components/instagramfeed";

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="custom-prev-arrow" onClick={onClick}>
      &#10094;
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="custom-next-arrow" onClick={onClick}>
      &#10095;
    </button>
  );
};

const CeritaAlumni = ({
  alumniPayload,
  alumniStoryPayload,
  alumniUniversityPayload,
  language,
  instagramFeed,
}) => {
  const [ref, width] = useComponentWidth();
  const settingsTestimonies = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    adaptiveHeight: true,
  };
  const [selectedRegion, setSelectedRegion] = useState();

  // const settingsFlag = {
  //     dots: true, // Enable dot indicators
  //     infinite: true, // Infinite scrolling
  //     speed: 500, // Transition speed
  //     slidesToShow: 3, // Number of slides to show at once
  //     slidesToScroll: 1, // Number of slides to scroll
  //     responsive: [
  //         {
  //             breakpoint: 1024,
  //             settings: {
  //                 slidesToShow: 2,
  //             },
  //         },
  //         {
  //             breakpoint: 600,
  //             settings: {
  //                 slidesToShow: 1,
  //             },
  //         },
  //     ],
  // };

  /* const settingsFlag = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  }; */

  const settingsFlag = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0, // Slower speed for smoother transition
    speed: 1000, // Increased speed for smoother effect
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false, // Make the transition smoother
    rtl: false, // To make it go right to left
    fade: false,
    lazyLoad: "progressive",
  };
  return (
    <div className="px-12 pb-12">
      <div className="flex flex-col items-start">
        <h2 className="text-[#00305E] text-[25px] md:text-[50px] font-semibold mx-5 my-5">
          {alumniPayload[language]?.pagingHeader?.url[0]?.title}
        </h2>
      </div>
      <div className="slider-container">
        <div className="bg-slate-300 rounded mb-20">
          {/* <div className="bg-slate-300 rounded mb-20 min-h-[20rem] sm:min-h-[25rem] md:min-h-[30rem] lg:min-h-[35rem] xl:min-h-[40rem]"> */}
          <Slider {...settingsTestimonies}>
            {Array.isArray(alumniStoryPayload) &&
              alumniStoryPayload.map((val, idx) => {
                return (
                  <div key={val?.id || idx} className="h-fit">
                    <div className="dataAlumni p-10 flex flex-col md:flex-row items-center">
                      {val?.image && (
                        <div className="basis-full xl:basis-1/2 flex justify-center mb-5 md:mb-0 md:mx-10 xl:mx-0">
                          <img
                            src={val?.image}
                            alt="alumni"
                            className="xl:w-[400px] md:w-[300px] xl:h-[400px] md:h-[300px] object-cover rounded-md"
                          />
                        </div>
                      )}
                      <div className="basis-full xl:basis-1/2 text-[14px] md:text-[20px] lg:text-[25px] xl:text-[18px] flex flex-col justify-center">
                        <div className="flex flex-col md:flex-row">
                          <h1 className="text-[#00305E] font-bold text-[14px] md:text-[20px] lg:text-[25px] xl:text-[25px] pr-2 max-w-full md:max-w-1/2">
                            {val?.name}
                          </h1>
                          <h1 className="text-gray-500 font-bold text-[14px] md:text-[20px] lg:text-[25px] xl:text-[25px] w-full md:w-1/2 text-center md:text-left">
                            {val?.class}
                          </h1>
                        </div>
                        <div className="md:mr-10">
                          <p className="font-semibold">
                            {val?.university}, {val?.major}
                          </p>
                          <p className="text-justify">{val?.testimonies}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>

      <div className="my-5 text-[14px] md:text-[20px] lg:text-[25px] xl:text-[18px]">
        <h2 className="text-[#00305E] text-[25px] md:text-[50px] mx-5">
          {alumniPayload[language]?.universitytitle}
        </h2>
        <p className="mx-5 mb-5 text-justify">
          {alumniPayload[language]?.universitycontent}
        </p>
      </div>
      <div ref={ref} className="mx-5 relative">
        <WorldMapChart
          width={width}
          markers={alumniPayload.regionMap}
          onSelect={(val) => setSelectedRegion(val)}
        />
        <RegionModal
          selectedRegion={selectedRegion}
          attachment={
            alumniPayload.regionMap.find((x) => x.title === selectedRegion)
              ?.attachment
          }
          onClose={() => setSelectedRegion("")}
        />
      </div>
      {/* <div className="slider-container">
        <Slider {...settingsFlag}>
          {alumniUniversityPayload?.map((val, idx) => {
            return (
              <div key={idx} className="relative">
                {val?.image && (
                  <img
                    src={val.image}
                    alt="alumni"
                    className="w-[400px] h-[200px] object-contain"
                  />
                )}
              </div>
            );
          })}
        </Slider>
      </div> */}

      <div
        className="slider-container"
        style={{ overflow: "hidden", width: "100%" }}
      >
        <div
          style={{
            display: "flex",
            animation: "marquee 40s linear infinite",
            width: "max-content", // Make sure the container only fits the content width
          }}
        >
          {/* First set of images */}
          {alumniUniversityPayload?.map((val, idx) => {
            return (
              <React.Fragment key={`first-set-${idx}`}>
                {val?.image && (
                  <img
                    src={val.image}
                    alt="alumni"
                    className="w-[400px] h-[200px] object-contain"
                    style={{ marginRight: "20px" }} // Optional: Add spacing between images
                  />
                )}
              </React.Fragment>
            );
          })}

          {/* Second set of images (duplicate the set to make it loop seamlessly) */}
          {alumniUniversityPayload?.map((val, idx) => {
            return (
              <React.Fragment key={`second-set-${idx}`}>
                {val?.image && (
                  <img
                    src={val.image}
                    alt="alumni"
                    className="w-[400px] h-[200px] object-contain"
                    style={{ marginRight: "20px" }} // Optional: Add spacing between images
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>

        <style jsx="true">{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>

      {alumniPayload?.showigfeed == "true" ? (
        <InstagramFeedsComponent
          payload={instagramFeed || []}
          title={alumniPayload[language]?.instagramfeedtitle}
          url={"https://www.instagram.com/btb_school_alumni"}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default CeritaAlumni;
