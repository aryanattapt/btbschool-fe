import React from "react";
import FieldTitle from "../_components/FieldTitle";
import { TextInput } from "flowbite-react";
import CMSSubTitle from "../_components/CMSSubtitle";
import CMSDivider from "../_components/CMSDivider";
import { useCmsPendaftaranStore } from "../../../../../../store/admin/cms/btbPendaftaranStore";

const Navigation = () => {
  const data = useCmsPendaftaranStore((state) => state.data);
  const language = useCmsPendaftaranStore((state) => state.language);
  const setPagingTitle = useCmsPendaftaranStore(
    (state) => state.setPagingTitle
  );
  const setNavigationTitle = useCmsPendaftaranStore(
    (state) => state.setNavigationTitle
  );

  const template = ["Enrollment", "Beasiswa", "Tur Sekolah", "Pendaftaran Online"];

  return (
    <>
      <CMSSubTitle>Paging / Navigation Setting</CMSSubTitle>
      <FieldTitle>Judul Navigasi</FieldTitle>
      <TextInput
        value={data[language]["pagingHeader"]["title"]}
        onChange={(e) => setPagingTitle(e.target.value)}
      />
      {template.map((res, index) => (
        <>
          <FieldTitle>Judul Navigasi {res}</FieldTitle>
          <TextInput
            value={data[language]["pagingHeader"]["url"][index]["title"]}
            onChange={(e) => setNavigationTitle(e.target.value, index)}
          />
        </>
      ))}
      <CMSDivider />
    </>
  );
};

export { Navigation };
