import React from "react";

import { TitleContainer } from "./CustomTitle.styled";

interface IProps {
  children?: React.ReactNode;
  titleText?: any;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  textColor?: string;
}

const CustomTitle: React.FC<IProps> = ({
  titleText,
  fontSize,
  fontWeight,
  fontFamily,
  textColor,
}) => {
  return (
    <TitleContainer
      fontSize={fontSize ? fontSize : "1.8rem"}
      fontWeight={fontWeight ? fontWeight : "600"}
      fontFamily={
        fontFamily
          ? fontFamily
          : `Lucida Sans, Lucida Sans Regular, Lucida Grande,
      Lucida Sans Unicode, Geneva, Verdana, sans-serif`
      }
      textColor={textColor ? textColor : "black"}
    >
      <h1>{titleText}</h1>
    </TitleContainer>
  );
};

export default CustomTitle;
