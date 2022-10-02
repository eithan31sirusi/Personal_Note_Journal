import React, {
  createContext,
  useState,
  useCallback,
  useEffect,
  useContext,
} from "react";

import { SelectDropDwonContext } from "./selectDropDwonContext";

import { useHistory } from "react-router-dom";

import { AuthContext } from "./authContext";

import { useHttpClient } from "../../hooks/http-hook";

// interface for context for is modal open
interface userPageContextInterface {
  pageId?: string | null;
  getPageId?: (pageId: any) => void;
  userWirtingData?: any;
  setUserWirtingData?: any;
  inputValue?: any;
  setInputValue?: any;
  textAreaVlaue?: any;
  setTextAreaVlaue?: any;
  resetInputValue?: any;
  resetTextAreaValue?: any;
  deletePage?: any;
  editPage?: any;
  singlePage?: any;
  updatePage?: (
    event: any,
    title: string,
    description: string,
    pageSymbol: any
  ) => void;
  loadedPages?: any;
  setLoadedPages?: any;

  // user wirting data object
}

type userPageContextProviderProps = {
  children: React.ReactNode;
};

// user page object

// create context for is modal open
export const UserPageContext = createContext<userPageContextInterface>({
  setUserWirtingData: () => {},
  userWirtingData: [],
  inputValue: "",
  setInputValue: () => {},
  textAreaVlaue: "",
  setTextAreaVlaue: () => {},
  resetInputValue: () => {},
  resetTextAreaValue: () => {},
  deletePage: () => {},
  pageId: null,
  getPageId: (pageId: any) => {},
  singlePage: null,
  updatePage: (
    event: any,
    title: string,
    description: string,
    pageSymbol: any
  ) => {},
  loadedPages: [],
  setLoadedPages: () => {},
});

// provider for context for is modal open and exporting the value
export const UserPageContextProvider = ({
  children,
}: userPageContextProviderProps) => {
  // user wirting data object

  const { userId } = useContext(AuthContext);

  const { selectedValue, setSelectedValue } = useContext(SelectDropDwonContext);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [pageId, setPageId] = useState<any>(null);
  const [singlePage, setSinglePage] = useState<any>();
  const [loadedPages, setLoadedPages] = useState<any>([]);
  const [userWirtingData, setUserWirtingData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [textAreaVlaue, setTextAreaVlaue] = useState("");
  const history = useHistory();
  // function for getting the pageId and store it into state
  const setPageIdHandler = useCallback((pageId: string | null) => {
    setPageId(pageId);
  }, []);

  const editPageHandler = useCallback(
    async (event: any, title: string, description: string, pageSymbol: any) => {
      event.preventDefault();

      try {
        await sendRequest(
          `http://localhost:3001/api/jurnal/${pageId}`,
          "PATCH",
          JSON.stringify({
            title,
            description,
            pageSymbol,
          }),
          {
            "Content-Type": "application/json",
          }
        );
      } catch (err) {
        console.log(err);
      }
      history.push("/workshop");
    },
    [sendRequest, pageId, history]
  );

  // function to reset the input value
  const resetInputValue = () => {
    setInputValue("");
  };

  const resetTextAreaValue = () => {
    setTextAreaVlaue("");
  };

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:3001/api/jurnal/user/${userId}`
        );

        setLoadedPages(responseData.pages);
        console.log("getting pages!", responseData.pages);
      } catch (err) {}
    };

    fetchPages();
  }, [sendRequest, userId, setLoadedPages]);

  /*   useEffect(() => {
    const fetchPage = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:3001/api/jurnal/${pageId}`
        );
        console.log(responseData.page, "page from user context!!!");
        setSinglePage(responseData.page);
      } catch (err) {}
    };
    fetchPage();
  }, [sendRequest, pageId]); */

  const value = {
    userWirtingData,
    setUserWirtingData,
    setInputValue,
    inputValue,
    textAreaVlaue,
    setTextAreaVlaue,
    resetInputValue,
    resetTextAreaValue,
    pageId: pageId,
    getPageId: setPageIdHandler,
    singlePage,
    updatePage: editPageHandler,
    loadedPages,
  };
  return (
    <UserPageContext.Provider value={value}>
      {children}
    </UserPageContext.Provider>
  );
};

export default UserPageContext;
