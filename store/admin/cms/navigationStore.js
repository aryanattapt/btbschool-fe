import { create } from "zustand";
import { GetConfig, SubmitConfig } from "../../../services/config.service";
import { deepCopy } from "../../../src/utils/object";
import { NavbarPayload } from "../../../data";
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

const type = "navigation";
const configName = "general";

export const useNavigationStore = create((set, get) => ({
  ...initialData,

  setState: (val, prop) => {
    set({ [prop]: val });
  },
  getInitialData: async () => {
    // set({ rawData: tempAboutUsPayload, data: tempAboutUsPayload });
    try {
      let data = await GetConfig(configName, { type: type });
      // let data = { navbar: NavbarPayload };
      data = data.length > 0 ? data[0] : {};
      set({ rawData: data, data: data });
    } catch (error) {
      console.log(error);
    }
  },
  setParentContent: (val, idx) => {
    const { data, language } = template(get);
    data["navbar"][language]["navbarlink"][idx]["content"] = val;
    set({ data: data });
  },
  setNavbarSubmenuContent: (val, parentIdx, idx) => {
    const { data, language } = template(get);
    data["navbar"][language]["navbarlink"][parentIdx]["submenu"][idx][
      "content"
    ] = val;
    set({ data: data });
  },
  submitData: async () => {
    const { data } = template(get);
    Swal.fire(
      "Are you sure?",
      "Are you sure to submit the data?",
      "warning"
    ).then(async (res) => {
      if (res.isConfirmed) {
        set({ loading: true });
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
