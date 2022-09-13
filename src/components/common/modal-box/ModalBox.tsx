// type script FC for generic popup component

import { useContext, useState } from "react";

import GreenWaxBtn from "../../../assets/svg/buttons/GreenWaxBtn";
import RedWaxBtn from "../../../assets/svg/buttons/RedWaxBtn";
import Xbtn from "../../../assets/svg/buttons/Xbtn";

import { ModalContext } from "../../../setup/context/modalContext";

import AllertBuble from "../allert-buble/AllertBuble";
import {
  ModalDarkBackground,
  ModalBoxContainer,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "./ModalBox.styled";

interface ModalBoxProps {
  children: React.ReactNode;
  title?: string;
  onClose?: () => void;
  onOpen?: () => void;
  onCancel?: () => void;
  onSave?: () => void;
  ClickMode?: boolean;
  clickMode?: boolean;
  setTop?: string;
  setLeft?: string;
}

const ModalBox: React.FC<ModalBoxProps> = ({
  title,
  onClose,
  onCancel,
  children,
  onSave,
  clickMode,
  setTop,
  setLeft,
}) => {
  // state to add custombutton group to the modal footer
  const [isClickMode, setIsClickMode] = useState(false);

  return (
    <div>
      <ModalBoxContainer setTop={setTop} setLeft={setLeft}>
        <ModalHeader>
          <span>{title}</span>
          {isClickMode ? (
            <span
              onClick={onClose}
              style={{ width: "22px", cursor: "pointer" }}
            >
              <Xbtn />
            </span>
          ) : null}
        </ModalHeader>
        <ModalBody>{children}</ModalBody>

        {clickMode ? (
          <ModalFooter>
            <span
              onClick={onSave}
              style={{ width: "100px", cursor: "pointer" }}
            >
              <GreenWaxBtn />
            </span>
            <span
              onClick={onCancel}
              style={{ width: "100px", cursor: "pointer" }}
            >
              <RedWaxBtn />
            </span>
          </ModalFooter>
        ) : null}
      </ModalBoxContainer>

      <ModalDarkBackground onClick={onClose} />
    </div>
  );
};

export default ModalBox;
