import BannerImage from "../../../_components/Banner/BannerImage";
import ImageContainer from "../../../_components/Banner/ImageContainer";

const BannerLayouts = ({ payload }) => {
  return (
    <ImageContainer>
      {payload?.bannerimageurl && (
        <BannerImage src={payload?.bannerimageurl} alt="bannercontact" />
      )}
    </ImageContainer>
  );
};

export default BannerLayouts;
