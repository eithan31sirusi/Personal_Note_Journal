import React, { useContext, useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import JurnalSinglePage from "../../common/jurnal-single-page/JurnalSinglePage";

import UserPageContext from "../../../setup/context/userPageContext";
import FeatherQuil from "../../../assets/svg/buttons/FeatherQuil";
import CustomTitle from "../../common/custom-title/CustomTitle";

import AllertBuble from "../../common/allert-buble/AllertBuble";
import BlackArrowBtnRight from "../../../assets/svg/buttons/BlackArrowBtnRight";
import BlackArrowBtnLeft from "../../../assets/svg/buttons/BlackArrowBtnLeft";
import AddPageBtn from "../../../assets/svg/buttons/AddPageBtn";
import DeleteBtn from "../../../assets/svg/buttons/DeleteBtn";

import { PageContainer } from "../../layout/PageContainer";
import EditBtn from "../../../assets/svg/buttons/EditBtn";
import EditPageForm from "../../common/edit-page-form/EditPageForm";
import ModalBox from "../../common/modal-box/ModalBox";
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

  // state for the alert bubble
  const [isAlertBuble, setIsAlertBuble] = useState(false);

  //state for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  let history = useHistory();

  // functio for edit the page
  const editPage = (
    id: number,
    newTitle: string,
    newParagraph: string,
    newSymbol: any
  ) => {
    const newEditPage = items.map((item: any) => {
      if (item.id === id) {
        return {
          ...item,
          title: newTitle,
          paragraph: newParagraph,
          symbole: newSymbol,
        };
      }

      return item;
    });
    setItems(newEditPage);
    localStorage.setItem("userWirtingData", JSON.stringify(newEditPage));
    console.log(newEditPage, "newEditPage");
  };
  // function for delete the page
  const openModal = () => {
    setIsModalOpen(true);
  };

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
              {isModalOpen && (
                <ModalBox ClickMode={false} setLeft="48.5%" setTop="50%">
                  <EditPageForm
                    onCencel={() => {
                      setIsModalOpen(false);
                    }}
                    onApproval={() => {
                      editPage(item.id, "7", "7", EditBtn);
                      setIsModalOpen(false);
                    }}
                  />
                </ModalBox>
              )}
              <span
                style={{
                  transform: "translate(-5rem,-23.5rem)",
                  width: "70px",
                  cursor: "pointer",
                }}
              >
                <EditBtn
                  /*     ClickHandler={() => {
                    editPage(item.id, "1", "1", <AddPageBtn />);
                  }} */
                  ClickHandler={openModal}
                />
                <DeleteBtn
                  ClickHandler={() => {
                    setIsAlertBuble(true);
                  }}
                />
              </span>
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
              {isAlertBuble ? (
                <AllertBuble
                  title="למחוק? הדף לא יהיה ניתן לשחזור לאחר שנמחק"
                  closeBtnText="מחק"
                  approveBtnText="ביטול"
                  fontSize="1.1rem"
                  onClose={() => {
                    deletePage(item.id);
                    setIsAlertBuble(false);
                  }}
                  onApprove={() => {
                    setIsAlertBuble(false);
                  }}
                  translateX="0"
                />
              ) : null}
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
      )}{" "}
    </PageContainer>
  );
};

export default JurnalScreen;
