import { callInternalAPI } from "../helpers/internalapi.helper";

export const SubmitContact = (contactPayload) => new Promise(async (resolve, reject) => {
    try {
        await callInternalAPI('/contact/submit/', 'POST', contactPayload, {"Authorization": process.env.NEXT_PUBLIC_BASICKEY});
        return resolve(true);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
});