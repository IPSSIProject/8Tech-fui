import axios from "axios";

const http = axios.create({})

const getRequestHeaders = () => {
    const session = JSON.parse(localStorage.getItem('session'));

    return {
        'Authorization': `Bearer ${session.token}`,
    };
};

const requestInterceptor = (config) => {
    config.baseURL = 'http://localhost:4000/api'
    config.headers = {
        ...config.headers,
        ...getRequestHeaders(),
    };

    return config;
}

http.interceptors.request.use(requestInterceptor);

export { http };
