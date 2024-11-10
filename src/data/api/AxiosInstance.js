import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://anapioficeandfire.com/api",
    timeout: 10000
});

axiosInstance.interceptors.request.use(
    (config) => {
        // console.log("Request config: " + JSON.stringify(response));
        return config;
    },
    (error) => {
        console.log("Request error: " + error);
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        // console.log("Response: " + JSON.stringify(response));
        return response;
    },
    (error) => {
        console.log("Response error: " + error);
        return Promise.reject(error);
    }
);

export default axiosInstance;