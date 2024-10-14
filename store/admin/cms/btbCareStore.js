import { create } from "zustand";
import { deepCopy } from "../../../src/utils/object";
import { BTBPeduliPayload, tempAboutUsPayload } from "./tempDatas";

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

export const useCmsBtbCareStore = create((set, get) => ({
	...initialData,

	setState: (val, prop) => {
		set({ [prop]: val });
	},
	getInitialData: async () => {
		set({ rawData: BTBPeduliPayload, data: BTBPeduliPayload });
	},
	setStateLanguage: (value, prop) => {
		const { data, language } = template(get);
		data[language][prop] = value;
		set({ data: data });
	},
}));
