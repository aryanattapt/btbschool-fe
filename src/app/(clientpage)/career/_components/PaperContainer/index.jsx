import React from "react";

const CareerPaperContainer = ({ children, classes }) => {
	return (
		<div
			className={`w-full flex bg-white xl:px-18 py-8 px-6 border border-gray-200 drop-shadow-lg rounded-lg ${classes}`}
		>
			{children}
		</div>
	);
};

export default CareerPaperContainer;
