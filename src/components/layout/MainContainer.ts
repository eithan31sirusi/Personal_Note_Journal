import styled from "styled-components";

// type script export props interface
export interface MainContainerProps {
    children: React.ReactNode;
    appDirection: boolean;
}

// main container
export const MainContainer = styled.div<MainContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: 2px solid blue;
    overflow: auto;
    /* direction ltr rtl acoording to languge styled component function*/
    direction: ${({appDirection}) => appDirection ? 'rtl' : 'ltr'};
`;
