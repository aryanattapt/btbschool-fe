import { create } from "zustand";
import { deepCopy } from "../../../src/utils/object";
import { PendaftaranPayLoad } from "./tempDatas";
import { UploadAttachment } from "../../../services/attachment.service";
import { isObjectEmpty } from "../../../src/utils/checker";
import { GetConfig, SubmitConfig } from "../../../services/config.service";

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

const type = "pendaftaran";
const configName = "general";

export const useCmsPendaftaranStore = create((set, get) => ({
	...initialData,

	getInitialData: async () => {
		let data = await GetConfig(configName, { type: type });
		data = data.length > 0 ? data[0] : {};
		set({ data: data });
	},

	setState: (val, prop) => {
		set({ [prop]: val });
	},
	setInnerState: (val, outer, inner) => {
		const { data, language } = template(get);
		data[language][outer][inner] = val;
		set({ data: data });
	},
	setInnerContentList: (val, outer, inner, index, key) => {
		const { data, language } = template(get);
		data[language][outer][inner][index][key] = val;
		set({ data: data });
	},
	setShcoolWaNumber: (val, prop, index, innerIndex) => {
		const { data, language } = template(get);
		let removeWhitespace = val.replace(/ /g, "");
		let removeParantheses = removeWhitespace.replace(/[()]/g, "");
		data[language][prop]["detailschool"][index]["schoolhp"][innerIndex][
			"waNumber"
		] = val;
		data[language][prop]["detailschool"][index]["schoolhp"][innerIndex][
			"hrefwa"
		] = `https://wa.me/${removeParantheses}`;
		set({ data: data });
	},
	setSchoolTlp: (val, prop, index, tlpIndex) => {
		const { data, language } = template(get);
		data[language][prop]["detailschool"][index]["schooltlp"][tlpIndex] = val;
		set({ data: data });
	},
	submitData: async (attachments) => {
		const tempAtt = {};
		const { data } = template(get);
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
		if (!isObjectEmpty(tempAtt)) {
			data["ID"]["enrolmentPagedata"]["image2"] = tempAtt["image2"];
			data["EN"]["enrolmentPagedata"]["image2"] = tempAtt["image2"];
		}
		try {
			await SubmitConfig(configName, [{ type: type, ...data }]);
		} catch (error) {
			console.log(error);
		}
	},
}));
