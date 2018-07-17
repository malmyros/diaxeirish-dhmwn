import {create} from 'apisauce';

const api = create({
    baseURL: 'http://localhost:3007',
    headers: {
        'Accept': 'application/vnd.github.v3+json'
    }
});

export default api;