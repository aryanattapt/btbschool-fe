import React from "react";

const CareerPaperContainer = ({ children, classes }) => {
	return (
		<div
			className={`w-full flex bg-white px-20 py-8 border border-gray-200 drop-shadow-lg rounded-lg ${classes}`}
		>
			{children}
		</div>
	);
};

export default CareerPaperContainer;
