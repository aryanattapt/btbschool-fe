import ImageContainer from "../../../_components/Banner/ImageContainer";
import BannerImage from "../../../_components/Banner/BannerImage";

const Banner = ({ bulletinSpotlightData }) => {
  return (
    <ImageContainer>
      <BannerImage
        alt={"/bulletinSpotlight.jpg"}
        src={`${bulletinSpotlightData.bannerimageurl}`}
      />
    </ImageContainer>
  );
};

export default Banner;
