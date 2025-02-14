import { Label, Textarea, TextInput } from "flowbite-react";
import { useCmsPendaftaranStore } from "../../../../../../store/admin/cms/btbPendaftaranStore";
import CMSDivider from "../_components/CMSDivider";
import CMSSubTitle from "../_components/CMSSubtitle";
import FieldTitle from "../_components/FieldTitle";
import { isObjectEmpty } from "../../../../../utils/checker";

const Enrollment = () => {
  const data = useCmsPendaftaranStore((state) => state.data);
  const language = useCmsPendaftaranStore((state) => state.language);
  const setInnerState = useCmsPendaftaranStore((state) => state.setInnerState);
  const setInnerContentList = useCmsPendaftaranStore(
    (state) => state.setInnerContentList
  );

  return (
    <>
      <CMSSubTitle>Enrollment Page</CMSSubTitle>
      <FieldTitle>Enrollment Title</FieldTitle>
      <TextInput
        value={data[language]["enrolmentPagedata"]["title"]}
        onChange={(e) => {
          setInnerState(e.target.value, "enrolmentPagedata", "title");
        }}
      />
      <FieldTitle>Enrollment Subtitle</FieldTitle>
      <TextInput
        value={data[language]["enrolmentPagedata"]["subtitle"]}
        onChange={(e) => {
          setInnerState(e.target.value, "enrolmentPagedata", "subtitle");
        }}
      />
      <FieldTitle>Enrollment Step List</FieldTitle>
      <div className="flex flex-col gap-2">
        {!isObjectEmpty(data[language]["enrolmentPagedata"]["stepsList"]) &&
          data[language]["enrolmentPagedata"]["stepsList"].map((res, index) => (
            <div>
              <Label
                htmlFor={`enrolmentPagedata-title${index}`}
                value="Title"
              />
              <TextInput
                id={`enrolmentPagedata-title${index}`}
                value={res["titleStep"]}
                onChange={(e) => {
                  setInnerContentList(
                    e.target.value,
                    "enrolmentPagedata",
                    "stepsList",
                    index,
                    "titleStep"
                  );
                }}
              />
              <Label
                htmlFor={`enrolmentPagedata-content${index}`}
                value="Description"
              />
              <Textarea
                rows={4}
                id={`enrolmentPagedata-content${index}`}
                value={res["descStep"]}
                onChange={(e) => {
                  setInnerContentList(
                    e.target.value,
                    "enrolmentPagedata",
                    "stepsList",
                    index,
                    "descStep"
                  );
                }}
              />
            </div>
          ))}
      </div>

      <FieldTitle>Enrollment Notes</FieldTitle>
      <TextInput
        value={data[language]["enrolmentPagedata"]["notes"]}
        onChange={(e) => {
          setInnerState(e.target.value, "enrolmentPagedata", "notes");
        }}
      />
      <CMSDivider />
    </>
  );
};

export { Enrollment };
