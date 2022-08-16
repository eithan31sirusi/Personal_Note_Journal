import styled from "styled-components";

import animalSkinImg from "../../../assets/images/animal_skin1.jpg";

interface PageTextContainerProps {
  children: React.ReactNode;
  textDirection: boolean;
}

// text area container
export const TextAreaContainer = styled.div<PageTextContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  border-radius: 10px;
  overflow: auto;
  /* direction ltr rtl acoording to languge styled component function*/
  direction: ${({ textDirection }) => (textDirection ? "rtl" : "ltr")};

  textarea {
    background: url(${animalSkinImg});
    padding: 1rem;
    width: 450px;
    height: 380px;
    font-size: 1rem;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-weight: 600;
    resize: none;

    ::-webkit-scrollbar {
      width: 1em;
    }

    ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.5);
      border-radius: 10px;
    }
  }
`;
