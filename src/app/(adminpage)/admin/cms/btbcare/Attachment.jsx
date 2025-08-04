import FieldTitle from "../_components/FieldTitle";
import ImageAttachment from "../_components/ImageAttachment";

const Attachment = ({ onChangeAttachment }) => {
	return (
		<>
			<FieldTitle>Gambar Banner</FieldTitle>
			<ImageAttachment
				resolution="dengan menggunakan aspect ratio wide Misal 1920x1080px."
				onChange={(e) => onChangeAttachment(e.target.files, "bannerimage")}
			/>
			<FieldTitle>Gambar BTB Peduli</FieldTitle>
			<ImageAttachment
				resolution="dengan menggunakan aspect ratio wide Misal 1920x1080px."
				onChange={(e) => onChangeAttachment(e.target.files, "btbcaremage")}
			/>
			<FieldTitle>Gambar BTB Peduli Lingkungan 1</FieldTitle>
			<ImageAttachment
				resolution="dengan menggunakan aspect ratio wide Misal 1920x1080px."
				onChange={(e) =>
					onChangeAttachment(e.target.files, "btbpedulilingkunganimage1")
				}
			/>
			<FieldTitle>Gambar BTB Peduli Lingkungan 2</FieldTitle>
			<ImageAttachment
				resolution="dengan menggunakan aspect ratio wide Misal 1920x1080px."
				onChange={(e) =>
					onChangeAttachment(e.target.files, "btbpedulilingkunganimage2")
				}
			/>
			<FieldTitle>Gambar BTB Peduli Sukarelawan 1</FieldTitle>
			<ImageAttachment
				resolution="dengan menggunakan aspect ratio wide Misal 1920x1080px."
				onChange={(e) =>
					onChangeAttachment(e.target.files, "sukarelawanbtbimage1")
				}
			/>
			<FieldTitle>Gambar BTB Peduli Sukarelawan 2</FieldTitle>
			<ImageAttachment
				resolution="dengan menggunakan aspect ratio wide Misal 1920x1080px."
				onChange={(e) =>
					onChangeAttachment(e.target.files, "sukarelawanbtbimage2")
				}
			/>
			<FieldTitle>Gambar BTB Peduli Sukarelawan 3</FieldTitle>
			<ImageAttachment
				resolution="dengan menggunakan aspect ratio wide Misal 1920x1080px."
				onChange={(e) =>
					onChangeAttachment(e.target.files, "sukarelawanbtbimage3")
				}
			/>
			<FieldTitle>Gambar BTB Peduli Sukarelawan 4</FieldTitle>
			<ImageAttachment
				resolution="dengan menggunakan aspect ratio wide Misal 1920x1080px."
				onChange={(e) =>
					onChangeAttachment(e.target.files, "sukarelawanbtbimage4")
				}
			/>
			<FieldTitle>Gambar BTB Peduli Tangan Penolong 1</FieldTitle>
			<ImageAttachment
				resolution="dengan menggunakan aspect ratio wide Misal 1920x1080px."
				onChange={(e) =>
					onChangeAttachment(e.target.files, "tanganpenolongimage1")
				}
			/>
			<FieldTitle>Gambar BTB Peduli Tangan Penolong 1</FieldTitle>
			<ImageAttachment
				resolution="dengan menggunakan aspect ratio wide Misal 1920x1080px."
				onChange={(e) =>
					onChangeAttachment(e.target.files, "tanganpenolongimage2")
				}
			/>
		</>
	);
};

export { Attachment };
