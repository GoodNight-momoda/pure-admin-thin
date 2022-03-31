import { request } from "../utils/http";

export const getAsyncRoutes = (params?: object) => {
    return request("/getAsyncRoutes", { params });
};
