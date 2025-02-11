"use client";
import { useEffect } from "react";
import { usePageData } from "../../../hooks/usePageData";
import Loader from "../../_components/loader";
import Banner from "./components/banner";
import Content from "./components/content";
import Pagging from "./components/pagging";

const CalendarAcademicPage = () => {
	const { language, getCalenderAcademicPageData, isLoading } = usePageData();
	const payload = usePageData((state) => state.result.calenderacademic);
	const calendarAcademicData = usePageData(
		(state) => state.result.CalendarAcademicPageData
	);

	useEffect(() => {
		getCalenderAcademicPageData();
	}, []);

	if (isLoading) {
		return <Loader />;
	} else if (payload)
		return (
			<>
				<Banner calenderPayload={calendarAcademicData} />
				<Pagging
					calendarAcademicData={calendarAcademicData}
					language={language}
				/>
				<Content
					payload={payload}
					content={calendarAcademicData[language]}
					language={language}
				/>
			</>
		);
};

export default CalendarAcademicPage;
