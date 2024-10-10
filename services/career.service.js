import { getCookie } from "cookies-next";
import { callInternalAPI } from "../helpers/internalapi.helper";

export const SubmitCareer = (payload) => new Promise(async (resolve, reject) => {
    try {
        await callInternalAPI('/career/apply/', 'POST', payload, {"Authorization": process.env.NEXT_PUBLIC_BASICKEY});
        return resolve(true);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
});

export const GetAllCareer = (payload) => new Promise(async (resolve, reject) => {
    try {
        const res = await callInternalAPI('/career/', 'POST', payload, {"Authorization": process.env.NEXT_PUBLIC_BASICKEY});
        return resolve(res.data);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
})

export const GetAllApplicant = () => new Promise(async (resolve, reject) => {
    try {
        const res = await callInternalAPI('/career/applicant/', 'GET', {}, {"Authorization": `Bearer ${getCookie(process.env.NEXT_PUBLIC_CLIENTSESSION)}`});
        return resolve(res.data);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
})

export const UpsertCareer = (payload) => new Promise(async (resolve, reject) => {
    try {
        await callInternalAPI('/career/', 'PUT', payload, {"Authorization": process.env.NEXT_PUBLIC_BASICKEY});
        return resolve(true);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
})

export const GetActiveCareerList = () => new Promise(async (resolve, reject) => {
    try {
        const res = await callInternalAPI('/career/active/', 'POST', {}, {"Authorization": process.env.NEXT_PUBLIC_BASICKEY});
        return resolve(res.data);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
})

export const ValidateSubmitCareer = (payload) => new Promise(async (resolve, reject) => {
    try {
        await callInternalAPI('/career/apply/validate/', 'POST', payload, {"Authorization": process.env.NEXT_PUBLIC_BASICKEY});
        return resolve(true);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data);
    }
});