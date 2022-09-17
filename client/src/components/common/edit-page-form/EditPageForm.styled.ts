import styled from "styled-components";

export const EditPageFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 75vh;
  height: 54vh;
  padding: 1rem;
  background: rgba(10, 10, 20, 0.9);
  border: 4px solid rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 1);
`;

export const SymbolContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 0.2rem;
transform:translate(0,-1.2rem)
`;
