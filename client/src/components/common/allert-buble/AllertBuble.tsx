import React from "react";
import {
  AllertBubleContainer,
  BtnContainer,
  AllertBubleApprovalBtn,
  AllertBubleCloseBtn,
  AllertBubleTitle,
  AlertDarkBackground,
} from "./AllertBuble.styled";

interface IProps {
  children?: React.ReactNode;
  title?: string;
  approveBtnText?: string;
  closeBtnText?: string;
  fontSize?: string;
  translateX?: string;
  translateY?: string;
  onApprove?: () => void;
  onClose?: () => void;
}

const AllertBuble: React.FC<IProps> = ({
  children,
  title,
  onApprove,
  onClose,
  approveBtnText,
  closeBtnText,
  fontSize,
  translateX,
  translateY,
}) => {
  return (
    <>
      <AllertBubleContainer translateX={translateX} translateY={translateY}>
        <span style={{ textAlign: "center" }}>
          <AllertBubleTitle fontSize={fontSize}>{title}</AllertBubleTitle>
        </span>
        <BtnContainer>
          <AllertBubleApprovalBtn onClick={onApprove}>
            {approveBtnText}
          </AllertBubleApprovalBtn>
          <AllertBubleCloseBtn onClick={onClose}>
            {closeBtnText}
          </AllertBubleCloseBtn>
        </BtnContainer>
      </AllertBubleContainer>{" "}
      <AlertDarkBackground />
    </>
  );
};

export default AllertBuble;
