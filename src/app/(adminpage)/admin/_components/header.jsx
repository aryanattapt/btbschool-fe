import React from "react";

const AdminHeader = ({title}) => {
	return (
		<div
			style={{ color: "#424a57" }}
			className="px-8 py-6 bg-white shadow-md rounded text-2xl"
		>
			{title}
		</div>
	);
};

export default AdminHeader;
