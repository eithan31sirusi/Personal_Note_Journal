import styled from "styled-components";

interface PageTextContainerProps {
  children: React.ReactNode;
  fontSize?: any;
  fontWeight?: any;
  fontFamily?: any;
  textColor?: any;
  borderColor?: any;
  borderRadius?: any;
  backgroundColor?: any;
}

export const TitleContainer = styled.div<PageTextContainerProps>`
  transform: translate(0, -15rem);
  border: ${({ borderColor }) =>
    borderColor ? borderColor : "3px solid black"};
  height: 5rem;
  padding: 0.5rem;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "10px"};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "rgba(0, 0, 0, 0.5)"};
  /* chiled input */
  h1 {
    font-family: ${({ fontFamily }) =>
      fontFamily ||
      `Lucida Sans, Lucida Sans Regular, Lucida Grande,
      Lucida Sans Unicode, Geneva, Verdana, sans-serif`};
    font-size: ${({ fontSize }) => fontSize || "1.5rem"};
    font-weight: ${({ fontWeight }) => fontWeight || "600"};
    background: transparent;
    width: fit-content;
    min-width: 20%;
    min-height: 3rem;
    transition: ease-in-out 0.5s;
    margin: 0;
    color: ${({ textColor }) => textColor || "black"};
  }
`;
