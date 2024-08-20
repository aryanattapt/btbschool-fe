import { Select, TextInput } from "flowbite-react";
import BtnPrimary from "../../../../../components/Button/Primary";
import { useEffect, useState } from "react";
import { isObjectEmpty } from "../../../../../utils/checker";
const CareerFilter = ({ rawDatas, onFilter }) => {
	const [opt, setOpt] = useState([]);
	const [jobcategory, setJobcategory] = useState("Semua Bagian");
	const [jobtitle, setJobtitle] = useState("");

	useEffect(() => {
		if (!isObjectEmpty(rawDatas)) {
			const container = rawDatas
				.map((x) => x.jobcategory)
				.filter(
					(value, index, current_value) =>
						current_value.indexOf(value) === index
				);
			setOpt(container);
		}
	}, [rawDatas]);

	const onEnter = (e) => {
		if (e.key.toLowerCase() === "enter") {
			onFilter(jobcategory, jobtitle);
		}
	};

	return (
		<div className="-top-11 absolute flex justify-center gap-4 bg-[#D9D9D9] rounded-md z-10 px-8 py-6 w-fit">
			<Select className="w-52" onChange={(e) => setJobcategory(e.target.value)}>
				<option>Semua Bagian</option>
				{opt.map((res) => (
					<option key={res}>{res}</option>
				))}
			</Select>
			<TextInput
				onKeyDown={onEnter}
				placeholder="Nama posisi"
				onChange={(e) => setJobtitle(e.target.value)}
			/>
			<BtnPrimary onClick={() => onFilter(jobcategory, jobtitle)}>
				Cari
			</BtnPrimary>
		</div>
	);
};

export default CareerFilter;
