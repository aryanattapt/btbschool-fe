import { create } from "zustand";
import { deepCopy } from "../../../src/utils/object";
/* import { tempAboutUsPayload } from "./tempDatas"; */
import {
	GetConfig,
	SubmitConfig
} from '../../../services/config.service'

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

const type = 'aboutus'
const configName = 'general';

export const useCmsAboutUsStore = create((set, get) => ({
	...initialData,

	setState: (val, prop) => {
		set({ [prop]: val });
	},
	getInitialData: async () => {
		/* set({ rawData: tempAboutUsPayload, data: tempAboutUsPayload }); */
		try {
			let data = await GetConfig(configName, {"type": type});
			data = data.length > 0 ? data[0]: {} 
			set({ rawData: data, data: data });
		} catch (error) {console.log(error);}
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
	submitData: async () => {
		try {
			const payload = get().data;
			await SubmitConfig(configName, [{"type": "type", ...payload}]);
		} catch (error) {console.log(error);}
	}
}));
