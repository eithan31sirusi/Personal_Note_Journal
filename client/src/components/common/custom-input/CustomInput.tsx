import { useState, useContext } from "react";

import { getKeyBoardClick } from "../../../helpers/getKeyBoardClick";
import UserPageContext from "../../../setup/context/userPageContext";
import { CustomInp } from "./CustomInput.styled";

interface IProps {
  label?: string;
  getValue?: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  type?: string;
  id?: string;
  disabled?: boolean;
  ariaLabel?: string;
  bgColor?: string;
  setBorder?: boolean;
  setFocusBorderColor?: boolean;
  bgImage?: boolean;
  hoverBgColor?: boolean;
  error?: string;
}

const CustomInput: React.FC<IProps> = ({
  maxLength,
  id,
  type,
  placeholder,
  ariaLabel,
  bgColor,
  setBorder,
  setFocusBorderColor,
  bgImage,
  hoverBgColor,
}) => {
  // context for user context
  const { setInputValue, inputValue } = useContext(UserPageContext);

  const onInputChange = (inputValue: string): void => {
    setInputValue(inputValue);
  };

  return (
    <label aria-label={ariaLabel}>
      <CustomInp
        hoverBgColor={hoverBgColor}
        bgImage={bgImage}
        bgColor={bgColor}
        setBorder={setBorder}
        value={inputValue}
        id={id}
        maxLength={maxLength}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyDown={(e) => {
          getKeyBoardClick(e, "Enter", "title");
        }}
        focusBorderColor={setFocusBorderColor}
      />
    </label>
  );
};

export default CustomInput;
