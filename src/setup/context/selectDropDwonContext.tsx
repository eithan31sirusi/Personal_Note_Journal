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
  svgComponent?: any;
  setSvgComponent?: any;
}

// function to set the svg component according to the selected value
const selectSvgComponent = (selectedValue: any) => {
  let svgComponent = svgParagraphDecortion.filter(
    (item: any) => item.value === selectedValue
  );
  // store the reasult in order to pull the svg component from the array
  
  console.log(svgComponent[0].svg, "svgComponent");

  // sendind the svg component according to the selected value widthout rewritting the svgParagraphDecortion array
  return svgComponent[0].svg;
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
  svgComponent: "",
  setSvgComponent: () => {},
});

export const SelectDropDwonContextProvider = ({ children }: IProps) => {
  const [selectedValue, setSelectedValue] = useState<any | undefined>("");
  const [isOpen, setIsOpen] = useState<any>(false);
  const [svgItems, setSvgItems] = useState(svgParagraphDecortion);
  const [svgComponent, setSvgComponent] = useState<any | undefined>(undefined);

  const value = {
    selectedValue,
    setSelectedValue,
    isOpen,
    setIsOpen,
    svgParagraphDecortion,
    selectSvgComponent,
    setSvgItems,
    svgItems,
    setSvgComponent,
    svgComponent,
  };
  return (
    <SelectDropDwonContext.Provider value={value}>
      {children}
    </SelectDropDwonContext.Provider>
  );
};
