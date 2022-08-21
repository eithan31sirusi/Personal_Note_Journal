import { type } from "@testing-library/user-event/dist/type";
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
  // filter the svgParagraphDecortion array  and stored filterd result in svgComponent
  svgComponent?: any;
  setSvgComponent?: (e: any) => void;
  svgItems?: any;
  setSvgItems?: any | undefined;
  selectSvgComponent: any;
  filter?: any;
  setFilter?: (e: any) => void;
}

type DropDwonContextProviderProps = {
  children: React.ReactNode;
};

export const SelectDropDwonContext = createContext<IProps>({
  selectedValue: "",
  setSelectedValue: () => {},
  isOpen: false,
  setIsOpen: () => {},
  svgParagraphDecortion: svgParagraphDecortion,
  selectSvgComponent: () => {},
  svgItems: [],
  setSvgItems: () => {},
  svgComponent: [],
  setSvgComponent: () => {},
  filter: "",
  setFilter: () => {},
});

export const SelectDropDwonContextProvider = ({
  children,
}: DropDwonContextProviderProps) => {
  const [selectedValue, setSelectedValue] = useState<any | undefined>("");
  const [isOpen, setIsOpen] = useState<any>(false);
  const [svgItems, setSvgItems] = useState(svgParagraphDecortion);
  // state for the filterd result

  const [svgComponent, setSvgComponent] = useState(svgParagraphDecortion);
  const [filter, setFilter] = useState("");
  console.log(svgItems, "svgItems");

  // function to set the svg component according to the selected value
  const selectSvgComponent = (selectedValue: any) => {
    setFilter(selectedValue);
    const svgFilterd = svgParagraphDecortion.filter(({ label }) =>
      label.includes(filter)
    );

    // set the additional state here
    setSvgComponent(svgFilterd);
    console.log(svgFilterd, "svgComponent");
    return svgFilterd;
  };

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
    setFilter,
    filter,
  };
  return (
    <SelectDropDwonContext.Provider value={value}>
      {children}
    </SelectDropDwonContext.Provider>
  );
};
