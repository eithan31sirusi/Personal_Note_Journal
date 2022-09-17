import React from "react";
import GreenWaxBtn from "../../../assets/svg/buttons/GreenWaxBtn";
import RedWaxBtn from "../../../assets/svg/buttons/RedWaxBtn";

import { ModalFooter } from "./CustomBtnGroup.styles";

const CustomBtnGroup = () => {
  return (
    <ModalFooter>
      <span style={{ width: "100px", cursor: "pointer" }}>
        <GreenWaxBtn />
      </span>
      <span style={{ width: "100px", cursor: "pointer" }}>
        <RedWaxBtn />
      </span>
    </ModalFooter>
  );
};

export default CustomBtnGroup;
