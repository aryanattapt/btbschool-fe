import { create } from "zustand";
import { CareerPayload } from "./tempDatas";
import { UploadAttachment } from "../../../services/attachment.service";
import { GetConfig, SubmitConfig } from "../../../services/config.service";

const initialData = {
	rawData: {},
	data: {},
	// data: CareerPayload,
	language: "ID",
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
			await SubmitConfig(configName, [{ type: type, ...data }]).then(() => {
				window.location.reload();
			});
		} catch (error) {
			console.log(error);
		}
	},
}));
