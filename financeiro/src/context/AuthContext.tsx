import { createContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/router';

interface AuthContextType {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null);
  const router = useRouter();

  const login = (username: string) => {
    if (username === 'admin' || username === 'user') {
      setUser(username);
      router.push('/dashboard'); // Redireciona após login bem-sucedido
    }
  };

  const logout = () => {
    setUser(null);
    router.push('/login'); // Redireciona para login após logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
