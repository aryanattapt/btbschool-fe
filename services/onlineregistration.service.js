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

export const GetOutstandingStudentRegistration = (registrationcode) => new Promise(async (resolve, reject) => {
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