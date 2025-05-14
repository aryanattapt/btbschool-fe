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
    try {
      let data = await GetConfig(configName, { type: type });
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
  onQuoteChange: (val) => {
    const { data, language } = template(get);
    data[language]["quote"] = val;
    set({ data: data });
  },
  submitData: async (attachment) => {
    const { data } = template(get);
    Swal.fire(
      "Are you sure?",
      "Are you sure to submit the data?",
      "warning"
    ).then(async (res) => {
      console.log({ attachment });
      if (res.isConfirmed) {
        set({ loading: true });
        data["bannerimage"] = await Promise.all(
          attachment["bannerimage"].map((res) => onUploadAtt(res))
        );
        data["openingImage"] = await onUploadAtt(attachment["openingImage"]);
        data["purposeImage"] = await onUploadAtt(attachment["purposeImage"]);
        data["closingImage"] = await onUploadAtt(attachment["closingImage"]);
        data["gallery"] = await Promise.all(
          attachment.gallery.map(async (att) => onUploadAtt(att))
        );
        console.log({ data });
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

const temp = {
  EN: {
    closingContent: {
      content:
        "Whether you are new to the school or a long-time student, BTB Knights United welcomes you to be part of this incredible family. Together, we celebrate achievements, uplift one another, and create unforgettable school experiences.",
      title: "BE A KNIGHT. BE UNITED",
    },
    navigation: [
      {
        title: "Who We Are",
      },
      {
        title: "Our Purpose",
      },
      {
        title: "Gallery",
      },
    ],
    openingContent: {
      content:
        "BTB Knights United is more than just a student group - it's a family. We are a united community within our school that fosters brotherhood and sisterhood among students of all grades. Our mission is to create a supportive and inclusive environment where every student feels valued, empowered, and connected",
      subtitle: "Strength in Unity, Pride in Identity",
      title: "BTB KNIGHTS UNITED",
    },
    purposeContent: {
      content:
        "At BTB Knights United, we are committed to: Strengthening school identity and pride. Encouraging unity and camaraderie across all grades. Providing support and encouragement for students in every competition-academic, sports, and extracurricular. Building a positive and lasting impact within our school community.",
      title: "OUR PURPOSE",
    },
    quote: "TOGETHER. WE ARE STRONGER!",
    title: "BTB Knights United",
  },
  ID: {
    closingContent: {
      content:
        "Baik Anda siswa baru maupun siswa lama, BTB Knights United menyambut Anda untuk menjadi bagian dari keluarga yang luar biasa ini. Bersama-sama, kita merayakan prestasi, saling mendukung, dan menciptakan pengalaman sekolah yang tak terlupakan.",
      title: "BE A KNIGHT. BE UNITED",
    },
    navigation: [
      {
        title: "Siapakah Kami",
      },
      {
        title: "Tujuan Kami",
      },
      {
        title: "Galeri",
      },
    ],
    openingContent: {
      content:
        "BTB Knights United bukan hanya sekadar kelompok pelajar - melainkan keluarga. Kami adalah komunitas bersatu di sekolah kami yang memupuk persaudaraan di antara siswa dari semua tingkatan. Misi kami adalah menciptakan lingkungan yang mendukung dan inklusif di mana setiap siswa merasa dihargai, berdaya, dan terhubung.",
      subtitle: "Strength in Unity, Pride in Identity",
      title: "BTB KNIGHTS UNITED",
    },
    purposeContent: {
      content:
        "Di BTB Knights United, kami berkomitmen untuk: Memperkuat identitas dan kebanggaan sekolah. Mendorong persatuan dan persahabatan di semua tingkatan. Memberikan dukungan dan dorongan bagi siswa dalam setiap kompetisi-akademis, olahraga, dan ekstrakurikuler. Membangun dampak positif dan berkelanjutan dalam komunitas sekolah kami.",
      title: "TUJUAN KAMI",
    },
    quote: "TOGETHER. WE ARE STRONGER!",
    title: "BTB Knights United",
  },
  _id: "67d1045c728f0e27e098a501",
  bannerImage:
    "https://w6i8.c1.e2-7.dev/uploads/assets/undefined/aff5898ba8ab4f14b2e6571ba117a47a.jpg",
  bannerimage: [
    {
      name: "banner.jpg",
      type: "image/jpeg",
      url: "https://w6i8.c1.e2-7.dev/uploads/assets/undefined/aff5898ba8ab4f14b2e6571ba117a47a.jpg",
    },
    {
      name: "purpose.jpg",
      type: "image/jpeg",
      url: "https://w6i8.c1.e2-7.dev/uploads/assets/bannerimage/9ff919056c4d47efaf9757a8c68172d6.jpg",
    },
    {
      url: "https://www.youtube.com/watch?v=p_TbkEK7b5U&ab_channel=CitipointeWorship",
      type: "video",
      name: "youtube",
    },
  ],
  closingImage: {
    name: "purpose.jpg",
    type: "image/jpeg",
    url: "https://w6i8.c1.e2-7.dev/uploads/assets/BTB Knight Gallery/fdd1870546764ac7b481f84bea190d3e.jpg",
  },
  gallery: [
    {
      name: "opening.jpg",
      type: "image/jpeg",
      url: "https://w6i8.c1.e2-7.dev/uploads/assets/BTB Knight Gallery/f0dad32ada0f4b7eb54c2a81e8f62698.jpg",
    },
    {
      url: "https://www.youtube.com/watch?v=p_TbkEK7b5U&ab_channel=CitipointeWorship",
      type: "video",
      name: "youtube",
    },
  ],
  openingImage: {
    name: "banner.jpg",
    type: "image/jpeg",
    url: "https://w6i8.c1.e2-7.dev/uploads/assets/BTB Knight Gallery/b20fae998efb419294481e1d28d5500a.jpg",
  },
  purposeImage: {
    url: "https://www.youtube.com/watch?v=p_TbkEK7b5U&ab_channel=CitipointeWorship",
    type: "video",
    name: "youtube",
  },
  type: "btbknight",
};
