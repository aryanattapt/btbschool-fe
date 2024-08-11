import { callInternalAPI } from "../helpers/internalapi.helper";
import { getCookie } from 'cookies-next';

export const getAllUsers = (payload) => new Promise(async (resolve, reject) => {
    try {
        const result = await callInternalAPI('/users/search/', 'POST', payload, {"Authorization": `Bearer ${getCookie(process.env.NEXT_PUBLIC_CLIENTSESSION)}`});
        return resolve(result.data);
    } catch (error) {return reject(error.response.data?.message || error.message);}
});

export const insertUser = (payload) => new Promise(async (resolve, reject) => {
    try {
        const result = await callInternalAPI('/users/', 'POST', payload, {"Authorization": `Bearer ${getCookie(process.env.NEXT_PUBLIC_CLIENTSESSION)}`});
        return resolve(result.data);
    } catch (error) {return reject(error.response.data?.message || error.message);}
});

export const updateUser = (payload) => new Promise(async (resolve, reject) => {
    try {
        const result = await callInternalAPI('/users/', 'PUT', payload, {"Authorization": `Bearer ${getCookie(process.env.NEXT_PUBLIC_CLIENTSESSION)}`});
        return resolve(result.data);
    } catch (error) {return reject(error.response.data?.message || error.message);}
});