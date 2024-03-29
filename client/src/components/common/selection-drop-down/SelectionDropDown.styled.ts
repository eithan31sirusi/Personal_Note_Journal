import styled from "styled-components";

interface DropDownContainerProps {
  children?: React.ReactNode;
  setTop?: string;
  setRight?: string;
  position?: string;
}

// selection dropdown container
export const DropDownContainer = styled.div<DropDownContainerProps>`
  position: ${({ position }) => (position ? position : "absolute")};
  top: ${({ setTop }) => (setTop ? setTop : "150px")};
  right: ${({ setRight }) => (setRight ? setRight : "-220px")};
  width: 200px;
  height: 64px;
  display: flex;
  background: rgba(191, 101, 80, 0.7);
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  margin: 0 0 0.2rem 0;
  border: 1px solid rgba(191, 101, 80, 0.2);
  option {
    text-align: center;
  }
`;

export const DropDownLabel = styled.label`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 1);

  cursor: pointer;
  transition: ease-in-out 0.5s;
  :hover {
    background: rgba(10, 50, 80, 0.2);
    color: red;
    box-shadow: 0px 0px 30px rgba(30, 50, 80, 1);
  }
`;

export const DropDownSelect = styled.select`
  width: 100%;
  height: 64px;
  border-radius: 5px;
  border: 3px solid #000;
  background: rgba(30, 50, 80, 0.3);
  color: rgba(10, 50, 80, 0.5);
  letter-spacing: 0.5px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: ease-in-out 0.5s;
  -webkit-appearance: none;
  -moz-appearance: none;
  :hover {
    background: rgba(10, 50, 80, 0.2);
    color: rgba(0, 0, 0, 1);
    box-shadow: 0px 0px 30px rgba(30, 50, 80, 1);
  }
  :focus {
    outline: none;
    background: rgba(30, 50, 80, 0.3);
    color: rgba(0, 0, 0, 1);
    border-radius: 5px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 1);
  }
`;
