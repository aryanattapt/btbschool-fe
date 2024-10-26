"use client";
import React, { useEffect } from "react";
import Banner from "./_components/Banner";
import Pagging from "./_components/Pagging";
import BulletinThumnail from "./_components/Thumbnail";
import { usePageData } from '../../../hooks/usePageData';

const BulletinSpotlightPage = () => {
	const {language, getBulletinSpotlightPageData, isLoading} = usePageData();
	const payload = usePageData((state) => state.result.bulletinspotlight);
	const bulletinSpotlightPageData = usePageData((state) => state.result.bulletinSpotlightPageData);

	useEffect(() => {
		getBulletinSpotlightPageData();
	}, []);

	if(isLoading) {
		return <div>loading...</div>
	}
	else if(payload)
		return (
			<>
				<Banner bulletinSpotlightData={bulletinSpotlightPageData}/>
				<Pagging language={language} bulletinSpotlightData={bulletinSpotlightPageData}/>
				<div className="px-10 py-12 sm:grid sm:grid-cols-2 sm:gap-y-12 sm:gap-x-6 md:gap-12 lg:py-20 lg:px-16 lg:grid-cols-4 lg:gap-8">
					{payload?.sort((a, b) => new Date(b.date) - new Date(a.date))?.map((res, idx) => (
						<div className={`${idx === 1 && "mt-12 sm:mt-0"}`}>
							<BulletinThumnail data={res} key={idx} />
						</div>
					))}
				</div>
			</>
		);
};

export default BulletinSpotlightPage;
