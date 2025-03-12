import React, { useRef } from "react";
import CMSSubTitle from "../_components/CMSSubtitle";
import FieldTitle from "../_components/FieldTitle";
import BtnPrimary from "../../../../../components/Button/Primary";
import CMSBtbKnightImagePreviewer from "./ImagePreviewer";

const CMSBtbKnightGalleryContent = ({ gallery, setAttachment }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger input file
  };

  const onAddAttachment = (e) => {
    const file = e.target.files[0];
    if (file) {
      const updatedGallery = [...gallery];
      updatedGallery.push(file);
      setAttachment((prev) => ({ ...prev, gallery: updatedGallery }));
    }
  };

  const onDeleteAttachment = (attIdx) => {
    const updatedGallery = [...gallery];
    updatedGallery.splice(attIdx, 1);
    setAlumniPayload((prev) => ({ ...prev, gallery: updatedGallery }));
  };

  return (
    <div>
      <CMSSubTitle>Gallery</CMSSubTitle>
      <FieldTitle>List Images Content</FieldTitle>
      {/* Add Image Section */}
      <BtnPrimary onClick={handleButtonClick}>Add Image</BtnPrimary>

      <input
        type="file"
        ref={fileInputRef}
        multiple
        onChange={onAddAttachment}
        className="hidden" // Disembunyikan
      />
      {/* Image Display Section  */}
      <div className="flex flex-wrap gap-x-6 gap-y-4 mt-6 mb-16">
        {gallery.length > 0 &&
          gallery.map((res, idx) => (
            <CMSBtbKnightImagePreviewer
              file={res}
              onDelete={() => onDeleteAttachment(idx)}
            />
          ))}
      </div>
    </div>
  );
};

export default CMSBtbKnightGalleryContent;
