import React from "react";

const BTBKnightBanner = ({ btbKnightData }) => {
  return (
    <div className="relative w-100% md:h-[475px]">
      {btbKnightData?.bannerImage && (
        <img
          src={btbKnightData?.bannerImage}
          alt="Banner BTB Knight"
          className="md:h-full md:w-screen object-cover xl:w-full xl:h-s"
        />
      )}
    </div>
  );
};

export default BTBKnightBanner;
