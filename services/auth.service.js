import { callInternalAPI } from "../helpers/internalapi.helper";
import { setCookie, hasCookie, deleteCookie, getCookie } from 'cookies-next';

export const isLogin = () => {
    return hasCookie(process.env.NEXT_PUBLIC_CLIENTSESSION)
}

export const login = (payload) => new Promise(async (resolve, reject) => {
    try {
        const result = await callInternalAPI('/auth/signin/', 'POST', payload, {"Authorization": process.env.NEXT_PUBLIC_BASICKEY});
        var expiredDate = new Date();
        expiredDate.setHours(expiredDate.getHours() + 23);
        setCookie(process.env.NEXT_PUBLIC_CLIENTSESSION, result.data.token, {
            expires: expiredDate,
            path: '/',
            sameSite: 'strict',
            secure: true,
        });
        return resolve(result.data);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
});

export const logout = () => {
    deleteCookie(process.env.NEXT_PUBLIC_CLIENTSESSION)
    return true;
}

export const checkSession = () => new Promise(async (resolve, reject) => {
    try {
        const result = await callInternalAPI('/auth/validate/', 'POST', {}, {"Authorization": `Bearer ${getCookie(clientID)}`});
        return resolve(result.data);
    } catch (error) {return reject(error.response.data?.message || error.message);}
});