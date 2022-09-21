import { createContext, useState } from "react";

interface IAuthContext {
  children?: React.ReactNode;
  token?: string;
  setToken?: (token: string) => void;
  userId?: string;
  setUserId?: (userId: string) => void;
  isAuth?: boolean;
  setIsAuth?: (isAuth: boolean) => void;
  login?: (token: string, userId: string, isAuth: boolean) => void;
  logout?: () => void;
}

export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider: React.FC<IAuthContext> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = () => {
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const value = {
    isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
