const AUTH_BASE = 'http://localhost:5552/auth';

export interface AuthUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
}

export interface AuthResponse {
  user: AuthUser;
  access_token: string;
}

export async function registerUser(data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}): Promise<AuthResponse> {
  const res = await fetch(`${AUTH_BASE}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Inscription impossible');
  }
  return res.json();
}

export async function loginUser(data: {
  email: string;
  password: string;
}): Promise<AuthResponse> {
  const res = await fetch(`${AUTH_BASE}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Email ou mot de passe incorrect');
  }
  return res.json();
}