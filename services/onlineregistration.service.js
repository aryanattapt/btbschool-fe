import { callInternalAPI } from "../helpers/internalapi.helper";

export const SubmitStudentRegistration = (registrationPayload) => new Promise(async (resolve, reject) => {
    try {
        // await callInternalAPI('/student/registration/submit/', 'POST', registrationPayload, {"Authorization": process.env.NEXT_PUBLIC_BASICKEY});
        // return resolve(true);

        return resolve(true);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
});