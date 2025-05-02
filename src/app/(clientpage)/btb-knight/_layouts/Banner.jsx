import React from "react";
import ImageContainer from "../../../_components/Banner/ImageContainer";
import BannerImage from "../../../_components/Banner/BannerImage";

const BTBKnightBanner = ({ btbKnightData }) => {
  return (
    <ImageContainer>
      {btbKnightData?.bannerImage && (
        <BannerImage src={btbKnightData?.bannerImage} alt="Banner BTB Knight" />
      )}
    </ImageContainer>
  );
};

export default BTBKnightBanner;
