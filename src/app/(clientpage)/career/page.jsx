"use client";
import { useEffect, useState } from "react";
import Banner from "./_components/banner";
import Pagging from "./_components/pagging";
import { usePageData } from "../../../hooks/usePageData";
import Loader from "../../_components/loader";

const CareerPage = () => {
	const { language, getCareerPageData, isLoading } = usePageData();
	const careerPagePayload = usePageData((state) => state.result.careerPayload);

	useEffect(() => {
		(async () => {
			try {
				await getCareerPageData();
			} catch (error) {}
		})();
	}, []);

	if (isLoading) {
		return <Loader />;
	} else if (careerPagePayload)
		return (
			<>
				<Banner payload={careerPagePayload}/>
				<Pagging
					careerPagePayload={careerPagePayload}
					language={language}
				/>
			</>
		);
};

export default CareerPage;
