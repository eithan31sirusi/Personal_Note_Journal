import { useEffect, useRef, useState, useContext } from "react";
import UserPageContext from "../../../setup/context/userPageContext";
import { TextAreaContainer } from "./CustomTextArea.styled";

interface IProps {
  label?: string;
  getValue?: (value: string) => void;
  placeholder?: string;
  rows?: number;
  cols?: number;
  maxLength?: number;
  disabled?: boolean;
  error?: string;
  value?: any;
}

const CustomTextArea: React.FC<IProps> = ({
  rows,
  cols,
  maxLength,
  getValue,
  value,
}) => {
  const { textAreaVlaue, setTextAreaVlaue } = useContext(UserPageContext);
  const inputRef: any = useRef(null);

  const onInputChange = (inputValue: string): void => {
    setTextAreaVlaue(inputValue);
    getValue && getValue(inputValue);
  };

  // function to get the textarea prev value and sho it in the textarea

  // use effect for ref focus
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <TextAreaContainer textDirection={true}>
      <textarea
        value={textAreaVlaue}
        onChange={(e) => onInputChange(e.target.value)}
        ref={inputRef}
        rows={rows}
        cols={cols}
        maxLength={maxLength}
      ></textarea>
    </TextAreaContainer>
  );
};

export default CustomTextArea;
