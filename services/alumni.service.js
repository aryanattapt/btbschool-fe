import { callInternalAPI } from "../helpers/internalapi.helper";

export const SubmitAlumni = (contactPayload) => new Promise(async (resolve, reject) => {
    try {
        await callInternalAPI('/alumni/submit/', 'POST', contactPayload, {"Authorization": process.env.NEXT_PUBLIC_BASICKEY});
        return resolve(true);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
});