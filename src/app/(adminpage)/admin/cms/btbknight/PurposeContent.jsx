import { Textarea, TextInput } from "flowbite-react";
import { useBtbKnightStore } from "../../../../../../store/admin/cms/btbKnightStore";
import CMSDivider from "../_components/CMSDivider";
import CMSSubTitle from "../_components/CMSSubtitle";
import ContentAttachment from "../_components/ContentAttachment";
import FieldTitle from "../_components/FieldTitle";

const CMSBtbKnightPurposeContent = ({
  data,
  language,
  attachment,
  setAttachment,
}) => {
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
      <ContentAttachment
        data={data}
        property={"purposeImage"}
        attachment={attachment}
        setAttachment={setAttachment}
        resolution="dengan menggunakan aspect ratio wide Misal 1920x1080px."
      />
      <CMSDivider />
    </div>
  );
};

export default CMSBtbKnightPurposeContent;
