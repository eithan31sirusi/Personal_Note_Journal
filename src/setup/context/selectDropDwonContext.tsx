import React, { createContext, useState } from "react";
import svgParagraphDecortion from "../../setup/config/svgParagraphDecortion";

interface IProps {
  children?: React.ReactNode;
  // the selected value
  selectedValue?: string;
  // on change function
  setSelectedValue?: (e: any) => void;
  // is the dropdown open
  isOpen?: boolean;
  setIsOpen?: (e: any) => void;
  svgParagraphDecortion?: any;
  selectSvgComponent?: any;
  svgItems?: any;
  setSvgItems?: any;
}

// function to set the svg component according to the selected value
const selectSvgComponent = (selectedValue: any) => {
  let svgComponent = svgParagraphDecortion.filter(
    (item: any) => item.value === selectedValue
  );
// sendind the svg component according to the selected value widthout rewritting the whole function

};

export const SelectDropDwonContext = createContext<IProps>({
  selectedValue: "",
  setSelectedValue: () => {},
  isOpen: false,
  setIsOpen: () => {},
  svgParagraphDecortion: svgParagraphDecortion,
  selectSvgComponent: selectSvgComponent,
  svgItems: [],
  setSvgItems: () => {},
});

export const SelectDropDwonContextProvider = ({ children }: IProps) => {
  const [selectedValue, setSelectedValue] = useState<any | undefined>("");
  const [isOpen, setIsOpen] = useState<any>(false);
  const [svgItems, setSvgItems] = useState(svgParagraphDecortion);
  console.log(svgItems, "svgItems");

  const value = {
    selectedValue,
    setSelectedValue,
    isOpen,
    setIsOpen,
    svgParagraphDecortion,
    selectSvgComponent,
    setSvgItems,
    svgItems,
  };
  return (
    <SelectDropDwonContext.Provider value={value}>
      {children}
    </SelectDropDwonContext.Provider>
  );
};
