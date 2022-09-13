import { useState, useEffect, useContext } from "react";
import {
  FlipBookContainer,
  SinglePageContainer,
  PageSymbolContainer,
} from "./FlipBook.styled";

// modal context
import { ModalContext } from "../../../setup/context/modalContext";
import { SelectDropDwonContext } from "../../../setup/context/selectDropDwonContext";

import { getCurrentDate } from "../../../helpers/getCurrentDate";
import { outPutSelectedSVG } from "../../../setup/config/svgParagraphDecortion";

import SelectionDropDown from "../selection-drop-down/SelectionDropDown";
import CustomInput from "../custom-input/CustomInput";

interface FlipBookProps {
  paragraph?: string;
  onPageChange?: (page: number) => void;
  openModal?: () => void;
  setPageSimbole?: (simbole: React.FC) => void;
}

const FlipBook: React.FC<FlipBookProps> = ({ paragraph }) => {
  const [pageSimbole, setPageSimbole] = useState<any>("");

  const { setIsModalOpen } = useContext(ModalContext);
  const { selectedValue, isOpen, setIsOpen } = useContext(
    SelectDropDwonContext
  );

  const openSVGMode = () => {
    setIsOpen(true);
  };
  // use effect to render the svg component according to the selected value switch case
  useEffect(() => {
    outPutSelectedSVG(selectedValue, setPageSimbole, false);
  }, [selectedValue]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <FlipBookContainer>
      <div id="book" className="book">
        <SinglePageContainer>
          <div className="page-header">
            <p className="page-date">{getCurrentDate()}</p>
          </div>
          {isOpen ? <SelectionDropDown /> : null}

          <div id="f1" className="page-content">
            <CustomInput
              id="title"
              maxLength={25}
              type="text"
              placeholder="הכנס כותרת"
            />

            <div onClick={openSVGMode}>
              <PageSymbolContainer imgFloatDirection={true}>
                {!pageSimbole ? (
                  <div className="symbol-massage">
                    <p>לחץ להוסיף סמל</p>
                  </div>
                ) : (
                  pageSimbole
                )}
              </PageSymbolContainer>

              {paragraph ? (
                <pre onClick={openModal}>
                  <p className="page-text-align">{paragraph}</p>
                </pre>
              ) : (
                <div onClick={openModal} className="paragraph-massege">
                  <p>לחץ כדי להוסיף טקסט</p>
                </div>
              )}
            </div>
          </div>
        </SinglePageContainer>
      </div>
    </FlipBookContainer>
  );
};

export default FlipBook;
