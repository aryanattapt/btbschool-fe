import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
            .map((img, index) => (
              <div key={index} className="w-1/3">
                <img
                  src={img}
                  alt={`Gallery ${index}`}
                  className="w-full h-[150px] md:h-[275px] object-cover rounded-lg shadow"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BtbKnightGallery;
