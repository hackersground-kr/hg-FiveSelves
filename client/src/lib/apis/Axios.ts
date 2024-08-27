import axios, { AxiosResponse } from 'axios';
import { useMutation, UseMutationResult } from 'react-query';
import { RefreshAccessToken } from './Auth';

const AUTH_URL = process.env.REACT_APP_SERVER_ORIGIN;

export const AuthInstance = axios.create({
  baseURL: AUTH_URL,
  timeout: 10000
});

AuthInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    if (accessToken) {
      if (config.headers) {
        config.headers.accessToken = accessToken;
      }
    }
    if (refreshToken) {
      if (config.headers) {
        config.headers.refreshToken = refreshToken;
      }
    }
    return config;
  },
  (error: any) => Promise.reject(error)
);

AuthInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: any) => {
    if (axios.isAxiosError(error) && error.response) {
      const { status } = error.response.data;
      const refreshToken = localStorage.getItem('refreshToken');

      if (status === 403) {
        if (refreshToken) {
          const { mutate: loginMutate }: UseMutationResult<any, Error, void> =
            useMutation(RefreshAccessToken, {
              onSuccess: (res: AxiosResponse) => {
                if (error.config) {
                  if (error.config.headers) {
                    error.config.headers.accessToken = res.data.accessToken;
                  }
                  return axios.request(error.config);
                }
              },
              onError: () => {
                alert('로그인이 필요한 서비스입니다.');
              }
            });

          loginMutate();
        } else {
          throw error;
        }
      } else {
        throw error;
      }
    } else {
      throw error;
    }
  }
);

export const DefaultInstance = axios.create({
  baseURL: AUTH_URL,
  timeout: 10000
});
