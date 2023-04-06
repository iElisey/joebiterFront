import axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
});

instance.interceptors.request.use(
    config => {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

const ApiService = {

    get(url, params) {
        return instance.get(url, {params:params})
            .then(res => res)
            .catch(reason => Promise.reject(reason));
    },

    delete(url) {
        return instance.delete(url)
            .then(res => res)
            .catch(reason=>Promise.reject(reason))
    },

    post(url, data) {
        return instance.post(url, data)
            .then(res => res)
            .catch(reason => Promise.reject(reason));
    },

    put(url, data) {
        return instance.put(url, data)
            .then(res => res)
            .catch(reason => Promise.reject(reason))
    },

};

export default ApiService;