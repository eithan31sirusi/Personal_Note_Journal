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
import { getKeyBoardClick } from "../../../helpers/getKeyBoardClick";
import "./FlipBook.styled.ts";
import BlackArrowBtnRight from "../../../assets/svg/buttons/BlackArrowBtnRight";
import BlackArrowBtnLeft from "../../../assets/svg/buttons/BlackArrowBtnLeft";
import SelectionDropDown from "../selection-drop-down/SelectionDropDown";

import DragonA from "../../../assets/svg/page-decrations/text-decration/DragonA";
import DragonB from "../../../assets/svg/page-decrations/text-decration/DragonB";
import KngihtA from "../../../assets/svg/page-decrations/text-decration/KnightA";
import KngihtB from "../../../assets/svg/page-decrations/text-decration/KnightB";
import KngihtC from "../../..//assets/svg/page-decrations/text-decration/KnightC";
import KngihtD from "../../..//assets/svg/page-decrations/text-decration/KnightD";

interface FlipBookProps {
  title?: string;
  page?: number;
  paragraph?: string;
  simbole?: React.FC;
  onPageChange?: (page: number) => void;
  openModal?: () => void;
  setPageSimbole?: (simbole: React.FC) => void;
}

const FlipBook: React.FC<FlipBookProps> = ({
  title = "פרק 1",
  paragraph,
  page = "1",
  simbole,
}) => {
  const [Text, setText] = useState<any>("");
  // state for getting the title of the page
  const [pageTitle, setPageTitle] = useState<any>(false);
  // state for getting the paragraph of the page
  const [pageParagraph, setPageParagraph] = useState<any>(false);
  // state for getting the simbole of the page
  const [pageSimbole, setPageSimbole] = useState<any>("");
  // state for getting the page number of the page
  const [pageNumber, setPageNumber] = useState<any>(false);
  // state for getting the date of the page
  const [pageDate, setPageDate] = useState<any>(false);

  const { setIsModalOpen } = useContext(ModalContext);
  const { selectedValue, isOpen, setIsOpen } = useContext(
    SelectDropDwonContext
  );

  // use effect to render the svg component according to the selected value switch case
  useEffect(() => {
    outPutSelectedSVG(selectedValue, setPageSimbole);
  }, [selectedValue]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  // click function to get the value from the modal and set it to the state

  const flipNextPage = () => {};

  const flipPrevPage = () => {};
  // setting the svg component to the page simbole state

  return (
    <FlipBookContainer>
      <span style={{ width: "80px", cursor: "pointer" }}>
        <BlackArrowBtnRight />
      </span>

      <div id="book" className="book">
        <PageContainer>
          <div className="page-header">
            <p className="page-date">{getCurrentDate()}</p>
          </div>
          {isOpen ?<SelectionDropDown />:null}

          <div id="f1" className="page-content">
            <label className="custom-field" aria-label="הכנס כותרת">
              <input
                id="title"
                maxLength={25}
                type="text"
                placeholder="הכנס כותרת"
                onChange={(e) => setPageTitle(e.target.value)}
                onKeyDown={(e) => getKeyBoardClick(e, "Enter", "title")}
              />
            </label>
            <div>
              <PageSymbolContainer imgFloatDirection={true}>
                {pageSimbole}
              </PageSymbolContainer>
              <pre onClick={openModal}>
                <p className="page-text-align">{paragraph}</p>
              </pre>
            </div>
          </div>
          <p className="current-page">{page}</p>
        </PageContainer>
      </div>
      <span style={{ width: "80px", cursor: "pointer" }}>
        <BlackArrowBtnLeft />
      </span>
    </FlipBookContainer>
  );
};

export default FlipBook;
