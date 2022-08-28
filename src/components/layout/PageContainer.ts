import styled from "styled-components";

// type script export props interface
export interface MainContainerProps {
  children: React.ReactNode;
  flexDir: string;
}

// main container
export const PageContainer = styled.div<MainContainerProps>`
  display: flex;
  flex-direction: ${({ flexDir }) => (flexDir ? flexDir : "row")};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
