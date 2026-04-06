'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = Cookies.get('auth-user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Failed to parse auth user');
        Cookies.remove('auth-user');
      }
    }
  }, []);

  const login = (email: string, password: string) => {
    // Mock authentication
    let newUser: User | null = null;
    if (email === 'admin@finance.com' && password === 'admin123') {
      newUser = {
        id: '1',
        name: 'Admin User',
        email: 'admin@finance.com',
        role: 'admin'
      };
    } else if (email && password) {
      newUser = {
        id: '2',
        name: email.split('@')[0],
        email: email,
        role: 'user'
      };
    }

    if (newUser) {
      setUser(newUser);
      Cookies.set('auth-user', JSON.stringify(newUser), { expires: 7 });
      Cookies.set('auth-role', newUser.role, { expires: 7 });
      return true;
    }
    return false;
  };

  const register = (name: string, email: string, password: string) => {
    // Mock registration
    if (name && email && password) {
      const newUser: User = {
        id: Math.random().toString(),
        name,
        email,
        role: 'user'
      };
      setUser(newUser);
      Cookies.set('auth-user', JSON.stringify(newUser), { expires: 7 });
      Cookies.set('auth-role', newUser.role, { expires: 7 });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    Cookies.remove('auth-user');
    Cookies.remove('auth-role');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
