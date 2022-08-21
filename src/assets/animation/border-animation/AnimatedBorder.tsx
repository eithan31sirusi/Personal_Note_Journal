import React from "react";
import { BorderContainer } from "./AnimatedBorder.styles";

interface AnimatedBorderProps {
  children: React.ReactNode;
}

const AnimatedBorder: React.FC<AnimatedBorderProps> = ({ children }) => {
  return <BorderContainer>{children}</BorderContainer>;
};

export default AnimatedBorder;
