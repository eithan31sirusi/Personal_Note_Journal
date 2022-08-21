import React, { createContext, useState } from "react";

// interface for context for is modal open
interface TextAreaContextInterface {
  userWirtingData?: any;
  setUserWirtingData?: any;
  // user page object
  userPage?: any;
  // user wirting data object
}

type TextAreaContextProviderProps = {
  children: React.ReactNode;
};

// user page object

// create context for is modal open
export const TextAreaContext = createContext<TextAreaContextInterface>({
  setUserWirtingData: () => {},
  userWirtingData: [{
    pageNumber: 0,
    title: "",
    paragraph: "",
    simbole: <></>,
    date: new Date(), 
  }],
});

// provider for context for is modal open and exporting the value
export const TextAreaContextProvider = ({
  children,
}: TextAreaContextProviderProps) => {
  // user wirting data object
  const [userWirtingData, setUserWirtingData] = useState([{}]);

  const value = {
    userWirtingData,
    setUserWirtingData,
  };
  return (
    <TextAreaContext.Provider value={value}>
      {children}
    </TextAreaContext.Provider>
  );
};

export default TextAreaContext;
