import { useState, useContext, useEffect } from "react";
import FlipBook from "../../common/flip-book/FlipBook";
import CustomTextArea from "../../common/custom-textArea/CustomTextArea";
import ModalBox from "../../common/modal-box/ModalBox";
import AllertBuble from "../../common/allert-buble/AllertBuble";
import CandleAnimation from "../../../assets/animation/candle-nimation/CandleAnimation.component";

import { ModalContext } from "../../../setup/context/modalContext";
import { UserPageContext } from "../../../setup/context/userPageContext";

import { SelectDropDwonContext } from "../../../setup/context/selectDropDwonContext";
import FeatherQuil from "../../../assets/svg/buttons/FeatherQuil";

interface IProps {}

const WorkShop: React.FC<IProps> = ({}) => {
  // textarea context
  const { userWirtingData, setUserWirtingData, inputValue, setInputValue } =
    useContext(UserPageContext);

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

  // state for getting the page number of the page
  const [pageNumber, setPageNumber] = useState<any>(userWirtingData.length);

  const addNewPage = () => {
    setUserWirtingData([
      ...userWirtingData,
      {
        id: userWirtingData.length,
        pageNumber: pageNumber,
        title: inputValue,
        paragraph: Text,
        symbole: selectedValue,
        date: new Date().toDateString(),
      },
    ]);

    localStorage.setItem("userWirtingData", JSON.stringify(userWirtingData));
    console.log(localStorage.getItem("userWirtingData"), "local");
    setSelectedValue("");
    setText("");
    setTextAreaValue("");
    // reset the title inputValue of the page
    setInputValue("");
    console.log(inputValue, "inputValue");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // use effect to set the page number to the state
  useEffect(() => {
    setPageNumber(userWirtingData.length + 1);
    // load the data from the local storage
    localStorage.setItem("userWirtingData", JSON.stringify(userWirtingData));

    console.log(userWirtingData, "userWirtingData");
  }, [userWirtingData]);

  return (
    <div>
      <button onClick={addNewPage}>add page</button>
      <FlipBook paragraph={Text} setPageTitleValue={inputValue} />

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
            getValue={(textAreaValue) => {
              setTextAreaValue(textAreaValue);
            }}
            value={textAreaValue}
          />
          {isAlertBuble ? (
            <AllertBuble
              onCancel={() => {
                setIsAlertBuble(false);
              }}
              text="ייתכן ויש שינויים שלא ישמרו, האם לסגור?"
              onDiscard={() => {
                setTextAreaValue(Text);
                setIsAlertBuble(false);
                closeModal();
              }}
            />
          ) : null}
        </ModalBox>
      ) : null}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transform: "translateY(-10rem)",
        }}
      >
        <span style={{ transform: "translate(10rem,0)" }}>
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
