import { useState, useContext } from "react";

import { getKeyBoardClick } from "../../../helpers/getKeyBoardClick";
import UserPageContext from "../../../setup/context/userPageContext";
import { LabelContainer } from "./CustomInput.styled";

interface IProps {
  label?: string;
  getValue?: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  type?: string;
  id: string;
  disabled?: boolean;
  error?: string;
}

const CustomInput: React.FC<IProps> = ({
  maxLength,
  id,
  type,
  placeholder,
}) => {
  // context for user context
  const { setInputValue, inputValue } = useContext(UserPageContext);

  const onInputChange = (inputValue: string): void => {
    setInputValue(inputValue);
  };

  return (
    <LabelContainer aria-label="הכנס כותרת">
      <input
        value={inputValue}
        id={id}
        maxLength={maxLength}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyDown={(e) => {
          getKeyBoardClick(e, "Enter", "title");
        }}
      />
    </LabelContainer>
  );
};

export default CustomInput;
