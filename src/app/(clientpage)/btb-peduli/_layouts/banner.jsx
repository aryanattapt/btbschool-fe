import BannerImage from "../../../_components/Banner/BannerImage";
import ImageContainer from "../../../_components/Banner/ImageContainer";

const BannerLayouts = ({ btbPeduliData, language }) => {
  return (
    <ImageContainer>
      <BannerImage src={`${btbPeduliData.bannerimage}`} alt="bannerbtbpeduli" />
    </ImageContainer>
  );
};

export default BannerLayouts;
