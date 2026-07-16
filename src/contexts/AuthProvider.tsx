import { useState, type ReactNode } from 'react';
import authService from '../services/authService';
import {
  AUTH_STORAGE_KEY,
  DEMO_CREDENTIALS,
  DUMMYJSON_SEED_USER,
} from '../utils/constants';
import type { AuthSession, LoginCredentials } from '../types/auth';
import { AuthContext } from './AuthContext';

function readStoredSession(): AuthSession | null {
  const stored = localStorage.getItem(AUTH_STORAGE_KEY);

  if (!stored) {
    return null;
  }

  try {
    return JSON.parse(stored) as AuthSession;
  } catch {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<AuthSession | null>(readStoredSession);

  const login = async ({ email, password }: LoginCredentials) => {
    if (
      email !== DEMO_CREDENTIALS.email ||
      password !== DEMO_CREDENTIALS.password
    ) {
      throw new Error('Email ou senha inválidos.');
    }

    const authSession = await authService.login(
      DUMMYJSON_SEED_USER.username,
      DUMMYJSON_SEED_USER.password
    );

    setSession(authSession);
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authSession));
  };

  const logout = () => {
    setSession(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ session, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
