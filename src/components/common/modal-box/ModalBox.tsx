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
  body?: any;
  footer?: any;
  onClose?: () => void;
  onOpen?: () => void;
  onCancel?: () => void;
  // SAVE PARAGRAH GREE NBUTTON
  onSave?: () => void;
  isOpen?: boolean;
  // click mode to open the isClickMode
  clickMode?: boolean;
}

const ModalBox: React.FC<ModalBoxProps> = ({
  title,
  body,
  footer,
  onClose,
  onOpen,
  onCancel,
  children,
  onSave,
  clickMode,
}) => {
  // state to add custombutton group to the modal footer
  const [isClickMode, setIsClickMode] = useState(false);

  return (
    <div>
      <ModalBoxContainer>
        <ModalHeader>
          <span>{title}</span>
          {!clickMode ? (
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
