import React from "react";
import FieldTitle from "../_components/FieldTitle";
import CMSSubTitle from "../_components/CMSSubtitle";
import { Textarea, TextInput } from "flowbite-react";
import { useBtbKnightStore } from "../../../../../../store/admin/cms/btbKnightStore";
import CMSDivider from "../_components/CMSDivider";
import ImageAttachment from "../_components/ImageAttachment";

const CMSBtbKnightPurposeContent = ({ data, language, onChangeAttachment }) => {
  const onContentChange = useBtbKnightStore((state) => state.onContentChange);
  return (
    <div>
      <CMSSubTitle>Purpose Content</CMSSubTitle>
      <FieldTitle>Title Content</FieldTitle>
      <TextInput
        value={data[language]["purposeContent"]["title"]}
        onChange={(e) => {
          onContentChange(e.target.value, "purposeContent", "title");
        }}
      />
      <FieldTitle>Content</FieldTitle>
      <Textarea
        rows={4}
        value={data[language]["purposeContent"]["content"]}
        onChange={(e) => {
          onContentChange(e.target.value, "purposeContent", "content");
        }}
      />
      <FieldTitle>Image</FieldTitle>
      <ImageAttachment
        resolution="dengan menggunakan aspect ratio wide Misal 1920x1080px."
        onChange={(e) => onChangeAttachment(e.target.files, "purposeImage")}
      />
      <CMSDivider />
    </div>
  );
};

export default CMSBtbKnightPurposeContent;
