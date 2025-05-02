import BannerImage from "../../../_components/Banner/BannerImage";
import ImageContainer from "../../../_components/Banner/ImageContainer";

const BannerLayouts = ({ contactUsData }) => {
  return (
    <ImageContainer>
      <BannerImage
        src={`${contactUsData.bannerimageurl}`}
        alt="bannercontact"
      />
    </ImageContainer>
  );
};

export default BannerLayouts;
