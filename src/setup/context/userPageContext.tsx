import React, { createContext, useState } from "react";

// interface for context for is modal open
interface userPageContextInterface {
  userWirtingData?: any;
  setUserWirtingData?: any;
  // user page object
  userPage?: any;
  inputValue?: any;
  setInputValue?: any;
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
});

// provider for context for is modal open and exporting the value
export const UserPageContextProvider = ({
  children,
}: userPageContextProviderProps) => {
  // user wirting data object
  const [userWirtingData, setUserWirtingData] = useState([]);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const addAreaContent = (txtAreaVal: any) => {
    setTextAreaValue(txtAreaVal);
  };

  const value = {
    userWirtingData,
    setUserWirtingData,
    addAreaContent,
    setInputValue,
    inputValue,
  };
  return (
    <UserPageContext.Provider value={value}>
      {children}
    </UserPageContext.Provider>
  );
};

export default UserPageContext;
