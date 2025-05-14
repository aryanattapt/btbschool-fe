import { Textarea, TextInput } from "flowbite-react";
import { useBtbKnightStore } from "../../../../../../store/admin/cms/btbKnightStore";
import CMSDivider from "../_components/CMSDivider";
import CMSSubTitle from "../_components/CMSSubtitle";
import ContentAttachment from "../_components/ContentAttachment";
import FieldTitle from "../_components/FieldTitle";

const CMSBtbKnightClosingContent = ({
  data,
  language,
  attachment,
  setAttachment,
}) => {
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

      <ContentAttachment
        data={data}
        property={"closingImage"}
        attachment={attachment}
        setAttachment={setAttachment}
        resolution="dengan menggunakan aspect ratio wide Misal 1920x1080px."
      />
      <CMSDivider />
    </div>
  );
};

export default CMSBtbKnightClosingContent;
