import React from "react";
import { extractYouTubeVideoId } from "../../../../utils/youtubeExractor";

const BtbKnightOpening = ({ btbKnightData, language }) => {
  const ImageComponent = ({ className = "" }) => {
    return (
      <div className={className}>
        <div className="relative md:h-[350px] h-[200px]">
          {btbKnightData?.closingImage?.type?.includes("image") ? (
            <img
              src={btbKnightData?.closingImage?.url}
              alt="Banner BTB Knight"
              className="h-full w-full object-cover"
            />
          ) : (
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${extractYouTubeVideoId(
                btbKnightData?.closingImage?.url
              )}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="flex w-full md:gap-x-12">
      {/* Bagian Teks */}
      <div className="md:w-1/2">
        <h1 className="md:text-[35px] text-[25px] font-semibold text-[#00305E]">
          {btbKnightData[language]["closingContent"]["title"]}
        </h1>
        <ImageComponent className="md:hidden mt-2" />
        <p className="text-pretty mt-4 leading-7 text-justify">
          {btbKnightData[language]["closingContent"]["content"]}
        </p>
      </div>

      {/* Bagian Gambar */}
      <div className="md:w-1/2">
        <ImageComponent className="hidden md:block" />
      </div>
    </div>
  );
};

export default BtbKnightOpening;
