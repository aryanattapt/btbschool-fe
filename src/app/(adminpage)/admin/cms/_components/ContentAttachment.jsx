import { Button, Label, Radio, TextInput } from "flowbite-react";
import { useState } from "react";
import FieldTitle from "./FieldTitle";
import ImageAttachment from "./ImageAttachment";

const ContentAttachment = ({
  data,
  property,
  attachment,
  setAttachment,
  resolution = "",
  title = true,
}) => {
  const [isChange, setIsChange] = useState(false);
  const [newType, setNewType] = useState("image");

  const changeAttToDefault = () => {
    attachment[property] = data[property];
    setAttachment({ ...attachment });
  };

  const onCancelChange = () => {
    setIsChange(false);
    changeAttToDefault();
  };

  const onTypeChange = (e) => {
    setNewType(e.target.value);
    changeAttToDefault();
  };

  const onChangeAttachment = (file) => {
    if (file.length > 0) {
      attachment[property] = file[0];
    }
    setAttachment({ ...attachment });
  };

  const onChangeVideo = (value) => {
    attachment[property] = {
      url: value,
      type: "video",
      name: "youtube",
      isNew: true,
    };
    setAttachment({ ...attachment });
  };

  return (
    <div>
      {title && <FieldTitle>Content Attachment</FieldTitle>}
      <div>
        <span className="text-sm">Currently displaying : </span>
        <a
          href={data?.[property]?.url}
          target="_blank"
          className="text-blue-500 hover:text-blue-600"
        >
          {data?.[property]?.name}
        </a>
      </div>
      {!isChange ? (
        <Button className="mt-2" onClick={() => setIsChange(true)} size={"sm"}>
          Change Attachment
        </Button>
      ) : (
        <>
          <div className="mt-4 mb-3 flex max-w-md flex-col gap-4">
            <div className="flex items-center gap-2">
              <Radio
                checked={newType === "image"}
                id={`image-${property}`}
                value={`image`}
                onChange={onTypeChange}
              />
              <Label htmlFor={`image-${property}`}>Image</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                checked={newType === "video"}
                id={`video-${property}`}
                value={`video`}
                onChange={onTypeChange}
              />
              <Label htmlFor={`video-${property}`}>Video</Label>
            </div>
          </div>
          {newType === "image" ? (
            <ImageAttachment
              resolution={resolution}
              onChange={(e) => onChangeAttachment(e.target.files)}
            />
          ) : (
            <TextInput
              value={attachment[property].url}
              onChange={(e) => {
                onChangeVideo(e.target.value);
              }}
            />
          )}
          <button
            className="mt-2 px-[16px] py-[10px] rounded-md text-sm font-semibold text-white bg-[#c81e1e] hover:bg-[#9a2424]"
            onClick={onCancelChange}
            size={"sm"}
          >
            Cancel
          </button>
        </>
      )}
    </div>
  );
};

export default ContentAttachment;
