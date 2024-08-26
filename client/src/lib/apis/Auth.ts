import { AuthInstance } from './Axios';

export const RefreshAccessToken = async (params: any) => {
  const { data } = await AuthInstance.post(`/jwt/`, params);
  return data;
};
