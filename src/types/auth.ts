export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
}

export interface AuthSession {
  user: AuthUser;
  token: string;
}
