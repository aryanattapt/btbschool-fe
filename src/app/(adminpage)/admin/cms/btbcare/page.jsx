"use client";
import React, { useEffect, useState } from "react";
import NavbarSidebarLayout from "../../_layouts/navigation";
import { isObjectEmpty } from "../../../../../utils/checker";
import { useCmsBtbCareStore } from "../../../../../../store/admin/cms/btbCareStore";
import AdminHeader from "../../_components/header";
import FieldTitle from "../_components/FieldTitle";
import ImageAttachment from "../_components/ImageAttachment";
import LanguageChanger from "../_components/LanguageChanger";
import { Button, Textarea, TextInput } from "flowbite-react";
import Loader from "../../../../_components/loader";
import { checkPermission } from "../../../../../../services/auth.service";
import LoadingModal from "../../../../../components/LoadingModal";
import Swal from "sweetalert2";

const CMSBtbCare = () => {
	const [isLoadingPage, setIsLoadingPage] = useState(true);
	const [isAuthorized, setIsAuthorized] = useState(null);

	const rawData = useCmsBtbCareStore((state) => state.rawData);
	const data = useCmsBtbCareStore((state) => state.data);
	const language = useCmsBtbCareStore((state) => state.language);
	const setState = useCmsBtbCareStore((state) => state.setState);
	const setStateLanguage = useCmsBtbCareStore(
		(state) => state.setStateLanguage
	);
	const getInitialData = useCmsBtbCareStore((state) => state.getInitialData);
	const submitData = useCmsBtbCareStore((state) => state.submitData);
	const loading = useCmsBtbCareStore((state) => state.loading);

	const [attachment, setAttachment] = useState({});

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
		fetchData(getInitialData);
	}, []);

	const fetchData = async (callback) => {
		setIsLoadingPage(true);
		try {
			await checkPermission("manage_content");
			setIsAuthorized(true);
			await callback();
		} catch (error) {
			console.log(error);
			if (error.status != "401") {
				try {
					await callback();
				} catch (error) {
					console.log(error);
				}
			}
		} finally {
			setIsLoadingPage(false);
		}
	};

	useEffect(() => {
		if (!isObjectEmpty(rawData)) {
			setAttachment({
				bannerimage: rawData["bannerimage"],
				btbcaremage: rawData["btbcaremage"],
				btbpedulilingkunganimage1: rawData["btbpedulilingkunganimage1"],
				btbpedulilingkunganimage2: rawData["btbpedulilingkunganimage2"],
				sukarelawanbtbimage1: rawData["sukarelawanbtbimage1"],
				sukarelawanbtbimage2: rawData["sukarelawanbtbimage2"],
				sukarelawanbtbimage3: rawData["sukarelawanbtbimage3"],
				sukarelawanbtbimage4: rawData["sukarelawanbtbimage4"],
				tanganpenolongimage1: rawData["tanganpenolongimage1"],
			});
		}
	}, [rawData]);

	const onSubmitData = () => {
		Swal.fire(
			"Are you sure?",
			"Once submitted, you can't undo it",
			"warning"
		).then((res) => {
			if (res.isConfirmed) {
				setState(true, "loading");
				const container = {};
				Object.keys(attachment).forEach((key) => {
					if (typeof attachment[key] === "object")
						container[key] = attachment[key];
				});
				submitData(container);
			}
		});
	};

	if (isLoadingPage) {
		return <Loader />;
	} else
		return (
			<NavbarSidebarLayout>
				{isAuthorized ? (
					<>
						{!isObjectEmpty(data) && (
							<div>
								<AdminHeader title="About Us Content Settings Form" />

								{/* Pengenanlan */}
								<FieldTitle>Gambar Banner</FieldTitle>
								<ImageAttachment
									resolution="dengan menggunakan aspect ratio wide Misal 1920x1080px."
									onChange={(e) =>
										onChangeAttachment(e.target.files, "bannerimage")
									}
								/>
								<FieldTitle>Gambar BTB Peduli</FieldTitle>
								<ImageAttachment
									resolution="dengan menggunakan aspect ratio wide Misal 1920x1080px."
									onChange={(e) =>
										onChangeAttachment(e.target.files, "btbcaremage")
									}
								/>
								<FieldTitle>Gambar BTB Peduli Lingkungan 1</FieldTitle>
								<ImageAttachment
									resolution="dengan menggunakan aspect ratio wide Misal 1920x1080px."
									onChange={(e) =>
										onChangeAttachment(
											e.target.files,
											"btbpedulilingkunganimage1"
										)
									}
								/>
								<FieldTitle>Gambar BTB Peduli Lingkungan 2</FieldTitle>
								<ImageAttachment
									resolution="dengan menggunakan aspect ratio wide Misal 1920x1080px."
									onChange={(e) =>
										onChangeAttachment(
											e.target.files,
											"btbpedulilingkunganimage2"
										)
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
								<div className="mt-6">
									<LanguageChanger
										onChange={(val) => setState(val, "language")}
										value={language}
									/>
									<FieldTitle>Text 1</FieldTitle>
									<Textarea
										rows={4}
										value={data[language]["text1"]}
										onChange={(e) => {
											setStateLanguage(e.target.value, "text1");
										}}
									/>
									<FieldTitle>Text 2</FieldTitle>
									<Textarea
										rows={4}
										value={data[language]["text2"]}
										onChange={(e) => {
											setStateLanguage(e.target.value, "text2");
										}}
									/>
									<FieldTitle>Text 3 (Catatan Kaki)</FieldTitle>
									<TextInput
										value={data[language]["text3"]}
										onChange={(e) => {
											setStateLanguage(e.target.value, "text3");
										}}
									/>
									<FieldTitle>Text 4</FieldTitle>
									<TextInput
										value={data[language]["text4"]}
										onChange={(e) => {
											setStateLanguage(e.target.value, "text4");
										}}
									/>
									<FieldTitle>Sub Judul BTB Peduli Lingkungan</FieldTitle>
									<TextInput
										value={data[language]["text4"]}
										onChange={(e) => {
											setStateLanguage(e.target.value, "text4");
										}}
									/>
									<FieldTitle>Konteks dari Subjudul 1</FieldTitle>
									<Textarea
										rows={4}
										value={data[language]["text5"]}
										onChange={(e) => {
											setStateLanguage(e.target.value, "text5");
										}}
									/>
									<FieldTitle>Sub Judul BTB Peduli Lingkungan</FieldTitle>
									<TextInput
										value={data[language]["text6"]}
										onChange={(e) => {
											setStateLanguage(e.target.value, "text6");
										}}
									/>
									<FieldTitle>Konteks dari Subjudul 1</FieldTitle>
									<TextInput
										value={data[language]["text7"]}
										onChange={(e) => {
											setStateLanguage(e.target.value, "text7");
										}}
									/>
									<FieldTitle>Sub Judul BTB Sukarelawan</FieldTitle>
									<TextInput
										value={data[language]["text8"]}
										onChange={(e) => {
											setStateLanguage(e.target.value, "text8");
										}}
									/>
									<FieldTitle>Konteks BTB Sukarelawan</FieldTitle>
									<Textarea
										rows={4}
										value={data[language]["text9"]}
										onChange={(e) => {
											setStateLanguage(e.target.value, "text9");
										}}
									/>
									<FieldTitle>Sub Judul BTB Tangan Penolong</FieldTitle>
									<TextInput
										value={data[language]["text10"]}
										onChange={(e) => {
											setStateLanguage(e.target.value, "text10");
										}}
									/>
									<FieldTitle>Konteks BTB Tangan Penolong 1</FieldTitle>
									<Textarea
										rows={4}
										value={data[language]["text11"]}
										onChange={(e) => {
											setStateLanguage(e.target.value, "text11");
										}}
									/>
									<FieldTitle>Konteks BTB Tangan Penolong 2</FieldTitle>
									<Textarea
										rows={4}
										value={data[language]["text12"]}
										onChange={(e) => {
											setStateLanguage(e.target.value, "text12");
										}}
									/>
									<FieldTitle>Konteks BTB Tangan Penolong 3</FieldTitle>
									<Textarea
										rows={4}
										value={data[language]["text13"]}
										onChange={(e) => {
											setStateLanguage(e.target.value, "text13");
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
					</>
				) : (
					<div>Unauthorized</div>
				)}
				{loading && <LoadingModal label={"Submitting data, please wait..."} />}
			</NavbarSidebarLayout>
		);
};

export default CMSBtbCare;
