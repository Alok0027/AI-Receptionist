const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';
const TOKEN_KEY = 'ai_receptionist_token';

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);
export const clearToken = () => localStorage.removeItem(TOKEN_KEY);

async function request(path, { method = 'GET', body, auth = true } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  if (auth) {
    const token = getToken();
    if (token) headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (res.status === 204) return null;

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || `Request failed with status ${res.status}`);
  }
  return data;
}

export const authApi = {
  register: (payload) => request('/api/auth/register', { method: 'POST', body: payload, auth: false }),
  login: (payload) => request('/api/auth/login', { method: 'POST', body: payload, auth: false }),
  me: () => request('/api/auth/me'),
};

export const callsApi = {
  list: (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return request(`/api/calls${qs ? `?${qs}` : ''}`);
  },
  stats: () => request('/api/calls/stats'),
  create: (payload) => request('/api/calls', { method: 'POST', body: payload }),
  update: (id, payload) => request(`/api/calls/${id}`, { method: 'PATCH', body: payload }),
};

export const appointmentsApi = {
  list: (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return request(`/api/appointments${qs ? `?${qs}` : ''}`);
  },
  create: (payload) => request('/api/appointments', { method: 'POST', body: payload }),
  update: (id, payload) => request(`/api/appointments/${id}`, { method: 'PATCH', body: payload }),
  remove: (id) => request(`/api/appointments/${id}`, { method: 'DELETE' }),
};

export const knowledgeApi = {
  list: () => request('/api/knowledge'),
  create: (payload) => request('/api/knowledge', { method: 'POST', body: payload }),
  update: (id, payload) => request(`/api/knowledge/${id}`, { method: 'PATCH', body: payload }),
  remove: (id) => request(`/api/knowledge/${id}`, { method: 'DELETE' }),
};

export const dashboardApi = {
  summary: () => request('/api/dashboard/summary'),
};
