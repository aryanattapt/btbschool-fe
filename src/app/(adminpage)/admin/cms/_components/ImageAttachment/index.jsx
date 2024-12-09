import { FileInput } from "flowbite-react";
import React from "react";

const ImageAttachment = ({ onChange, resolution = "", ...props }) => {
	const reso = resolution && ` Resolution ${resolution}`;
	return (
		<FileInput
			accept="image/*"
			multiple={false}
			helperText={`Ukuran Maksimum 2MB. Format Gambar (.jpg).${reso}`}
			onChange={onChange}
			{...props}
		/>
	);
};

export default ImageAttachment;
