import { FileInput } from "flowbite-react";
import React from "react";

const ImageAttachment = ({ onChange, ...props }) => {
	return (
		<FileInput
			accept="image/*"
			multiple={false}
			helperText="Ukuran Maksimum 2MB. Format Gambar (.jpg)"
			onChange={onChange}
			{...props}
		/>
	);
};

export default ImageAttachment;
