import { outPutSelectedSVG } from "../../../setup/config/svgParagraphDecortion";
import { useEffect, useState } from "react";
import {
  FlipBookContainer,
  PageContainer,
  PageSymbolContainer,
} from "./JurnalSinglePage.styled";

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
    outPutSelectedSVG(symbole, setPageSimbole, false);
  }, [symbole]);

  return (
    <FlipBookContainer>
      <div id="book" className="book">
        <PageContainer>
          <div className="page-header">
            <p className="page-date">{date}</p>
          </div>

          <div id="f1" className="page-content">
            <h1>{title}</h1>
            <div>
              <PageSymbolContainer
                imgFloatDirection={true}
                showSymbol={pageSimbole}
              >
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
    </FlipBookContainer>
  );
};

export default JurnalSinglePage;
