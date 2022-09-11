import React, { createContext, useEffect, useState } from "react";

// interface for context for is modal open
interface userPageContextInterface {
  userWirtingData?: any;
  setUserWirtingData?: any;
  inputValue?: any;
  setInputValue?: any;
  resetInputValue?: any;
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
  resetInputValue: () => {},
});

// provider for context for is modal open and exporting the value
export const UserPageContextProvider = ({
  children,
}: userPageContextProviderProps) => {
  // user wirting data object
  const [userWirtingData, setUserWirtingData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // function to reset the input value
  const resetInputValue = () => {
    setInputValue("");
  };

  const value = {
    userWirtingData,
    setUserWirtingData,
    setInputValue,
    inputValue,
    resetInputValue,
  };
  return (
    <UserPageContext.Provider value={value}>
      {children}
    </UserPageContext.Provider>
  );
};

export default UserPageContext;
