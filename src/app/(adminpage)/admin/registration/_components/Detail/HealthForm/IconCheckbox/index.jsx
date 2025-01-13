import React from "react";
import { FaRegCheckSquare, FaRegSquare } from "react-icons/fa";

const ARDHealthFormIconCheckbox = ({
	customValidation,
	classes,
	label,
	value,
	flag,
}) => {
	const getIcon = () => {
		if (!customValidation) {
			if (value === flag) return true;
			return false;
		} else {
			return customValidation();
		}
	};

	return (
		<div className={`flex items-center ${classes}`}>
			<div className="mr-2">
				{getIcon() ? <FaRegCheckSquare /> : <FaRegSquare />}
			</div>
			<p>{label}</p>
		</div>
	);
};

export default ARDHealthFormIconCheckbox;
