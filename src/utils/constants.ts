export const AUTH_STORAGE_KEY = 'employee-manager:auth-session';

export const DEMO_CREDENTIALS = {
  email: 'admin@empresa.com',
  password: '123456',
} as const;

// dummyjson.com não tem a conta "admin@empresa.com" cadastrada, então o login
// de demonstração valida essas credenciais localmente e usa um usuário seed
// da API (https://dummyjson.com/docs/auth) só para obter um token real.
export const DUMMYJSON_SEED_USER = {
  username: 'emilys',
  password: 'emilyspass',
} as const;
