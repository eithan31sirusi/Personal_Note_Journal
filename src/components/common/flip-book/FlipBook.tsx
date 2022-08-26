import { useState, useEffect, useContext } from "react";
import {
  FlipBookContainer,
  PageContainer,
  PageSymbolContainer,
} from "./FlipBook.styled";

// modal context
import { ModalContext } from "../../../setup/context/modalContext";
import { SelectDropDwonContext } from "../../../setup/context/selectDropDwonContext";

import { getCurrentDate } from "../../../helpers/getCurrentDate";
import { outPutSelectedSVG } from "../../../setup/config/svgParagraphDecortion";

import BlackArrowBtnRight from "../../../assets/svg/buttons/BlackArrowBtnRight";
import BlackArrowBtnLeft from "../../../assets/svg/buttons/BlackArrowBtnLeft";
import SelectionDropDown from "../selection-drop-down/SelectionDropDown";
import CustomInput from "../custom-input/CustomInput";

interface FlipBookProps {
  paragraph?: string;
  onPageChange?: (page: number) => void;
  openModal?: () => void;
  setPageSimbole?: (simbole: React.FC) => void;
  getValue?: (value: string) => void;
}

const FlipBook: React.FC<FlipBookProps> = ({ paragraph }) => {
  // state for getting the title of the page
  const [pageTitleVal, setPageTitleVal] = useState<any>(false);
  // state for getting the title of the page

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
        <PageContainer>
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
              getValue={(textAreaValue) => {
                setPageTitleVal(textAreaValue);
                console.log(textAreaValue, "workShop");
              }}
            />

            <div>
              <PageSymbolContainer
                onClick={openSVGMode}
                imgFloatDirection={true}
              >
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
        </PageContainer>
      </div>
    </FlipBookContainer>
  );
};

export default FlipBook;
