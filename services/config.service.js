import { callInternalAPI } from "../helpers/internalapi.helper";

export const SubmitConfig = (type, payload) => new Promise(async (resolve, reject) => {
    try {
        await callInternalAPI(`/config/${type}/`, 'PUT', {"data": payload}, {"Authorization": process.env.NEXT_PUBLIC_BASICKEY});
        return resolve(true);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
});

export const GetConfig = (type, payload) => new Promise(async (resolve, reject) => {
    try {
        const res = await callInternalAPI(`/config/${type}/`, 'POST', payload, {"Authorization": process.env.NEXT_PUBLIC_BASICKEY});
        return resolve(res.data);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
});

export const DeleteConfig = (type, payload) => new Promise(async (resolve, reject) => {
    try {
        await callInternalAPI(`/config/${type}/`, 'DELETE', {"data": payload}, {"Authorization": process.env.NEXT_PUBLIC_BASICKEY});
        return resolve(true);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
});