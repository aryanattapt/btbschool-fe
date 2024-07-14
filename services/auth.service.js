import { callInternalAPI } from "../helpers/internalapi.helper";
import { setCookie, hasCookie, deleteCookie, getCookie } from 'cookies-next';

const clientID = process.env.NEXT_PUBLIC_CLIENTSESSION;

export const isLogin = () => {
    return hasCookie(clientID)
}

export const login = async (payload) => {
    try {
        console.log("masukl")
        const result = await callInternalAPI('/auth/signin/', 'POST', payload, {"Authorization": process.env.NEXT_PUBLIC_BASICKEY});
        setCookie(clientID, result.data.token, {
            domain: process.env.NEXT_PUBLIC_BASEURL,
            expires: result.data.expiredate,
            path: '/',
            sameSite: 'strict',
            secure: true,
        });
        return true;
    } catch (error) {return error;}
}

export const logout = () => {
    deleteCookie(clientID)
    return true;
}

export const checkSession = async () => {
    try {
        const result = await callInternalAPI('/auth/validate/', 'POST', {}, {"Authorization": `Bearer ${getCookie(clientID)}`});
        return result.data;
    } catch (error) {return error;}
}