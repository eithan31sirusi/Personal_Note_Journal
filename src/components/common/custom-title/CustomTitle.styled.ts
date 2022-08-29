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
  transform: translate(0, 28%);
  border: ${({ borderColor }) => (borderColor ? borderColor : "1px solid green")};
  height: 5rem;
  padding: 0.5rem;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "10px")};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : "green")};
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
    cursor: pointer;
    transition: ease-in-out 0.5s;
    margin: 0;
    margin-bottom: 3rem;
    color: ${({ textColor }) => textColor || "black"};

    /* focus */
    :focus {
      outline: none;
      border: 0px solid rgb(10, 50, 80);
      border-radius: 5px;
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 1);
    }

    :hover {
      background: rgba(10, 50, 250, 0.2);
      border-radius: 10px;
      cursor: pointer;
      box-shadow: 0px 0px 30px rgba(30, 50, 80, 1);
    }
  }
`;
