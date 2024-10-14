import React from "react";

const FieldTitle = ({ children, ...props }) => {
	return (
		<div
			className="mt-6 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-[#EF802B] mb-2"
			{...props}
		>
			{children}
		</div>
	);
};

export default FieldTitle;
