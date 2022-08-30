import React, { useContext, useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import JurnalSinglePage from "../../common/jurnal-single-page/JurnalSinglePage";

import UserPageContext from "../../../setup/context/userPageContext";
import FeatherQuil from "../../../assets/svg/buttons/FeatherQuil";
import BlackArrowBtnRight from "../../../assets/svg/buttons/BlackArrowBtnRight";
import BlackArrowBtnLeft from "../../../assets/svg/buttons/BlackArrowBtnLeft";
import { PageContainer } from "../../layout/PageContainer";
import CustomTitle from "../../common/custom-title/CustomTitle";

interface IProps {}

const JurnalScreen: React.FC<IProps> = ({}) => {
  const { userWirtingData } = useContext(UserPageContext);
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("userWirtingData") || "[]")
  );
  // state to set the page number for the filter func
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  let history = useHistory();

  // useeffect to get all data from the userWirtingData
  useEffect(() => {
    console.log(userWirtingData, "jurnal");
    const items = JSON.parse(localStorage.getItem("userWirtingData") || "null");
    if (items) {
      setItems(items);
    }

    
    console.log(items, "items");
  }, [userWirtingData]);

  return (
    <PageContainer flexDir="row" minHeight="98vh">
      {items.length > 0 ? (
        items
          .filter((item: any) => item.pageNumber === currentPageNumber)
          .map((item: any, index: any) => (
            <>
              <span
                onClick={() => {
                  // if the page number is 1 then the left arrow is disabled
                  if (item.pageNumber === 1) {
                    return;
                  }
                  setCurrentPageNumber(item.pageNumber - 1);
                }}
                style={{ width: "80px", cursor: "pointer" }}
              >
                <BlackArrowBtnRight />
              </span>
              <JurnalSinglePage
                key={index}
                pageNumber={item.pageNumber}
                title={item.title}
                paragraph={item.paragraph}
                symbole={item.symbole}
                date={item.date}
              />
              <span
                onClick={() => {
                  // if the page number is the last page then the right arrow is disabled
                  if (item.pageNumber === items.length) {
                    return;
                  }
                  setCurrentPageNumber(item.pageNumber + 1);
                }}
                style={{ width: "80px", cursor: "pointer" }}
              >
                <BlackArrowBtnLeft />
              </span>
            </>
          ))
      ) : (
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomTitle
            titleText="אין עמודים להצגה"
            fontSize="3rem"
            fontWeight="300"
            textColor="rgba(255, 255, 220, 1)"
          />
          <FeatherQuil
            SVGwidth="5rem"
            clickHandler={() => {
              history.push("/workshop");
            }}
          />
        </span>
      )}
    </PageContainer>
  );
};

export default JurnalScreen;
