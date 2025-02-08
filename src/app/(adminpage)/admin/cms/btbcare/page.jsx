"use client";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { checkPermission } from "../../../../../../services/auth.service";
import { useCmsBtbCareStore } from "../../../../../../store/admin/cms/btbCareStore";
import LoadingModal from "../../../../../components/LoadingModal";
import { isObjectEmpty } from "../../../../../utils/checker";
import Loader from "../../../../_components/loader";
import AdminHeader from "../../_components/header";
import NavbarSidebarLayout from "../../_layouts/navigation";
import LanguageChanger from "../_components/LanguageChanger";
import { Attachment } from "./Attachment";
import { Introduction } from "./Introduction";
import { PeduliLingkungan } from "./PeduliLingkungan";
import { Sukarelawan } from "./Sukarelawan";
import { TanganPenolong } from "./TanganPenolong";

const CMSBtbCare = () => {
	const [isLoadingPage, setIsLoadingPage] = useState(true);
	const [isAuthorized, setIsAuthorized] = useState(null);
	const rawData = useCmsBtbCareStore((state) => state.rawData);
	const data = useCmsBtbCareStore((state) => state.data);
	const language = useCmsBtbCareStore((state) => state.language);
	const setState = useCmsBtbCareStore((state) => state.setState);
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
								<AdminHeader title="BTB Care Content Settings Form" />

								{/* Pengenanlan */}
								<Attachment onChangeAttachment={onChangeAttachment} />

								{/* Content Copywriting Section */}
								<div className="mt-6">
									<LanguageChanger
										onChange={(val) => setState(val, "language")}
										value={language}
									/>
									<Introduction />
									<PeduliLingkungan />
									<Sukarelawan />
									<TanganPenolong />
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
