import React from "react";

const ARDTableRow = ({ label, data, breakRow = false }) => {
	return (
		<tr>
			{!breakRow ? (
				<>
					<TD>{label}</TD>
					<TD value>: {data}</TD>
				</>
			) : (
				<TD colSpan={2} />
			)}
		</tr>
	);
};

const TD = ({ value = false, children, ...props }) => {
	return (
		<td
			className={`${
				value ? "w-full" : "min-w-56"
			} p-2 border-black border bg-[#f3d08b] text-sm`}
			{...props}
		>
			{children}
		</td>
	);
};

export default ARDTableRow;
