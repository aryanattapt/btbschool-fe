import BannerImage from "../../../_components/Banner/BannerImage";
import ImageContainer from "../../../_components/Banner/ImageContainer";

const BannerLayouts = ({ alumniPayload }) => {
  return (
    <ImageContainer>
      {alumniPayload?.bannerimageurl && (
        <BannerImage src={alumniPayload?.bannerimageurl} alt="bannercontact" />
      )}
    </ImageContainer>
  );
};

export default BannerLayouts;
