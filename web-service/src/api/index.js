import {create} from 'apisauce';

const api = create({
    baseURL: 'http://localhost:3007',
    headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Accept-Language': 'en-GB',
        'Content-Type':'application/json'
    }
});

export default api;