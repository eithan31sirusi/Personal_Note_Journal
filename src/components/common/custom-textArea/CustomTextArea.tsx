import { useEffect, useRef, useState } from "react";
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
  const inputRef: any = useRef(null);

  const [inpValue, setInpValue] = useState<string>("");
  // state to set the value of the text area
  useEffect(() => {
    if (value) {
      setInpValue(value);
    }
  } , [value]);

  const onInputChange = (inputValue: string): void => {
    setInpValue(inputValue);
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
        value={value}
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
