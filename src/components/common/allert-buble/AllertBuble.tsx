import React from "react";
import {
  AllertBubleContainer,
  BtnContainer,
  AllertBubleApprovalBtn,
  AllertBubleCloseBtn,
} from "./AllertBuble.styled";

interface IProps {
  children?: React.ReactNode;
  text?: string;
  onDiscard?: () => void;
  onCancel?: () => void;
}

const AllertBuble: React.FC<IProps> = ({
  children,
  text,
  onDiscard,
  onCancel,
}) => {
  return (
    <>
      <AllertBubleContainer>
        <span style={{ textAlign: "center" }}>
          <p>{text}</p>
        </span>
        <BtnContainer>
          <AllertBubleApprovalBtn onClick={onDiscard}>
            השלך
          </AllertBubleApprovalBtn>
          <AllertBubleCloseBtn onClick={onCancel}>ביטול</AllertBubleCloseBtn>
        </BtnContainer>{" "}
      </AllertBubleContainer>{" "}
    </>
  );
};

export default AllertBuble;
