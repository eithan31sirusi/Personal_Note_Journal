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
  const { userWirtingData, setUserWirtingData } = useContext(UserPageContext);
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("userWirtingData") || "[]")
  );
  // state to set the page number for the filter func
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  // state to not showing the arrow btn when the page is 1 or the last page
  const [isArrowBtn, setIsArrowBtn] = useState("");

  let history = useHistory();

  // functio for edit the page
  const editPage = (id: number) => {
    history.push(`/edit-page/${id}`);

    console.log(id, "id");
  };
  // function for delete the page
  const deletePage = (id: number) => {
    setItems(items.filter((item: any) => item.id !== id));
    setUserWirtingData(items);

    localStorage.setItem("userWirtingData", JSON.stringify(items));

    // after delete the page we need to set the page number to 1
    setCurrentPageNumber(0);
  };

  // useeffect to get all data from the userWirtingData

  useEffect(() => {
    if (items) {
      setUserWirtingData(items);
    }

    localStorage.setItem("userWirtingData", JSON.stringify(items));
    console.log(items, "items");
    console.log(userWirtingData, "userWirtingData jurnal");
  }, [items, setUserWirtingData, userWirtingData]);

  // useeffect for showing the arrow btn when the page is 1 or the last page
  useEffect(() => {
    if (currentPageNumber === 0) {
      setIsArrowBtn("left");
    } else if (currentPageNumber === userWirtingData.length - 1) {
      setIsArrowBtn("right");
    } else {
      setIsArrowBtn("");
    }
  }, [currentPageNumber, userWirtingData.length]);

  return (
    <PageContainer flexDir="row" minHeight="98vh">
      {userWirtingData.length ? (
        userWirtingData
          .filter((item: any, index: any) => index === currentPageNumber)
          .map((item: any) => (
            <>
              <span
                onClick={() => {
                  // if the page number is 1 then the left arrow is disabled
                  if (currentPageNumber === 0) {
                    return;
                  }
                  setCurrentPageNumber(currentPageNumber - 1);
                }}
                style={{ width: "80px", cursor: "pointer" }}
              >
                {isArrowBtn === "right" ? <BlackArrowBtnRight /> : null}
                {isArrowBtn === "" ? <BlackArrowBtnRight /> : null}
              </span>
              <button
                onClick={() => {
                  deletePage(item.id);
                }}
              >
                edit page
              </button>
              <JurnalSinglePage
                key={item.id}
                pageNumber={currentPageNumber}
                title={item.title}
                paragraph={item.paragraph}
                symbole={item.symbole}
                date={item.date}
              />
              <span
                onClick={() => {
                  // if the page number is the last page then the right arrow is disabled
                  if (currentPageNumber === items.length - 1) {
                    setIsArrowBtn("left");

                    return;
                  }

                  setCurrentPageNumber(currentPageNumber + 1);
                }}
                style={{ width: "80px", cursor: "pointer" }}
              >
                {isArrowBtn === "left" ? <BlackArrowBtnLeft /> : null}
                {isArrowBtn === "" ? <BlackArrowBtnLeft /> : null}
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
