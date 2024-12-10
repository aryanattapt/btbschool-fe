import { Button } from "flowbite-react";
import { useRef } from "react";
import { FaMinusCircle } from "react-icons/fa";

const BannerAttachment = ({
	datas,
	grade,
	onDelete,
	onChangeAttachment,
	addAttachment,
}) => {
	return (
		<div className="flex flex-col gap-2">
			{datas.length > 0 &&
				datas.map((res, index) => (
					<div>
						{typeof res === "string" ? (
							<div className="flex items-center">
								<div
									onClick={() => onDelete(grade, index)}
									className="mr-4 cursor-pointer text-xl text-red-600 hover:text-red-700"
								>
									<FaMinusCircle />
								</div>
								<a
									href={res}
									target="_blank"
									className="underline text-blue-600 hover:text-blue-800"
								>
									{res}
								</a>
							</div>
						) : (
							<div className="flex">
								<div
									onClick={() => onDelete(grade, index)}
									className="mr-4 mt-2 cursor-pointer text-xl text-red-600 hover:text-red-700"
								>
									<FaMinusCircle />
								</div>
								<div className="w-full">
									<AttachInput
										filename={res?.name}
										onChange={(file) => onChangeAttachment(file, grade, index)}
									/>
								</div>
							</div>
						)}
					</div>
				))}

			<Button
				className="mt-2 ml-9 w-36"
				onClick={() => addAttachment(grade)}
				size={"sm"}
			>
				Add
			</Button>
		</div>
	);
};

const AttachInput = ({ filename, onChange }) => {
	const fileInputRef = useRef();

	const onLocalChange = (e) => {
		if (e.target.files.length > 0) {
			onChange(e.target.files[0]);
		} else {
			onChange({});
		}
	};

	const onClick = () => {
		fileInputRef.current.click();
	};

	return (
		<>
			<div className="flex w-full" onClick={onClick}>
				<div className="flex items-center rounded-l-md bg-[#1F2937] min-w-[110px] text-white text-sm py-[10px] px-4">
					Choose File
				</div>
				<div className="bg-[#F9FAFB] rounded-r-md border border-gray-300 text-sm py-[10px] px-4 w-full">
					{filename || "No file chosen"}
				</div>
			</div>
			<p className="text-sm text-gray-500">
				Ukuran Maksimum 2MB. Format Gambar (.jpg) dengan menggunakan aspect ratio wide Misal 1920x1080px
			</p>
			<input
				type="file"
				ref={fileInputRef}
				onChange={onLocalChange}
				style={{ display: "none" }}
				accept="image/*"
			/>
		</>
	);
};

export default BannerAttachment;
