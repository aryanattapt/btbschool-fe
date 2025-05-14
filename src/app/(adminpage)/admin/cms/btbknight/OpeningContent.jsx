import { Textarea, TextInput } from "flowbite-react";
import { useBtbKnightStore } from "../../../../../../store/admin/cms/btbKnightStore";
import CMSDivider from "../_components/CMSDivider";
import CMSSubTitle from "../_components/CMSSubtitle";
import ContentAttachment from "../_components/ContentAttachment";
import FieldTitle from "../_components/FieldTitle";

const CMSBtbKnightOpeningContent = ({
  data,
  language,
  attachment,
  setAttachment,
}) => {
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

      <ContentAttachment
        data={data}
        property={"openingImage"}
        attachment={attachment}
        setAttachment={setAttachment}
        resolution="dengan menggunakan aspect ratio 1:1 Misal 1080x1080px."
      />
      <CMSDivider />
    </div>
  );
};

export default CMSBtbKnightOpeningContent;
