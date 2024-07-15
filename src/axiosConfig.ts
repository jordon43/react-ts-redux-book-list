// src/axiosConfig.ts
import axios from 'axios';

// Создание экземпляра axios с базовой конфигурацией
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // Использование переменной окружения для базового URL
    headers: {
        'Content-Type': 'application/json',
    },
});

const apiKey = process.env.REACT_APP_API_KEY;

axiosInstance.interceptors.request.use(
    (config) => {
        if (config.url) {
            config.url = `${config.url}&key=${apiKey}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
