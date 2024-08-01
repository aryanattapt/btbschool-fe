import { callInternalAPI } from "../helpers/internalapi.helper";

export const GetBTBInstagramFeed = () => new Promise(async (resolve, reject) => {
    try {
        const res = await callInternalAPI('/instagram/feed/', 'GET', {}, {"Authorization": process.env.NEXT_PUBLIC_BASICKEY});
        return resolve(res.data);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
});