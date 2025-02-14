import { Textarea, TextInput } from "flowbite-react";
import { useCmsBtbCareStore } from "../../../../../../store/admin/cms/btbCareStore";
import CMSDivider from "../_components/CMSDivider";
import CMSSubTitle from "../_components/CMSSubtitle";
import FieldTitle from "../_components/FieldTitle";

const Introduction = () => {
  const data = useCmsBtbCareStore((state) => state.data);
  const language = useCmsBtbCareStore((state) => state.language);
  const setStateLanguage = useCmsBtbCareStore(
    (state) => state.setStateLanguage
  );

  return (
    <>
      <CMSSubTitle>BTB Care</CMSSubTitle>
      <FieldTitle>Judul Navigasi</FieldTitle>
      <TextInput
        value={data[language]["btbpedulititle"]}
        onChange={(e) => {
          setStateLanguage(e.target.value, "btbpedulititle");
        }}
      />
      <FieldTitle>Judul Konten</FieldTitle>
      <TextInput
        value={data[language]["btbpedulisubtitle"]}
        onChange={(e) => {
          setStateLanguage(e.target.value, "btbpedulisubtitle");
        }}
      />
      <FieldTitle>Hightlight BTB Care</FieldTitle>
      <Textarea
        rows={4}
        value={data[language]["text1"]}
        onChange={(e) => {
          setStateLanguage(e.target.value, "text1");
        }}
      />
      <FieldTitle>Content BTB Care</FieldTitle>
      <Textarea
        rows={4}
        value={data[language]["text2"]}
        onChange={(e) => {
          setStateLanguage(e.target.value, "text2");
        }}
      />
      <FieldTitle>Catatan Kaki BTB Care</FieldTitle>
      <TextInput
        value={data[language]["text3"]}
        onChange={(e) => {
          setStateLanguage(e.target.value, "text3");
        }}
      />
      <CMSDivider />
    </>
  );
};

export { Introduction };
