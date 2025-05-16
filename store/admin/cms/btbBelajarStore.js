import { create } from "zustand";
import { deepCopy } from "../../../src/utils/object";
import { UploadAttachment } from "../../../services/attachment.service";
import { GetConfig, SubmitConfig } from "../../../services/config.service";
import Swal from "sweetalert2";
import { uploadImgBtbBelajar } from "./btbBelajarAction";

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

const type = "btbbelajar";
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
  deleteListContent: (index, grade, prop) => {
    const { data, language } = template(get);
    data[language][grade][prop].splice(index, 1);
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
  deleteTkCurriculum: (index, prop) => {
    const { data, language } = template(get);
    data[language]["tk"]["curriculum"][prop].splice(index, 1);
    set({ data: data });
  },
  deleteTkProgramList: (index) => {
    const { data, language } = template(get);
    data[language]["tk"]["programs"]["list1"].splice(index, 1);
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
  deleteSmpCurriculumList: (index, prop) => {
    const { data, language } = template(get);
    data[language]["smp"]["curriculum"][prop].splice(index, 1);
    set({ data: data });
  },
  deleteSmpProgramList: (index, prop) => {
    const { data, language } = template(get);
    data[language]["smp"]["programs"][prop].splice(index, 1);
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
  deleteSmaCurriculumList: (index, prop) => {
    const { data, language } = template(get);
    data[language]["sma"]["curriculum"][prop].splice(index, 1);
    set({ data: data });
  },
  deleteSmaProgramList: (index, prop) => {
    const { data, language } = template(get);
    data[language]["sma"]["programs"][prop].splice(index, 1);
    set({ data: data });
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

  setPagingNavigation: (val, index) => {
    const { data, language } = template(get);
    data[language]["paging"]["url"][index]["title"] = val;
    set({ data: data });
  },

  submitData: async (attachments, images) => {
    const container = [];
    Object.keys(attachments).forEach((grade) => {
      attachments[grade].forEach((res) => {
        container.push({ [grade]: res });
      });
    });
    const promises = await Promise.all(
      container.map(async (res) => {
        const grade = Object.keys(res)[0];
        if (typeof res[grade] === "string") {
          return { [grade]: res[grade] };
        } else {
          let formData = new FormData();
          const theFile = res[grade];
          formData.append(grade, theFile);
          const result = await UploadAttachment("assets", formData);
          return { [grade]: result?.data?.[0]?.fileURL };
        }
      })
    );
    const finalBanner = {};
    promises.forEach((res) => {
      const grade = Object.keys(res)[0];
      if (!finalBanner[grade]) finalBanner[grade] = [];
      finalBanner[grade].push(res[grade]);
    });
    const payload = { ...get().data };
    payload["image1"] = await uploadImgBtbBelajar(images["image1"]);
    payload["image2"] = await uploadImgBtbBelajar(images["image2"]);
    payload["image3"] = await uploadImgBtbBelajar(images["image3"]);
    payload["image4"] = await uploadImgBtbBelajar(images["image4"]);
    payload["image5"] = await uploadImgBtbBelajar(images["image5"]);
    payload["image6"] = await uploadImgBtbBelajar(images["image6"]);
    payload["image7"] = await uploadImgBtbBelajar(images["image7"]);
    payload["image8"] = await uploadImgBtbBelajar(images["image8"]);
    payload["image9"] = await uploadImgBtbBelajar(images["image9"]);
    payload["image10"] = await uploadImgBtbBelajar(images["image10"]);
    payload["image11"] = await uploadImgBtbBelajar(images["image11"]);
    payload["image12"] = await uploadImgBtbBelajar(images["image12"]);
    payload["image13"] = await uploadImgBtbBelajar(images["image13"]);
    payload["image14"] = await uploadImgBtbBelajar(images["image14"]);
    payload["image15"] = await uploadImgBtbBelajar(images["image15"]);
    payload["image16"] = await uploadImgBtbBelajar(images["image16"]);
    ["ID", "EN"].forEach((lang) => {
      ["tk", "sd", "smp", "sma"].forEach((grade) => {
        payload[lang][grade]["bannerImages"] = finalBanner[grade];
      });
    });
    try {
      await SubmitConfig(configName, [{ type: type, ...payload }]);
      set({ loading: false });
      Swal.fire("Success", "Success to submit data!", "success");
    } catch (error) {
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },
}));
