import { createContext } from 'react';
import type { AuthSession, LoginCredentials } from '../types/auth';

export interface AuthContextValue {
  session: AuthSession | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined
);
