import React from "react";
import AdminRegistrationMainContentHeader from "./Header";

const AdminRegistrationMainContent = ({ title, children }) => {
	return (
		<div className="mt-4">
			<AdminRegistrationMainContentHeader title={title} />
			<div className="bg-white p-4 border border-gray-300 border-t-0">
				{children}
			</div>
		</div>
	);
};

export default AdminRegistrationMainContent;
