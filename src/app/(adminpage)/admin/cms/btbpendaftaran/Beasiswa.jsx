import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
  Button,
  Label,
  Textarea,
  TextInput,
} from "flowbite-react";
import { FaMinusCircle } from "react-icons/fa";
import { useCmsPendaftaranStore } from "../../../../../../store/admin/cms/btbPendaftaranStore";
import { isObjectEmpty } from "../../../../../utils/checker";
import CMSDivider from "../_components/CMSDivider";
import CMSSubTitle from "../_components/CMSSubtitle";
import FieldTitle from "../_components/FieldTitle";

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
  const addSchoolWa = useCmsPendaftaranStore((state) => state.addSchoolWa);
  const deleteSchoolWa = useCmsPendaftaranStore(
    (state) => state.deleteSchoolWa
  );
  const setSchoolTlp = useCmsPendaftaranStore((state) => state.setSchoolTlp);
  const addSchoolTlp = useCmsPendaftaranStore((state) => state.addSchoolTlp);
  const deleteSchoolTlp = useCmsPendaftaranStore(
    (state) => state.deleteSchoolTlp
  );
  const addSchoolDetail = useCmsPendaftaranStore(
    (state) => state.addSchoolDetail
  );
  const deleteSchoolDetail = useCmsPendaftaranStore(
    (state) => state.deleteSchoolDetail
  );

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
        <Accordion collapseAll>
          {!isObjectEmpty(data[language]["beasiswaPagedata"]["detailschool"]) &&
            data[language]["beasiswaPagedata"]["detailschool"].map(
              (res, index) => (
                <AccordionPanel>
                  <AccordionTitle
                    className={`
                      p-4 bg-gray-200 hover:bg-gray-300 
                      ${
                        index + 1 !==
                          data[language]["beasiswaPagedata"]["detailschool"]
                            .length && "border-b-[1px] border-gray-300"
                      }
                    `}
                  >
                    {res["schoolName"]}
                  </AccordionTitle>
                  <AccordionContent>
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
                    <div className="flex mt-3 mb-2 gap-4 items-center">
                      <Label
                        htmlFor={`beasiswaPagedata-waNumber`}
                        value="Wa Number"
                      />
                      <Button size={"xs"} onClick={() => addSchoolWa(index)}>
                        Tambah
                      </Button>
                    </div>
                    <div
                      className="flex flex-col gap-2"
                      id="beasiswaPagedata-waNumber"
                    >
                      {!isObjectEmpty(res.schoolhp) &&
                        res.schoolhp.map((res, innerIdx) => (
                          <div className="flex gap-4 items-center">
                            <div className="w-[50%]">
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
                            </div>
                            <div
                              onClick={() => deleteSchoolWa(index, innerIdx)}
                              className="mr-4 cursor-pointer text-xl text-red-600 hover:text-red-700"
                            >
                              <FaMinusCircle />
                            </div>
                          </div>
                        ))}
                    </div>

                    <div className="flex mt-3 mb-2 gap-4 items-center">
                      <Label
                        htmlFor={`beasiswaPagedata-schooltlp`}
                        value="School Tel"
                      />
                      <Button size={"xs"} onClick={() => addSchoolTlp(index)}>
                        Tambah
                      </Button>
                    </div>
                    <div
                      className="flex flex-col gap-2"
                      id="beasiswaPagedata-schooltlp"
                    >
                      {!isObjectEmpty(res["schooltlp"]) &&
                        res["schooltlp"].map((res, innerIdx) => (
                          <div className="flex gap-4 items-center">
                            <div className="w-[50%]">
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
                            <div
                              onClick={() => deleteSchoolTlp(index, innerIdx)}
                              className="mr-4 cursor-pointer text-xl text-red-600 hover:text-red-700"
                            >
                              <FaMinusCircle />
                            </div>
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
                    <Button
                      onClick={() => deleteSchoolDetail(index)}
                      className="mt-4"
                      color={"failure"}
                      size={"sm"}
                    >
                      Delete
                    </Button>
                  </AccordionContent>
                </AccordionPanel>
              )
            )}
        </Accordion>
        <Button onClick={addSchoolDetail}>Tambah Sekolah</Button>
      </div>
      <CMSDivider />
    </>
  );
};

export { Beasiswa };
