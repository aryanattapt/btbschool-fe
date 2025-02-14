import React from "react";
import CMSSubTitle from "../_components/CMSSubtitle";
import { useCmsPendaftaranStore } from "../../../../../../store/admin/cms/btbPendaftaranStore";
import FieldTitle from "../_components/FieldTitle";
import { Label, Textarea, TextInput } from "flowbite-react";
import CMSDivider from "../_components/CMSDivider";
import { isObjectEmpty } from "../../../../../utils/checker";

const Beasiswa = () => {
  const data = useCmsPendaftaranStore((state) => state.data);
  const language = useCmsPendaftaranStore((state) => state.language);
  const setInnerState = useCmsPendaftaranStore((state) => state.setInnerState);
  const setInnerContentList = useCmsPendaftaranStore(
    (state) => state.setInnerContentList
  );
  const setSchoolWaNumber = useCmsPendaftaranStore(
    (state) => state.setSchoolWaNumber
  );
  const setSchoolTlp = useCmsPendaftaranStore((state) => state.setSchoolTlp);

  return (
    <>
      <CMSSubTitle>Beasiswa Page</CMSSubTitle>
      <FieldTitle>Beasiswa Title</FieldTitle>
      <TextInput
        value={data[language]["beasiswaPagedata"]["notes"]}
        onChange={(e) => {
          setInnerState(e.target.value, "beasiswaPagedata", "notes");
        }}
      />
      <FieldTitle>Beasiswa Subtitle</FieldTitle>
      <Textarea
        rows={4}
        value={data[language]["beasiswaPagedata"]["subtitle"]}
        onChange={(e) => {
          setInnerState(e.target.value, "beasiswaPagedata", "subtitle");
        }}
      />
      <FieldTitle>Beasiswa Information</FieldTitle>
      <TextInput
        value={data[language]["beasiswaPagedata"]["infomartion"]}
        onChange={(e) => {
          setInnerState(e.target.value, "beasiswaPagedata", "infomartion");
        }}
      />
      <FieldTitle>Beasiswa Detail School</FieldTitle>
      <div className="flex flex-col gap-2">
        {!isObjectEmpty(data[language]["beasiswaPagedata"]["detailschool"]) &&
          data[language]["beasiswaPagedata"]["detailschool"].map(
            (res, index) => (
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor={`beasiswaPagedata-title${index}`}
                  value="School Name"
                />
                <TextInput
                  id={`beasiswaPagedata-title${index}`}
                  value={res["schoolName"]}
                  onChange={(e) => {
                    setInnerContentList(
                      e.target.value,
                      "beasiswaPagedata",
                      "detailschool",
                      index,
                      "schoolName"
                    );
                  }}
                />

                <Label
                  htmlFor={`beasiswaPagedata-waNumber`}
                  value="Wa Number"
                />
                <div
                  className="flex flex-col gap-2"
                  id="beasiswaPagedata-waNumber"
                >
                  {!isObjectEmpty(res.schoolhp) &&
                    res.schoolhp.map((res, innerIdx) => (
                      <TextInput
                        value={res["waNumber"]}
                        onChange={(e) => {
                          setSchoolWaNumber(
                            e.target.value,
                            "beasiswaPagedata",
                            "schoolhp",
                            index,
                            innerIdx
                          );
                        }}
                      />
                    ))}
                </div>

                <Label
                  htmlFor={`beasiswaPagedata-schooltlp`}
                  value="School Tel"
                />
                <div
                  className="flex flex-col gap-2"
                  id="beasiswaPagedata-schooltlp"
                >
                  {!isObjectEmpty(res["schooltlp"]) &&
                    res["schooltlp"].map((res, innerIdx) => (
                      <div>
                        <TextInput
                          value={res}
                          onChange={(e) => {
                            setSchoolTlp(
                              e.target.value,
                              "beasiswaPagedata",
                              index,
                              innerIdx
                            );
                          }}
                        />
                      </div>
                    ))}
                </div>

                <Label
                  htmlFor={`beasiswaPagedata-email${index}`}
                  value="School Email"
                />
                <TextInput
                  id={`beasiswaPagedata-email${index}`}
                  value={res["schoolemail"]}
                  onChange={(e) => {
                    setInnerContentList(
                      e.target.value,
                      "beasiswaPagedata",
                      "detailschool",
                      index,
                      "schoolemail"
                    );
                  }}
                />
              </div>
            )
          )}
      </div>
      <CMSDivider />
    </>
  );
};

export { Beasiswa };
