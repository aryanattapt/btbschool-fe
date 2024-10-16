import { create } from "zustand";
import { deepCopy } from "../../../src/utils/object";
// import { tempAboutUsPayload } from "./tempDatas";
import { GetConfig, SubmitConfig } from "../../../services/config.service";
import { isObjectEmpty } from "../../../src/utils/checker";
import { UploadAttachment } from "../../../services/attachment.service";

const initialData = {
	rawData: {},
	data: {},
	language: "ID",
};

const template = (get) => {
	return {
		data: deepCopy(get().data),
		language: get().language,
	};
};

const type = "aboutus";
const configName = "general";

export const useCmsAboutUsStore = create((set, get) => ({
	...initialData,

	setState: (val, prop) => {
		console.log({ val, prop });
		set({ [prop]: val });
	},
	getInitialData: async () => {
		// set({ rawData: tempAboutUsPayload, data: tempAboutUsPayload });
		try {
			let data = await GetConfig(configName, { type: type });
			data = data.length > 0 ? data[0] : {};
			set({ rawData: data, data: data });
		} catch (error) {
			console.log(error);
		}
	},
	onChangeAttachment: (file, prop) => {
		const { data } = template(get);
		console.log({ file, prop });
		if (file.length > 0) {
			data[prop] = file[0];
		} else {
			data[prop] = get().rawData[prop];
		}
		set({ data: data });
	},
	setDescription: (value) => {
		const { data, language } = template(get);
		data[language]["desc"] = value;
		set({ data: data });
	},
	setSmallParagraph: (value) => {
		const { data, language } = template(get);
		data[language]["smallparagraph"] = value;
		set({ data: data });
	},
	setVisiMisi: (value, prop, index = null) => {
		const { data, language } = template(get);
		const current = data[language]["visimisi"];
		if (index === null) current[prop] = value;
		// artinya ini misilist
		else {
			current[prop][index] = value;
		}
		set({ data: data });
	},
	setGradeLists: (value, prop, index) => {
		const { data, language } = template(get);
		data[language]["gradelists"][index][prop] = value;
		set({ data: data });
	},
	submitData: async (attachments) => {
		const tempAtt = {};
		if (!isObjectEmpty(attachments)) {
			const promises = await Promise.all(
				Object.keys(attachments).map((key) => {
					let formData = new FormData();
					const theFile = attachments[key];
					formData.append(key, theFile);
					return UploadAttachment("assets", formData);
				})
			);
			promises.forEach((res) => {
				const type = res.data[0].type;
				tempAtt[type] = res.data[0].fileURL;
			});
		}
		const payload = { ...get().data, ...tempAtt };
		try {
			await SubmitConfig(configName, [{ type: "type", ...payload }]);
		} catch (error) {
			console.log(error);
		}
	},
}));
