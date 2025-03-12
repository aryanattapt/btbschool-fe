const { UploadAttachment } = require("../../../services/attachment.service");

export const onUploadAtt = async (att, label) => {
  if (typeof att === "string") {
    return att; // Jika string, langsung return tanpa upload
  }

  let formData = new FormData();
  formData.append(label, att); // Gunakan title sebagai key

  try {
    const res = await UploadAttachment("assets", formData);
    return res?.data[0]?.fileURL; // Pastikan ini mengembalikan URL
  } catch (error) {
    console.log({ error });
    return null; // Jika gagal, bisa dikasih handling lebih lanjut
  }
};
