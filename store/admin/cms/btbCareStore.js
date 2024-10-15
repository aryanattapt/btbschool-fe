import { create } from "zustand";
import { deepCopy } from "../../../src/utils/object";
/* import { BTBPeduliPayload, tempAboutUsPayload } from "./tempDatas"; */
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

const type = 'btbpeduli'
const configName = 'general';

export const useCmsBtbCareStore = create((set, get) => ({
	...initialData,

	setState: (val, prop) => {
		set({ [prop]: val });
	},
	getInitialData: async () => {
		/* set({ rawData: BTBPeduliPayload, data: BTBPeduliPayload }); */
		try {
			let data = await GetConfig(configName, {"type": type});
			data = data.length > 0 ? data[0]: {} 
			set({ rawData: data, data: data });
		} catch (error) {console.log(error);}
	},
	setStateLanguage: (value, prop) => {
		const { data, language } = template(get);
		data[language][prop] = value;
		set({ data: data });
	},
	submitData: async () => {
		try {
			const payload = get().data;
			await SubmitConfig(configName, [{"type": "type", ...payload}]);
		} catch (error) {console.log(error);}
	}
}));
