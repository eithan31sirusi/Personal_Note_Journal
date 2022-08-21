import React from "react";

import { MainContainer } from "./components/layout/MainContainer";

import FlipBook from "./components/common/flip-book/FlipBook";
import CustomTextArea from "./components/common/custom-textArea/CustomTextArea";
import ModalBox from "./components/common/modal-box/ModalBox";
import GreenWaxBtn from "./assets/svg/buttons/GreenWaxBtn";
import RedWaxBtn from "./assets/svg/buttons/RedWaxBtn";
import YellowWaxBtn from "./assets/svg/buttons/YellowWaxBtn";
import WorkShop from "./components/screens/work-shop/WorkShop";

function App() {
  return (
    <MainContainer appDirection={true}>
      <WorkShop />
    </MainContainer>
  );
}

export default App;
