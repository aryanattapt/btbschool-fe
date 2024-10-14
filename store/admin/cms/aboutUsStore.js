import { create } from "zustand";
import { deepCopy } from "../../../src/utils/object";
import { tempAboutUsPayload } from "./tempDatas";

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

export const useCmsAboutUsStore = create((set, get) => ({
	...initialData,

	setState: (val, prop) => {
		set({ [prop]: val });
	},
	getInitialData: async () => {
		set({ rawData: tempAboutUsPayload, data: tempAboutUsPayload });
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
}));
