import React from "react";
import CMSSubTitle from "../_components/CMSSubtitle";
import FieldTitle from "../_components/FieldTitle";
import { TextInput } from "flowbite-react";
import { useCmsPendaftaranStore } from "../../../../../../store/admin/cms/btbPendaftaranStore";

const TurSekolah = () => {
  const data = useCmsPendaftaranStore((state) => state.data);
  const language = useCmsPendaftaranStore((state) => state.language);
  const setInnerState = useCmsPendaftaranStore((state) => state.setInnerState);

  return (
    <>
      <CMSSubTitle>Tur Sekolah Page</CMSSubTitle>
      <FieldTitle>Tur Sekolah Title</FieldTitle>
      <TextInput
        value={data[language]["turSekolahdata"]["title"]}
        onChange={(e) => {
          setInnerState(e.target.value, "turSekolahdata", "title");
        }}
      />
      <FieldTitle>Tur Sekolah Subtitle</FieldTitle>
      <TextInput
        value={data[language]["turSekolahdata"]["subtitle"]}
        onChange={(e) => {
          setInnerState(e.target.value, "turSekolahdata", "subtitle");
        }}
      />
      <FieldTitle>Tur Sekolah Information</FieldTitle>
      <TextInput
        value={data[language]["turSekolahdata"]["infomartion"]}
        onChange={(e) => {
          setInnerState(e.target.value, "turSekolahdata", "infomartion");
        }}
      />
    </>
  );
};

export { TurSekolah };
