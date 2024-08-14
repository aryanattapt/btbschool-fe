"use client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { GetActiveCareerList } from "../../../../services/career.service";
import CareerFilter from "./_components/CareerFilter";
import CareerList from "./_components/CareerList";
import CareerHeroSection from "./_components/HeroSection";

const CareerPage = () => {
	const [datas, setDatas] = useState([]);

	const fetchData = () => {
		GetActiveCareerList()
			.then((res) => {
				setDatas(res);
			})
			.catch((err) => {
				Swal.fire({
					allowOutsideClick: false,
					title: "Error Notification!",
					text: err,
					icon: "error",
				});
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<CareerHeroSection>
				<div className="absolute top-0 h-full flex flex-col justify-center px-32">
					<h3 className="md:text-4xl lg:text-6xl">BEKERJA BERSAMA KAMI</h3>
					<h5 className="md:text-lg lg:text-2xl mt-8">
						Mulai karir impianmu di Sekolah Terbaik Jakarta
					</h5>
				</div>
			</CareerHeroSection>
			<div className="relative flex flex-col py-12 items-center justify-center">
				<CareerFilter />
				<CareerList datas={datas} />
			</div>
		</div>
	);
};

export default CareerPage;
