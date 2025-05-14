import React from "react";
import { extractYouTubeVideoId } from "../../../../utils/youtubeExractor";

const BtbKnightOpening = ({ btbKnightData, language }) => {
  // Image Component
  const ImageComponent = ({ className = "" }) => {
    return (
      <div className={className}>
        <div className="relative md:h-[350px] h-[200px]">
          {btbKnightData?.purposeImage?.type?.includes("image") ? (
            <img
              src={btbKnightData?.purposeImage?.url}
              alt="Banner BTB Knight"
              className="h-full w-full object-cover"
            />
          ) : (
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${extractYouTubeVideoId(
                btbKnightData?.purposeImage?.url
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
    <div id="purpose" className="md:flex w-full gap-x-12">
      {/* Bagian Gambar */}
      <div className="md:w-1/2">
        <ImageComponent className="hidden md:block" />
      </div>

      {/* Bagian Teks */}
      <div className="md:w-1/2">
        <h1 className="md:text-[35px] text-[25px] font-semibold text-[#00305E]">
          {btbKnightData[language]["purposeContent"]["title"]}
        </h1>
        <ImageComponent className="md:hidden mt-2" />

        <p className="text-pretty mt-4 leading-7 text-justify">
          {btbKnightData[language]["purposeContent"]["content"]}
        </p>
      </div>
    </div>
  );
};

export default BtbKnightOpening;
