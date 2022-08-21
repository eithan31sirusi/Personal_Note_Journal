import { useState, useEffect, useContext } from "react";
import {
  FlipBookContainer,
  PageContainer,
  PageSymbolContainer,
} from "./FlipBook.styled";

// modal context
import { ModalContext } from "../../../setup/context/modalContext";

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

  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  const text = `               לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס
מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף גולר מונפרר סוברט
לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט
ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי
מורגם בורק? לתיג ישבעס. קולהע צופעט למרקוח איבן איף, ברומץ כלרשט
מיחוצים. קלאצי קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף
לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום
ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור,
קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. הועניב
היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף.
זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש
שנרא התידם הכייר וק. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן
קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון
בלרק - וענוף לורם איפסום דולור סיט אמט, לפרומי בלוף קינץ תתיח
לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה
שיצמה ברורק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום,
לפריקך תצטריק לרטי. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן
הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש
ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים
שיצמה ברורק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום,
לפריקך תצטריק לרטי. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן
הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש
ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים
שיצמה ברורק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום,
לפריקך תצטריק לרטי. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן


`;

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
            <p className="page-date">{text.length}</p>
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
                <p className="page-text" >
                  {paragraph}
                </p>
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
