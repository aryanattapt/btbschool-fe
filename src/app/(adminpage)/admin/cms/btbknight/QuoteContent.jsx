import React from "react";
import CMSSubTitle from "../_components/CMSSubtitle";
import FieldTitle from "../_components/FieldTitle";
import { TextInput } from "flowbite-react";
import { useBtbKnightStore } from "../../../../../../store/admin/cms/btbKnightStore";
import CMSDivider from "../_components/CMSDivider";

const CMSBtbKnightQuoteContent = ({ data, language }) => {
  const onQuoteChange = useBtbKnightStore((state) => state.onQuoteChange);
  console.log({ data });

  return (
    <div className="pt-4">
      <CMSDivider />
      <CMSSubTitle>Quote Content</CMSSubTitle>
      <FieldTitle>Quote</FieldTitle>
      <TextInput
        value={data[language]["quote"]}
        onChange={(e) => {
          onQuoteChange(e.target.value);
        }}
      />
    </div>
  );
};

export default CMSBtbKnightQuoteContent;
