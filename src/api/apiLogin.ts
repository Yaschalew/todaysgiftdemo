import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = process.env.REACT_APP_BASE_URL;

interface User {
  email: string;
  password: string;
}

type Login = User; 

const api = axios.create({
    baseURL: API_BASE_URL,
  });

export const loginUser = async (userData: Partial<User>): Promise<Login> => {
  try {
    const response: AxiosResponse<Login> = await api.post(`/users/login`, {
      userData
    });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};
