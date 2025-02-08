import React from "react";

const JustifiedContentText = ({ children }) => {
	return (
		<p className="text-black text-[14px] md:text-[20px] mb-[5px] md:mb-[25px] text-justify">
			{children}
		</p>
	);
};

export default JustifiedContentText;
