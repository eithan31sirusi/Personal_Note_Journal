import { useState, useRef, useEffect, useContext } from "react";
import { svgParagraphDecortion } from "../../../setup/config/svgParagraphDecortion";

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
  setTop?: string;
  setRight?: string;
  position?: string;
}

const SelectionDropDown: React.FC<IProps> = ({
  setTop,
  setRight,
  position,
}) => {
  // context for select drop down
  const { selectedValue, setSelectedValue, setIsOpen } = useContext(
    SelectDropDwonContext
  );

  return (
    <DropDownContainer setTop={setTop} setRight={setRight} position={position}>
      <DropDownSelect
        name="text decoration"
        id="textdecoration"
        onChange={(e: any) => {
          setSelectedValue && setSelectedValue(e.target.value);
          console.log(selectedValue, "from here");
          setIsOpen && setIsOpen(false);
        }}
        value={selectedValue}
      >
        {svgParagraphDecortion.map((item: any) => {
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
