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
		<div className="flex flex-col mt-10 gap-8 w-[90%] lg:w-[70%] text-[#00305E]">
			{datas?.length > 0 ? (
				<>
					{datas.map((res) => (
						<CareerPaperContainer key={res._id} classes={"justify-between"}>
							<div className="min-w-[35%] lg:min-w-[25%]">
								<h3 className="font-bold text-lg">{res.jobtitlename}</h3>
								<p>{res?.location}</p>
							</div>
							<div className="hidden md:grid grid-cols-12 sm:gap-4 gap-12">
								<div className="col-span-4 flex items-center">
									<IoPersonCircle className="hidden xl:block text-[30px] mr-2" />
									<p>
										{
											Array.isArray(res?.experienced) ? res?.experienced?.join(', ') : res?.experienced
										}
									</p>
								</div>
								<div className="col-span-6 flex items-center">
									<FiHome className="hidden xl:block text-[30px] mr-2" />
									<p>
										{
											Array.isArray(res?.jobtype) ? res?.jobtype?.join(', ') : res?.jobtype
										}
									</p>
								</div>
								<div className="col-span-2 flex items-center justify-end">
									<BtnPrimary onClick={() => onClickDetail(res)}>
										Detail
									</BtnPrimary>
								</div>
							</div>
							<div className="md:hidden ml-auto flex items-center">
								<BtnPrimary onClick={() => onClickDetail(res)}>
									Detail
								</BtnPrimary>
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
