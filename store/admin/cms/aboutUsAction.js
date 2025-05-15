const { UploadAttachment } = require("../../../services/attachment.service");

export const onUploadAtt = async (att) => {
  if (att.url) {
    delete att.isNew;
    return att;
  } else {
    let formData = new FormData();
    const theFile = att;
    formData.append("About Us", theFile);
    return UploadAttachment("assets", formData).then((uploaded) => {
      return {
        name: theFile.name,
        type: theFile.type,
        url: uploaded.data[0]["fileURL"],
      };
    });
  }
};
