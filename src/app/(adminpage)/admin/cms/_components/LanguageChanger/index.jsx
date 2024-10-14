"use client";
import React, { useEffect, useState } from "react";

const LanguageChanger = ({ onChange, value }) => {
	const [activeTab, setActiveTab] = useState("");
	const tabs = ["ID", "EN"];

	useEffect(() => {
		if (value) setActiveTab(value);
	}, [value]);

	const changeTab = (tab) => {
		setActiveTab(tab);
		onChange(tab);
	};

	return (
		<div className="w-full">
			<div className="flex border-b border-gray-200">
				{tabs.map((tab, index) => (
					<button
						key={index}
						className={`py-2 px-4 text-sm font-medium focus:outline-none ${
							activeTab === tab
								? "border-b-2 border-blue-500 text-blue-500"
								: "border-b-2 border-transparent text-gray-500 hover:text-blue-500"
						}`}
						onClick={() => changeTab(tab)}
					>
						{tab}
					</button>
				))}
			</div>
		</div>
	);
};

export default LanguageChanger;
