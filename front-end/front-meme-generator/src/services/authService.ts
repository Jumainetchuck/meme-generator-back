import api from './api';
import { User, AuthResponse, LoginCredentials, RegisterData } from '../types';
import { AxiosError } from 'axios';

const authService = {
  register: async (userData: RegisterData): Promise<User> => {
    try {
      const response = await api.post<User>('/auth/register', userData);
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      throw err.response?.data || err;
    }
  },

  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    try {
      const response = await api.post<AuthResponse>('/auth/login', credentials);
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      throw err.response?.data || err;
    }
  },

  getProfile: async (): Promise<User> => {
    try {
      const response = await api.get<User>('/auth/profile');
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      throw err.response?.data || err;
    }
  },

  logout: (): void => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('authToken');
  },

  getToken: (): string | null => {
    return localStorage.getItem('authToken');
  },

  setToken: (token: string): void => {
    localStorage.setItem('authToken', token);
  },

  getUser: (): User | null => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  setUser: (user: User): void => {
    localStorage.setItem('user', JSON.stringify(user));
  },
};

export default authService;