"use client";
import React, { useEffect, useState } from "react";
import NavbarSidebarLayout from "../../_layouts/navigation";
import { useCmsBtbBelajarStore } from "../../../../../../store/admin/cms/btbBelajarStore";
import LanguageChanger from "../_components/LanguageChanger";
import AdminHeader from "../../_components/header";
import { isObjectEmpty } from "../../../../../utils/checker";
import FieldTitle from "../_components/FieldTitle";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import Loader from "../../../../_components/loader";
import { checkPermission } from "../../../../../../services/auth.service";
import BannerAttachment from "./_components/BannerAttachment/BannerAttachment";
import Swal from "sweetalert2";
import LoadingModal from "../../../../../components/LoadingModal";

const CMSBtbBelajar = () => {
	const [isLoadingPage, setIsLoadingPage] = useState(true);
	const [isAuthorized, setIsAuthorized] = useState(null);
	const [isDeclaredAtt, setIsDeclaredAtt] = useState(false);
	const {
		data,
		language,
		setState,
		setContentState,
		setTkCurriculumContent,
		getInitialData,
		addTkCurriculumContent,
		setProgramContent,
		addProgramContent,
		setSdContentList,
		addSdContentList,
		setSmpContentList,
		addSmpContentList,
		setSmaContentList,
		submitData,
		loading,
	} = useCmsBtbBelajarStore((state) => ({
		data: state.data,
		language: state.language,
		setState: state.setState,
		setContentState: state.setContentState,
		setTkCurriculumContent: state.setTkCurriculumContent,
		getInitialData: state.getInitialData,
		addTkCurriculumContent: state.addTkCurriculumContent,
		setProgramContent: state.setProgramContent,
		addProgramContent: state.addProgramContent,
		setSdContentList: state.setSdContentList,
		addSdContentList: state.addSdContentList,
		setSmpContentList: state.setSmpContentList,
		addSmpContentList: state.addSmpContentList,
		setSmaContentList: state.setSmaContentList,
		submitData: state.submitData,
		loading: state.loading,
	}));

	const [attachments, setAttachments] = useState({
		tk: [],
		sd: [],
		smp: [],
		sma: [],
	});

	useEffect(() => {
		fetchData(getInitialData);
	}, []);

	useEffect(() => {
		if (!isObjectEmpty(data) && !isDeclaredAtt) {
			Object.keys(attachments).forEach((grade) => {
				attachments[grade] = [...data["ID"][grade]["bannerImages"]];
			});
			setAttachments(JSON.parse(JSON.stringify(attachments)));
			if (!isDeclaredAtt) setIsDeclaredAtt(true);
		}
	}, [data]);

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

	const onChangeAttachment = (file, grade, index) => {
		attachments[grade][index] = file;
		setAttachments({ ...attachments });
	};

	const deleteAttachment = (grade, index) => {
		setAttachments((prev) => ({
			...prev,
			[grade]: prev[grade].filter((_, idx) => idx !== index),
		}));
	};

	const addAttachment = (grade) => {
		setAttachments((prev) => ({ ...prev, [grade]: [...prev[grade], {}] }));
	};

	const onSubmit = async () => {
		Swal.fire(
			"Are you sure?",
			"Once submitted, you can't undo it",
			"warning"
		).then((res) => {
			if (res.isConfirmed) {
				setState(true, "loading");
				// setIsLoadingPage(true)
				submitData(attachments);
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
								<AdminHeader title="Belajar BTB Content Settings Form" />
								<LanguageChanger
									onChange={(val) => setState(val, "language")}
									value={language}
								/>

								{/* CONTENT GRADE TK */}
								<h1 className="mt-8 font-bold text-2xl">TK</h1>
								<FieldTitle>Gambar Banner</FieldTitle>
								<BannerAttachment
									datas={attachments["tk"]}
									grade={"tk"}
									onDelete={deleteAttachment}
									onChangeAttachment={onChangeAttachment}
									addAttachment={addAttachment}
								/>
								<FieldTitle>Introduction Title</FieldTitle>
								<TextInput
									value={data[language]["tk"]["introduction"]["title"]}
									onChange={(e) => {
										setContentState(
											e.target.value,
											"tk",
											"introduction",
											"title"
										);
									}}
								/>
								<FieldTitle>Introduction Paragraph</FieldTitle>
								<Textarea
									rows={4}
									value={data[language]["tk"]["introduction"]["paragraph"]}
									onChange={(e) => {
										setContentState(
											e.target.value,
											"tk",
											"introduction",
											"paragraph"
										);
									}}
								/>
								<FieldTitle>Curriculum Title</FieldTitle>
								<TextInput
									value={data[language]["tk"]["curriculum"]["title"]}
									onChange={(e) => {
										setContentState(
											e.target.value,
											"tk",
											"curriculum",
											"title"
										);
									}}
								/>
								<FieldTitle>Curriculum Subtitle 1</FieldTitle>
								<TextInput
									value={data[language]["tk"]["curriculum"]["subtitle"]}
									onChange={(e) => {
										setContentState(
											e.target.value,
											"tk",
											"curriculum",
											"subtitle"
										);
									}}
								/>
								<FieldTitle>Curriculum Content 1</FieldTitle>
								<div className="flex flex-col gap-2">
									{data[language]["tk"]["curriculum"]["components1"].map(
										(res, index) => (
											<Textarea
												rows={4}
												key={index}
												value={res}
												onChange={(e) => {
													setTkCurriculumContent(
														e.target.value,
														"components1",
														index
													);
												}}
											/>
										)
									)}
								</div>
								<Button
									className="mt-2"
									onClick={() => addTkCurriculumContent("components1")}
								>
									Add
								</Button>
								<FieldTitle>Curriculum Description Content 1</FieldTitle>
								<TextInput
									value={data[language]["tk"]["curriculum"]["desc1"]}
									onChange={(e) => {
										setContentState(
											e.target.value,
											"tk",
											"curriculum",
											"desc1"
										);
									}}
								/>
								<FieldTitle>Curriculum Content 2</FieldTitle>
								<div className="flex flex-col gap-2">
									{data[language]["tk"]["curriculum"]["components2"].map(
										(res, index) => (
											<TextInput
												value={res}
												onChange={(e) => {
													setTkCurriculumContent(
														e.target.value,
														"components2",
														index
													);
												}}
											/>
										)
									)}
								</div>
								<Button
									className="mt-2"
									onClick={() => addTkCurriculumContent("components2")}
								>
									Add
								</Button>
								<FieldTitle>Curriculum Description Content 2</FieldTitle>
								<TextInput
									value={data[language]["tk"]["curriculum"]["desc2"]}
									onChange={(e) => {
										setContentState(
											e.target.value,
											"tk",
											"curriculum",
											"desc2"
										);
									}}
								/>
								<FieldTitle>Activity Title</FieldTitle>
								<Textarea
									rows={4}
									value={data[language]["tk"]["activity"]["title"]}
									onChange={(e) => {
										setContentState(e.target.value, "tk", "activity", "title");
									}}
								/>
								<FieldTitle>Activity Content</FieldTitle>
								<TextInput
									value={data[language]["tk"]["activity"]["content"]}
									onChange={(e) => {
										setContentState(
											e.target.value,
											"tk",
											"activity",
											"content"
										);
									}}
								/>
								<FieldTitle>Program Title</FieldTitle>
								<TextInput
									value={data[language]["tk"]["programs"]["title"]}
									onChange={(e) => {
										setContentState(e.target.value, "tk", "programs", "title");
									}}
								/>
								<FieldTitle>Program Description</FieldTitle>
								<Textarea
									rows={4}
									value={data[language]["tk"]["programs"]["desc"]}
									onChange={(e) => {
										setContentState(e.target.value, "tk", "programs", "desc");
									}}
								/>
								<FieldTitle>Program List</FieldTitle>
								<div className="flex flex-col gap-2">
									{data[language]["tk"]["programs"]["list1"].map(
										(res, index) => (
											<TextInput
												value={res}
												onChange={(e) => {
													setProgramContent(
														e.target.value,
														"tk",
														"list1",
														index
													);
												}}
											/>
										)
									)}
								</div>
								<Button
									className="mt-2"
									onClick={() => addProgramContent("tk", "list1")}
								>
									Add
								</Button>
								<FieldTitle>Outdoor Content Title</FieldTitle>
								<TextInput
									value={data[language]["tk"]["outdoor"]["title"]}
									onChange={(e) => {
										setContentState(e.target.value, "tk", "outdoor", "title");
									}}
								/>
								<FieldTitle>Outdoor Content Text</FieldTitle>
								<TextInput
									value={data[language]["tk"]["outdoor"]["text"]}
									onChange={(e) => {
										setContentState(e.target.value, "tk", "outdoor", "text");
									}}
								/>
								<FieldTitle>Outdoor Content Paragraph</FieldTitle>
								<Textarea
									rows={4}
									value={data[language]["tk"]["outdoor"]["paragraph"]}
									onChange={(e) => {
										setContentState(
											e.target.value,
											"tk",
											"outdoor",
											"paragraph"
										);
									}}
								/>

								{/* CONTENT GRADE SD */}
								<h1 className="mt-8 font-bold text-2xl">SD</h1>
								<FieldTitle>Gambar Banner</FieldTitle>
								<BannerAttachment
									datas={attachments["sd"]}
									grade={"sd"}
									onDelete={deleteAttachment}
									onChangeAttachment={onChangeAttachment}
									addAttachment={addAttachment}
								/>
								<FieldTitle>Title</FieldTitle>
								<TextInput
									value={data[language]["sd"]["title"]}
									onChange={(e) => {
										setContentState(e.target.value, "sd", "title");
									}}
								/>
								<FieldTitle>Content Title</FieldTitle>
								<TextInput
									value={data[language]["sd"]["text1"]}
									onChange={(e) => {
										setContentState(e.target.value, "sd", "text1");
									}}
								/>
								<FieldTitle>Content Description</FieldTitle>
								<TextInput
									value={data[language]["sd"]["text2"]}
									onChange={(e) => {
										setContentState(e.target.value, "sd", "text2");
									}}
								/>
								<FieldTitle>Curriculum Title</FieldTitle>
								<TextInput
									value={data[language]["sd"]["text3"]}
									onChange={(e) => {
										setContentState(e.target.value, "sd", "text3");
									}}
								/>
								<FieldTitle>Curriculum Subtitle</FieldTitle>
								<TextInput
									value={data[language]["sd"]["text4"]}
									onChange={(e) => {
										setContentState(e.target.value, "sd", "text4");
									}}
								/>
								<FieldTitle>Curriculum List 1</FieldTitle>
								<div className="flex flex-col gap-2">
									{data[language]["sd"]["kurikulumlist1"].map((res, index) => (
										<div>
											<Label
												htmlFor={`kurikulumSD1-title${index}`}
												value="Title"
											/>
											<TextInput
												id={`kurikulumSD1-title${index}`}
												value={res["title"]}
												onChange={(e) => {
													setSdContentList(
														e.target.value,
														"kurikulumlist1",
														index,
														"title"
													);
												}}
											/>
											<Label
												htmlFor={`kurikulumSD1-content${index}`}
												value="Description"
											/>
											<TextInput
												id="kurikulumSD1-content${index}"
												value={res["content"]}
												onChange={(e) => {
													setSdContentList(
														e.target.value,
														"kurikulumlist1",
														index,
														"content"
													);
												}}
											/>
										</div>
									))}
								</div>

								<Button
									className="mt-2"
									onClick={() => addSdContentList("kurikulumlist1")}
								>
									Add
								</Button>

								<FieldTitle>Curriculum List 2</FieldTitle>
								<div className="flex flex-col gap-2">
									{data[language]["sd"]["kurikulumlist2"].map((res, index) => (
										<div>
											<Label
												htmlFor={`kurikulumSD2-title${index}`}
												value="Title"
											/>
											<TextInput
												id={`kurikulumSD2-title${index}`}
												value={res["title"]}
												onChange={(e) => {
													setSdContentList(
														e.target.value,
														"kurikulumlist2",
														index,
														"title"
													);
												}}
											/>
											<Label
												htmlFor={`kurikulumSD2-content${index}`}
												value="Description"
											/>
											<TextInput
												id={`kurikulumSD2-content${index}`}
												value={res["content"]}
												onChange={(e) => {
													setSdContentList(
														e.target.value,
														"kurikulumlist2",
														index,
														"content"
													);
												}}
											/>
										</div>
									))}
								</div>

								<Button
									className="mt-2"
									onClick={() => addSdContentList("kurikulumlist2")}
								>
									Add
								</Button>

								<FieldTitle>Activity Title</FieldTitle>
								<TextInput
									value={data[language]["sd"]["text5"]}
									onChange={(e) => {
										setContentState(e.target.value, "sd", "text5");
									}}
								/>
								<FieldTitle>Activity Content Paragraph</FieldTitle>
								<Textarea
									rows={4}
									value={data[language]["sd"]["text6"]}
									onChange={(e) => {
										setContentState(e.target.value, "sd", "text6");
									}}
								/>
								<FieldTitle>Activity Program List</FieldTitle>
								<div className="grid grid-cols-2 gap-4">
									<div className="flex flex-col gap-2">
										{data[language]["sd"]["programlist1"].map((res, index) => (
											<TextInput
												value={res}
												onChange={(e) => {
													setSdContentList(
														e.target.value,
														"programlist1",
														index
													);
												}}
											/>
										))}

										<Button onClick={() => addSdContentList("programlist1")}>
											Add
										</Button>
									</div>
									<div className="flex flex-col gap-2">
										{data[language]["sd"]["programlist2"].map((res, index) => (
											<TextInput
												value={res}
												onChange={(e) => {
													setSdContentList(
														e.target.value,
														"programlist2",
														index
													);
												}}
											/>
										))}
										<Button onClick={() => addSdContentList("programlist2")}>
											Add
										</Button>
									</div>
								</div>

								<FieldTitle>Outdoor Activity Title</FieldTitle>
								<TextInput
									value={data[language]["sd"]["text8"]}
									onChange={(e) => {
										setContentState(e.target.value, "sd", "text8");
									}}
								/>
								<FieldTitle>Outdoor Activity Subtitle</FieldTitle>
								<TextInput
									value={data[language]["sd"]["text9"]}
									onChange={(e) => {
										setContentState(e.target.value, "sd", "text9");
									}}
								/>
								<FieldTitle>Outdoor Activity Paragraph Description</FieldTitle>
								<Textarea
									rows={4}
									value={data[language]["sd"]["text10"]}
									onChange={(e) => {
										setContentState(e.target.value, "sd", "text10");
									}}
								/>

								{/* CONTENT GRADE SMP */}
								<h1 className="mt-8 font-bold text-2xl">SMP</h1>
								<FieldTitle>Gambar Banner</FieldTitle>
								<BannerAttachment
									datas={attachments["smp"]}
									grade={"smp"}
									onDelete={deleteAttachment}
									onChangeAttachment={onChangeAttachment}
									addAttachment={addAttachment}
								/>
								<FieldTitle>Grade Title</FieldTitle>
								<TextInput
									value={data[language]["smp"]["title"]}
									onChange={(e) => {
										setContentState(e.target.value, "smp", "title");
									}}
								/>
								<FieldTitle>Introduction Title</FieldTitle>
								<TextInput
									value={data[language]["smp"]["introduction"]["title"]}
									onChange={(e) => {
										setContentState(
											e.target.value,
											"smp",
											"introduction",
											"title"
										);
									}}
								/>
								<FieldTitle>Introduction Paragraph Description</FieldTitle>
								<Textarea
									rows={4}
									value={data[language]["smp"]["introduction"]["paragraph"]}
									onChange={(e) => {
										setContentState(
											e.target.value,
											"smp",
											"introduction",
											"paragraph"
										);
									}}
								/>
								<FieldTitle>Curriculum Title</FieldTitle>
								<TextInput
									value={data[language]["smp"]["curriculum"]["title"]}
									onChange={(e) => {
										setContentState(
											e.target.value,
											"smp",
											"curriculum",
											"title"
										);
									}}
								/>
								<FieldTitle>Curriculum Subtitle</FieldTitle>
								<TextInput
									value={data[language]["smp"]["curriculum"]["subtitle"]}
									onChange={(e) => {
										setContentState(
											e.target.value,
											"smp",
											"curriculum",
											"subtitle"
										);
									}}
								/>
								<FieldTitle>Curriculum Content Paragraph</FieldTitle>
								<Textarea
									rows={4}
									value={data[language]["smp"]["curriculum"]["paragraph"]}
									onChange={(e) => {
										setContentState(
											e.target.value,
											"smp",
											"curriculum",
											"paragraph"
										);
									}}
								/>
								<div className="flex flex-col gap-2">
									{data[language]["smp"]["curriculum"]["components1"].map(
										(res, index) => (
											<div>
												<Label
													htmlFor={`kurikulumSmp1-title${index}`}
													value="Title"
												/>
												<TextInput
													id={`kurikulumSmp1-title${index}`}
													value={res["title"]}
													onChange={(e) => {
														setSmpContentList(
															e.target.value,
															"curriculum",
															"components1",
															index,
															"title"
														);
													}}
												/>
												<Label
													htmlFor={`kurikulumSmp1-content${index}`}
													value="Description"
												/>
												<TextInput
													id={`kurikulumSmp1-content${index}`}
													value={res["description"]}
													onChange={(e) => {
														setSmpContentList(
															e.target.value,
															"curriculum",
															"components1",
															index,
															"description"
														);
													}}
												/>
											</div>
										)
									)}
								</div>
								<div className="flex flex-col gap-2">
									{data[language]["smp"]["curriculum"]["components2"].map(
										(res, index) => (
											<div>
												<Label
													htmlFor={`kurikulumSmp2-title${index}`}
													value="Title"
												/>
												<TextInput
													id={`kurikulumSmp2-title${index}`}
													value={res["title"]}
													onChange={(e) => {
														setSmpContentList(
															e.target.value,
															"curriculum",
															"components2",
															index,
															"title"
														);
													}}
												/>
												<Label
													htmlFor={`kurikulumSmp2-content${index}`}
													value="Description"
												/>
												<TextInput
													id={`kurikulumSmp2-content${index}`}
													value={res["description"]}
													onChange={(e) => {
														setSmpContentList(
															e.target.value,
															"curriculum",
															"components2",
															index,
															"description"
														);
													}}
												/>
											</div>
										)
									)}
								</div>

								<FieldTitle>Activity Title</FieldTitle>
								<TextInput
									value={data[language]["smp"]["activity"]["title"]}
									onChange={(e) => {
										setContentState(e.target.value, "smp", "activity", "title");
									}}
								/>
								<FieldTitle>Activity Content</FieldTitle>
								<Textarea
									rows={4}
									value={data[language]["smp"]["activity"]["content"]}
									onChange={(e) => {
										setContentState(
											e.target.value,
											"smp",
											"activity",
											"content"
										);
									}}
								/>
								<FieldTitle>Programs Title</FieldTitle>
								<TextInput
									value={data[language]["smp"]["programs"]["title"]}
									onChange={(e) => {
										setContentState(e.target.value, "smp", "programs", "title");
									}}
								/>
								<FieldTitle>Programs Description</FieldTitle>
								<Textarea
									rows={4}
									value={data[language]["smp"]["programs"]["desc"]}
									onChange={(e) => {
										setContentState(e.target.value, "smp", "programs", "desc");
									}}
								/>
								<FieldTitle>Programs Content List</FieldTitle>
								<div className="grid grid-cols-2 gap-4">
									<div className="flex flex-col gap-2">
										{data[language]["smp"]["programs"]["list1"].map(
											(res, index) => (
												<TextInput
													value={res}
													onChange={(e) => {
														setSmpContentList(
															e.target.value,
															"programs",
															"list1",
															index
														);
													}}
												/>
											)
										)}
										<Button
											onClick={() => addSmpContentList("programs", "list1")}
										>
											Add
										</Button>
									</div>
									<div className="flex flex-col gap-2">
										{data[language]["smp"]["programs"]["list2"].map(
											(res, index) => (
												<TextInput
													value={res}
													onChange={(e) => {
														setSmpContentList(
															e.target.value,
															"programs",
															"list2",
															index
														);
													}}
												/>
											)
										)}
										<Button
											onClick={() => addSmpContentList("programs", "list2")}
										>
											Add
										</Button>
									</div>
								</div>
								<FieldTitle>Outdoor Activity Title</FieldTitle>
								<TextInput
									value={data[language]["smp"]["outdoor"]["title"]}
									onChange={(e) => {
										setContentState(e.target.value, "smp", "outdoor", "title");
									}}
								/>
								<FieldTitle>Outdoor Activity Subtitle</FieldTitle>
								<TextInput
									value={data[language]["smp"]["outdoor"]["text"]}
									onChange={(e) => {
										setContentState(e.target.value, "smp", "outdoor", "text");
									}}
								/>
								<FieldTitle>Outdoor Activity Paragraph Content</FieldTitle>
								<Textarea
									rows={4}
									value={data[language]["smp"]["outdoor"]["paragraph"]}
									onChange={(e) => {
										setContentState(
											e.target.value,
											"smp",
											"outdoor",
											"paragraph"
										);
									}}
								/>

								{/* CONTENT GRADE SMA */}
								<h1 className="mt-8 font-bold text-2xl">SMA</h1>
								<FieldTitle>Gambar Banner</FieldTitle>
								<BannerAttachment
									datas={attachments["sma"]}
									grade={"sma"}
									onDelete={deleteAttachment}
									onChangeAttachment={onChangeAttachment}
									addAttachment={addAttachment}
								/>
								<FieldTitle>Content Title</FieldTitle>
								<TextInput
									value={data[language]["sma"]["title"]}
									onChange={(e) => {
										setContentState(e.target.value, "sma", "title");
									}}
								/>
								<FieldTitle>Content Title</FieldTitle>
								<TextInput
									value={data[language]["sma"]["title"]}
									onChange={(e) => {
										setContentState(e.target.value, "sma", "title");
									}}
								/>
								<FieldTitle>Introduction Title</FieldTitle>
								<TextInput
									value={data[language]["sma"]["introduction"]["title"]}
									onChange={(e) => {
										setContentState(
											e.target.value,
											"sma",
											"introduction",
											"title"
										);
									}}
								/>
								<FieldTitle>Introduction Paragraph Content</FieldTitle>
								<Textarea
									rows={4}
									value={data[language]["sma"]["introduction"]["paragraph"]}
									onChange={(e) => {
										setContentState(
											e.target.value,
											"sma",
											"introduction",
											"paragraph"
										);
									}}
								/>
								<FieldTitle>Curriculum Title</FieldTitle>
								<TextInput
									value={data[language]["sma"]["curriculum"]["title"]}
									onChange={(e) => {
										setContentState(
											e.target.value,
											"sma",
											"curriculum",
											"title"
										);
									}}
								/>
								<FieldTitle>Curriculum Subtitle</FieldTitle>
								<TextInput
									value={data[language]["sma"]["curriculum"]["subtitle"]}
									onChange={(e) => {
										setContentState(
											e.target.value,
											"sma",
											"curriculum",
											"subtitle"
										);
									}}
								/>
								<FieldTitle>Curriculum Paragraph Content</FieldTitle>
								<Textarea
									rows={4}
									value={data[language]["sma"]["curriculum"]["paragraph"]}
									onChange={(e) => {
										setContentState(
											e.target.value,
											"sma",
											"curriculum",
											"paragraph"
										);
									}}
								/>
								<FieldTitle>Curriculum Content List</FieldTitle>
								<div className="flex flex-col gap-2">
									{data[language]["sma"]["curriculum"]["components"].map(
										(res, index) => (
											<div>
												<Label
													htmlFor={`kurikulumSma-title${index}`}
													value="Title"
												/>
												<TextInput
													id={`kurikulumSma-title${index}`}
													value={res["title"]}
													onChange={(e) => {
														setSmaContentList(
															e.target.value,
															"curriculum",
															"components",
															index,
															"title"
														);
													}}
												/>
												<Label
													htmlFor={`kurikulumSma-content${index}`}
													value="Description"
												/>
												<TextInput
													id={`kurikulumSma-content${index}`}
													value={res["description"]}
													onChange={(e) => {
														setSmaContentList(
															e.target.value,
															"curriculum",
															"components",
															index,
															"description"
														);
													}}
												/>
											</div>
										)
									)}
								</div>
								<Button
									className="mt-2"
									onClick={() => addSmaContentList("curriculum", "components")}
								>
									Add
								</Button>
								<FieldTitle>Subject Group Content List</FieldTitle>
								<div className="flex flex-col gap-2">
									{data[language]["sma"]["curriculum"]["subjectGroups"].map(
										(res, index) => (
											<TextInput
												key={index}
												value={res}
												onChange={(e) => {
													setSmaContentList(
														e.target.value,
														"curriculum",
														"subjectGroups",
														index
													);
												}}
											/>
										)
									)}
								</div>

								<Button
									className="mt-2"
									onClick={() =>
										addSmaContentList("curriculum", "subjectGroups")
									}
								>
									Add
								</Button>
								<FieldTitle>Activities Label Content</FieldTitle>
								<Textarea
									rows={4}
									value={data[language]["sma"]["activities"]}
									onChange={(e) => {
										setContentState(e.target.value, "sma", "activities");
									}}
								/>
								<FieldTitle>Programs Title</FieldTitle>
								<TextInput
									value={data[language]["sma"]["programs"]["title"]}
									onChange={(e) => {
										setContentState(e.target.value, "sma", "programs", "title");
									}}
								/>
								<FieldTitle>Programs Description</FieldTitle>
								<Textarea
									rows={4}
									value={data[language]["sma"]["programs"]["desc"]}
									onChange={(e) => {
										setContentState(e.target.value, "sma", "programs", "desc");
									}}
								/>
								<div className="grid grid-cols-2 gap-4 mt-2">
									<div className="flex flex-col gap-2">
										{data[language]["sma"]["programs"]["list1"].map(
											(res, index) => (
												<TextInput
													key={index}
													value={res}
													onChange={(e) => {
														setSmaContentList(
															e.target.value,
															"programs",
															"list1",
															index
														);
													}}
												/>
											)
										)}

										<Button
											onClick={() => addSmaContentList("programs", "list1")}
										>
											Add
										</Button>
									</div>
									<div className="flex flex-col gap-2">
										{data[language]["sma"]["programs"]["list2"].map(
											(res, index) => (
												<TextInput
													key={index}
													value={res}
													onChange={(e) => {
														setSmaContentList(
															e.target.value,
															"programs",
															"list2",
															index
														);
													}}
												/>
											)
										)}
										<Button
											onClick={() => addSmaContentList("programs", "list2")}
										>
											Add
										</Button>
									</div>
								</div>

								<FieldTitle>Outdoor Activity Title</FieldTitle>
								<TextInput
									value={data[language]["sma"]["outdoor"]["title"]}
									onChange={(e) => {
										setContentState(e.target.value, "sma", "outdoor", "title");
									}}
								/>
								<FieldTitle>Outdoor Activity Subtitle</FieldTitle>
								<Textarea
									rows={4}
									value={data[language]["sma"]["outdoor"]["text"]}
									onChange={(e) => {
										setContentState(e.target.value, "sma", "outdoor", "text");
									}}
								/>
								<FieldTitle>Outdoor Activity Paragraph Content</FieldTitle>
								<Textarea
									rows={4}
									value={data[language]["sma"]["outdoor"]["paragraph"]}
									onChange={(e) => {
										setContentState(
											e.target.value,
											"sma",
											"outdoor",
											"paragraph"
										);
									}}
								/>
								<Button className="mt-4" onClick={onSubmit}>
									Save
								</Button>
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

export default CMSBtbBelajar;
