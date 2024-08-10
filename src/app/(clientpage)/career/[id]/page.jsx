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
				<div className="absolute top-0 h-full w-full flex items-end justify-between px-32 py-20">
					<div>
						<h3 className="text-6xl">{data?.jobtitlename}</h3>
						<h5 className="text-2xl my-6">
							{data?.experienced} <span className="mx-8">|</span>{" "}
							{data?.jobcategory}
						</h5>
						<div
							className="flex items-center text-xl w-fit px-4 py-2 rounded-lg "
							style={{ border: "1px solid #5C9EDE" }}
						>
							<FiHome className="mr-2" />
							<h6>{data?.location}</h6>
						</div>
					</div>
					<div
						className="p-6 rounded-xl min-w-72"
						style={{ background: "rgba(0, 48, 94, 0.68)" }}
					>
						<h5 className="text-2xl font-semibold">Apply Now</h5>
						<h6 className="my-4 mb-5">Grow with us</h6>
						<BtnPrimary onClick={onApply} fullSized>
							Apply Now
						</BtnPrimary>
					</div>
				</div>
			</CareerHeroSection>
			<div className="grid grid-cols-12 gap-12 px-32 text-[#646464] my-12">
				<div className="col-span-8 flex flex-col gap-8">
					<CareerPaperContainer>
						<div className="flex flex-col w-full">
							<h1 className="w-full text-2xl tracking-wide">Job Summary</h1>
							<div className="bg-[#646464] h-[1px] w-full my-3" />
							{/* <p>{data?.jobsummary}</p> */}
							<div dangerouslySetInnerHTML={{__html: data?.jobsummary}}></div>
						</div>
					</CareerPaperContainer>
					<CareerPaperContainer>
						<div className="flex flex-col w-full">
							<h1 className="w-full text-2xl tracking-wide">
								Responsibilities
							</h1>
							<div className="bg-[#646464] h-[1px] w-full my-3" />
							{/* <p>{data?.responsibilites}</p> */}
							<div dangerouslySetInnerHTML={{__html: data?.responsibilites}}></div>
						</div>
					</CareerPaperContainer>
					<CareerPaperContainer>
						<div className="flex flex-col w-full">
							<h1 className="w-full text-2xl tracking-wide">Requirement</h1>
							<div className="bg-[#646464] h-[1px] w-full my-3" />
							<div dangerouslySetInnerHTML={{__html: data?.requirement}}></div>
						</div>
					</CareerPaperContainer>
				</div>
				<div className="col-span-4">
					<CareerPaperContainer classes={"flex-col"}>
						<DetailInformationRow
							label={"Apply Before"}
							value={moment(data?.maximumApplyDate).format("DD MMMM yyyy")}
						/>
						<DetailInformationRow
							label={"Posted On"}
							value={"01 Februari 2024"}
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
		<div className="mb-6">
			<h3 className="text-lg font-semibold tracking-wide">{label}</h3>
			<p className="mt-2">{value}</p>
		</div>
	);
};

export default DetailCareer;
