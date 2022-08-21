import styled from "styled-components";

// selection dropdown container
export const DropDownContainer = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  margin: 0 0 0.2rem 0;
`;

export const DropDownLabel = styled.label`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: rgb(10, 50, 80);
  cursor: pointer;
  transition: ease-in-out 0.5s;
  :hover {
    background: rgba(10, 50, 80, 0.2);
    color: rgba(10, 50, 80, 0.5);
    border: 0px solid rgb(10, 50, 80);
    box-shadow: 0px 0px 30px rgba(30, 50, 80, 1);
  }
`;

export const DropDownSelect = styled.select`
  width: 100%;
  height: 64px;
  border-radius: 5px;
  border: 0px solid rgb(10, 50, 80);
  background: transparent;
  color: rgb(10, 50, 80);
  letter-spacing: 0.5px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: ease-in-out 0.5s;
  :hover {
    background: rgba(10, 50, 80, 0.2);
    color: rgba(10, 50, 80, 0.5);
    border: 0px solid rgb(10, 50, 80);
    box-shadow: 0px 0px 30px rgba(30, 50, 80, 1);
  }
`;
