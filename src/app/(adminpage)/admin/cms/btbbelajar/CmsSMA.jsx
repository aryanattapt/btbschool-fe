import React, { useState } from "react";
import CMSSubTitle from "../_components/CMSSubtitle";
import FieldTitle from "../_components/FieldTitle";
import BannerAttachment from "./_components/BannerAttachment/BannerAttachment";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { MdKeyboardArrowDown } from "react-icons/md";
import CMSDivider from "../_components/CMSDivider";
import { FaMinusCircle } from "react-icons/fa";
import ImageAttachment from "../_components/ImageAttachment";

const CmsSMA = ({
  data,
  language,
  attachments,
  deleteSmaCurriculumList,
  deleteSmaProgramList,
  deleteAttachment,
  onChangeAttachment,
  addAttachment,
  setContentState,
  setSmaContentList,
  addSmaContentList,
  onChangeImage,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-x-2 mt-4 w-full cursor-pointer"
      >
        <CMSSubTitle style={{ marginTop: 0 }}>SMA</CMSSubTitle>
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
            datas={attachments["sma"]}
            grade={"sma"}
            onDelete={deleteAttachment}
            onChangeAttachment={onChangeAttachment}
            addAttachment={addAttachment}
          />
          <FieldTitle>Content Title</FieldTitle>
          <TextInput
            value={data[language]["sma"]["title"]}
            onChange={(e) => {
              setContentState(e.target.value, "sma", "title");
            }}
          />
          <FieldTitle>Content Title</FieldTitle>
          <TextInput
            value={data[language]["sma"]["title"]}
            onChange={(e) => {
              setContentState(e.target.value, "sma", "title");
            }}
          />
          <FieldTitle>Introduction Title</FieldTitle>
          <TextInput
            value={data[language]["sma"]["introduction"]["title"]}
            onChange={(e) => {
              setContentState(e.target.value, "sma", "introduction", "title");
            }}
          />
          <FieldTitle>Introduction Paragraph Content</FieldTitle>
          <Textarea
            rows={4}
            value={data[language]["sma"]["introduction"]["paragraph"]}
            onChange={(e) => {
              setContentState(
                e.target.value,
                "sma",
                "introduction",
                "paragraph"
              );
            }}
          />
          <FieldTitle>Introduction Image</FieldTitle>
          <ImageAttachment
            onChange={(e) => onChangeImage(e.target.files, "image5")}
            url={data["image5"]}
          />
          <FieldTitle>Curriculum Title</FieldTitle>
          <TextInput
            value={data[language]["sma"]["curriculum"]["title"]}
            onChange={(e) => {
              setContentState(e.target.value, "sma", "curriculum", "title");
            }}
          />
          <FieldTitle>Curriculum Subtitle</FieldTitle>
          <TextInput
            value={data[language]["sma"]["curriculum"]["subtitle"]}
            onChange={(e) => {
              setContentState(e.target.value, "sma", "curriculum", "subtitle");
            }}
          />
          <FieldTitle>Curriculum Paragraph Content</FieldTitle>
          <Textarea
            rows={4}
            value={data[language]["sma"]["curriculum"]["paragraph"]}
            onChange={(e) => {
              setContentState(e.target.value, "sma", "curriculum", "paragraph");
            }}
          />
          <FieldTitle>Curriculum Content List</FieldTitle>
          <div className="flex flex-col gap-2">
            {data[language]["sma"]["curriculum"]["components"].map(
              (res, index) => (
                <div>
                  <Label htmlFor={`kurikulumSma-title${index}`} value="Title" />
                  <TextInput
                    id={`kurikulumSma-title${index}`}
                    value={res["title"]}
                    onChange={(e) => {
                      setSmaContentList(
                        e.target.value,
                        "curriculum",
                        "components",
                        index,
                        "title"
                      );
                    }}
                  />
                  <Label
                    htmlFor={`kurikulumSma-content${index}`}
                    value="Description"
                  />
                  <TextInput
                    id={`kurikulumSma-content${index}`}
                    value={res["description"]}
                    onChange={(e) => {
                      setSmaContentList(
                        e.target.value,
                        "curriculum",
                        "components",
                        index,
                        "description"
                      );
                    }}
                  />
                  <Button
                    className="mt-2"
                    color={"failure"}
                    size={"xs"}
                    onClick={() => deleteSmaCurriculumList(index, "components")}
                  >
                    Delete
                  </Button>
                </div>
              )
            )}
          </div>
          <Button
            className="mt-2"
            onClick={() => addSmaContentList("curriculum", "components")}
          >
            Add
          </Button>
          <FieldTitle>Subject Group Content List</FieldTitle>
          <div className="flex flex-col gap-2">
            {data[language]["sma"]["curriculum"]["subjectGroups"].map(
              (res, index) => (
                <div className="w-full">
                  <div className="flex w-full items-center">
                    <div
                      onClick={() =>
                        deleteSmaCurriculumList(index, "subjectGroups")
                      }
                      className="mr-4 cursor-pointer text-xl text-red-600 hover:text-red-700"
                    >
                      <FaMinusCircle />
                    </div>
                    <TextInput
                      className="flex-1"
                      key={index}
                      value={res}
                      onChange={(e) => {
                        setSmaContentList(
                          e.target.value,
                          "curriculum",
                          "subjectGroups",
                          index
                        );
                      }}
                    />
                  </div>
                </div>
              )
            )}
          </div>

          <Button
            className="mt-2"
            onClick={() => addSmaContentList("curriculum", "subjectGroups")}
          >
            Add
          </Button>
          <FieldTitle>Activities Label Content</FieldTitle>
          <Textarea
            rows={4}
            value={data[language]["sma"]["activities"]}
            onChange={(e) => {
              setContentState(e.target.value, "sma", "activities");
            }}
          />
          <FieldTitle>Programs Title</FieldTitle>
          <TextInput
            value={data[language]["sma"]["programs"]["title"]}
            onChange={(e) => {
              setContentState(e.target.value, "sma", "programs", "title");
            }}
          />
          <FieldTitle>Programs Description</FieldTitle>
          <Textarea
            rows={4}
            value={data[language]["sma"]["programs"]["desc"]}
            onChange={(e) => {
              setContentState(e.target.value, "sma", "programs", "desc");
            }}
          />
          <FieldTitle>Programs Image</FieldTitle>
          <ImageAttachment
            onChange={(e) => onChangeImage(e.target.files, "image6")}
            url={data["image6"]}
          />

          <FieldTitle>Programs Content List</FieldTitle>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="flex flex-col gap-2">
              {data[language]["sma"]["programs"]["list1"].map((res, index) => (
                <div className="w-full">
                  <div className="flex w-full items-center">
                    <TextInput
                      className="flex-1"
                      key={index}
                      value={res}
                      onChange={(e) => {
                        setSmaContentList(
                          e.target.value,
                          "programs",
                          "list1",
                          index
                        );
                      }}
                    />
                    <div
                      onClick={() => deleteSmaProgramList(index, "list1")}
                      className="ml-4 cursor-pointer text-xl text-red-600 hover:text-red-700"
                    >
                      <FaMinusCircle />
                    </div>
                  </div>
                </div>
              ))}

              <Button onClick={() => addSmaContentList("programs", "list1")}>
                Add
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              {data[language]["sma"]["programs"]["list2"].map((res, index) => (
                <div className="w-full">
                  <div className="flex w-full items-center">
                    <TextInput
                      className="flex-1"
                      key={index}
                      value={res}
                      onChange={(e) => {
                        setSmaContentList(
                          e.target.value,
                          "programs",
                          "list2",
                          index
                        );
                      }}
                    />
                    <div
                      onClick={() => deleteSmaProgramList(index, "list2")}
                      className="ml-4 cursor-pointer text-xl text-red-600 hover:text-red-700"
                    >
                      <FaMinusCircle />
                    </div>
                  </div>
                </div>
              ))}
              <Button onClick={() => addSmaContentList("programs", "list2")}>
                Add
              </Button>
            </div>
          </div>
          <FieldTitle>Programs Image</FieldTitle>
          <ImageAttachment
            onChange={(e) => onChangeImage(e.target.files, "image7")}
            url={data["image7"]}
          />

          <FieldTitle>Outdoor Activity Title</FieldTitle>
          <TextInput
            value={data[language]["sma"]["outdoor"]["title"]}
            onChange={(e) => {
              setContentState(e.target.value, "sma", "outdoor", "title");
            }}
          />
          <FieldTitle>Outdoor Activity Subtitle</FieldTitle>
          <Textarea
            rows={4}
            value={data[language]["sma"]["outdoor"]["text"]}
            onChange={(e) => {
              setContentState(e.target.value, "sma", "outdoor", "text");
            }}
          />
          <FieldTitle>Outdoor Activity Paragraph Content</FieldTitle>
          <Textarea
            rows={4}
            value={data[language]["sma"]["outdoor"]["paragraph"]}
            onChange={(e) => {
              setContentState(e.target.value, "sma", "outdoor", "paragraph");
            }}
          />
          <FieldTitle>Outdoor Image</FieldTitle>
          <ImageAttachment
            onChange={(e) => onChangeImage(e.target.files, "image8")}
            url={data["image8"]}
          />
        </div>
      )}
    </div>
  );
};

export default CmsSMA;
