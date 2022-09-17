import React, { createContext, useState } from "react";

interface IProps {
  children?: React.ReactNode;
  // the selected value
  selectedValue?: any;
  // on change function
  setSelectedValue?: any;
  // is the dropdown open
  isOpen?: any;
  setIsOpen?: any;
}

export const SelectDropDwonContext = createContext<IProps>({
  selectedValue: () => {},
  setSelectedValue: () => {},
  isOpen: false,
  setIsOpen: () => {},
});

export const SelectDropDwonContextProvider = ({ children }: IProps) => {
  const [selectedValue, setSelectedValue] = useState<any | undefined>("");
  const [isOpen, setIsOpen] = useState<any>(false);

  const value = {
    selectedValue,
    setSelectedValue,
    isOpen,
    setIsOpen,
  };
  return (
    <SelectDropDwonContext.Provider value={value}>
      {children}
    </SelectDropDwonContext.Provider>
  );
};
