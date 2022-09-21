import React, { useContext, useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import JurnalSinglePage from "../../common/jurnal-single-page/JurnalSinglePage";

import UserPageContext from "../../../setup/context/userPageContext";
import { SelectDropDwonContext } from "../../../setup/context/selectDropDwonContext";
import FeatherQuil from "../../../assets/svg/buttons/FeatherQuil";
import CustomTitle from "../../common/custom-title/CustomTitle";

import AllertBuble from "../../common/allert-buble/AllertBuble";
import BlackArrowBtnRight from "../../../assets/svg/buttons/BlackArrowBtnRight";
import BlackArrowBtnLeft from "../../../assets/svg/buttons/BlackArrowBtnLeft";
import DeleteBtn from "../../../assets/svg/buttons/DeleteBtn";

import { PageContainer } from "../../layout/PageContainer";
import EditBtn from "../../../assets/svg/buttons/EditBtn";
import EditPageForm from "../../common/edit-page-form/EditPageForm";
import ModalBox from "../../common/modal-box/ModalBox";
import { FlexContainer } from "../../layout/FlexContainer";
interface IProps {}

const JurnalScreen: React.FC<IProps> = ({}) => {
  const {
    userWirtingData,
    setUserWirtingData,
    deletePage,
    editPage,
    inputValue,
    textAreaVlaue,
    setTextAreaVlaue,
  } = useContext(UserPageContext);
  const { selectedValue, setSelectedValue } = useContext(SelectDropDwonContext);

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("userWirtingData") || "[]")
  );
  // state to set the page number for the filter func
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  // state to not showing the arrow btn when the page is 1 or the last page
  const [isArrowBtn, setIsArrowBtn] = useState("");

  // state for the alert bubble
  const [isAlertBuble, setIsAlertBuble] = useState(false);
  // state for the alert in the edit modal
  const [isAlertBubleEdit, setIsAlertBubleEdit] = useState(false);
  // state for the alert in the delete modal
  const [isAlertBubleCancelEdit, setIsAlertBubleCancelEdit] = useState(false);

  //state for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  let history = useHistory();

  // function for delete the page
  const openModal = () => {
    setIsModalOpen(true);
  };

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
            <FlexContainer key={item.id}>
              {isModalOpen && (
                <ModalBox ClickMode={false} setLeft="48.5%" setTop="50%">
                  <EditPageForm
                    onCencel={() => {
                      if (!textAreaVlaue) {
                        setIsAlertBubleEdit(false);
                        setIsModalOpen(false);
                      } else {
                        setIsAlertBubleEdit(true);
                      }
                    }}
                    onApproval={() => {
                      editPage(
                        item.id,
                        items,
                        setItems,
                        inputValue,
                        textAreaVlaue,
                        selectedValue
                      );
                      setIsAlertBubleCancelEdit(true);
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
                  closeBtnText="ביטול"
                  approveBtnText="מחק"
                  fontSize="1.1rem"
                  onClose={() => {
                    setIsAlertBuble(false);
                  }}
                  onApprove={() => {
                    deletePage(item.id, items, setItems, setCurrentPageNumber);
                    setIsAlertBuble(false);
                  }}
                  translateX="0"
                  BtnsSwitched={true}
                />
              ) : null}
              {isAlertBubleEdit ? (
                <AllertBuble
                  onClose={() => {
                    setIsAlertBubleEdit(false);
                  }}
                  onApprove={() => {
                    setIsAlertBubleEdit(false);
                    setIsModalOpen(false);
                    // set the setTextAreaVlaue to prev state
                    setTextAreaVlaue(item.paragraph);
                  }}
                  title="ייתכן ויש שינויים שלא ישמרו, האם לסגור?"
                  closeBtnText="ביטול"
                  approveBtnText="השלך"
                  translateX="-2.2rem"
                  translateY="1rem"
                />
              ) : null}
              {isAlertBubleCancelEdit ? (
                <AllertBuble
                  onClose={() => {
                    setIsAlertBubleCancelEdit(false);
                  }}
                  onApprove={() => {
                    setIsAlertBubleCancelEdit(false);
                    setIsModalOpen(false);
                  }}
                  title="האם לשמור את השינויים?"
                  closeBtnText="ביטול"
                  approveBtnText="שמור"
                  translateX="-2.2rem"
                  translateY="1rem"
                  BtnsSwitched={true}
                />
              ) : null}
            </FlexContainer>
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
