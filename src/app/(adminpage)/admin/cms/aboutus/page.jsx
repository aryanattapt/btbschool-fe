"use client";
import { Button, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useCmsAboutUsStore } from "../../../../../../store/admin/cms/aboutUsStore";
import { isObjectEmpty } from "../../../../../utils/checker";
import AdminHeader from "../../_components/header";
import NavbarSidebarLayout from "../../_layouts/navigation";
import FieldTitle from "../_components/FieldTitle";
import ImageAttachment from "../_components/ImageAttachment";
import LanguageChanger from "../_components/LanguageChanger";
import { FaMinusCircle } from "react-icons/fa";

const CMSAboutUs = () => {
	const rawData = useCmsAboutUsStore((state) => state.rawData);
	const setState = useCmsAboutUsStore((state) => state.setState);
	const language = useCmsAboutUsStore((state) => state.language);
	const getInitialData = useCmsAboutUsStore((state) => state.getInitialData);
	const setDescription = useCmsAboutUsStore((state) => state.setDescription);
	const setVisiMisi = useCmsAboutUsStore((state) => state.setVisiMisi);
	const deleteVisiMisi = useCmsAboutUsStore((state) => state.deleteVisiMisi);
	const addVisiMisi = useCmsAboutUsStore((state) => state.addVisiMisi);
	const setSmallParagraph = useCmsAboutUsStore(
		(state) => state.setSmallParagraph
	);
	const data = useCmsAboutUsStore((state) => state.data);
	const submitData = useCmsAboutUsStore((state) => state.submitData);
	// const onChangeAttachment = useCmsAboutUsStore(
	// 	(state) => state.onChangeAttachment
	// );

	const [attachment, setAttachment] = useState({});

	useEffect(() => {
		getInitialData();
	}, []);

	const onChangeAttachment = (file, prop) => {
		if (file.length > 0) {
			attachment[prop] = file[0];
		} else {
			// setState("", prop);
			attachment[prop] = rawData[prop];
		}
		setAttachment({ ...attachment });
	};

	useEffect(() => {
		if (!isObjectEmpty(rawData)) {
			setAttachment({
				image1: rawData["image1"],
				image2: rawData["image2"],
				image3: rawData["image3"],
				image4: rawData["image4"],
				image5: rawData["image5"],
				image6: rawData["image6"],
			});
		}
	}, [rawData]);

	const onSubmitData = () => {
		const container = {};
		Object.keys(attachment).forEach((key) => {
			if (typeof attachment[key] === "object") container[key] = attachment[key];
		});
		submitData(container);
	};

	return (
		<div>
			<NavbarSidebarLayout>
				{!isObjectEmpty(data) && (
					<div>
						<AdminHeader title="About Us Content Settings Form" />

						{/* Pengenanlan */}
						<FieldTitle>Gambar Pengenalan</FieldTitle>
						<ImageAttachment
							id="image1"
							onChange={(e) => onChangeAttachment(e.target.files, "image1")}
						/>
						<FieldTitle>Gambar Visi Misi</FieldTitle>
						<ImageAttachment
							id="image2"
							onChange={(e) => onChangeAttachment(e.target.files, "image2")}
						/>

						<FieldTitle>List Grade</FieldTitle>
						{data["ID"]["gradelists"].map((res, index) => (
							<div className="mb-3" key={index}>
								<h6>{res.title}</h6>
								<ImageAttachment
									id={`image${index + 3}`}
									onChange={(e) =>
										onChangeAttachment(e.target.files, `image${index + 3}`)
									}
								/>
							</div>
						))}
						<div className="mt-6">
							<LanguageChanger
								onChange={(val) => setState(val, "language")}
								value={language}
							/>
							<FieldTitle>Pengenalan</FieldTitle>
							<TextInput
								value={data[language]["desc"]}
								onChange={(e) => {
									setDescription(e.target.value);
								}}
							/>
							<FieldTitle>Deskripsi Visi</FieldTitle>
							<TextInput
								value={data[language]["visimisi"]["descvisi"]}
								onChange={(e) => {
									setVisiMisi(e.target.value, "descvisi");
								}}
							/>
							<FieldTitle>Deskripsi Misi</FieldTitle>
							<TextInput
								value={data[language]["visimisi"]["descmisi"]}
								onChange={(e) => {
									setVisiMisi(e.target.value, "descmisi");
								}}
							/>
							<FieldTitle>List Misi</FieldTitle>
							<div className="flex flex-col gap-2">
								{data[language]["visimisi"]["misilist"].map((res, index) => (
									<div className="flex w-full items-center">
										<div
											onClick={() => deleteVisiMisi(index)}
											className="mr-4 cursor-pointer text-xl text-red-600 hover:text-red-700"
										>
											<FaMinusCircle />
										</div>
										<div className="w-full">
											<TextInput
												value={res}
												onChange={(e) => {
													setVisiMisi(e.target.value, "misilist", index);
												}}
											/>
										</div>
									</div>
								))}
							</div>
							<Button className="mt-2 ml-9" onClick={addVisiMisi} size={"sm"}>
								Add
							</Button>
							<FieldTitle>Catatan Kaki</FieldTitle>
							<TextInput
								value={data[language]["smallparagraph"]}
								onChange={(e) => {
									setSmallParagraph(e.target.value, "smallparagraph");
								}}
							/>
							<FieldTitle>List Jenjang Pendidikan</FieldTitle>
							<TextInput
								value={data[language]["smallparagraph"]}
								onChange={(e) => {
									setVisiMisi(e.target.value, "smallparagraph");
								}}
							/>
							<Button
								id="btnSaveAndSend"
								name="btnSaveAndSend"
								className="w-full md:w-auto mt-3"
								onClick={onSubmitData}
							>
								Save
							</Button>
						</div>
					</div>
				)}
			</NavbarSidebarLayout>
		</div>
	);
};

export default CMSAboutUs;
