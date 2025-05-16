import { UploadAttachment } from "../../../services/attachment.service";

export const uploadImgBtbBelajar = async (image) => {
  if (typeof image === "string") {
    return image;
  }
  let formData = new FormData();
  const theFile = image;
  formData.append("btb-belajar", theFile);
  return await UploadAttachment("assets", formData).then((res) => {
    return res["data"][0]["fileURL"];
  });
};
