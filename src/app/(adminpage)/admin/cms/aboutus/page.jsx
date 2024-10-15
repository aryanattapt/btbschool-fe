"use client";
import { Button, TextInput } from "flowbite-react";
import { useEffect } from "react";
import { useCmsAboutUsStore } from "../../../../../../store/admin/cms/aboutUsStore";
import { isObjectEmpty } from "../../../../../utils/checker";
import AdminHeader from "../../_components/header";
import NavbarSidebarLayout from "../../_layouts/navigation";
import FieldTitle from "../_components/FieldTitle";
import ImageAttachment from "../_components/ImageAttachment";
import LanguageChanger from "../_components/LanguageChanger";

const CMSAboutUs = () => {
	const setState = useCmsAboutUsStore((state) => state.setState);
	const language = useCmsAboutUsStore((state) => state.language);
	const getInitialData = useCmsAboutUsStore((state) => state.getInitialData);
	const setDescription = useCmsAboutUsStore((state) => state.setDescription);
	const setVisiMisi = useCmsAboutUsStore((state) => state.setVisiMisi);
	const setSmallParagraph = useCmsAboutUsStore(
		(state) => state.setSmallParagraph
	);
	const setGradeLists = useCmsAboutUsStore((state) => state.setVisiMisi);
	const data = useCmsAboutUsStore((state) => state.data);
	const submitData = useCmsAboutUsStore((state) => state.submitData)

	useEffect(() => {
		getInitialData();
	}, []);

	const onChangeAttachment = (e, prop) => {
		if (e.target.files.length > 0) {
			setState(e.target.files[0], prop);
		} else {
			setState("", prop);
		}
	};

	const onChangeGradeListAttachment = (e, prop) => {
		if (e.target.files.length > 0) {
			setGradeLists(e.target.files[0], prop);
		} else {
			setGradeLists("", prop);
		}
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
							onChange={(e) => onChangeAttachment(e, "image1")}
						/>
						<FieldTitle>Gambar Visi Misi</FieldTitle>
						<ImageAttachment
							onChange={(e) => onChangeAttachment(e, "image2")}
						/>
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
							<FieldTitle>List Misi</FieldTitle>
							<div className="flex flex-col gap-2">
								{data[language]["visimisi"]["misilist"].map((res, index) => (
									<TextInput
										value={res}
										onChange={(e) => {
											setVisiMisi(e.target.value, "misilist", index);
										}}
									/>
								))}
							</div>
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
							<FieldTitle>List Grade</FieldTitle>
							{data[language]["gradelists"].map((res, index) => (
								<div className="mb-3">
									<h6>{res.title}</h6>
									<ImageAttachment
										onChange={(e) => onChangeGradeListAttachment(e, "image")}
									/>
								</div>
							))}
							<Button id="btnSaveAndSend" name="btnSaveAndSend" className="w-full md:w-auto mt-3" onClick={submitData}>Save</Button>
						</div>
					</div>
				)}
			</NavbarSidebarLayout>
		</div>
	);
};

export default CMSAboutUs;
