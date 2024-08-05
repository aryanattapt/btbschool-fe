import React from "react";

const ARDHealthFormBox = ({ classes, full = false, children, ...props }) => {
	return (
		<td
			className={`p-2 bg-[#ededed] border-black border text-sm 
			${full && "w-full"} 
			${classes}`}
			{...props}
		>
			{children}
		</td>
	);
};

export default ARDHealthFormBox;
