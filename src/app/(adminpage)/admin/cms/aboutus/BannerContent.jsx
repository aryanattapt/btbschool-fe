import { Button, FileInput } from "flowbite-react";
import React from "react";
import { FaMinusCircle } from "react-icons/fa";

const CMSAboutUsBannerContent = ({ attachment, setAttachment }) => {
  const onChangeAttachment = (file, index) => {
    if (file.length > 0) {
      attachment["bannerimage"][index] = file[0];
    } else {
      attachment["bannerimage"][index] = {};
    }
    setAttachment({ ...attachment });
  };

  const addAttachment = () => {
    attachment["bannerimage"].push({});
    setAttachment({ ...attachment });
  };

  const onDelete = (index) => {
    attachment["bannerimage"].splice(index, 1);
    setAttachment({ ...attachment });
  };

  return (
    <div>
      <div>
        {attachment["bannerimage"].map((res, index) => (
          <div className="flex w-full items-center mb-2">
            <div
              onClick={() => onDelete(index)}
              className="mr-4 cursor-pointer text-xl text-red-600 hover:text-red-700"
            >
              <FaMinusCircle />
            </div>
            <div className="w-full">
              {res.url ? (
                <a
                  href={res.url}
                  target="_blank"
                  className="text-blue-500 hover:text-blue-600"
                >
                  {res.name}
                </a>
              ) : (
                <FileInput
                  accept="image/*"
                  multiple={false}
                  helperText={``}
                  onChange={(e) => onChangeAttachment(e.target.files, index)}
                />
              )}
            </div>
          </div>
        ))}

        <Button className="mt-2 ml-9" onClick={addAttachment} size={"sm"}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default CMSAboutUsBannerContent;
