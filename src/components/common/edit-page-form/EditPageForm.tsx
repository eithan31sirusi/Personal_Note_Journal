import { useContext, useEffect, useState } from "react";

import GreenWaxBtn from "../../../assets/svg/buttons/GreenWaxBtn";
import RedWaxBtn from "../../../assets/svg/buttons/RedWaxBtn";
import { FlexContainer } from "../../layout/FlexContainer";
import CustomInput from "../custom-input/CustomInput";
import CustomTextArea from "../custom-textArea/CustomTextArea";
import SelectionDropDown from "../selection-drop-down/SelectionDropDown";
import { EditPageFormContainer, SymbolContainer } from "./EditPageForm.styled";

import { SelectDropDwonContext } from "../../../setup/context/selectDropDwonContext";
import { UserPageContext } from "../../../setup/context/userPageContext";

import { outPutSelectedSVG } from "../../../setup/config/svgParagraphDecortion";

interface EditPageFormProps {
  paragraph?: string;
  title?: string;
  onPageChange?: (page: number) => void;
  openModal?: () => void;
  setPageSimbole?: (simbole: React.FC) => void;
  onApproval?: () => void;
  onCencel?: () => void;
}

const EditPageForm: React.FC<EditPageFormProps> = ({
  onApproval,
  onCencel,
}) => {
  const { selectedValue } = useContext(SelectDropDwonContext);
  const { editPage, userWirtingData } = useContext(UserPageContext);

  const [pageSimbole, setPageSimbole] = useState<any>("");
  const [items, setItems] = useState<any>(userWirtingData);
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");

  useEffect(() => {
    outPutSelectedSVG(selectedValue, setPageSimbole, false);
    console.log(items, "items");
  }, [selectedValue]);

  return (
    <EditPageFormContainer>
      <FlexContainer flexDir="column" flexY="start" flexX="space-around">
        <CustomInput
          getValue={(value) => {
            setTitle(value);
          }}
          setBorder={true}
          bgColor="rgba(50,50,50,0.6)"
          setFocusBorderColor={true}
          bgImage={true}
          hoverBgColor={false}
        />
        <FlexContainer flexY="start" flexX="space-around" margin="1rem 0 0 0">
          <FlexContainer flexY="start" flexX="space-around" margin="0 0 0 1rem">
            <CustomTextArea
              getValue={(value: string) => {
                setParagraph(value);
              }}
              placeholder="כתוב כאן את הטקסט שלך"
            />
          </FlexContainer>

          <FlexContainer flexDir="column" flexX="start">
            <SelectionDropDown
              setRight="628px"
              setTop="438px"
              position="unset"
            />
            <FlexContainer flexX="start" flexY="start" margin="0.1rem 0 0 0 ">
              <span
                onClick={onApproval}
                style={{ width: "85px", margin: "0 0 0 0.8rem" }}
              >
                <GreenWaxBtn />
              </span>
              <span
                onClick={onCencel}
                style={{ width: "85px", margin: "0 0.8rem 0 0" }}
              >
                <RedWaxBtn />
              </span>
            </FlexContainer>
            <SymbolContainer>
              <span style={{ width: "80%" }}>
                {pageSimbole}
                {console.log(pageSimbole, "pageSimbole")}
              </span>
            </SymbolContainer>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </EditPageFormContainer>
  );
};

export default EditPageForm;
