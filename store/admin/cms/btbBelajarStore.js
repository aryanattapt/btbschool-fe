import { create } from "zustand";
import { deepCopy } from "../../../src/utils/object";
import { BTBBelajarPayload, tempAboutUsPayload } from "./tempDatas";

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

const type = "btbpeduli";
const configName = "general";

export const useCmsBtbBelajarStore = create((set, get) => ({
	...initialData,
	setState: (val, prop) => {
		set({ [prop]: val });
	},
	setContentState: (val, grade, content, prop) => {
		const { data, language } = template(get);
		if (prop) {
			data[language][grade][content][prop] = val;
		} else {
			data[language][grade][content] = val;
		}
		set({ data: data });
	},
	setTkCurriculumContent: (val, prop, index) => {
		const { data, language } = template(get);
		data[language]["tk"]["curriculum"][prop][index] = val;
		set({ data: data });
	},
	addTkCurriculumContent: (props) => {
		const { data, language } = template(get);
		data[language]["tk"]["curriculum"][props].push("");
		set({ data: data });
	},
	setProgramContent: (val, grade, prop, index) => {
		const { data, language } = template(get);
		data[language][grade]["programs"][prop][index] = val;
		set({ data: data });
	},
	addProgramContent: (grade, prop) => {
		const { data, language } = template(get);
		data[language][grade]["programs"][prop].push("");
	},
	setSdContentList: (val, prop, index, key) => {
		const { data, language } = template(get);
		if (key) {
			data[language]["sd"][prop][index][key] = val;
		} else {
			data[language]["sd"][prop][index] = val;
		}
		set({ data: data });
	},
	addSdContentList: (prop) => {
		const { data, language } = template(get);
		if (prop.includes("kurikulum")) {
			data[language]["sd"][prop].push({ title: "", content: "" });
		} else {
			data[language]["sd"][prop].push("");
		}
		set({ data: data });
	},
	setSmpContentList: (val, prop, prop2, index, key) => {
		const { data, language } = template(get);
		if (key) {
			data[language]["smp"][prop][prop2][index][key] = val;
		} else {
			data[language]["smp"][prop][prop2][index] = val;
		}
		set({ data: data });
	},
	addSmpContentList: (content, prop) => {
		const { data, language } = template(get);
		if (content === "curriculum") {
			data[language]["smp"][content][prop].push({ title: "", description: "" });
		} else {
			data[language]["smp"][content][prop].push("");
		}
		set({ data: data });
	},
	setSmaContentList: (val, prop, prop2, index, key) => {
		const { data, language } = template(get);
		if (key) {
			data[language]["sma"][prop][prop2][index][key] = val;
		} else {
			data[language]["sma"][prop][prop2][index] = val;
		}
		set({ data: data });
	},
	addSmaContentList: (content, prop) => {
		const { data, language } = template(get);
		if (content === "curriculum") {
			data[language]["sma"][content][prop].push({ title: "", description: "" });
		} else {
			data[language]["sma"][content][prop].push("");
		}
		set({ data: data });
	},
	getInitialData: async () => {
		/* set({ rawData: BTBPeduliPayload, data: BTBPeduliPayload }); */
		try {
			// let data = await GetConfig(configName, { type: type });
			// data = data.length > 0 ? data[0] : {};
			set({ rawData: BTBBelajarPayload, data: BTBBelajarPayload });
		} catch (error) {
			console.log(error);
		}
	},

	// submitData: async (attachments) => {
	// 	const tempAtt = {};
	// 	if (!isObjectEmpty(attachments)) {
	// 		const promises = await Promise.all(
	// 			Object.keys(attachments).map((key) => {
	// 				let formData = new FormData();
	// 				const theFile = attachments[key];
	// 				formData.append(key, theFile);
	// 				return UploadAttachment("assets", formData);
	// 			})
	// 		);
	// 		promises.forEach((res) => {
	// 			const type = res.data[0].type;
	// 			tempAtt[type] = res.data[0].fileURL;
	// 		});
	// 	}
	// 	const payload = { ...get().data, ...tempAtt };
	// 	try {
	// 		await SubmitConfig(configName, [{ type: "type", ...payload }]);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// },
}));