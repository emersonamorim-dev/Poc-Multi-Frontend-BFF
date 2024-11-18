import axios, { AxiosRequestConfig, AxiosError } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiCall = async <T>(endpoint: string, options: AxiosRequestConfig): Promise<T | null> => {
    try {
        const response = await axios({
            url: `${API_URL}${endpoint}`,
            ...options,
        });
        return response.data as T;
    } catch (error: unknown) {
        if (error instanceof AxiosError && error.response) {
            console.error("Erro ao fazer chamada à API:", error.response.data);
            return null;
        } else {
            console.error("Erro ao fazer chamada à API:", error);
            return null;
        }
    }
};



