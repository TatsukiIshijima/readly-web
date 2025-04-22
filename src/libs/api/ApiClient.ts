import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { AuthTokenAccessor } from '@/libs/storage/AuthTokenAccessor';

export class ApiClient {
  private readonly baseURL: string;
  private readonly authTokenAccessor: AuthTokenAccessor;
  private readonly axiosInstance: AxiosInstance;

  constructor(baseURL: string, authTokenAccessor: AuthTokenAccessor) {
    this.baseURL = baseURL;
    this.authTokenAccessor = authTokenAccessor;
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = this.authTokenAccessor.getAuthToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        // FIXME:ここでトークンのレスポンスであればトークン保存させることができれば...
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  async get<T>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
    try {
      const response = await this.axiosInstance.get<T>(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async post<T, U>(
    url: string,
    data: U,
    config: AxiosRequestConfig = {}
  ): Promise<T> {
    try {
      const response = await this.axiosInstance.post<T>(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async delete<T>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
    try {
      const response = await this.axiosInstance.delete<T>(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
