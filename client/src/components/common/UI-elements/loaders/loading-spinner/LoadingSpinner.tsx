import React from "react";

import { LoadingContainer, LoadingSpinnerBox } from "./LoadingSpinner.styled";

interface IProps {
  asOverlay?: boolean;
}

const LoadingSpinner: React.FC<IProps> = () => {
  return (
    <LoadingContainer>
      <LoadingSpinnerBox />
    </LoadingContainer>
  );
};

export default LoadingSpinner;
