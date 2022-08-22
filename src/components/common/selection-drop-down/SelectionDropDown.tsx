import { useState, useRef, useEffect, useContext } from "react";

import { SelectDropDwonContext } from "../../../setup/context/selectDropDwonContext";

import { DropDownContainer, DropDownSelect } from "./SelectionDropDown.styled";

interface IProps {
  children?: React.ReactNode;
  text?: string;

  // on change function
  onChange?: (e: any) => void;

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

  onChange,
}) => {
  // context for select drop down
  const { selectedValue, setSelectedValue, svgItems, selectSvgComponent } =
    useContext(SelectDropDwonContext);

  return (
    <DropDownContainer>
      <DropDownSelect
        name="text decoration"
        id="textdecoration"
        onChange={(e: any) => {
          setSelectedValue && setSelectedValue(e.target.value);
          selectSvgComponent(e.target.value);
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
