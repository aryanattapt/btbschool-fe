import { callInternalAPI } from "../helpers/internalapi.helper";

export const SubmitCareer = (contactPayload) => new Promise(async (resolve, reject) => {
    try {
        await callInternalAPI('/career/aply/', 'POST', contactPayload, {"Authorization": process.env.NEXT_PUBLIC_BASICKEY});
        return resolve(true);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
});