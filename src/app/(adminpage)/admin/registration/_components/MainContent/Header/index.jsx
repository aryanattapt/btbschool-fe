import { Button } from "flowbite-react";
import React from "react";
import { FaFile, FaListUl } from "react-icons/fa";

const AdminRegistrationMainContentHeader = ({ title, onExportAll }) => {
	return (
		<div className="p-5 border border-gray-300 flex justify-between">
			<p style={{ color: "#5a5c63" }} className="text-lg">
				{title}
			</p>
			<div className="flex gap-2">
				<Button className="px-2" size="xs" color="light">
					<FaListUl className="mr-2 h-4 w-4" />
					<p>All Registration</p>
				</Button>
				<Button
					className="px-2"
					size="xs"
					style={{
						background: "#95b65d",
						"&:hover": {
							color: "black",
							background: "white",
						},
					}}
				>
					<FaFile onClick={onExportAll} className="mr-2 h-4 w-4" />
					Export All
				</Button>
			</div>
		</div>
	);
};

export default AdminRegistrationMainContentHeader;
