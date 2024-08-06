import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_INTERNALAPIBASEURL,
    timeout: 30000,
});

export const callInternalAPI = (url, method, requestBody, requestHeader) => new Promise((resolve, reject) => {
    switch (method) {
        case "GET":
            return axiosInstance.get(url, {params: requestBody, headers: requestHeader}).then((res) => {return resolve(res.data)}).catch((err) => {return reject(err)})
        case "POST":
            return axiosInstance.post(url, requestBody, {headers: requestHeader}).then((res) => {return resolve(res.data)}).catch((err) => {return reject(err)})
        case "PUT":
            return axiosInstance.put(url, requestBody, {headers: requestHeader}).then((res) => {return resolve(res.data)}).catch((err) => {return reject(err)})
        case "PATCH":
            return axiosInstance.patch(url, requestBody, {headers: requestHeader}).then((res) => {return resolve(res.data)}).catch((err) => {return reject(err)})
        case "DELETE":
            return axiosInstance.delete(url, {data: requestBody, headers: requestHeader}).then((res) => {return resolve(res.data)}).catch((err) => {return reject(err)})
        default:
            return reject('unknown http method!');
    }
});