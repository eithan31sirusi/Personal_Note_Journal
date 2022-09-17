import styled from "styled-components";

interface ModalBoxProps {
  setTop?: string;
  setLeft?: string;
}

// modal dark background
export const ModalDarkBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;
`;

// container for modal box
export const ModalBoxContainer = styled.div<ModalBoxProps>`
  width: 600px;
  height: 700px;
  overflow: unset;
  position: absolute;
  top: ${({ setTop }) => (setTop ? setTop : "40%")};
  left: ${({ setLeft }) => (setLeft ? setLeft : "50%")};
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  z-index: 3;
`;

// ModalHeader
export const ModalHeader = styled.div`
  width: 78%;
  display: flex;
  margin-bottom: 0.2rem;
  justify-content: space-between;
  align-items: flex-start;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 400;
  color: #526026;
  font-size: 2rem;
`;

// ModalBody
export const ModalBody = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// ModalFooter for the buttons
export const ModalFooter = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
`;
