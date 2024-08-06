"use client";
import React from "react";
import { IoPersonCircle } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import BtnPrimary from "../../../../../components/Button/Primary";
import { usePathname, useRouter } from "next/navigation";
import CareerPaperContainer from "../PaperContainer";

const CareerList = ({ datas }) => {
	const pathname = usePathname();
	const router = useRouter();

	const onClickDetail = (data) => {
		router.push(`${pathname}/${data?._id}`);
	};

	return (
		<div className="flex flex-col mt-10 gap-8 w-[55%] text-[#00305E]">
			{datas?.length > 0 ? (
				<>
					{datas.map((res) => (
						<CareerPaperContainer
							key={res._id}
							className="w-full flex  bg-white px-20 py-8 border border-gray-200 drop-shadow-lg rounded-lg"
						>
							<div className="min-w-[35%]">
								<h3 className="font-bold text-lg">{res.jobtitlename}</h3>
								<p>{res?.location}</p>
							</div>
							<div className="grid grid-cols-12 gap-12">
								<div className="col-span-4 flex items-center">
									<IoPersonCircle className="text-3xl mr-2" />
									<p>{res?.experienced}</p>
								</div>
								<div className="col-span-6 flex items-center">
									<FiHome className="text-3xl mr-2" />
									<p>{res?.jobtype}</p>
								</div>
								<div className="col-span-2 flex items-center">
									<BtnPrimary onClick={() => onClickDetail(res)}>
										Detail
									</BtnPrimary>
								</div>
							</div>
						</CareerPaperContainer>
					))}
				</>
			) : (
				<div className="text-center">No Career List for now ...</div>
			)}
		</div>
	);
};

export default CareerList;
