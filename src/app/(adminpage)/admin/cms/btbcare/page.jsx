"use client";
import React, { useEffect } from "react";
import NavbarSidebarLayout from "../../_layouts/navigation";
import { isObjectEmpty } from "../../../../../utils/checker";
import { useCmsBtbCareStore } from "../../../../../../store/admin/cms/btbCareStore";
import AdminHeader from "../../_components/header";
import FieldTitle from "../_components/FieldTitle";
import ImageAttachment from "../_components/ImageAttachment";
import LanguageChanger from "../_components/LanguageChanger";
import { TextInput } from "flowbite-react";

const CMSBtbCare = () => {
	const data = useCmsBtbCareStore((state) => state.data);
	const language = useCmsBtbCareStore((state) => state.language);
	const setState = useCmsBtbCareStore((state) => state.setState);
	const getInitialData = useCmsBtbCareStore((state) => state.getInitialData);
	const setStateLanguage = useCmsBtbCareStore(
		(state) => state.setStateLanguage
	);

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

	return (
		<div>
			<NavbarSidebarLayout>
				{!isObjectEmpty(data) && (
					<div>
						<AdminHeader title="About Us Content Settings Form" />

						{/* Pengenanlan */}
						<FieldTitle>Gambar Banner</FieldTitle>
						<ImageAttachment
							onChange={(e) => onChangeAttachment(e, "bannerimage")}
						/>
						<FieldTitle>Gambar BTB Peduli</FieldTitle>
						<ImageAttachment
							onChange={(e) => onChangeAttachment(e, "btbcaremage")}
						/>
						<FieldTitle>Gambar BTB Peduli Lingkungan 1</FieldTitle>
						<ImageAttachment
							onChange={(e) =>
								onChangeAttachment(e, "btbpedulilingkunganimage1")
							}
						/>
						<FieldTitle>Gambar BTB Peduli Lingkungan 2</FieldTitle>
						<ImageAttachment
							onChange={(e) =>
								onChangeAttachment(e, "btbpedulilingkunganimage2")
							}
						/>
						<FieldTitle>Gambar BTB Peduli Sukarelawan 1</FieldTitle>
						<ImageAttachment
							onChange={(e) => onChangeAttachment(e, "sukarelawanbtbimage1")}
						/>
						<FieldTitle>Gambar BTB Peduli Sukarelawan 2</FieldTitle>
						<ImageAttachment
							onChange={(e) => onChangeAttachment(e, "sukarelawanbtbimage2")}
						/>
						<FieldTitle>Gambar BTB Peduli Sukarelawan 3</FieldTitle>
						<ImageAttachment
							onChange={(e) => onChangeAttachment(e, "sukarelawanbtbimage3")}
						/>
						<FieldTitle>Gambar BTB Peduli Sukarelawan 4</FieldTitle>
						<ImageAttachment
							onChange={(e) => onChangeAttachment(e, "sukarelawanbtbimage4")}
						/>
						<FieldTitle>Gambar BTB Peduli Tangan Penolong 1</FieldTitle>
						<ImageAttachment
							onChange={(e) => onChangeAttachment(e, "tanganpenolongimage1")}
						/>
						<div className="mt-6">
							<LanguageChanger
								onChange={(val) => setState(val, "language")}
								value={language}
							/>
							<FieldTitle>Text 1</FieldTitle>
							<TextInput
								value={data[language]["text1"]}
								onChange={(e) => {
									setVisiMisi(e.target.value, "text1");
								}}
							/>
							<FieldTitle>Text 2</FieldTitle>
							<TextInput
								value={data[language]["text2"]}
								onChange={(e) => {
									setVisiMisi(e.target.value, "text2");
								}}
							/>
							<FieldTitle>Text 3 (Catatan Kaki)</FieldTitle>
							<TextInput
								value={data[language]["text3"]}
								onChange={(e) => {
									setVisiMisi(e.target.value, "text3");
								}}
							/>
							<FieldTitle>Text 4</FieldTitle>
							<TextInput
								value={data[language]["text4"]}
								onChange={(e) => {
									setVisiMisi(e.target.value, "text4");
								}}
							/>
							<FieldTitle>Sub Judul BTB Peduli Lingkungan</FieldTitle>
							<TextInput
								value={data[language]["text4"]}
								onChange={(e) => {
									setVisiMisi(e.target.value, "text4");
								}}
							/>
							<FieldTitle>Konteks dari Subjudul 1</FieldTitle>
							<TextInput
								value={data[language]["text5"]}
								onChange={(e) => {
									setVisiMisi(e.target.value, "text5");
								}}
							/>
							<FieldTitle>Sub Judul BTB Peduli Lingkungan</FieldTitle>
							<TextInput
								value={data[language]["text6"]}
								onChange={(e) => {
									setVisiMisi(e.target.value, "text6");
								}}
							/>
							<FieldTitle>Konteks dari Subjudul 1</FieldTitle>
							<TextInput
								value={data[language]["text7"]}
								onChange={(e) => {
									setVisiMisi(e.target.value, "text7");
								}}
							/>
							<FieldTitle>Sub Judul BTB Sukarelawan</FieldTitle>
							<TextInput
								value={data[language]["text8"]}
								onChange={(e) => {
									setVisiMisi(e.target.value, "text8");
								}}
							/>
							<FieldTitle>Konteks BTB Sukarelawan</FieldTitle>
							<TextInput
								value={data[language]["text9"]}
								onChange={(e) => {
									setVisiMisi(e.target.value, "text9");
								}}
							/>
							<FieldTitle>Sub Judul BTB Tangan Penolong</FieldTitle>
							<TextInput
								value={data[language]["text10"]}
								onChange={(e) => {
									setVisiMisi(e.target.value, "text10");
								}}
							/>
							<FieldTitle>Konteks BTB Tangan Penolong 1</FieldTitle>
							<TextInput
								value={data[language]["text11"]}
								onChange={(e) => {
									setVisiMisi(e.target.value, "text11");
								}}
							/>
							<FieldTitle>Konteks BTB Tangan Penolong 2</FieldTitle>
							<TextInput
								value={data[language]["text12"]}
								onChange={(e) => {
									setVisiMisi(e.target.value, "text12");
								}}
							/>
							<FieldTitle>Konteks BTB Tangan Penolong 3</FieldTitle>
							<TextInput
								value={data[language]["text13"]}
								onChange={(e) => {
									setVisiMisi(e.target.value, "text13");
								}}
							/>
						</div>
					</div>
				)}
			</NavbarSidebarLayout>
		</div>
	);
};

export default CMSBtbCare;
