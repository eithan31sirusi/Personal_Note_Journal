import React, { createContext, useEffect, useState } from "react";

// interface for context for is modal open
interface userPageContextInterface {
  userWirtingData?: any;
  setUserWirtingData?: any;
  inputValue?: any;
  setInputValue?: any;
  textAreaVlaue?: any;
  setTextAreaVlaue?: any;
  resetInputValue?: any;
  deletePage?: any;
  editPage?: any;
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
  deletePage: () => {},
  editPage: () => {},
});

// provider for context for is modal open and exporting the value
export const UserPageContextProvider = ({
  children,
}: userPageContextProviderProps) => {
  // user wirting data object
  const [userWirtingData, setUserWirtingData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [textAreaVlaue, setTextAreaVlaue] = useState("");

  // delete page function /////////////////////////////////////////////////////

  const deletePage = (
    id: number,
    items: any,
    setItems: any,
    setpageNum: any
  ) => {
    setItems(items.filter((item: any) => item.id !== id));
    setUserWirtingData(items);

    localStorage.setItem("userWirtingData", JSON.stringify(items));

    // after delete the page we need to set the page number to 1
    setpageNum(0);
  };

  // function to reset the input value
  const resetInputValue = () => {
    setInputValue("");
  };
  /////////////////////////////////////////////////////////////////////////

  // functio for edit the page //////////////////////////////////////
  const editPage = (
    id: number,
    items: any,
    setItems: any,
    newTitle: string,
    newParagraph: string,
    newSymbol: any
  ) => {
    const newEditPage = items.map((item: any) => {
      if (item.id === id) {
        return {
          ...item,
          title: newTitle,
          paragraph: newParagraph,
          symbole: newSymbol,
        };
      }

      return item;
    });
    setItems(newEditPage);
    localStorage.setItem("userWirtingData", JSON.stringify(newEditPage));
    console.log(newEditPage, "newEditPage");
  };

  const value = {
    userWirtingData,
    setUserWirtingData,
    setInputValue,
    inputValue,
  textAreaVlaue,
  setTextAreaVlaue,

    resetInputValue,
    deletePage,
    editPage,
  };
  return (
    <UserPageContext.Provider value={value}>
      {children}
    </UserPageContext.Provider>
  );
};

export default UserPageContext;
