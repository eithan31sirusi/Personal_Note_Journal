import React from "react";

import { TextAreaContainer } from "./CustomTextArea.styled";

interface CustomTextAreaProps {
  label?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  cols?: number;
  maxLength?: number;
  disabled?: boolean;
  error?: string;
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  rows,
  cols,
  maxLength,
}) => {
  return (
    <TextAreaContainer textDirection={true}>
      <textarea

        rows={rows}
        cols={cols}
        maxLength={maxLength}
      ></textarea>
    </TextAreaContainer>
  );
};

export default CustomTextArea;
