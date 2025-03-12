import React from "react";
import FieldTitle from "../_components/FieldTitle";
import CMSSubTitle from "../_components/CMSSubtitle";
import { Textarea, TextInput } from "flowbite-react";
import { useBtbKnightStore } from "../../../../../../store/admin/cms/btbKnightStore";
import CMSDivider from "../_components/CMSDivider";
import ImageAttachment from "../_components/ImageAttachment";

const CMSBtbKnightOpeningContent = ({ data, language, onChangeAttachment }) => {
  const onContentChange = useBtbKnightStore((state) => state.onContentChange);
  return (
    <div>
      <CMSSubTitle>Opening Content</CMSSubTitle>
      <FieldTitle>Title Content</FieldTitle>
      <TextInput
        value={data[language]["openingContent"]["title"]}
        onChange={(e) => {
          onContentChange(e.target.value, "openingContent", "title");
        }}
      />
      <FieldTitle>Subtitle Content</FieldTitle>
      <TextInput
        value={data[language]["openingContent"]["subtitle"]}
        onChange={(e) => {
          onContentChange(e.target.value, "openingContent", "subtitle");
        }}
      />
      <FieldTitle>Content</FieldTitle>
      <Textarea
        rows={4}
        value={data[language]["openingContent"]["content"]}
        onChange={(e) => {
          onContentChange(e.target.value, "openingContent", "content");
        }}
      />
      <FieldTitle>Image</FieldTitle>
      <ImageAttachment
        resolution="dengan menggunakan aspect ratio 1:1 Misal 1080x1080px."
        onChange={(e) => onChangeAttachment(e.target.files, "openingImage")}
      />
      <CMSDivider />
    </div>
  );
};

export default CMSBtbKnightOpeningContent;
