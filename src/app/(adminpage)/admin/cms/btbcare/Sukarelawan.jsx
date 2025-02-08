import { Textarea, TextInput } from "flowbite-react";
import { useCmsBtbCareStore } from "../../../../../../store/admin/cms/btbCareStore";
import CMSSubTitle from "../_components/CMSSubTitle/CMSSubtitle";
import FieldTitle from "../_components/FieldTitle";
import CMSDivider from "../_components/CMSDivider";

const Sukarelawan = () => {
	const data = useCmsBtbCareStore((state) => state.data);
	const language = useCmsBtbCareStore((state) => state.language);
	const setStateLanguage = useCmsBtbCareStore(
		(state) => state.setStateLanguage
	);
	return (
		<>
			<CMSSubTitle>BTB Care Sukarelawan</CMSSubTitle>
			<FieldTitle>Judul Navigasi</FieldTitle>
			<TextInput
				value={data[language]["sukarelawantitle"]}
				onChange={(e) => {
					setStateLanguage(e.target.value, "sukarelawantitle");
				}}
			/>
			<FieldTitle>Judul Konten</FieldTitle>
			<TextInput
				value={data[language]?.["sukarelawansubtitle"]}
				onChange={(e) => {
					setStateLanguage(e.target.value, "sukarelawansubtitle");
				}}
			/>
			<FieldTitle>Sub Judul BTB Sukarelawan</FieldTitle>
			<TextInput
				value={data[language]["text8"]}
				onChange={(e) => {
					setStateLanguage(e.target.value, "text8");
				}}
			/>
			<FieldTitle>Konteks BTB Sukarelawan</FieldTitle>
			<Textarea
				rows={4}
				value={data[language]["text9"]}
				onChange={(e) => {
					setStateLanguage(e.target.value, "text9");
				}}
			/>
			<CMSDivider />
		</>
	);
};

export { Sukarelawan };
