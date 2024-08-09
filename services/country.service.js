import axios from 'axios';

export const GetCountry = () => new Promise(async (resolve, reject) => {
    try {
        const res = await axios.get('https://restcountries.com/v3.1/all');
        const result = res.data.map(val => val.name.common).sort();
        return resolve(result);
    } catch (error) {
        console.log(error); 
        return reject(error.response.data?.message || error.message);
    }
})