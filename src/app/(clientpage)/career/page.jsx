"use client";
import { useEffect, useState } from "react";
import CareerFilter from "./_components/CareerFilter";
import CareerList from "./_components/CareerList";
import CareerHeroSection from "./_components/HeroSection";
import { usePageData } from '../../../hooks/usePageData';
import Loader from "../../_components/loader";

const CareerPage = () => {
	const {language, getCareerPageData, isLoading} = usePageData();
	const careerPagePayload = usePageData((state) => state.result.careerPayload);
	const rawDatas = usePageData((state) => state.result.activeCareer);
	const [displayDatas, setDisplayDatas] = useState([]);

	const onFilter = (jobcategory, jobtitle) => {
		let container = [...rawDatas];
		if (jobcategory !== "Semua Bagian") {
			container = container.filter((x) => x.jobcategory === jobcategory);
		}
		if (jobtitle) {
			container = container.filter((x) =>
				x.jobtitlename.toLowerCase().includes(jobtitle.toLowerCase()) ||
				x.jobsummary.toLowerCase().includes(jobtitle.toLowerCase()) ||
				x.jobcategory.toLowerCase().includes(jobtitle.toLowerCase()) ||
				x.experiencelevel.toLowerCase().includes(jobtitle.toLowerCase()) ||
				x.experienced.toLowerCase().includes(jobtitle.toLowerCase()) ||
				x.jobtype.toLowerCase().includes(jobtitle.toLowerCase()) ||
				x.location.toLowerCase().includes(jobtitle.toLowerCase()) ||
				x.requirement.toLowerCase().includes(jobtitle.toLowerCase()) ||
				x.responsibilites.toLowerCase().includes(jobtitle.toLowerCase())
			);
		}
		setDisplayDatas([...container]);
	};

	useEffect(() => {
		(async () => {
			try {
				await getCareerPageData();
			} catch (error) {}
		})();
	}, [getCareerPageData]);	

	useEffect(() => {
		if (rawDatas) {
			setDisplayDatas(rawDatas);
		}
	}, [rawDatas]);	

	if(isLoading) {
		return <Loader/>;
	}
	else if(careerPagePayload)
		return (
			<div>
				<CareerHeroSection>
					<div className="absolute top-0 h-full flex flex-col justify-center sm:px-16 px-32">
						<h3 className="text-white sm:text-4xl sm:font-bold md:text-4xl lg:text-6xl">
							{careerPagePayload[language].title}
						</h3>
						<h5 className="text-white sm:text-lg md:text-lg lg:text-2xl mt-8">
							{careerPagePayload[language].subtitle}
						</h5>
					</div>
				</CareerHeroSection>
				<div className="relative flex flex-col py-12 items-center justify-center">
					<CareerFilter rawDatas={rawDatas} onFilter={onFilter} />
					<CareerList datas={displayDatas} />
				</div>
			</div>
		);
};

export default CareerPage;
