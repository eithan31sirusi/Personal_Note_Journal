import { useState, useRef, useEffect, useContext } from "react";

import { SelectDropDwonContext } from "../../../setup/context/selectDropDwonContext";

import { DropDownContainer, DropDownSelect } from "./SelectionDropDown.styled";

interface IProps {
  children?: React.ReactNode;
  text?: string;

  // on change function
  onChange?: (e: any) => void;
  getSelectedVal?: (val: any) => void;
  // array of options
  options?: any;
  // default value
  defaultVal?: any;
  // placeholder
  placeholder?: string;
  // label
}

const SelectionDropDown: React.FC<IProps> = ({
  children,
  text,
  getSelectedVal,
  onChange,
}) => {
  // context for select drop down
  const {
    selectedValue,
    setSelectedValue,
    setSvgItems,
    svgItems,
    selectSvgComponent,
  } = useContext(SelectDropDwonContext);

  // use effect to get the selected value and set the svg component
  useEffect(() => {
    if (selectedValue) {
      setSvgItems(selectSvgComponent(selectedValue));
    }
  }, [selectedValue]);

  return (
    <DropDownContainer>
      <DropDownSelect
        name="text decoration"
        id="textdecoration"
        onChange={(e: any) => {
          setSelectedValue && setSelectedValue(e.target.value);
          selectSvgComponent(e.target.value);
          getSelectedVal && getSelectedVal(e.target.value);
          console.log(selectedValue, "selectedValue");
          console.log(svgItems, "svgItems");
        }}
        value={selectedValue}
      >
        {svgItems.map((item: any) => {
          return (
            <option value={item.value} key={item.id}>
              {item.label}
            </option>
          );
        })}
      </DropDownSelect>
    </DropDownContainer>
  );
};

export default SelectionDropDown;
