"use client";
import React, { useEffect, useState } from "react";
import { useCmsCareerStore } from "../../../../../../store/admin/cms/btbCareer";
import { checkPermission } from "../../../../../../services/auth.service";
import NavbarSidebarLayout from "../../_layouts/navigation";
import { isObjectEmpty } from "../../../../../utils/checker";
import AdminHeader from "../../_components/header";
import FieldTitle from "../_components/FieldTitle";
import LanguageChanger from "../_components/LanguageChanger";
import ImageAttachment from "../_components/ImageAttachment";
import Loader from "../../../../_components/loader";
import { Button, Textarea, TextInput } from "flowbite-react";
import Swal from "sweetalert2";
import LoadingModal from "../../../../../components/LoadingModal";

const page = () => {
	const [isLoadingPage, setIsLoadingPage] = useState(true);
	const [isAuthorized, setIsAuthorized] = useState(null);
	const [attachment, setAttachment] = useState();
	const [isFetched, setIsFetched] = useState(false);
	const {
		data,
		language,
		setState,
		setStateLanguage,
		getInitialData,
		onSubmit,
		loading,
	} = useCmsCareerStore((state) => ({
		data: state.data,
		language: state.language,
		setState: state.setState,
		setStateLanguage: state.setStateLanguage,
		getInitialData: state.getInitialData,
		onSubmit: state.onSubmit,
		loading: state.loading,
	}));

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

	const onChangeAttachment = (file) => {
		if (file.length === 0) setAttachment(data.image);
		else setAttachment(file[0]);
	};

	useEffect(() => {
		if (!isObjectEmpty(data) && !isFetched) {
			setAttachment(data.image);
			setIsFetched(true);
		}
	}, [data]);

	const onSubmitData = () => {
		Swal.fire(
			"Are you sure?",
			"Once submitted, you can't undo it",
			"warning"
		).then((res) => {
			if (res.isConfirmed) {
				setState(true, "loading");
				onSubmit(attachment);
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
								<AdminHeader title="Career Content Settings Form" />

								{/* Pengenanlan */}
								<FieldTitle>Gambar Banner</FieldTitle>
								<ImageAttachment
									resolution="1920x1080px."
									onChange={(e) =>
										onChangeAttachment(e.target.files, "bannerimage")
									}
								/>
								<div className="mt-6">
									<LanguageChanger
										onChange={(val) => setState(val, "language")}
										value={language}
									/>
									<FieldTitle>Paging Title</FieldTitle>
									<TextInput
										value={data[language]["pagingtitle"]}
										onChange={(e) => {
											setStateLanguage(e.target.value, "pagingtitle");
										}}
									/>
									<FieldTitle>Paging Content</FieldTitle>
									<TextInput
										value={data[language]["pagingcontent"]}
										onChange={(e) => {
											setStateLanguage(e.target.value, "pagingcontent");
										}}
									/>
									<FieldTitle>Title</FieldTitle>
									<TextInput
										value={data[language]["title"]}
										onChange={(e) => {
											setStateLanguage(e.target.value, "title");
										}}
									/>
									<FieldTitle>Main Content</FieldTitle>
									<Textarea
										rows={6}
										value={data[language]["subtitle"]}
										onChange={(e) => {
											setStateLanguage(e.target.value, "subtitle");
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

export default page;
