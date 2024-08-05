import { getCookie } from "cookies-next";
import { callInternalAPI } from "../helpers/internalapi.helper";

export const SubmitStudentRegistration = (registrationPayload) => new Promise(async (resolve, reject) => {
    try {
        const result = await callInternalAPI('/student/registration/submit/', 'POST', registrationPayload, {"Authorization": process.env.NEXT_PUBLIC_BASICKEY});
        return resolve(result);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
});

export const GetDraftStudentRegistration = (registrationcode) => new Promise(async (resolve, reject) => {
    try {
        const result = await callInternalAPI('/student/registration/draft/', 'POST', {
            "registrationcode": registrationcode
        }, {"Authorization": process.env.NEXT_PUBLIC_BASICKEY});
        return resolve(result);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
});

export const GetOutstandingStudentRegistration = (registrationcode) => new Promise(async (resolve, reject) => {
    try {
        const result = await callInternalAPI('/student/registration/outstanding/', 'GET', {
            "registrationcode": registrationcode
        }, {"Authorization": `Bearer ${getCookie(process.env.NEXT_PUBLIC_CLIENTSESSION)}`});
        return resolve(result);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
});

export const ApproveOutstandingStudentRegistration = (id) => new Promise(async (resolve, reject) => {
    try {
        const result = await callInternalAPI('/student/registration/outstanding/approve/', 'POST', {
            "_id": id
        }, {"Authorization": `Bearer ${getCookie(process.env.NEXT_PUBLIC_CLIENTSESSION)}`});
        return resolve(result);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
});

export const GetAllStudentRegistration = () => new Promise(async (resolve, reject) => {
    try {
        const result = await callInternalAPI('/student/registration/all/', 'POST', {}, {"Authorization": `Bearer ${getCookie(process.env.NEXT_PUBLIC_CLIENTSESSION)}`});
        return resolve(result);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
});

export const GetDetailStudentRegistration = (id) => new Promise(async (resolve, reject) => {
    try {
        const result = await callInternalAPI('/student/registration/detail/', 'POST', {
            "_id": id
        }, {"Authorization": `Bearer ${getCookie(process.env.NEXT_PUBLIC_CLIENTSESSION)}`});
        return resolve(result);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
});