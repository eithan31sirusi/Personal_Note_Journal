import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface NavProps {
  imgFloatDirection?: boolean;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  textColor?: string;
}
// nav container
export const NavContainer = styled.div<NavProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.8);
  color: rgba(255, 255, 255, 1);
  width: 100%;
  height: 5rem;
  margin-bottom: 3rem;
  border-radius: 10px;
  overflow: auto;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.7);
  transition: all 0.5s;
`;

// left nav container
export const LeftNavContainer = styled.div<NavProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
  height: fit-content;
  margin-right: 1rem;
  margin-left: 1rem;
  border-radius: 10px;
  overflow: auto;
`;

// right nav container
export const RightNavContainer = styled.div<NavProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
  height: fit-content;
  margin-right: 1rem;
  margin-left: 1rem;
  border-radius: 10px;
  overflow: auto;
`;

// Link styled component
export const LinkStyled = styled(NavLink)<NavProps>`
  text-decoration: none;
  color: ${({ textColor }) =>
    textColor ? textColor : "rgba(255, 255, 255, 1)"};
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "600")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.2rem")};
  margin: 0 1rem;
  padding: 0 1rem;
  border-radius: 10px;
  overflow: auto;
  transition: all 0.5s;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.7);
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    color: rgba(0, 0, 0, 0.7);
  }
`;
