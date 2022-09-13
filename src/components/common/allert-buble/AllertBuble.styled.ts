import styled from "styled-components";

interface AllertBubleProps {
  children: React.ReactNode;
  fontSize?: string;
  translateX?: string;
  translateY?: string;
}

export const AllertBubleContainer = styled.div<AllertBubleProps>`
  width: 450px;
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 55%;
  backdrop-filter: blur(4.8px);
  border-radius: 20%;
  transform: translate(${({translateX}) => translateX? translateX:"50%"}, ${({translateY}) => translateY? translateY:"50%"});
  transition: transform 0.5s;
  /* shadow box */
  border: 2px solid rgba(0, 0, 30, 0.5);
  box-shadow: 0px 0px 40px rgba(0, 0, 30, 1);
  z-index: 20;
`;

export const AllertBubleTitle = styled.p<AllertBubleProps>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.2rem")};
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 600;
  margin: 1rem 0 0 0;
  z-index: 20;
`;

export const BtnContainer = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  margin: 0 0 0.2rem 0;
`;

export const AllertBubleApprovalBtn = styled.button`
  width: 80px;
  height: 60px;
  border-radius: 50%;
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

export const AllertBubleCloseBtn = styled.button`
  width: 80px;
  height: 60px;
  border-radius: 50%;
  border: 0px solid rgb(230, 1, 20);
  background: transparent;
  letter-spacing: 0.5px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: rgb(230, 1, 20);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: ease-in-out 0.5s;
  :hover {
    background: rgba(230, 1, 20, 0.2);
    color: rgba(230, 1, 20, 0.5);
    border: 0px solid rgb(230, 1, 20);
    box-shadow: 0px 0px 30px rgba(230, 1, 20, 1);
  }
`;

export const AlertDarkBackground = styled.div`
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
  z-index: 0;
`;
