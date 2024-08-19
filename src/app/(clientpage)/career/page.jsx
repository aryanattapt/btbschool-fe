"use client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { GetActiveCareerList } from "../../../../services/career.service";
import CareerFilter from "./_components/CareerFilter";
import CareerList from "./_components/CareerList";
import CareerHeroSection from "./_components/HeroSection";

const CareerPage = () => {
	const [rawDatas, setRawDatas] = useState([]);
	const [displayDatas, setDisplayDatas] = useState([]);

	const fetchData = () => {
		GetActiveCareerList()
			.then((res) => {
				setRawDatas(res);
				setDisplayDatas(res);
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

	const onFilter = (jobcategory, jobtitle) => {
		if (jobcategory === "Semua Bagian") {
			if (jobtitle) {
				setDisplayDatas([
					...rawDatas.filter((x) =>
						x.jobtitlename.toLowerCase().includes(jobtitle.toLowerCase())
					),
				]);
			} else {
				setDisplayDatas([...rawDatas]);
			}
		} else {
			if (jobtitle) {
				setDisplayDatas([
					...rawDatas.filter(
						(x) =>
							x.jobcategory === jobcategory &&
							x.jobtitlename.toLowerCase().includes(jobtitle.toLowerCase())
					),
				]);
			} else {
				setDisplayDatas([
					...rawDatas.filter((x) => x.jobcategory === jobcategory),
				]);
			}
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<CareerHeroSection>
				<div className="absolute top-0 h-full flex flex-col justify-center sm:px-16 px-32">
					<h3 className="text-white sm:text-4xl sm:font-bold md:text-4xl lg:text-6xl">
						BEKERJA BERSAMA KAMI
					</h3>
					<h5 className="text-white sm:text-lg md:text-lg lg:text-2xl mt-8">
						Mulai karir impianmu di Sekolah Terbaik Jakarta
					</h5>
				</div>
			</CareerHeroSection>
			<div className="relative flex flex-col py-12 items-center justify-center">
				<CareerFilter rawDatas={rawDatas} onFilter={onFilter} />
				<CareerList datas={displayDatas} />
			</div>
		</div>
	);
};

export default CareerPage;
