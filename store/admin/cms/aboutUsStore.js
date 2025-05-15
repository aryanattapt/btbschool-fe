import Swal from "sweetalert2";
import { create } from "zustand";
import { GetConfig, SubmitConfig } from "../../../services/config.service";
import { deepCopy } from "../../../src/utils/object";
import { onUploadAtt } from "./aboutUsAction";

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

const type = "aboutus";
const configName = "general";

export const useCmsAboutUsStore = create((set, get) => ({
  ...initialData,

  setState: (val, prop) => {
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
  setPagingHeader: (val) => {
    const { data, language } = template(get);
    data[language]["pagingHeader"]["title"] = val;
    set({ data: data });
  },
  setPagingNavigation: (val, index) => {
    const { data, language } = template(get);
    data[language]["pagingHeader"]["url"][index]["title"] = val;
    set({ data: data });
  },
  setMotto: (val) => {
    const { data, language } = template(get);
    data[language]["motto"] = val;
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
  deleteVisiMisi: (index) => {
    const { data, language } = template(get);
    data[language]["visimisi"]["misilist"].splice(index, 1);
    set({ data: data });
  },
  addVisiMisi: () => {
    const { data, language } = template(get);
    data[language]["visimisi"]["misilist"].push("");
    set({ data: data });
  },
  // setGradeLists: (value, prop, index) => {
  // 	const { data, language } = template(get);
  // 	data[language]["gradelists"][index][prop] = value;
  // 	set({ data: data });
  // },
  submitData: async (attachment) => {
    const { data } = template(get);
    data["bannerimage"] = await Promise.all(
      attachment["bannerimage"].map((res) => onUploadAtt(res))
    );
    data["image1"] = await onUploadAtt(attachment["image1"]);
    data["image2"] = await onUploadAtt(attachment["image2"]);
    try {
      await SubmitConfig(configName, [{ type: type, ...data }]);
      set({ loading: false });
      Swal.fire("Success", "Success to submit data!", "success");
    } catch (error) {
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },
  setProfileLearnerTitle: (val) => {
    const { data, language } = template(get);
    data[language]["profileLearnerTitle"] = val;
    set({ data: data });
  },
}));
