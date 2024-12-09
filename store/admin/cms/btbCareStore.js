import { create } from "zustand";
import { deepCopy } from "../../../src/utils/object";
/* import { BTBPeduliPayload, tempAboutUsPayload } from "./tempDatas"; */
import { GetConfig, SubmitConfig } from "../../../services/config.service";
import { UploadAttachment } from "../../../services/attachment.service";
import { isObjectEmpty } from "../../../src/utils/checker";

const initialData = {
	rawData: {},
	data: {},
	language: "ID",
	loading: false,
};

const template = (get) => {
	return {
		data: deepCopy(get().data),
		language: get().language,
	};
};

const type = "btbpeduli";
const configName = "general";

export const useCmsBtbCareStore = create((set, get) => ({
	...initialData,

	setState: (val, prop) => {
		set({ [prop]: val });
	},
	getInitialData: async () => {
		/* set({ rawData: BTBPeduliPayload, data: BTBPeduliPayload }); */
		try {
			let data = await GetConfig(configName, { type: type });
			data = data.length > 0 ? data[0] : {};
			set({ rawData: data, data: data });
		} catch (error) {
			console.log(error);
		}
	},
	setStateLanguage: (value, prop) => {
		const { data, language } = template(get);
		data[language][prop] = value;
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
			await SubmitConfig(configName, [{ type: type, ...payload }]);
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
