import Swal from "sweetalert2";
import { create } from "zustand";
import { GetConfig, SubmitConfig } from "../../../services/config.service";
import { deepCopy } from "../../../src/utils/object";
import { onUploadAtt } from "./btbKnightAction";

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

const type = "btbknight";
const configName = "general";

export const useBtbKnightStore = create((set, get) => ({
  ...initialData,

  setState: (val, prop) => {
    set({ [prop]: val });
  },
  getInitialData: async () => {
    // set({ rawData: tempAboutUsPayload, data: tempAboutUsPayload });
    try {
      let data = await GetConfig(configName, { type: type });
      // let data = { ...BtbKnightPayload };
      data = data.length > 0 ? data[0] : {};
      set({ rawData: data, data: data });
    } catch (error) {
      console.log(error);
    }
  },
  onContentChange: (val, prop, innerProp) => {
    const { data, language } = template(get);
    data[language][prop][innerProp] = val;
    set({ data: data });
  },
  submitData: async (attachment) => {
    const { data } = template(get);
    Swal.fire(
      "Are you sure?",
      "Are you sure to submit the data?",
      "warning"
    ).then(async (res) => {
      if (res.isConfirmed) {
        set({ loading: true });
        data["bannerImage"] = await onUploadAtt(
          attachment["bannerImage"],
          "BTB Knight Gallery"
        );
        data["openingImage"] = await onUploadAtt(
          attachment["openingImage"],
          "BTB Knight Gallery"
        );
        data["purposeImage"] = await onUploadAtt(
          attachment["purposeImage"],
          "BTB Knight Gallery"
        );
        data["closingImage"] = await onUploadAtt(
          attachment["closingImage"],
          "BTB Knight Gallery"
        );
        const uploadedGallery = await Promise.all(
          attachment.gallery.map(async (att) => {
            return await onUploadAtt(att, "BTB Knight Gallery");
          })
        );
        data["gallery"] = uploadedGallery;

        try {
          await SubmitConfig(configName, [{ type: type, ...data }]);
          set({ loading: false });
          Swal.fire("Success", "Success to submit data!", "success");
        } catch (error) {
          console.log(error);
        } finally {
          set({ loading: false });
        }
      }
    });
  },
}));
