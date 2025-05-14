import { Button, FileInput, Label, Radio, TextInput } from "flowbite-react";
import { FaMinusCircle } from "react-icons/fa";
import CMSDivider from "../_components/CMSDivider";
import { useState } from "react";
import FieldTitle from "../_components/FieldTitle";

const CMSBtbKnightGalleryContent = ({ attachment, setAttachment }) => {
  const [type, setType] = useState("image");

  const onChangeAttachment = (file, index) => {
    if (file.length > 0) {
      attachment["gallery"][index] = file[0];
    } else {
      attachment["gallery"][index] = {};
    }
    setAttachment({ ...attachment });
  };

  const addAttachment = () => {
    if (type === "image") {
      attachment["gallery"].push({
        url: "",
        type: "image",
        name: "",
      });
    } else if (type === "video") {
      attachment["gallery"].push({
        url: "",
        type: "video",
        name: "youtube",
        isNew: true,
      });
    }
    setAttachment({ ...attachment });
  };

  const onChangeVideo = (value, index) => {
    attachment["gallery"][index]["url"] = value;
    setAttachment({ ...attachment });
  };

  const onDelete = (index) => {
    attachment["gallery"].splice(index, 1);
    setAttachment({ ...attachment });
  };

  const onTypeChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div>
      <FieldTitle>Gallery Content</FieldTitle>
      {attachment["gallery"].map((res, index) => (
        <div className="flex w-full items-center mb-2">
          <div
            onClick={() => onDelete(index)}
            className="mr-4 cursor-pointer text-xl text-red-600 hover:text-red-700"
          >
            <FaMinusCircle />
          </div>
          <div className="w-full">
            {res.url && !res.isNew && !res.size ? (
              <a
                href={res.url}
                target="_blank"
                className="text-blue-500 hover:text-blue-600"
              >
                {res.name}
              </a>
            ) : (
              <>
                {res.type.includes("image") ? (
                  <FileInput
                    accept="image/*"
                    multiple={false}
                    helperText={``}
                    onChange={(e) => onChangeAttachment(e.target.files, index)}
                  />
                ) : (
                  <TextInput
                    value={res.url}
                    onChange={(e) => {
                      onChangeVideo(e.target.value, index);
                    }}
                  />
                )}
              </>
            )}
          </div>
        </div>
      ))}

      <CMSDivider />

      <div className="mt-4 flex max-w-md flex-col gap-4">
        <div className="flex items-center gap-2">
          <Radio
            checked={type === "image"}
            id={`image-btb-knight-gallery`}
            value="image"
            onChange={onTypeChange}
          />
          <Label htmlFor="image-btb-knight-gallery">Image</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            checked={type === "video"}
            id={`video-btb-knight-gallery`}
            value="video"
            onChange={onTypeChange}
          />
          <Label htmlFor="video-btb-knight-gallery">Video</Label>
        </div>
      </div>
      <Button className="mt-2 ml-9" onClick={addAttachment} size={"sm"}>
        Add
      </Button>
      <CMSDivider />
    </div>
  );
};

export default CMSBtbKnightGalleryContent;
