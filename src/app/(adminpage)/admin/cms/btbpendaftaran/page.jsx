"use client";
import React, { useEffect, useState } from "react";
import NavbarSidebarLayout from "../../_layouts/navigation";
import { useCmsPendaftaranStore } from "../../../../../../store/admin/cms/btbPendaftaranStore";
import { isObjectEmpty } from "../../../../../utils/checker";
import AdminHeader from "../../_components/header";
import LanguageChanger from "../_components/LanguageChanger";
import FieldTitle from "../_components/FieldTitle";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import ImageAttachment from "../_components/ImageAttachment";

const CMSBtbPendaftaran = () => {
	const data = useCmsPendaftaranStore((state) => state.data);
	const language = useCmsPendaftaranStore((state) => state.language);
	const getInitialData = useCmsPendaftaranStore(
		(state) => state.getInitialData
	);
	const setState = useCmsPendaftaranStore((state) => state.setState);
	const setInnerState = useCmsPendaftaranStore((state) => state.setInnerState);
	const setInnerContentList = useCmsPendaftaranStore(
		(state) => state.setInnerContentList
	);
	const setSchoolWaNumber = useCmsPendaftaranStore(
		(state) => state.setSchoolWaNumber
	);
	const setSchoolTlp = useCmsPendaftaranStore((state) => state.setSchoolTlp);
	const submitData = useCmsPendaftaranStore((state) => state.submitData);

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

	const onSubmitData = () => {
		const container = {};
		Object.keys(attachment).forEach((key) => {
			if (typeof attachment[key] === "object") container[key] = attachment[key];
		});
		submitData(container);
	};

	useEffect(() => {
		getInitialData();
	}, []);

	return (
		<div>
			<NavbarSidebarLayout>
				{!isObjectEmpty(data) && (
					<div>
						<AdminHeader title="Pendaftaran BTB Content Settings Form" />

						<FieldTitle>Gambar Banner</FieldTitle>
						<ImageAttachment
							onChange={(e) => onChangeAttachment(e.target.files, "image2")}
						/>

						<LanguageChanger
							onChange={(val) => setState(val, "language")}
							value={language}
						/>

						<FieldTitle>Main Title</FieldTitle>
						<TextInput
							value={data[language]["mainTitle"]}
							onChange={(e) => {
								setState(e.target.value, "mainTitle");
							}}
						/>
						<FieldTitle>Enrollment Title</FieldTitle>
						<TextInput
							value={data[language]["titleEnrolment"]}
							onChange={(e) => {
								setState(e.target.value, "titleEnrolment");
							}}
						/>
						<FieldTitle>Beasiswa Title</FieldTitle>
						<TextInput
							value={data[language]["titleBeasiswa"]}
							onChange={(e) => {
								setState(e.target.value, "titleBeasiswa");
							}}
						/>
						{/* Enrolment Page Data */}
						<h3 className="mt-4">Enrollment Page</h3>
						<FieldTitle>Enrollment Title</FieldTitle>
						<TextInput
							value={data[language]["enrolmentPagedata"]["title"]}
							onChange={(e) => {
								setInnerState(e.target.value, "enrolmentPagedata", "title");
							}}
						/>
						<FieldTitle>Enrollment Subtitle</FieldTitle>
						<TextInput
							value={data[language]["enrolmentPagedata"]["subtitle"]}
							onChange={(e) => {
								setInnerState(e.target.value, "enrolmentPagedata", "subtitle");
							}}
						/>
						<FieldTitle>Enrollment Step List</FieldTitle>
						<div className="flex flex-col gap-2">
							{!isObjectEmpty(
								data[language]["enrolmentPagedata"]["stepsList"]
							) &&
								data[language]["enrolmentPagedata"]["stepsList"].map(
									(res, index) => (
										<div>
											<Label
												htmlFor={`enrolmentPagedata-title${index}`}
												value="Title"
											/>
											<TextInput
												id={`enrolmentPagedata-title${index}`}
												value={res["titleStep"]}
												onChange={(e) => {
													setInnerContentList(
														e.target.value,
														"enrolmentPagedata",
														"stepsList",
														index,
														"titleStep"
													);
												}}
											/>
											<Label
												htmlFor={`enrolmentPagedata-content${index}`}
												value="Description"
											/>
											<Textarea
												rows={4}
												id={`enrolmentPagedata-content${index}`}
												value={res["descStep"]}
												onChange={(e) => {
													setSdContentList(
														e.target.value,
														"enrolmentPagedata",
														"stepsList",
														index,
														"descStep"
													);
												}}
											/>
										</div>
									)
								)}
						</div>

						<FieldTitle>Enrollment Notes</FieldTitle>
						<TextInput
							value={data[language]["enrolmentPagedata"]["notes"]}
							onChange={(e) => {
								setInnerState(e.target.value, "enrolmentPagedata", "notes");
							}}
						/>

						<h3 className="mt-4">Beasiswa Page</h3>
						<FieldTitle>Beasiswa Title</FieldTitle>
						<TextInput
							value={data[language]["beasiswaPagedata"]["notes"]}
							onChange={(e) => {
								setInnerState(e.target.value, "beasiswaPagedata", "notes");
							}}
						/>
						<FieldTitle>Beasiswa Subtitle</FieldTitle>
						<Textarea
							rows={4}
							value={data[language]["beasiswaPagedata"]["subtitle"]}
							onChange={(e) => {
								setInnerState(e.target.value, "beasiswaPagedata", "subtitle");
							}}
						/>
						<FieldTitle>Beasiswa Information</FieldTitle>
						<TextInput
							value={data[language]["beasiswaPagedata"]["infomartion"]}
							onChange={(e) => {
								setInnerState(
									e.target.value,
									"beasiswaPagedata",
									"infomartion"
								);
							}}
						/>
						<FieldTitle>Beasiswa Detail School</FieldTitle>
						<div className="flex flex-col gap-2">
							{!isObjectEmpty(
								data[language]["beasiswaPagedata"]["detailschool"]
							) &&
								data[language]["beasiswaPagedata"]["detailschool"].map(
									(res, index) => (
										<div className="flex flex-col gap-2">
											<Label
												htmlFor={`beasiswaPagedata-title${index}`}
												value="School Name"
											/>
											<TextInput
												id={`beasiswaPagedata-title${index}`}
												value={res["schoolName"]}
												onChange={(e) => {
													setInnerContentList(
														e.target.value,
														"beasiswaPagedata",
														"detailschool",
														index,
														"schoolName"
													);
												}}
											/>

											<Label
												htmlFor={`beasiswaPagedata-waNumber`}
												value="Wa Number"
											/>
											<div
												className="flex flex-col gap-2"
												id="beasiswaPagedata-waNumber"
											>
												{!isObjectEmpty(res.schoolhp) &&
													res.schoolhp.map((res, innerIdx) => (
														<TextInput
															value={res["waNumber"]}
															onChange={(e) => {
																setSchoolWaNumber(
																	e.target.value,
																	"beasiswaPagedata",
																	index,
																	innerIdx
																);
															}}
														/>
													))}
											</div>

											<Label
												htmlFor={`beasiswaPagedata-schooltlp`}
												value="School Tel"
											/>
											<div
												className="flex flex-col gap-2"
												id="beasiswaPagedata-schooltlp"
											>
												{!isObjectEmpty(res["schooltlp"]) &&
													res["schooltlp"].map((res, innerIdx) => (
														<div>
															<TextInput
																value={res}
																onChange={(e) => {
																	setSchoolTlp(
																		e.target.value,
																		"beasiswaPagedata",
																		index,
																		innerIdx
																	);
																}}
															/>
														</div>
													))}
											</div>

											<Label
												htmlFor={`beasiswaPagedata-email${index}`}
												value="School Email"
											/>
											<TextInput
												id={`beasiswaPagedata-email${index}`}
												value={res["schoolemail"]}
												onChange={(e) => {
													setInnerContentList(
														e.target.value,
														"beasiswaPagedata",
														"detailschool",
														index,
														"schoolemail"
													);
												}}
											/>
										</div>
									)
								)}
						</div>

						<h3 className="mt-4">Tur Sekolah Page</h3>
						<FieldTitle>Tur Sekolah Title</FieldTitle>
						<TextInput
							value={data[language]["turSekolahdata"]["title"]}
							onChange={(e) => {
								setInnerState(e.target.value, "turSekolahdata", "title");
							}}
						/>
						<FieldTitle>Tur Sekolah Subtitle</FieldTitle>
						<TextInput
							value={data[language]["turSekolahdata"]["subtitle"]}
							onChange={(e) => {
								setInnerState(e.target.value, "turSekolahdata", "subtitle");
							}}
						/>
						<FieldTitle>Tur Sekolah Information</FieldTitle>
						<TextInput
							value={data[language]["turSekolahdata"]["information"]}
							onChange={(e) => {
								setInnerState(e.target.value, "turSekolahdata", "information");
							}}
						/>

						<FieldTitle>Tur Sekolah Detail School</FieldTitle>
						<div className="flex flex-col gap-2">
							{!isObjectEmpty(
								data[language]["turSekolahdata"]["detailschool"]
							) &&
								data[language]["turSekolahdata"]["detailschool"].map(
									(res, index) => (
										<div className="flex flex-col gap-2">
											<Label
												htmlFor={`turSekolahdata-title${index}`}
												value="School Name"
											/>
											<TextInput
												id={`turSekolahdata-title${index}`}
												value={res["schoolName"]}
												onChange={(e) => {
													setInnerContentList(
														e.target.value,
														"turSekolahdata",
														"detailschool",
														index,
														"schoolName"
													);
												}}
											/>

											<Label
												htmlFor={`turSekolahdata-waNumber`}
												value="Wa Number"
											/>
											<div
												className="flex flex-col gap-2"
												id="turSekolahdata-waNumber"
											>
												{!isObjectEmpty(res.schoolhp) &&
													res.schoolhp.map((res, innerIdx) => (
														<TextInput
															value={res["waNumber"]}
															onChange={(e) => {
																setSchoolWaNumber(
																	e.target.value,
																	"turSekolahdata",
																	index,
																	innerIdx
																);
															}}
														/>
													))}
											</div>

											<Label
												htmlFor={`turSekolahdata-schooltlp`}
												value="School Tel"
											/>
											<div
												className="flex flex-col gap-2"
												id="turSekolahdata-schooltlp"
											>
												{!isObjectEmpty(res["schooltlp"]) &&
													res["schooltlp"].map((res, innerIdx) => (
														<div>
															<TextInput
																value={res}
																onChange={(e) => {
																	setSchoolTlp(
																		e.target.value,
																		"turSekolahdata",
																		index,
																		innerIdx
																	);
																}}
															/>
														</div>
													))}
											</div>

											<Label
												htmlFor={`turSekolahdata-email${index}`}
												value="School Email"
											/>
											<TextInput
												id={`turSekolahdata-email${index}`}
												value={res["schoolemail"]}
												onChange={(e) => {
													setInnerContentList(
														e.target.value,
														"turSekolahdata",
														"detailschool",
														index,
														"schoolemail"
													);
												}}
											/>
											<Label
												htmlFor={`turSekolahdata-title${index}`}
												value="Title"
											/>
											<TextInput
												id={`turSekolahdata-title${index}`}
												value={res["title"]}
												onChange={(e) => {
													setInnerContentList(
														e.target.value,
														"turSekolahdata",
														"detailschool",
														index,
														"title"
													);
												}}
											/>
										</div>
									)
								)}
						</div>

						<Button
							id="btnSaveAndSend"
							name="btnSaveAndSend"
							className="w-full md:w-auto mt-3"
							onClick={onSubmitData}
						>
							Save
						</Button>
					</div>
				)}
			</NavbarSidebarLayout>
		</div>
	);
};

export default CMSBtbPendaftaran;
