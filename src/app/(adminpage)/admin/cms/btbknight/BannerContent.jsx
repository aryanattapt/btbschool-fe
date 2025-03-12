import React from "react";
import CMSSubTitle from "../_components/CMSSubtitle";
import FieldTitle from "../_components/FieldTitle";
import ImageAttachment from "../_components/ImageAttachment";
import CMSDivider from "../_components/CMSDivider";

const CMSBtbKnightBannerContent = ({ onChangeAttachment }) => {
  return (
    <div>
      <CMSSubTitle>Banner Image Content</CMSSubTitle>
      <FieldTitle>Title Content</FieldTitle>

      <ImageAttachment
        resolution="dengan menggunakan aspect ratio wide Misal 1920x1080px."
        onChange={(e) => onChangeAttachment(e.target.files, "bannerImage")}
      />
      <CMSDivider />
    </div>
  );
};

export default CMSBtbKnightBannerContent;
