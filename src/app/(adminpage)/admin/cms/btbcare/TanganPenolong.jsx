import { Textarea, TextInput } from "flowbite-react";
import { useCmsBtbCareStore } from "../../../../../../store/admin/cms/btbCareStore";
import CMSSubTitle from "../_components/CMSSubtitle";
import FieldTitle from "../_components/FieldTitle";

const TanganPenolong = () => {
  const data = useCmsBtbCareStore((state) => state.data);
  const language = useCmsBtbCareStore((state) => state.language);
  const setStateLanguage = useCmsBtbCareStore(
    (state) => state.setStateLanguage
  );
  return (
    <>
      <CMSSubTitle>BTB Care Tangan Penolong</CMSSubTitle>
      <FieldTitle>Judul</FieldTitle>
      <TextInput
        value={data[language]["tanganpenolongtitle"]}
        onChange={(e) => {
          setStateLanguage(e.target.value, "tanganpenolongtitle");
        }}
      />
      <FieldTitle>Subjudul</FieldTitle>
      <TextInput
        value={data[language]?.["tanganpenolongsubtitle"]}
        onChange={(e) => {
          setStateLanguage(e.target.value, "tanganpenolongsubtitle");
        }}
      />

      <FieldTitle>Sub Judul BTB Tangan Penolong</FieldTitle>
      <TextInput
        value={data[language]["text10"]}
        onChange={(e) => {
          setStateLanguage(e.target.value, "text10");
        }}
      />
      <FieldTitle>Konteks BTB Tangan Penolong 1</FieldTitle>
      <Textarea
        rows={4}
        value={data[language]["text11"]}
        onChange={(e) => {
          setStateLanguage(e.target.value, "text11");
        }}
      />
      <FieldTitle>Konteks BTB Tangan Penolong 2</FieldTitle>
      <Textarea
        rows={4}
        value={data[language]["text12"]}
        onChange={(e) => {
          setStateLanguage(e.target.value, "text12");
        }}
      />
      <FieldTitle>Konteks BTB Tangan Penolong 3</FieldTitle>
      <Textarea
        rows={4}
        value={data[language]["text13"]}
        onChange={(e) => {
          setStateLanguage(e.target.value, "text13");
        }}
      />
    </>
  );
};

export { TanganPenolong };
