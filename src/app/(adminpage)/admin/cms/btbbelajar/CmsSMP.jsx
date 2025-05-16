import React, { useState } from "react";
import CMSSubTitle from "../_components/CMSSubtitle";
import { MdKeyboardArrowDown } from "react-icons/md";
import CMSDivider from "../_components/CMSDivider";
import FieldTitle from "../_components/FieldTitle";
import BannerAttachment from "./_components/BannerAttachment/BannerAttachment";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { FaMinusCircle } from "react-icons/fa";
import ImageAttachment from "../_components/ImageAttachment";

const CmsSMP = ({
  data,
  language,
  attachments,
  deleteSmpCurriculumList,
  deleteSmpProgramList,
  deleteAttachment,
  onChangeAttachment,
  addAttachment,
  setContentState,
  setSmpContentList,
  addSmpContentList,
  onChangeImage,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-x-2 mt-4 w-full cursor-pointer"
      >
        <CMSSubTitle style={{ marginTop: 0 }}>SMP</CMSSubTitle>
        <MdKeyboardArrowDown
          className={`text-xl transition-transform duration-200 ease-in-out 
            ${
              isOpen
                ? "group-hover:-translate-y-1 rotate-180"
                : "group-hover:translate-y-1"
            }
          `}
        />
      </div>
      <CMSDivider />
      {isOpen && (
        <div>
          <FieldTitle>Gambar Banner</FieldTitle>
          <BannerAttachment
            datas={attachments["smp"]}
            grade={"smp"}
            onDelete={deleteAttachment}
            onChangeAttachment={onChangeAttachment}
            addAttachment={addAttachment}
          />
          <FieldTitle>Grade Title</FieldTitle>
          <TextInput
            value={data[language]["smp"]["title"]}
            onChange={(e) => {
              setContentState(e.target.value, "smp", "title");
            }}
          />
          <FieldTitle>Introduction Title</FieldTitle>
          <TextInput
            value={data[language]["smp"]["introduction"]["title"]}
            onChange={(e) => {
              setContentState(e.target.value, "smp", "introduction", "title");
            }}
          />
          <FieldTitle>Introduction Paragraph Description</FieldTitle>
          <Textarea
            rows={4}
            value={data[language]["smp"]["introduction"]["paragraph"]}
            onChange={(e) => {
              setContentState(
                e.target.value,
                "smp",
                "introduction",
                "paragraph"
              );
            }}
          />
          <FieldTitle>Introduction Image</FieldTitle>
          <ImageAttachment
            onChange={(e) => onChangeImage(e.target.files, "image9")}
            url={data["image9"]}
          />
          <FieldTitle>Curriculum Title</FieldTitle>
          <TextInput
            value={data[language]["smp"]["curriculum"]["title"]}
            onChange={(e) => {
              setContentState(e.target.value, "smp", "curriculum", "title");
            }}
          />
          <FieldTitle>Curriculum Subtitle</FieldTitle>
          <TextInput
            value={data[language]["smp"]["curriculum"]["subtitle"]}
            onChange={(e) => {
              setContentState(e.target.value, "smp", "curriculum", "subtitle");
            }}
          />
          <FieldTitle>Curriculum Content Paragraph</FieldTitle>
          <Textarea
            rows={4}
            value={data[language]["smp"]["curriculum"]["paragraph"]}
            onChange={(e) => {
              setContentState(e.target.value, "smp", "curriculum", "paragraph");
            }}
          />
          <FieldTitle>Curriculum List 1</FieldTitle>
          <div className="flex flex-col gap-2">
            {data[language]["smp"]["curriculum"]["components1"].map(
              (res, index) => (
                <div>
                  <Label
                    htmlFor={`kurikulumSmp1-title${index}`}
                    value="Title"
                  />
                  <TextInput
                    id={`kurikulumSmp1-title${index}`}
                    value={res["title"]}
                    onChange={(e) => {
                      setSmpContentList(
                        e.target.value,
                        "curriculum",
                        "components1",
                        index,
                        "title"
                      );
                    }}
                  />
                  <Label
                    htmlFor={`kurikulumSmp1-content${index}`}
                    value="Description"
                  />
                  <TextInput
                    id={`kurikulumSmp1-content${index}`}
                    value={res["description"]}
                    onChange={(e) => {
                      setSmpContentList(
                        e.target.value,
                        "curriculum",
                        "components1",
                        index,
                        "description"
                      );
                    }}
                  />
                  <Button
                    className="mt-2"
                    color={"failure"}
                    size={"xs"}
                    onClick={() =>
                      deleteSmpCurriculumList(index, "components1")
                    }
                  >
                    Delete
                  </Button>
                </div>
              )
            )}
          </div>
          <FieldTitle>Curriculum List 2</FieldTitle>
          <div className="flex flex-col gap-2">
            {data[language]["smp"]["curriculum"]["components2"].map(
              (res, index) => (
                <div>
                  <Label
                    htmlFor={`kurikulumSmp2-title${index}`}
                    value="Title"
                  />
                  <TextInput
                    id={`kurikulumSmp2-title${index}`}
                    value={res["title"]}
                    onChange={(e) => {
                      setSmpContentList(
                        e.target.value,
                        "curriculum",
                        "components2",
                        index,
                        "title"
                      );
                    }}
                  />
                  <Label
                    htmlFor={`kurikulumSmp2-content${index}`}
                    value="Description"
                  />
                  <TextInput
                    id={`kurikulumSmp2-content${index}`}
                    value={res["description"]}
                    onChange={(e) => {
                      setSmpContentList(
                        e.target.value,
                        "curriculum",
                        "components2",
                        index,
                        "description"
                      );
                    }}
                  />
                  <Button
                    className="mt-2"
                    color={"failure"}
                    size={"xs"}
                    onClick={() =>
                      deleteSmpCurriculumList(index, "components2")
                    }
                  >
                    Delete
                  </Button>
                </div>
              )
            )}
          </div>

          <FieldTitle>Activity Title</FieldTitle>
          <TextInput
            value={data[language]["smp"]["activity"]["title"]}
            onChange={(e) => {
              setContentState(e.target.value, "smp", "activity", "title");
            }}
          />
          <FieldTitle>Activity Content</FieldTitle>
          <Textarea
            rows={4}
            value={data[language]["smp"]["activity"]["content"]}
            onChange={(e) => {
              setContentState(e.target.value, "smp", "activity", "content");
            }}
          />
          <FieldTitle>Activity Image</FieldTitle>
          <ImageAttachment
            onChange={(e) => onChangeImage(e.target.files, "image10")}
            url={data["image10"]}
          />
          <FieldTitle>Programs Title</FieldTitle>
          <TextInput
            value={data[language]["smp"]["programs"]["title"]}
            onChange={(e) => {
              setContentState(e.target.value, "smp", "programs", "title");
            }}
          />
          {/* <FieldTitle>Programs Description</FieldTitle>
          <Textarea
            rows={4}
            value={data[language]["smp"]["programs"]["desc"]}
            onChange={(e) => {
              setContentState(e.target.value, "smp", "programs", "desc");
            }}
          /> */}
          <FieldTitle>Programs Content List</FieldTitle>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              {data[language]["smp"]["programs"]["list1"].map((res, index) => (
                <div className="w-full">
                  <div className="flex w-full items-center">
                    <TextInput
                      className="flex-1"
                      value={res}
                      onChange={(e) => {
                        setSmpContentList(
                          e.target.value,
                          "programs",
                          "list1",
                          index
                        );
                      }}
                    />
                    <div
                      onClick={() => deleteSmpProgramList(index, "list1")}
                      className="ml-4 cursor-pointer text-xl text-red-600 hover:text-red-700"
                    >
                      <FaMinusCircle />
                    </div>
                  </div>
                </div>
              ))}
              <Button onClick={() => addSmpContentList("programs", "list1")}>
                Add
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              {data[language]["smp"]["programs"]["list2"].map((res, index) => (
                <div className="w-full">
                  <div className="flex w-full items-center">
                    <TextInput
                      className="flex-1"
                      value={res}
                      onChange={(e) => {
                        setSmpContentList(
                          e.target.value,
                          "programs",
                          "list2",
                          index
                        );
                      }}
                    />
                    <div
                      onClick={() => deleteSmpProgramList(index, "list2")}
                      className="ml-4 cursor-pointer text-xl text-red-600 hover:text-red-700"
                    >
                      <FaMinusCircle />
                    </div>
                  </div>
                </div>
              ))}
              <Button onClick={() => addSmpContentList("programs", "list2")}>
                Add
              </Button>
            </div>
          </div>
          <FieldTitle>Program Image</FieldTitle>
          <ImageAttachment
            onChange={(e) => onChangeImage(e.target.files, "image11")}
            url={data["image11"]}
          />
          <FieldTitle>Outdoor Activity Title</FieldTitle>
          <TextInput
            value={data[language]["smp"]["outdoor"]["title"]}
            onChange={(e) => {
              setContentState(e.target.value, "smp", "outdoor", "title");
            }}
          />
          <FieldTitle>Outdoor Activity Subtitle</FieldTitle>
          <TextInput
            value={data[language]["smp"]["outdoor"]["text"]}
            onChange={(e) => {
              setContentState(e.target.value, "smp", "outdoor", "text");
            }}
          />
          <FieldTitle>Outdoor Activity Paragraph Content</FieldTitle>
          <Textarea
            rows={4}
            value={data[language]["smp"]["outdoor"]["paragraph"]}
            onChange={(e) => {
              setContentState(e.target.value, "smp", "outdoor", "paragraph");
            }}
          />
          <FieldTitle>Outdoor Image</FieldTitle>
          <ImageAttachment
            onChange={(e) => onChangeImage(e.target.files, "image12")}
            url={data["image12"]}
          />
        </div>
      )}
    </div>
  );
};

export default CmsSMP;
