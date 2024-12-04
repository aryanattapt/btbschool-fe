import React from "react";
import { usePageData } from "../../../../../hooks/usePageData";

const CareerHeroSection = ({ children }) => {
	const careerPagePayload = usePageData((state) => state.result.careerPayload);
	return (
		<div>
			<div
				className="relative h-[700px] bg-cover bg-center"
				style={{ backgroundImage: `url(${careerPagePayload?.image})` }}
			>
				<div className="h-full bg-[#243F6D] opacity-80 flex items-center" />
				{children}
			</div>
		</div>
	);
};

export default CareerHeroSection;
