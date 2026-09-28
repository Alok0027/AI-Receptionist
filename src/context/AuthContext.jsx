import { createContext, useContext, useEffect, useState } from 'react';
import { authApi, getToken, setToken, clearToken } from '../lib/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setLoading(false);
      return;
    }
    authApi
      .me()
      .then(({ business }) => setBusiness(business))
      .catch(() => clearToken())
      .finally(() => setLoading(false));
  }, []);

  const login = async (email, password) => {
    const { token, business } = await authApi.login({ email, password });
    setToken(token);
    setBusiness(business);
    return business;
  };

  const register = async (payload) => {
    const { token, business } = await authApi.register(payload);
    setToken(token);
    setBusiness(business);
    return business;
  };

  const logout = () => {
    clearToken();
    setBusiness(null);
  };

  return (
    <AuthContext.Provider value={{ business, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
};
