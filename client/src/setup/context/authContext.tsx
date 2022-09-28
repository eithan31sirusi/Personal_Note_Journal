import { createContext, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

interface IAuthContext {
  children?: React.ReactNode;
  userId?: string | null;
  pageId?: string | null;
  setUserId?: (userId: string | null) => void;
  setIsAuth?: (isAuth: boolean) => void;
  login?: (userId: any) => void;
  logout?: () => void;
  getPageId?: (pageId: string | null) => void;
}

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  pageId: null,
  login: (userId: string | null) => {},
  logout: () => {},
  getPageId: (pageId: string | null) => {},
});

export const AuthContextProvider: React.FC<IAuthContext> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState<any>(null);
  const [pageId, setPageId] = useState<any>(null);

  const loginHandler = useCallback((uid: string | null) => {
    setIsLoggedIn(true);
    console.log(isLoggedIn);
    setUserId(uid);
  }, []);

  // get page id function
  const setPageIdHandler = useCallback((pageId: string | null) => {
    setPageId(pageId);
  }, []);

  const logoutHandler = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  const value = {
    isLoggedIn,
    userId: userId,
    pageId: pageId,
    login: loginHandler,
    logout: logoutHandler,
    getPageId: setPageIdHandler,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
