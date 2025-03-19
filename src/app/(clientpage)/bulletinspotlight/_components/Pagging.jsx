import { usePathname } from "next/navigation";

const Pagging = ({ language, bulletinSpotlightData }) => {
	const pathname = usePathname();
	return (
		<>
			<header className="flex flex-row items-start justify-between text-[#00305E] border-b">
				<div className="inline-flex gap-2 lg:gap-12">
					<div className="border-r-2">
						<div className="px-4 lg:px-10 md:pl-32">
							<h1 className="text-[25px] text-center font-semibold py-6 lg:py-10">
								{bulletinSpotlightData[language].pagingHeader.title}
							</h1>
						</div>
					</div>
					<div className="inline-flex gap-20 text-[20px] text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
						<ul className="flex flex-wrap -mb-px py-6 lg:py-10">
							{bulletinSpotlightData[language].pagingHeader.url.map(
								(val, idx) => {
									return (
										<li className="px-4 lg:px-10 flex items-center" key={idx}>
											<a
												href={val.url === pathname ? "#" : val.url}
												className={`inline-block border-transparent rounded-t-lg ${
													val.url === pathname
														? "text-gray-600 cursor-default"
														: "hover:text-blue-600 dark:hover:text-blue-600 active"
												}`}
												aria-current="page"
											>
												{val.title}
											</a>
										</li>
									);
								}
							)}
						</ul>
					</div>
				</div>
			</header>
		</>
	);
};

export default Pagging;
