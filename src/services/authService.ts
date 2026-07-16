import httpClient from '../api/httpClient';
import type { AuthSession } from '../types/auth';

interface DummyJsonLoginResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  accessToken: string;
}

const authService = {
  login: async (username: string, password: string): Promise<AuthSession> => {
    const response = await httpClient.post<DummyJsonLoginResponse>(
      '/auth/login',
      {
        username,
        password,
      }
    );

    const { accessToken, ...user } = response.data;

    return {
      token: accessToken,
      user,
    };
  },
};

export default authService;
