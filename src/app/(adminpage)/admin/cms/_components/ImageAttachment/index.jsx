import { FileInput } from "flowbite-react";
import React from "react";

const ImageAttachment = ({ url, onChange, resolution = "", ...props }) => {
  const reso = resolution && ` ${resolution}`;
  return (
    <div>
      {url && (
        <div className="mb-1">
          <span className="text-sm">Currently displaying : </span>
          <a
            href={url}
            target="_blank"
            className="text-blue-500 hover:text-blue-600"
          >
            {url}
          </a>
        </div>
      )}
      <FileInput
        accept="image/*"
        multiple={false}
        helperText={`Ukuran Maksimum 2MB. Format Gambar (.jpg) ${reso}`}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default ImageAttachment;
