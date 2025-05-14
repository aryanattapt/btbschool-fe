import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { extractYouTubeVideoId } from "../../../../utils/youtubeExractor";

const BtbKnightGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagesPerPage = 3;

  const nextPage = () => {
    if (currentIndex < images.length - imagesPerPage) {
      setCurrentIndex(currentIndex + imagesPerPage);
    }
  };

  const prevPage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - imagesPerPage);
    }
  };
  return (
    <div id="gallery">
      <div className="w-full mx-auto">
        <div className="flex items-center justify-end mb-4">
          <h1 className="md:text-[35px] text-[25px] font-semibold text-[#00305E] mr-4">
            GALLERY
          </h1>
          <div className="flex gap-2">
            <button
              onClick={prevPage}
              disabled={currentIndex === 0}
              className={`md:text-[35px] text-[25px] rounded-full ${
                currentIndex === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-200"
              }`}
            >
              {/* <ChevronLeft /> */}
              <IoIosArrowBack />
            </button>
            <button
              onClick={nextPage}
              disabled={currentIndex + imagesPerPage >= images.length}
              className={`md:text-[35px] text-[25px] rounded-full ${
                currentIndex + imagesPerPage >= images.length
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-200"
              }`}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        <div className="flex gap-4 overflow-hidden">
          {images
            .slice(currentIndex, currentIndex + imagesPerPage)
            .map((att, index) => (
              <div key={index} className="w-1/3">
                {att.type.includes("image") ? (
                  <img
                    src={att.url}
                    alt={`Gallery ${index}`}
                    className="w-full h-[150px] md:h-[275px] object-cover rounded-lg shadow"
                  />
                ) : (
                  <iframe
                    className="w-full h-[150px] md:h-[275px] object-cover rounded-lg shadow"
                    src={`https://www.youtube.com/embed/${extractYouTubeVideoId(
                      att.url
                    )}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BtbKnightGallery;
