import React, { createContext, useState } from "react";


interface IProps {
  children?: React.ReactNode;
  // the selected value
  selectedValue?: string;
  // on change function
  setSelectedValue?: (e: any) => void;
  // is the dropdown open
  isOpen?: boolean;
  setIsOpen?: (e: any) => void;

}

export const SelectDropDwonContext = createContext<IProps>({
  selectedValue: "",
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
