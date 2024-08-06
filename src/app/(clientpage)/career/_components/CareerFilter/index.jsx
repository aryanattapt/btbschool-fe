import { Select, TextInput } from "flowbite-react";
import BtnPrimary from "../../../../../components/Button/Primary";

const CareerFilter = () => {
	return (
		<div className="-top-11 absolute flex justify-center gap-4 bg-[#D9D9D9] rounded-md z-10 px-8 py-6 w-fit">
			<Select className="w-52">
				<option>Semua Bagian</option>
			</Select>
			<TextInput placeholder="Nama posisi" />
			<BtnPrimary>Cari</BtnPrimary>
		</div>
	);
};

export default CareerFilter;
