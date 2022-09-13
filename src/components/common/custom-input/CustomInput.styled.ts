import styled from "styled-components";

interface CustomInputProps {
  children?: React.ReactNode;
  setBorder?: boolean;
  bgColor?: string;
  focusBorderColor?: boolean;
}

export const CustomInp = styled.input<CustomInputProps>`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  background: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};
  border: ${({ setBorder }) => (setBorder ? "2px solid #000" : "none")};
  border-radius: 5px;
  padding: 0.5rem;
  width: fit-content;
  margin-right: 0.5rem;
  cursor: pointer;
  transition: ease-in-out 0.5s;

  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
  /* focus */
  &:focus {
    outline: none;
    /*     */
    border: ${({ focusBorderColor }) =>
      focusBorderColor ? `2px solid black` : "0px solid rgb(10, 50, 80)"};
    border-radius: 5px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 1);
  }

  :hover {
    background: rgba(10, 50, 250, 0.2);
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 30px rgba(30, 50, 80, 1);
  }
`;
