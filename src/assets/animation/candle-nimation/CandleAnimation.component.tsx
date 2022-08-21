import React from "react";

import {
  CandleContainer,
  CandleBody,
  CandleStick,
  CandleFlame,
  CandleLight,
} from "./CandleAnimation.styles";

const CandleAnimation = () => {
  return (
    <CandleContainer>
      <CandleBody>
        <CandleLight></CandleLight>
        <CandleFlame></CandleFlame>
        <CandleStick></CandleStick>
      </CandleBody>
    </CandleContainer>
  );
};

export default CandleAnimation;
