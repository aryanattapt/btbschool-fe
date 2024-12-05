import { getCookie } from "cookies-next";
import { callInternalAPI } from "../helpers/internalapi.helper";

export const GetEmailConfig = (payload) => new Promise(async (resolve, reject) => {
    try {
        const result = await callInternalAPI('/secretkey/emailconfig/fetch/', 'POST', payload, {"Authorization": `Bearer ${getCookie(process.env.NEXT_PUBLIC_CLIENTSESSION)}`});
        return resolve(result);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
});

export const UpdateEmailConfig = (payload) => new Promise(async (resolve, reject) => {
    try {
        const result = await callInternalAPI('/secretkey/emailconfig/update/', 'PUT', {"data": payload}, {"Authorization": `Bearer ${getCookie(process.env.NEXT_PUBLIC_CLIENTSESSION)}`});
        return resolve(result);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
});

export const GetRecaptchaConfig = (payload) => new Promise(async (resolve, reject) => {
    try {
        const result = await callInternalAPI('/secretkey/recaptcha/fetch/', 'POST', payload, {"Authorization": `Bearer ${getCookie(process.env.NEXT_PUBLIC_CLIENTSESSION)}`});
        return resolve(result);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
});

export const UpdateRecaptchaConfig = (payload) => new Promise(async (resolve, reject) => {
    try {
        const result = await callInternalAPI('/secretkey/recaptcha/update/', 'PUT',  {"data": payload}, {"Authorization": `Bearer ${getCookie(process.env.NEXT_PUBLIC_CLIENTSESSION)}`});
        return resolve(result);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
});