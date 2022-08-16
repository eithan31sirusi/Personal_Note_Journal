import { useState, useEffect } from "react";
import {
  FlipBookContainer,
  PageContainer,
  PageTextContainer,
} from "./FlipBook.styled";

import DragonA from "../../../assets/svg/page-decrations/text-decration/DragonB";

import "./FlipBook.styled.ts";

interface FlipBookProps {
  title?: string;
  pages?: string[];
  userText?: string;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  currentDate?: any;
}

const FlipBook: React.FC<FlipBookProps> = ({
  title = "פרק 1",
  pages,
  currentDate,
  currentPage = "1",
}) => {
  // is filped state
  const [isCoverFliped, setIsCoverFliped] = useState(false);
  const [isPageFliped, setIsPageFliped] = useState(false);

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

  const openBook = () => {};

  const closeBook = () => {};

  const flipNextPage = () => {};

  const flipPrevPage = () => {};

  return (
    <FlipBookContainer>
      <button onClick={flipPrevPage} className="prev-btn">
        אחורה
      </button>

      <div id="book" className="book">
        <div id="p1">
          <PageContainer>
            <div className="page-header">
              <p className="page-date">{text.length}</p>
            </div>

            <div id="f1" className="page-content">
              <h1 className="page-title">{title}</h1>
              <div>
                <PageTextContainer imgFloatDirection={true}>
                  <DragonA />
                </PageTextContainer>
                <p className="page-text">{text}</p>
              </div>
            </div>
            <p className="current-page">{currentPage}</p>
          </PageContainer>
        </div>
      </div>
      <button className="next-btn" onClick={flipNextPage}>
        קדימה
      </button>
    </FlipBookContainer>
  );
};

export default FlipBook;
