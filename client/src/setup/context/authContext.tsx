import { createContext, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

interface IAuthContext {
  children?: React.ReactNode;
  userId?: string | null;
  setUserId?: (userId: string | null) => void;
  setIsAuth?: (isAuth: boolean) => void;
  login?: (userId: any) => void;
  logout?: () => void;
}

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  login: (userId: string | null) => {},
  logout: () => {},
});

export const AuthContextProvider: React.FC<IAuthContext> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState<any>(null);

  const loginHandler = useCallback((uid: string | null) => {
    setIsLoggedIn(true);
    console.log(isLoggedIn);
    setUserId(uid);
  }, []);

  const logoutHandler = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  const value = {
    isLoggedIn,
    userId: userId,
    login: loginHandler,
    logout: logoutHandler,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
