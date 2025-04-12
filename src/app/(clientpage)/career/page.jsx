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
				<div>
					<div className="mt-10 mb-5 pl-10 md:pl-32 text-[#00305E] sm:justify-center">
					<h1 className="md:text-[35px] text-[25px] font-semibold">
						{careerPagePayload[language]?.title}
					</h1>
					</div>
					<div className="px-10 mb-5 md:pl-32 sm:justify-center" style={{ whiteSpace: 'pre-line' }}>
						{careerPagePayload[language]?.subtitle}
					</div>
					<div className="my-10 flex justify-center items-center">
						<a
						className="text-center group text-[14px] md:text-[16px] lg:text-[25px] xl:text-[20px] w-[250px] md:w-[250px] lg:w-[350px] xl:w-[250px] focus:outline-none text-white bg-[#00305E] focus:ring-4 focus:ring-red-300 rounded-lg text-sm px-5 py-2.5 md:py-2.5 lg:py-5 xl:py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
						href="mailto:hrd@btbschool.org"
						>
						hrd@btbschool.org
						</a>
					</div>
				</div>
			</>
		);
};

export default CareerPage;
