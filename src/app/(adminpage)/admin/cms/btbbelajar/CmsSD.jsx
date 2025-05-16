import React, { useState } from "react";
import CMSSubTitle from "../_components/CMSSubtitle";
import FieldTitle from "../_components/FieldTitle";
import BannerAttachment from "./_components/BannerAttachment/BannerAttachment";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import CMSDivider from "../_components/CMSDivider";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaMinusCircle } from "react-icons/fa";
import ImageAttachment from "../_components/ImageAttachment";

const CmsSD = ({
  data,
  language,
  deleteListContent,
  attachments,
  deleteAttachment,
  onChangeAttachment,
  addAttachment,
  setContentState,
  setSdContentList,
  addSdContentList,
  onChangeImage,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-x-2 mt-4 w-full cursor-pointer"
      >
        <CMSSubTitle style={{ marginTop: 0 }}>SD</CMSSubTitle>
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
            datas={attachments["sd"]}
            grade={"sd"}
            onDelete={deleteAttachment}
            onChangeAttachment={onChangeAttachment}
            addAttachment={addAttachment}
          />
          <FieldTitle>Title</FieldTitle>
          <TextInput
            value={data[language]["sd"]["title"]}
            onChange={(e) => {
              setContentState(e.target.value, "sd", "title");
            }}
          />
          <FieldTitle>Content Title</FieldTitle>
          <TextInput
            value={data[language]["sd"]["text1"]}
            onChange={(e) => {
              setContentState(e.target.value, "sd", "text1");
            }}
          />
          <FieldTitle>Content Description</FieldTitle>
          <Textarea
            rows={4}
            value={data[language]["sd"]["text2"]}
            onChange={(e) => {
              setContentState(e.target.value, "sd", "text2");
            }}
          />
          <FieldTitle>Content Image</FieldTitle>
          <ImageAttachment
            onChange={(e) => onChangeImage(e.target.files, "image1")}
            url={data["image1"]}
          />
          <FieldTitle>Curriculum Title</FieldTitle>
          <TextInput
            value={data[language]["sd"]["text3"]}
            onChange={(e) => {
              setContentState(e.target.value, "sd", "text3");
            }}
          />
          <FieldTitle>Curriculum Subtitle</FieldTitle>
          <TextInput
            value={data[language]["sd"]["text4"]}
            onChange={(e) => {
              setContentState(e.target.value, "sd", "text4");
            }}
          />
          <FieldTitle>Curriculum List 1</FieldTitle>
          <div className="flex flex-col gap-2">
            {data[language]["sd"]["kurikulumlist1"].map((res, index) => (
              <div>
                <Label htmlFor={`kurikulumSD1-title${index}`} value="Title" />
                <TextInput
                  id={`kurikulumSD1-title${index}`}
                  value={res["title"]}
                  onChange={(e) => {
                    setSdContentList(
                      e.target.value,
                      "kurikulumlist1",
                      index,
                      "title"
                    );
                  }}
                />
                <Label
                  htmlFor={`kurikulumSD1-content${index}`}
                  value="Description"
                />
                <TextInput
                  id="kurikulumSD1-content${index}"
                  value={res["content"]}
                  onChange={(e) => {
                    setSdContentList(
                      e.target.value,
                      "kurikulumlist1",
                      index,
                      "content"
                    );
                  }}
                />
                <Button
                  className="mt-2"
                  color={"failure"}
                  size={"xs"}
                  onClick={() =>
                    deleteListContent(index, "sd", "kurikulumlist1")
                  }
                >
                  Delete
                </Button>
                <CMSDivider />
              </div>
            ))}
          </div>

          <Button
            className="mt-2"
            onClick={() => addSdContentList("kurikulumlist1")}
          >
            Add
          </Button>

          <FieldTitle>Curriculum List 2</FieldTitle>
          <div className="flex flex-col gap-2">
            {data[language]["sd"]["kurikulumlist2"].map((res, index) => (
              <div>
                <Label htmlFor={`kurikulumSD2-title${index}`} value="Title" />
                <TextInput
                  id={`kurikulumSD2-title${index}`}
                  value={res["title"]}
                  onChange={(e) => {
                    setSdContentList(
                      e.target.value,
                      "kurikulumlist2",
                      index,
                      "title"
                    );
                  }}
                />
                <Label
                  htmlFor={`kurikulumSD2-content${index}`}
                  value="Description"
                />
                <TextInput
                  id={`kurikulumSD2-content${index}`}
                  value={res["content"]}
                  onChange={(e) => {
                    setSdContentList(
                      e.target.value,
                      "kurikulumlist2",
                      index,
                      "content"
                    );
                  }}
                />
                <Button
                  className="mt-2"
                  color={"failure"}
                  size={"xs"}
                  onClick={() =>
                    deleteListContent(index, "sd", "kurikulumlist2")
                  }
                >
                  Delete
                </Button>
                <CMSDivider />
              </div>
            ))}
          </div>

          <Button
            className="mt-2"
            onClick={() => addSdContentList("kurikulumlist2")}
          >
            Add
          </Button>

          <FieldTitle>Activity Title</FieldTitle>
          <TextInput
            value={data[language]["sd"]["text5"]}
            onChange={(e) => {
              setContentState(e.target.value, "sd", "text5");
            }}
          />
          <FieldTitle>Activity Content Paragraph</FieldTitle>
          <Textarea
            rows={4}
            value={data[language]["sd"]["text6"]}
            onChange={(e) => {
              setContentState(e.target.value, "sd", "text6");
            }}
          />
          <FieldTitle>Activity Image</FieldTitle>
          <ImageAttachment
            onChange={(e) => onChangeImage(e.target.files, "image2")}
            url={data["image2"]}
          />
          <FieldTitle>Activity Program List</FieldTitle>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              {data[language]["sd"]["programlist1"].map((res, index) => (
                <div className="w-full">
                  <div className="flex w-full items-center">
                    <TextInput
                      className="flex-1"
                      value={res}
                      onChange={(e) => {
                        setSdContentList(e.target.value, "programlist1", index);
                      }}
                    />
                    <div
                      onClick={() =>
                        deleteListContent(index, "sd", "programlist1")
                      }
                      className="ml-4 cursor-pointer text-xl text-red-600 hover:text-red-700"
                    >
                      <FaMinusCircle />
                    </div>
                  </div>
                </div>
              ))}

              <Button onClick={() => addSdContentList("programlist1")}>
                Add
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              {data[language]["sd"]["programlist2"].map((res, index) => (
                <div className="w-full">
                  <div className="flex w-full items-center">
                    <TextInput
                      className="flex-1"
                      value={res}
                      onChange={(e) => {
                        setSdContentList(e.target.value, "programlist2", index);
                      }}
                    />
                    <div
                      onClick={() =>
                        deleteListContent(index, "sd", "programlist2")
                      }
                      className="ml-4 cursor-pointer text-xl text-red-600 hover:text-red-700"
                    >
                      <FaMinusCircle />
                    </div>
                  </div>
                </div>
              ))}
              <Button onClick={() => addSdContentList("programlist2")}>
                Add
              </Button>
            </div>
          </div>
          <FieldTitle>Activity List Image</FieldTitle>
          <ImageAttachment
            onChange={(e) => onChangeImage(e.target.files, "image3")}
            url={data["image3"]}
          />

          <FieldTitle>Outdoor Activity Title</FieldTitle>
          <TextInput
            value={data[language]["sd"]["text8"]}
            onChange={(e) => {
              setContentState(e.target.value, "sd", "text8");
            }}
          />
          <FieldTitle>Outdoor Activity Subtitle</FieldTitle>
          <TextInput
            value={data[language]["sd"]["text9"]}
            onChange={(e) => {
              setContentState(e.target.value, "sd", "text9");
            }}
          />
          <FieldTitle>Outdoor Activity Paragraph Description</FieldTitle>
          <Textarea
            rows={4}
            value={data[language]["sd"]["text10"]}
            onChange={(e) => {
              setContentState(e.target.value, "sd", "text10");
            }}
          />
          <FieldTitle>Outdoor Image</FieldTitle>
          <ImageAttachment
            onChange={(e) => onChangeImage(e.target.files, "image4")}
            url={data["image4"]}
          />
        </div>
      )}
    </div>
  );
};

export default CmsSD;
