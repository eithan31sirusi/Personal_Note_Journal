import styled from "styled-components";

import animalSkinImg from "../../../assets/images/animal_skin1.jpg";

export interface PageTextContainerProps {
  children: React.ReactNode;
  imgFloatDirection: boolean;
}

export const PageContainer = styled.div`
  background-image: url(${animalSkinImg});
  background-size: cover;
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 5px;
  transform-origin: left;
  transition: transform 0.5s;
`;

export const FlipBookContainer = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  border: 1px solid black;

  .book {
    position: relative;
    width: 680px;
    height: 900px;
  }

  .page-content {
    height: fit-content;
    width: fit-content;
    display: block;
    padding: 0 1rem;
  }

  .page-date {
    font-size: 1rem;
    font-family: "Courier New", Courier, monospace;
  }

  .page-title {
    font-family: "Courier New", Courier, monospace;
    text-align: start;
  }

  .page-text {
    text-align: justify;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-weight: 600;
    font-size: 1.1rem;
  }

  .current-page {
    position: absolute;
    left: 0;
    width: 100%;
    font-size: 1.2rem;
  }

  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;
  }
`;

export const PageTextContainer = styled.div<PageTextContainerProps>`
  width: 150px;
  float: ${({ imgFloatDirection }) => imgFloatDirection ? "right" : "left"};
  margin: 0 0 5px 5px;
`;
