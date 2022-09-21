import { useState, useContext, useEffect } from "react";
import FlipBook from "../../common/flip-book/FlipBook";
import CustomTextArea from "../../common/custom-textArea/CustomTextArea";
import ModalBox from "../../common/modal-box/ModalBox";
import AllertBuble from "../../common/allert-buble/AllertBuble";
import CandleAnimation from "../../../assets/animation/candle-nimation/CandleAnimation.component";

import { ModalContext } from "../../../setup/context/modalContext";
import { UserPageContext } from "../../../setup/context/userPageContext";

import { SelectDropDwonContext } from "../../../setup/context/selectDropDwonContext";

import { PageContainer } from "../../layout/PageContainer";
import AddPageBtn from "../../../assets/svg/buttons/AddPageBtn";
import ResetBtn from "../../../assets/svg/buttons/ResetBtn";

interface IProps {}

const WorkShop: React.FC<IProps> = ({}) => {
  // textarea context
  const {
    userWirtingData,
    setUserWirtingData,
    inputValue,
    setInputValue,
    resetTextAreaValue,
  } = useContext(UserPageContext);

  // use the context to get the value of the context with type script
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
  // context of selecteddropdown
  const { selectedValue, setSelectedValue } = useContext(SelectDropDwonContext);

  // state to get the text area value from child component
  const [textAreaValue, setTextAreaValue] = useState("");

  // state to get the text area value from child component
  const [Text, setText] = useState<any>("");
  // state to get the title of the page

  // state for the alert bubble
  const [isAlertBuble, setIsAlertBuble] = useState(false);

  // state for the alert in the add page
  const [isAlertBubleAddPage, setIsAlertBubleAddPage] = useState(false);

  // state for the userwriting data
  const [pagesList, setPagesList] = useState<any>(
    JSON.parse(localStorage.getItem("userWirtingData") || "[]")
  );

  const addNewPage = () => {
    // check if the text area is empty

    setPagesList([
      ...pagesList,
      {
        id: userWirtingData.length,
        //  pageNumber: pageNumber,
        title: inputValue,
        paragraph: Text,
        symbole: selectedValue,
        date: new Date().toDateString(),
      },
    ]);
    setUserWirtingData(pagesList);

    localStorage.setItem("userWirtingData", JSON.stringify(pagesList));

    setSelectedValue("");
    setText("");
    resetTextAreaValue();
    setInputValue("");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // function for reset page content
  const resetPageContent = () => {
    setText("");
    setTextAreaValue("");
    setInputValue("");
    setSelectedValue("");
  };

  useEffect(() => {
    if (pagesList) {
      setUserWirtingData(pagesList);
    }
    localStorage.setItem("userWirtingData", JSON.stringify(pagesList));
    console.log(userWirtingData, "userWirtingData workshop2");
  }, [pagesList, userWirtingData, setUserWirtingData]);

  return (
    <div>
      <PageContainer flexDir="row" flexX="flex-start" flexY="flex-start">
        <span style={{ width: "70px", cursor: "pointer" }}>
          <AddPageBtn
            ClickHandler={() => {
              if (textAreaValue === "") return alert("יש לכתוב טקסט לעמוד");
              setIsAlertBubleAddPage(true);
            }}
          />
          <ResetBtn ClickHandler={resetPageContent} />
        </span>
        {isAlertBubleAddPage && (
          <AllertBuble
            onClose={() => {
              setIsAlertBubleAddPage(false);
            }}
            title="האם לשמור את העמוד ?"
            onApprove={() => {
              addNewPage();
              setTextAreaValue("");
              setText("");
              setInputValue("");
              setSelectedValue("");
              setIsAlertBubleAddPage(false);
            }}
            BtnsSwitched={true}
            closeBtnText="ביטול"
            approveBtnText="שמור"
            translateX="-10.2rem"
            translateY="-2.5rem"
          />
        )}

        <FlipBook paragraph={Text} />

        {isModalOpen ? (
          <ModalBox
            clickMode={true}
            onSave={() => {
              if (isAlertBuble) return;
              setText(textAreaValue);
              closeModal();
            }}
            onCancel={() => {
              if (!textAreaValue) {
                closeModal();
                setTextAreaValue(textAreaValue);

                setIsAlertBuble(false);
              } else {
                setIsAlertBuble(true);
              }
            }}
            onClose={() => {
              if (isAlertBuble) return;
              closeModal();
            }}
          >
            <CustomTextArea
              maxLength={1700}
              getValue={(textAreaValue) => {
                setTextAreaValue(textAreaValue);
              }}
              value={textAreaValue}
            />
          </ModalBox>
        ) : null}

        {isAlertBuble ? (
          <AllertBuble
            onClose={() => {
              setIsAlertBuble(false);
            }}
            title="ייתכן ויש שינויים שלא ישמרו, האם לסגור?"
            onApprove={() => {
              resetTextAreaValue();
              setIsAlertBuble(false);
              closeModal();
            }}
            closeBtnText="ביטול"
            approveBtnText="השלך"
            translateX="-10.2rem"
            translateY="-2.5rem"
            BtnsSwitched={true}
          />
        ) : null}
      </PageContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transform: "translateY(-10rem)",
        }}
      >
        <span style={{ transform: "translate(5.5rem,0)" }}>
          <CandleAnimation />
        </span>
        <span style={{ transform: "translate(-10rem,0)" }}>
          <CandleAnimation />
        </span>
      </div>
    </div>
  );
};

export default WorkShop;
