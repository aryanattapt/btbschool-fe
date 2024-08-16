import { Button } from "flowbite-react";
import React from "react";

const ARDContentTitle = ({ title = "", subtitle = "", onDownload }) => {
	return (
		<div className="text-center">
			<p className="text-2xl text-[#424a57]">{title}</p>
			<p>{subtitle}</p>
		</div>
	);
};

export default ARDContentTitle;
