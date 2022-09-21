import React from "react";
import FireAnimation from "../../../../assets/animation/fire-animation/FireAnimation";

import { LoadingContainer, LoadingSpinnerBox } from "./LoadingSpinner.styled";

interface IProps {
  asOverlay?: boolean;
}

const LoadingSpinner: React.FC<IProps> = ({ asOverlay }) => {
  return (
    <LoadingContainer>
      <LoadingSpinnerBox
        className={`${asOverlay && "loading-spinner__overlay"}`}
      />

      <FireAnimation />
    </LoadingContainer>
  );
};

export default LoadingSpinner;
