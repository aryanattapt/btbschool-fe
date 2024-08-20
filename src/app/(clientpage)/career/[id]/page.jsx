"use client";
import moment from "moment";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiHome } from "react-icons/fi";
import { GetAllCareer } from "../../../../../services/career.service";
import BtnPrimary from "../../../../components/Button/Primary";
import CareerHeroSection from "../_components/HeroSection";
import CareerPaperContainer from "../_components/PaperContainer";

const DetailCareer = () => {
	const params = useParams();
	const router = useRouter();
	const [data, setData] = useState({});

	useEffect(() => {
		GetAllCareer({ _id: params.id })
			.then((res) => {
				setData(res[0]);
			})
			.catch((err) => {
				Swal.fire({
					allowOutsideClick: false,
					title: "Error Notification!",
					text: err,
					icon: "error",
				});
			});
	}, []);

	const onApply = () => {
		router.push(`/career/apply/${data?._id}`);
	};

	return (
		<div>
			<CareerHeroSection>
				<div className="text-white absolute top-0 h-full w-full flex items-end justify-between p-4 sm:p-16 lg:px-32 lg:py-20">
					<div>
						<h3 className="text-2xl md:text-3xl lg:text-6xl">
							{data?.jobtitlename}
						</h3>
						<h5 className="text-lg md:text-xl lg:text-2xl my-6">
							{data?.experienced} <span className="mx-2 lg:mx-6">|</span>{" "}
							{data?.jobcategory}
						</h5>
						<div
							className="flex items-center text-lg lg:text-xl w-fit px-4 py-2 rounded-lg "
							style={{ border: "1px solid #5C9EDE" }}
						>
							<FiHome className="mr-2" />
							<h6>{data?.location}</h6>
						</div>
					</div>
					<div
						className="p-6 rounded-xl min-w-52 lg:min-w-72"
						style={{ background: "rgba(0, 48, 94, 0.68)" }}
					>
						<h5 className="text-xl lg:text-2xl font-semibold">Apply Now</h5>
						<h6 className="text-sm my-4 mb-5">Grow with us</h6>
						<BtnPrimary onClick={onApply} fullSized>
							Apply Now
						</BtnPrimary>
					</div>
				</div>
			</CareerHeroSection>
			<div className="grid grid-cols-12 md:gap-12 px-4 lg:px-32 text-[#646464] my-12">
				<div className="col-span-12 md:col-span-7 lg:col-span-8 flex flex-col gap-8">
					<CareerPaperContainer>
						<div className="flex flex-col w-full">
							<h1 className="w-full text-2xl tracking-wide">Job Summary</h1>
							<div className="bg-[#646464] h-[1px] w-full my-3" />
							<div dangerouslySetInnerHTML={{ __html: data?.jobsummary }}></div>
						</div>
					</CareerPaperContainer>
					<CareerPaperContainer>
						<div className="flex flex-col w-full">
							<h1 className="w-full text-2xl tracking-wide">
								Responsibilities
							</h1>
							<div className="bg-[#646464] h-[1px] w-full my-3" />
							<div
								dangerouslySetInnerHTML={{ __html: data?.responsibilites }}
							></div>
						</div>
					</CareerPaperContainer>
					<CareerPaperContainer>
						<div className="flex flex-col w-full">
							<h1 className="w-full text-2xl tracking-wide">Requirement</h1>
							<div className="bg-[#646464] h-[1px] w-full my-3" />
							<div
								dangerouslySetInnerHTML={{ __html: data?.requirement }}
							></div>
						</div>
					</CareerPaperContainer>
				</div>
				<div className="col-span-12 mt-8 md:mt-0 md:col-span-5 lg:col-span-4">
					<CareerPaperContainer classes={"flex-col"}>
						<DetailInformationRow
							label={"Apply Before"}
							value={moment(data?.maximumApplyDate).format("DD MMMM yyyy")}
						/>
						<DetailInformationRow
							label={"Posted On"}
							value={moment(data?.registereddate).format("DD MMMM YYYY")}
						/>
						<DetailInformationRow label={"Job Type"} value={data?.jobtype} />
						<DetailInformationRow
							label={"Experience Level"}
							value={data?.experiencelevel}
						/>
						<div className="bg-[#646464] h-[1px] w-full my-3 mb-7" />
						<DetailInformationRow
							label={"Job Categories"}
							value={data?.jobcategory}
						/>
					</CareerPaperContainer>
				</div>
			</div>
		</div>
	);
};

const DetailInformationRow = ({ label, value }) => {
	return (
		<div className="mb-2 lg:mb-6">
			<h3 className="text-lg font-semibold tracking-wide">{label}</h3>
			<p className="lg:mt-2">{value}</p>
		</div>
	);
};

export default DetailCareer;
