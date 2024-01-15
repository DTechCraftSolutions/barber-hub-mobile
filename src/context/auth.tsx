import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { setToken, getToken, removeToken } from "../lib/asyncStorage";
type UserToken = string | null;

interface AuthContextType {
  userToken: UserToken;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userToken, setUserToken] = useState<UserToken>(null);

  useEffect(() => {
    loadTokenFromStorage();
  }, []);

  const loadTokenFromStorage = async () => {
    try {
      const token = await getToken();
      setUserToken(token);
    } catch (error) {
      console.error("Erro ao carregar token do AsyncStorage:", error);
    }
  };

  const login = async (token: string) => {
    try {
      await setToken(token);
      setUserToken(token);
    } catch (error) {
      console.error("Erro ao salvar token no AsyncStorage:", error);
    }
  };

  const logout = async () => {
    try {
      await removeToken();
      setUserToken(null);
    } catch (error) {
      console.error("Erro ao remover token do AsyncStorage:", error);
    }
  };

  const isAuthenticated = async () => {
    try {
      const token = await getToken();
      return !!token;
    } catch (error) {
      console.error("Erro ao verificar autenticação no AsyncStorage:", error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ userToken, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser utilizado dentro de um AuthProvider");
  }

  return context;
};
