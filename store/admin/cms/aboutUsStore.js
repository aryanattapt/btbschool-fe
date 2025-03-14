import { create } from "zustand";
import { deepCopy } from "../../../src/utils/object";
import { GetConfig, SubmitConfig } from "../../../services/config.service";
import { isObjectEmpty } from "../../../src/utils/checker";
import { UploadAttachment } from "../../../services/attachment.service";
import Swal from "sweetalert2";

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
