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
  description?: string;
  title?: string;
  onPageChange?: (page: number) => void;
  openModal?: () => void;
  setPageSimbole?: (simbole: React.FC) => void;
  onApproval?: (e: any) => void;
  onCencel?: () => void;
}

const EditPageForm: React.FC<EditPageFormProps> = ({
  onApproval,
  onCencel,
}) => {
  const { selectedValue, setSelectedValue } = useContext(SelectDropDwonContext);
  const { loadedPages, pageId, setTextAreaVlaue, setInputValue } =
    useContext(UserPageContext);

  const [pageSimbole, setPageSimbole] = useState<any>("");

  /*   useEffect(() => {
    loadedPages &&
      loadedPages.map((page: any) => {
        setInputValue(page?.title);
        setTextAreaVlaue(page?.description);
        setSelectedValue(page?.pageSymbol);

        return page;
      });
  }, [
    setTextAreaVlaue,
    setSelectedValue,
    setInputValue,
    loadedPages,
  ]); */
  useEffect(() => {
    loadedPages &&
      loadedPages
        .filter((item: any, index: any) => item.id === pageId)
        .map((page: any) => {
          setInputValue(page?.title);
          setTextAreaVlaue(page?.description);
          setSelectedValue(page?.pageSymbol);

          return page;
        });
  }, [setTextAreaVlaue, setSelectedValue, setInputValue, loadedPages, pageId]);

  useEffect(() => {
    outPutSelectedSVG(selectedValue, setPageSimbole, false);
  }, [selectedValue]);

  return (
    <EditPageFormContainer>
      <FlexContainer flexDir="column" flexY="start" flexX="space-around">
        <CustomInput
          placeholder={loadedPages?.title}
          setBorder={true}
          bgColor="rgba(50,50,50,0.6)"
          setFocusBorderColor={true}
          bgImage={true}
          hoverBgColor={false}
        />
        <FlexContainer flexY="start" flexX="space-around" margin="1rem 0 0 0">
          <FlexContainer flexY="start" flexX="space-around" margin="0 0 0 1rem">
            <CustomTextArea />
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
              <span style={{ width: "80%" }}>{pageSimbole}</span>
            </SymbolContainer>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </EditPageFormContainer>
  );
};

export default EditPageForm;
