import styled from "styled-components";

export const LabelContainer = styled.div`
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

    ::placeholder {
      color: rgba(0, 0, 0, 0.5);
    }
    /* focus */
    :focus {
      outline: none;
      border: 0px solid rgb(10, 50, 80);
      border-radius: 5px;
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 1);
    }
  }
`;
