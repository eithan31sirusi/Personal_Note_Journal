import { useState } from "react";
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
  BtnsSwitched?: boolean;
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
  BtnsSwitched,
}) => {
  const [isBtnsSwitched, setIsBtnsSwitched] = useState(BtnsSwitched);

  return (
    <>
      <AllertBubleContainer translateX={translateX} translateY={translateY}>
        <span style={{ textAlign: "center" }}>
          <AllertBubleTitle fontSize={fontSize}>{title}</AllertBubleTitle>
        </span>
        <BtnContainer>
          {isBtnsSwitched ? (
            <>
              <AllertBubleApprovalBtn onClick={onApprove}>
                {approveBtnText}
              </AllertBubleApprovalBtn>
              <AllertBubleCloseBtn onClick={onClose}>
                {closeBtnText}
              </AllertBubleCloseBtn>
            </>
          ) : (
            <>
              <AllertBubleCloseBtn onClick={onClose}>
                {closeBtnText}
              </AllertBubleCloseBtn>
              <AllertBubleApprovalBtn onClick={onApprove}>
                {approveBtnText}
              </AllertBubleApprovalBtn>
            </>
          )}
        </BtnContainer>
      </AllertBubleContainer>{" "}
      <AlertDarkBackground />
    </>
  );
};

export default AllertBuble;
