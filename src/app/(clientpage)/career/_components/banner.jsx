import BannerImage from "../../../_components/Banner/BannerImage";
import ImageContainer from "../../../_components/Banner/ImageContainer";

const BannerLayouts = ({ payload }) => {
  return (
    <ImageContainer>
      {payload?.image && (
        <BannerImage src={payload?.image} alt="banneraboutus" />
      )}
    </ImageContainer>
  );
};

export default BannerLayouts;
