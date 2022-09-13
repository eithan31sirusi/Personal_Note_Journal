import styled from "styled-components";

// type script export props interface
export interface FlexContainerProps {
    children: React.ReactNode;
    flexDir?: string;
    flexX?: string;
    flexY?: string;
    minHeight?: string;
    margin?: string;
}

// main container
export const FlexContainer = styled.div<FlexContainerProps>`
    display: flex;
    flex-direction: ${({ flexDir }) => (flexDir ? flexDir : "row")};
    align-items: ${({ flexY }) => (flexY ? flexY : "center")};
    justify-content: ${({ flexX }) => (flexX ? flexX : "center")};
    width: fit-content;
    height: 100%;
    min-height: ${({ minHeight }) => (minHeight ? minHeight : "")};
    margin: ${({ margin }) => (margin ? margin : "")};
`;
    

