import React from "react";
import { extractYouTubeVideoId } from "../../../../utils/youtubeExractor";

const BtbKnightOpening = ({ btbKnightData, language }) => {
  // Image Component
  const ImageComponent = ({ className = "" }) => {
    return (
      <div className={`${className}`}>
        <div className="relative w-100% md:h-[350px]">
          {btbKnightData?.openingImage?.type?.includes("image") ? (
            <img
              src={btbKnightData?.openingImage?.url}
              alt="Banner BTB Knight"
              className="md:h-full md:w-screen object-cover xl:w-full xl:h-s"
            />
          ) : (
            <>
              <iframe
                className="md:h-full md:w-screen xl:w-full xl:h-s"
                src={`https://www.youtube.com/embed/${extractYouTubeVideoId(
                  btbKnightData?.openingImage?.url
                )}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div id="opening">
      <div className="mt-10 mb-5">
        <h1 className="md:text-[35px] text-[25px] font-bold text-[#00305E]">
          {/* {btbBelajarData[language]?.tk?.title} */}
          {btbKnightData[language]["openingContent"]["title"]}
        </h1>
      </div>
      <ImageComponent className="md:hidden mb-4" />

      <div className="md:grid  grid-cols-6 gap-x-12">
        <div className="col-span-4">
          <div className="text-[22px]">
            <h4>{btbKnightData[language]["openingContent"]["subtitle"]}</h4>
          </div>
          <div className="text-pretty mt-4 leading-7 text-justify">
            <h4>{btbKnightData[language]["openingContent"]["content"]}</h4>
          </div>
        </div>
        <div className="col-span-2">
          <ImageComponent className="hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default BtbKnightOpening;
