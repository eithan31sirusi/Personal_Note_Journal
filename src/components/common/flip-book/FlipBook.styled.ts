import styled from "styled-components";

import animalSkinImg from "../../../assets/images/animal_skin1.jpg";

export interface PageTextContainerProps {
  children: React.ReactNode;
  imgFloatDirection: boolean;
}

export const PageContainer = styled.div`
  background-image: url(${animalSkinImg});
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 5px;
  transform-origin: left;
  transition: transform 0.5s;
  /* shadow box */
  border: 1.5px solid #000;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 1);
`;

export const FlipBookContainer = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;

  .book {
    margin: 0 1rem 0 1rem;
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
    font-weight: 600;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }

  .page-text-align,
  pre {
    text-align: "justify";
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-weight: 600;
    font-size: 1.1rem;
    overflow-wrap: break-word;
    max-width: 650px;
    min-width: 650px;
    min-height: 700px;

    :hover {
      background: rgba(80, 0, 0, 0.2);
      border-radius: 5px;
      cursor: pointer;

      transition: ease-in-out 0.5s;
    }
  }

  .current-page {
    position: absolute;
    bottom: 0;
    right: 50%;
    width: fit-content;
    font-size: 1.2rem;
  }

  .page-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0 1rem;
  }

  /* input label */
  .custom-field {
    /* chiled input */
    input {
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      font-size: 1.8rem;
      font-weight: 600;
      background: transparent;
      border: none;
      padding: 0.5rem;
      width: fit-content;
      margin-right: 0.5rem;

      /* focus */
      :focus {
        outline: none;
        border: 2px solid #522026;
        border-radius: 5px;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 1);
      }
    }
  }
`;

export const PageSymbolContainer = styled.div<PageTextContainerProps>`
  width: 150px;
  float: ${({ imgFloatDirection }) => (imgFloatDirection ? "right" : "left")};
  margin: 0 0 5px 5px;

  :hover {
    background: rgba(150, 0, 0, 0.2);
    border-radius: 5px;
    cursor: pointer;

    transition: ease-in-out 0.5s;
  }
`;
