import { useState, useEffect, useContext } from "react";
import {
  FlipBookContainer,
  PageContainer,
  PageSymbolContainer,
} from "./FlipBook.styled";

// modal context
import { ModalContext } from "../../../setup/context/modalContext";

import { getCurrentDate } from "../../../helpers/getCurrentDate";

import DragonA from "../../../assets/svg/page-decrations/text-decration/DragonB";

import "./FlipBook.styled.ts";
import BlackArrowBtnRight from "../../../assets/svg/buttons/BlackArrowBtnRight";
import BlackArrowBtnLeft from "../../../assets/svg/buttons/BlackArrowBtnLeft";

interface FlipBookProps {
  title?: string;
  page?: number;
  paragraph?: string;
  simbole?: React.FC;
  onPageChange?: (page: number) => void;
  openModal?: () => void;
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
  const [pageSimbole, setPageSimbole] = useState<any>(false);
  // state for getting the page number of the page
  const [pageNumber, setPageNumber] = useState<any>(false);
  // state for getting the date of the page
  const [pageDate, setPageDate] = useState<any>(false);

  const { setIsModalOpen } = useContext(ModalContext);

  const openModal = () => {
    setIsModalOpen(true);
  };

  // click function to get the value from the modal and set it to the state

  const flipNextPage = () => {};

  const flipPrevPage = () => {};

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

          <div id="f1" className="page-content">
            <label className="custom-field" aria-label="הכנס כותרת">
              <input
                maxLength={25}
                type="text"
                placeholder="הכנס כותרת"
                onChange={(e) => setPageTitle(e.target.value)}
              />
            </label>
            <div>
              <PageSymbolContainer imgFloatDirection={true}>
                <DragonA />
              </PageSymbolContainer>
              <pre onClick={openModal}>
                <p className="page-text">{paragraph}</p>
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
