import axios from "axios"
import { authContex } from "../hook/authContext"

export interface postRefreshTokenTypeResponse{
    token: string
}

export const api = axios.create({
    baseURL: 'http://localhost:3333',
    withCredentials: true
}) 

api.interceptors.response.use(
    (response) => response,
    async (error) => {

        const originalRequest  = error.config 

        const { account, login, logout } = authContex.getState()

        if (error.response?.status === 401 && !originalRequest._retry && originalRequest.url !== "/refresh/token") {
            originalRequest._retry = true;
        
            try {
                // chama o refresh → backend lê refreshToken do cookie
                const { data } = await api.post<postRefreshTokenTypeResponse>("/refresh/token");

                // atualiza o accessToken no Zustand
            if (account) {
                login({ ...account, token: data.token});
            }
                // refaz a request original com o token novo
                originalRequest.headers.Authorization = `Bearer ${data.token}`;
                return api(originalRequest);

            }catch (err) {
                logout();
                return Promise.reject(err);
            }
        }
            return Promise.reject(error); 
        }
)
