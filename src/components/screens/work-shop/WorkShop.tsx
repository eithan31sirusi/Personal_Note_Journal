import { useState, useContext } from "react";
import FlipBook from "../../common/flip-book/FlipBook";
import CustomTextArea from "../../common/custom-textArea/CustomTextArea";
import ModalBox from "../../common/modal-box/ModalBox";
import AllertBuble from "../../common/allert-buble/AllertBuble";
// import context from
import { ModalContext } from "../../../setup/context/modalContext";
import { UserPageContext } from "../../../setup/context/userPageContext";
import DragonA from "../../../assets/svg/page-decrations/text-decration/DragonA";
import SelectionDropDown from "../../common/selection-drop-down/SelectionDropDown";

/*     // page number
    pageNumber: 0,
    title: "",
    paragraph: "",
    //simbole  variable that resive an svg conponent
    simbole: <></>,
    // current date stamp
    date: new Date(), */

// add new page interface
interface IProps {}

const WorkShop: React.FC<IProps> = ({}) => {
  // textarea context
  const { userWirtingData, setUserWirtingData } = useContext(UserPageContext);

  console.log(userWirtingData);

  // function and

  // state to get the text area value from child component
  const [textAreaValue, setTextAreaValue] = useState("");
  const [Text, setText] = useState<any>("");
  // state for the alert bubble
  const [isAlertBuble, setIsAlertBuble] = useState(false);

  // function to extrect the text area value
  const getTextAreaValue = (txtAreaVal: any) => {
    setTextAreaValue(txtAreaVal);
  };

  // function to add new page to the user wirting data
  const addNewPage = () => {
    setUserWirtingData([
      ...userWirtingData,
      {
        pageNumber: userWirtingData.length + 1,
        title: "sssss",
        paragraph: textAreaValue,
        simbole: <DragonA />,
        date: new Date(),
      },
    ]);
  };

  // use the context to get the value of the context with type script
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={addNewPage}>ssss</button>
      <FlipBook paragraph={Text} />
      <button onClick={addNewPage}>add page</button>
      {isModalOpen ? (
        <ModalBox
          clickMode={true}
          onSave={() => {
            setText(textAreaValue);
            // if textAreaValue is not empty add it to the Text state
            /*     if (Text !== "") {
              setText((prevState: any) => {
                return prevState + textAreaValue;
              });
            } else {
              setText(textAreaValue);
            } */
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
            closeModal();
          }}
        >
          <CustomTextArea
            getValue={(textAreaValue) => {
              setTextAreaValue(textAreaValue);
              console.log(textAreaValue, "workShop");
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
      <SelectionDropDown />
    </div>
  );
};

export default WorkShop;
