
import BlackArrowBtnLeft from "../../../assets/svg/buttons/BlackArrowBtnLeft";
import BlackArrowBtnRight from "../../../assets/svg/buttons/BlackArrowBtnRight";
import { outPutSelectedSVG } from "../../../setup/config/svgParagraphDecortion";
import { useContext, useEffect, useState } from "react";
import { FlipBookContainer, PageContainer, PageSymbolContainer } from "./JurnalSinglePage.styled";
import UserPageContext from "../../../setup/context/userPageContext";

interface IProps {
  paragraph?: string;
  onPageChange?: (page: number) => void;
  date?: string;
  title?: string;
  pageNumber?: number;
  symbole?: any;
}

const JurnalSinglePage: React.FC<IProps> = ({
  paragraph,
  onPageChange,
  date,
  title,
  pageNumber,
  symbole,
}) => {



// state to render the svg component according to the selected value switch case
    const [pageSimbole, setPageSimbole] = useState<any>("");

    useEffect(() => {
        outPutSelectedSVG(symbole, setPageSimbole,false);
      }, [symbole]);
    
  return (
    <FlipBookContainer>
      <span style={{ width: "80px", cursor: "pointer" }}>
        <BlackArrowBtnRight />
      </span>
      <div id="book" className="book">
        <PageContainer>
          <div className="page-header">
            <p className="page-date">{date}</p>
          </div>

          <div id="f1" className="page-content">
            <h1>{title}</h1>
            <div>
              <PageSymbolContainer imgFloatDirection={true}>
                {pageSimbole}
              </PageSymbolContainer>
              <pre>
                <p className="page-text-align">{paragraph}</p>
              </pre>
            </div>
          </div>
          <p className="current-page">{pageNumber}</p>
        </PageContainer>
      </div>
      ;
      <span style={{ width: "80px", cursor: "pointer" }}>
        <BlackArrowBtnLeft />
      </span>
    </FlipBookContainer>
  );
};

export default JurnalSinglePage;
