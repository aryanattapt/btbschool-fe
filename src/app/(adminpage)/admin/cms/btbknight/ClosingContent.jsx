import React from "react";
import FieldTitle from "../_components/FieldTitle";
import CMSSubTitle from "../_components/CMSSubtitle";
import { Textarea, TextInput } from "flowbite-react";
import { useBtbKnightStore } from "../../../../../../store/admin/cms/btbKnightStore";
import CMSDivider from "../_components/CMSDivider";
import ImageAttachment from "../_components/ImageAttachment";

const CMSBtbKnightClosingContent = ({ data, language, onChangeAttachment }) => {
  const onContentChange = useBtbKnightStore((state) => state.onContentChange);
  return (
    <div>
      <CMSSubTitle>Closing Content</CMSSubTitle>
      <FieldTitle>Title Content</FieldTitle>
      <TextInput
        value={data[language]["closingContent"]["title"]}
        onChange={(e) => {
          onContentChange(e.target.value, "closingContent", "title");
        }}
      />
      <FieldTitle>Content</FieldTitle>
      <Textarea
        rows={4}
        value={data[language]["closingContent"]["content"]}
        onChange={(e) => {
          onContentChange(e.target.value, "closingContent", "content");
        }}
      />
      <FieldTitle>Image </FieldTitle>
      <ImageAttachment
        resolution="dengan menggunakan aspect ratio wide Misal 1920x1080px."
        onChange={(e) => onChangeAttachment(e.target.files, "closingImage")}
      />
      <CMSDivider />
    </div>
  );
};

export default CMSBtbKnightClosingContent;
