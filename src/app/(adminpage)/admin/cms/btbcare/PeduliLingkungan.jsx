import { Textarea, TextInput } from "flowbite-react";
import { useCmsBtbCareStore } from "../../../../../../store/admin/cms/btbCareStore";
import CMSSubTitle from "../_components/CMSSubtitle";
import FieldTitle from "../_components/FieldTitle";
import CMSDivider from "../_components/CMSDivider";

const PeduliLingkungan = () => {
  const data = useCmsBtbCareStore((state) => state.data);
  const language = useCmsBtbCareStore((state) => state.language);
  const setStateLanguage = useCmsBtbCareStore(
    (state) => state.setStateLanguage
  );
  return (
    <>
      <CMSSubTitle>BTB Care Peduli Lingkungan</CMSSubTitle>
      <FieldTitle>Judul Navigasi</FieldTitle>
      <TextInput
        value={data[language]["pedulilingkungantitle"]}
        onChange={(e) => {
          setStateLanguage(e.target.value, "pedulilingkungantitle");
        }}
      />
      <FieldTitle>Judul Konten</FieldTitle>
      <TextInput
        value={data[language]?.["pedulilingkungansubtitle"]}
        onChange={(e) => {
          setStateLanguage(e.target.value, "pedulilingkungansubtitle");
        }}
      />

      <FieldTitle>Sub Judul BTB Peduli Lingkungan</FieldTitle>
      <TextInput
        value={data[language]["text4"]}
        onChange={(e) => {
          setStateLanguage(e.target.value, "text4");
        }}
      />
      <FieldTitle>Konteks dari Subjudul 1</FieldTitle>
      <Textarea
        rows={4}
        value={data[language]["text5"]}
        onChange={(e) => {
          setStateLanguage(e.target.value, "text5");
        }}
      />
      <FieldTitle>Sub Judul BTB Peduli Lingkungan</FieldTitle>
      <TextInput
        value={data[language]["text6"]}
        onChange={(e) => {
          setStateLanguage(e.target.value, "text6");
        }}
      />
      <FieldTitle>Konteks dari Subjudul 1</FieldTitle>
      <TextInput
        value={data[language]["text7"]}
        onChange={(e) => {
          setStateLanguage(e.target.value, "text7");
        }}
      />
      <CMSDivider />
    </>
  );
};

export { PeduliLingkungan };
