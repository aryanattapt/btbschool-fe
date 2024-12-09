import { create } from "zustand";
import { UploadAttachment } from "../../../services/attachment.service";
import { GetConfig, SubmitConfig } from "../../../services/config.service";
import Swal from "sweetalert2";

const initialData = {
	rawData: {},
	data: {},
	language: "ID",
	loading: false,
};

const type = "btbcareer";
const configName = "general";

export const useCmsCareerStore = create((set, get) => ({
	...initialData,

	getInitialData: async () => {
		let data = await GetConfig(configName, { type: type });
		data = data.length > 0 ? data[0] : {};
		set({ data: data });
	},

	setState: (val, prop) => {
		set({ [prop]: val });
	},
	setStateLanguage: (val, prop) => {
		const data = get().data;
		const language = get().language;
		data[language][prop] = val;
		set({ data: data });
	},
	onSubmit: async (attachment) => {
		const data = get().data;
		if (typeof attachment !== "string") {
			let formData = new FormData();
			const theFile = attachment;
			formData.append("image", theFile);
			const result = await UploadAttachment("assets", formData);
			data["image"] = result?.data?.[0]?.fileURL;
		}
		try {
			await SubmitConfig(configName, [{ type: type, ...data }]);
			set({ loading: false });
			Swal.fire("Success", "Success to submit data!", "success").then((res) => {
				if (res.isConfirmed) window.location.reload();
			});
		} catch (error) {
			console.log(error);
		} finally {
			set({ loading: false });
		}
	},
}));
