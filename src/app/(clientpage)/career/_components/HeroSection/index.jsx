import React from "react";

const CareerHeroSection = ({ children }) => {
	return (
		<div>
			<div className="bg-[url('/career-background.jpeg')] relative h-[700px] bg-cover bg-center">
				<div className="h-full bg-[#243F6D] opacity-80 flex items-center" />
				{children}
			</div>
		</div>
	);
};

export default CareerHeroSection;
