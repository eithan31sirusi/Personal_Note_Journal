import React from "react";

import { MainContainer } from "./components/layout/MainContainer";

import FlipBook from "./components/common/flip-book/FlipBook";
import CustomTextArea from "./components/common/custom-textArea/CustomTextArea";

function App() {
  return (
    <MainContainer appDirection={true}>
      <h1>Jurnal</h1>
      <CustomTextArea maxLength={1599}/>
    </MainContainer>
  );
}

export default App;
