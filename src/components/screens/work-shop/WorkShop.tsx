import { useState, useContext } from "react";
import FlipBook from "../../common/flip-book/FlipBook";
import CustomTextArea from "../../common/custom-textArea/CustomTextArea";
import ModalBox from "../../common/modal-box/ModalBox";
// import context from
import { ModalContext } from "../../../setup/context/modalContext";
import { TextAreaContext } from "../../../setup/context/textAreaContext";
import DragonA from "../../../assets/svg/page-decrations/text-decration/DragonA";

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
  const { userWirtingData, setUserWirtingData } = useContext(TextAreaContext);

  console.log(userWirtingData);

  // function and

  // state to get the text area value from child component
  const [textAreaValue, setTextAreaValue] = useState("");
  const [Text, setText] = useState<any>("");

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
  // modal state
  console.log(isModalOpen, "111111111111");

  const closeModal = () => {
    console.log("222", isModalOpen);
    setIsModalOpen(false);
    console.log("2222", isModalOpen);
  };

  return (
    <div>
      <button onClick={addNewPage}>ssss</button>
      <FlipBook paragraph={Text} />
      <button onClick={addNewPage}>add page</button>
      {isModalOpen ? (
        <ModalBox
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
            closeModal();
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
        </ModalBox>
      ) : null}
    </div>
  );
};

export default WorkShop;
