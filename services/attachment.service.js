import { callInternalAPI } from "../helpers/internalapi.helper";

export const UploadAttachment = (param, formData) => new Promise(async (resolve, reject) => {
    try {
        if(!param) throw {"message": "Param is mandatory"};
        const data = await callInternalAPI(`/attachment/upload/${param}/`, 'POST', formData, {
            "Authorization": process.env.NEXT_PUBLIC_BASICKEY,
            'content-type': 'multipart/form-data',
        });
        return resolve(data);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
});