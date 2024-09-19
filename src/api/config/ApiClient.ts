import axios, {
    AxiosInstance,
    InternalAxiosRequestConfig,
} from "axios";
import { errorHandler } from "../../helper/errorHandler";

const apiClient: AxiosInstance = axios.create({
    baseURL: "https://stage.achareh.ir/api/karfarmas",
    timeout: 120000,
    headers: {
        Authorization: `Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4`,
    },
});

apiClient.interceptors.response.use(function (response) {
    return response.data;
}, function (error: any): void { errorHandler(error); });

apiClient.interceptors.request.use(
    function (config: InternalAxiosRequestConfig) {
        config.headers["Authorization"] = `Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4`;
        return config;
    }, function (error): void {
        errorHandler(error);
    }
);

export default apiClient;
