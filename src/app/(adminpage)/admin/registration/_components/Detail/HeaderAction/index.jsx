import { Button } from "flowbite-react";
import React from "react";

const ARDHeaderAction = ({ onDownload, onClick, active }) => {
	const list = [
		"Registration Form",
		"Peraturan dan Persyaratan",
		"Health Form",
		"Recommended",
	];

	const activeStyle = {
		background: "#95b65d",
		color: "#fffeff",
		"&:hover": {
			color: "black",
			background: "white",
		},
	};

	return (
		<div>
			<div className="flex gap-2">
				{list.map((res, index) => (
					<div key={res} className="flex gap-2 items-center">
						<Button
							size={"xs"}
							color={"light"}
							onClick={() => onClick(res)}
							className="px-2"
							style={active === res ? activeStyle : {}}
						>
							{res}
						</Button>
						{index + 1 !== list.length && (
							<div className="w-0.5 h-4 bg-gray-300" />
						)}
					</div>
				))}
			</div>
			<Button
				className="mt-4"
				size={"xs"}
				color={"warning"}
				onClick={onDownload}
			>
				Download
			</Button>
		</div>
	);
};

export default ARDHeaderAction;
