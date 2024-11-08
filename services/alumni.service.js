import { callInternalAPI } from "../helpers/internalapi.helper";
import { getCookie } from 'cookies-next';

export const SubmitAlumni = (payload) => new Promise(async (resolve, reject) => {
    try {
        await callInternalAPI('/alumni/submit/', 'POST', payload, {"Authorization": process.env.NEXT_PUBLIC_BASICKEY});
        return resolve(true);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
});

export const FetchAlumni = (payload) => new Promise(async (resolve, reject) => {
    try {
        const hasil = await callInternalAPI('/alumni/fetch/', 'POST', payload, {"Authorization": `Bearer ${getCookie(process.env.NEXT_PUBLIC_CLIENTSESSION)}`});
        return resolve(hasil.data);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
});

export const VerifyAlumni = (payload) => new Promise(async (resolve, reject) => {
    try {
        await callInternalAPI('/alumni/verify/', 'POST', payload, {"Authorization": `Bearer ${getCookie(process.env.NEXT_PUBLIC_CLIENTSESSION)}`});
        return resolve(true);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
});

export const ValidateAlumniSubmissionData = (payload) => new Promise(async (resolve, reject) => {
    try {
        await callInternalAPI('/alumni/submit/validate', 'POST', payload, {"Authorization": process.env.NEXT_PUBLIC_BASICKEY});
        return resolve(true);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data);
    }
});

export const DeleteAlumniSubmissiondata = (payload) => new Promise(async (resolve, reject) => {
    try {
        await callInternalAPI('/alumni/', 'DELETE', payload, {"Authorization": `Bearer ${getCookie(process.env.NEXT_PUBLIC_CLIENTSESSION)}`});
        return resolve(true);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data);
    }
});