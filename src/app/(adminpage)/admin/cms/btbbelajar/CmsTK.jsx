import React, { useState } from "react";
import CMSSubTitle from "../_components/CMSSubtitle";
import FieldTitle from "../_components/FieldTitle";
import BannerAttachment from "./_components/BannerAttachment/BannerAttachment";
import { Button, Textarea, TextInput } from "flowbite-react";
import { MdKeyboardArrowDown } from "react-icons/md";
import CMSDivider from "../_components/CMSDivider";
import { FaMinusCircle } from "react-icons/fa";
import ImageAttachment from "../_components/ImageAttachment";

const CmsTK = ({
  data,
  language,
  attachments,
  deleteTkCurriculum,
  deleteTkProgramList,
  deleteAttachment,
  onChangeAttachment,
  addAttachment,
  setContentState,
  setTkCurriculumContent,
  addTkCurriculumContent,
  setProgramContent,
  addProgramContent,
  onChangeImage,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-x-2 mt-4 w-full cursor-pointer"
      >
        <CMSSubTitle style={{ marginTop: 0 }}>TK</CMSSubTitle>
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
          {/* CONTENT GRADE TK */}
          <FieldTitle>Gambar Banner</FieldTitle>
          <BannerAttachment
            datas={attachments["tk"]}
            grade={"tk"}
            onDelete={deleteAttachment}
            onChangeAttachment={onChangeAttachment}
            addAttachment={addAttachment}
          />
          <FieldTitle>Introduction Title</FieldTitle>
          <TextInput
            value={data[language]["tk"]["introduction"]["title"]}
            onChange={(e) => {
              setContentState(e.target.value, "tk", "introduction", "title");
            }}
          />
          <FieldTitle>Introduction Paragraph</FieldTitle>
          <Textarea
            rows={4}
            value={data[language]["tk"]["introduction"]["paragraph"]}
            onChange={(e) => {
              setContentState(
                e.target.value,
                "tk",
                "introduction",
                "paragraph"
              );
            }}
          />
          <FieldTitle>Introduction Image</FieldTitle>
          <ImageAttachment
            onChange={(e) => onChangeImage(e.target.files, "image13")}
            url={data["image13"]}
          />
          <FieldTitle>Curriculum Title</FieldTitle>
          <TextInput
            value={data[language]["tk"]["curriculum"]["title"]}
            onChange={(e) => {
              setContentState(e.target.value, "tk", "curriculum", "title");
            }}
          />
          <FieldTitle>Curriculum Subtitle 1</FieldTitle>
          <TextInput
            value={data[language]["tk"]["curriculum"]["subtitle"]}
            onChange={(e) => {
              setContentState(e.target.value, "tk", "curriculum", "subtitle");
            }}
          />
          <FieldTitle>Curriculum Content 1</FieldTitle>
          <div className="flex flex-col gap-2">
            {data[language]["tk"]["curriculum"]["components1"].map(
              (res, index) => (
                <div className="w-full">
                  <div className="flex w-full items-center">
                    <div
                      onClick={() => deleteTkCurriculum(index, "components1")}
                      className="mr-4 cursor-pointer text-xl text-red-600 hover:text-red-700"
                    >
                      <FaMinusCircle />
                    </div>
                    <TextInput
                      className="flex-1"
                      key={index}
                      value={res}
                      onChange={(e) => {
                        setTkCurriculumContent(
                          e.target.value,
                          "components1",
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
            onClick={() => addTkCurriculumContent("components1")}
          >
            Add
          </Button>
          <FieldTitle>Curriculum Description Content 1</FieldTitle>
          <Textarea
            rows={4}
            value={data[language]["tk"]["curriculum"]["desc1"]}
            onChange={(e) => {
              setContentState(e.target.value, "tk", "curriculum", "desc1");
            }}
          />
          <FieldTitle>Curriculum Content 2</FieldTitle>
          <div className="flex flex-col gap-2">
            {data[language]["tk"]["curriculum"]["components2"].map(
              (res, index) => (
                <div className="w-full">
                  <div className="flex w-full items-center">
                    <div
                      onClick={() => deleteTkCurriculum(index, "components2")}
                      className="mr-4 cursor-pointer text-xl text-red-600 hover:text-red-700"
                    >
                      <FaMinusCircle />
                    </div>
                    <TextInput
                      className="flex-1"
                      value={res}
                      onChange={(e) => {
                        setTkCurriculumContent(
                          e.target.value,
                          "components2",
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
            onClick={() => addTkCurriculumContent("components2")}
          >
            Add
          </Button>
          <FieldTitle>Curriculum Description Content 2</FieldTitle>
          <TextInput
            value={data[language]["tk"]["curriculum"]["desc2"]}
            onChange={(e) => {
              setContentState(e.target.value, "tk", "curriculum", "desc2");
            }}
          />
          <FieldTitle>Activity Title</FieldTitle>
          <Textarea
            rows={4}
            value={data[language]["tk"]["activity"]["title"]}
            onChange={(e) => {
              setContentState(e.target.value, "tk", "activity", "title");
            }}
          />
          <FieldTitle>Activity Content</FieldTitle>
          <Textarea
            rows={4}
            value={data[language]["tk"]["activity"]["content"]}
            onChange={(e) => {
              setContentState(e.target.value, "tk", "activity", "content");
            }}
          />
          <FieldTitle>Activity Image</FieldTitle>
          <ImageAttachment
            onChange={(e) => onChangeImage(e.target.files, "image14")}
            url={data["image14"]}
          />
          <FieldTitle>Program Title</FieldTitle>
          <TextInput
            value={data[language]["tk"]["programs"]["title"]}
            onChange={(e) => {
              setContentState(e.target.value, "tk", "programs", "title");
            }}
          />
          <FieldTitle>Program Description</FieldTitle>
          <Textarea
            rows={4}
            value={data[language]["tk"]["programs"]["desc"]}
            onChange={(e) => {
              setContentState(e.target.value, "tk", "programs", "desc");
            }}
          />
          <FieldTitle>Program List</FieldTitle>
          <div className="flex flex-col gap-2">
            {data[language]["tk"]["programs"]["list1"].map((res, index) => (
              <div className="w-full">
                <div className="flex w-full items-center">
                  <div
                    onClick={() => deleteTkProgramList(index)}
                    className="mr-4 cursor-pointer text-xl text-red-600 hover:text-red-700"
                  >
                    <FaMinusCircle />
                  </div>
                  <TextInput
                    className="flex-1"
                    value={res}
                    onChange={(e) => {
                      setProgramContent(e.target.value, "tk", "list1", index);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <Button
            className="mt-2"
            onClick={() => addProgramContent("tk", "list1")}
          >
            Add
          </Button>
          <FieldTitle>Program Image</FieldTitle>
          <ImageAttachment
            onChange={(e) => onChangeImage(e.target.files, "image15")}
            url={data["image15"]}
          />
          <FieldTitle>Outdoor Content Title</FieldTitle>
          <TextInput
            value={data[language]["tk"]["outdoor"]["title"]}
            onChange={(e) => {
              setContentState(e.target.value, "tk", "outdoor", "title");
            }}
          />
          <FieldTitle>Outdoor Content Text</FieldTitle>
          <TextInput
            value={data[language]["tk"]["outdoor"]["text"]}
            onChange={(e) => {
              setContentState(e.target.value, "tk", "outdoor", "text");
            }}
          />
          <FieldTitle>Outdoor Content Paragraph</FieldTitle>
          <Textarea
            rows={4}
            value={data[language]["tk"]["outdoor"]["paragraph"]}
            onChange={(e) => {
              setContentState(e.target.value, "tk", "outdoor", "paragraph");
            }}
          />
          <FieldTitle>Outdoor Image</FieldTitle>
          <ImageAttachment
            onChange={(e) => onChangeImage(e.target.files, "image16")}
            url={data["image16"]}
          />
        </div>
      )}
    </div>
  );
};

export default CmsTK;
