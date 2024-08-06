import { Button } from "flowbite-react";
import React from "react";

const BtnPrimary = ({ size = "md", classes, onClick, children, ...props }) => {
	return (
		<Button
			size={size}
			onClick={onClick}
			className={`bg-[#00305E]  enabled:hover:bg-[#01294f] ${classes}`}
			{...props}
		>
			{children}
		</Button>
	);
};

export default BtnPrimary;
