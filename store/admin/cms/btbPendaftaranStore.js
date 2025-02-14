import { create } from "zustand";
import { deepCopy } from "../../../src/utils/object";
import { UploadAttachment } from "../../../services/attachment.service";
import { isObjectEmpty } from "../../../src/utils/checker";
import { removeAtIndex } from "../../../src/utils/array";
import { GetConfig, SubmitConfig } from "../../../services/config.service";
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

const templateSchoolDetail = {
  schoolName: "",
  schoolemail: "",
  schoolhp: [
    {
      hrefwa: "",
      waNumber: "",
    },
  ],
  schooltlp: [""],
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
  setPagingTitle: (val) => {
    const { data, language } = template(get);
    data[language]["pagingHeader"]["title"] = val;
    set({ data: data });
  },
  setNavigationTitle: (val, index) => {
    const { data, language } = template(get);
    data[language]["pagingHeader"]["url"][index]["title"] = val;
    set({ data: data });
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
  addSchoolWa: (index) => {
    const { data, language } = template(get);
    data[language]["beasiswaPagedata"]["detailschool"][index]["schoolhp"].push({
      hrefwa: "",
      waNumber: "",
    });
    set({ data: data });
  },
  deleteSchoolWa: (schoolIdx, index) => {
    const { data, language } = template(get);
    data[language]["beasiswaPagedata"]["detailschool"][schoolIdx]["schoolhp"] =
      removeAtIndex(
        data[language]["beasiswaPagedata"]["detailschool"][schoolIdx][
          "schoolhp"
        ],
        index
      );
    set({ data: data });
  },
  setSchoolWaNumber: (val, outer, inner, idx, innerIdx) => {
    const { data, language } = template(get);
    data[language][outer]["detailschool"][idx][inner][innerIdx]["waNumber"] =
      val;
    data[language][outer]["detailschool"][idx][inner][innerIdx]["hrefwa"] =
      val.replace(/\s+/g, "");
    set({ data: data });
  },
  setSchoolTlp: (val, prop, index, tlpIndex) => {
    const { data, language } = template(get);
    data[language][prop]["detailschool"][index]["schooltlp"][tlpIndex] = val;
    set({ data: data });
  },
  addSchoolTlp: (index) => {
    const { data, language } = template(get);
    data[language]["beasiswaPagedata"]["detailschool"][index]["schooltlp"].push(
      ""
    );
    set({ data: data });
  },
  deleteSchoolTlp: (schoolIdx, index) => {
    const { data, language } = template(get);
    data[language]["beasiswaPagedata"]["detailschool"][schoolIdx]["schooltlp"] =
      removeAtIndex(
        data[language]["beasiswaPagedata"]["detailschool"][schoolIdx][
          "schooltlp"
        ],
        index
      );
    set({ data: data });
  },
  deleteSchoolDetail: (index) => {
    const { data, language } = template(get);
    let details = data[language]["beasiswaPagedata"]["detailschool"];
    if (details.length === 1) {
      details[index] = templateSchoolDetail;
    } else {
      data[language]["beasiswaPagedata"]["detailschool"] = removeAtIndex(
        details,
        index
      );
    }
    set({ data: data });
  },
  addSchoolDetail: () => {
    const { data, language } = template(get);
    data[language]["beasiswaPagedata"]["detailschool"].push(
      templateSchoolDetail
    );

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
      data["bannerimageurl"] = tempAtt["bannerimage"];
      data["ID"]["enrolmentPagedata"]["image2"] = tempAtt["enrollmentimage"];
      data["EN"]["enrolmentPagedata"]["image2"] = tempAtt["enrollmentimage"];
    }
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
}));
