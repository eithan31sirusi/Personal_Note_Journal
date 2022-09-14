import GreenWaxBtn from "../../../assets/svg/buttons/GreenWaxBtn";
import RedWaxBtn from "../../../assets/svg/buttons/RedWaxBtn";
import { FlexContainer } from "../../layout/FlexContainer";
import CustomInput from "../custom-input/CustomInput";
import CustomTextArea from "../custom-textArea/CustomTextArea";
import SelectionDropDown from "../selection-drop-down/SelectionDropDown";
import { EditPageFormContainer } from "./EditPageForm.styled";

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
  return (
    <EditPageFormContainer>
      <FlexContainer flexDir="column" flexY="start" flexX="space-around">
        <CustomInput
          setBorder={true}
          bgColor="rgba(50,50,50,0.6)"
          setFocusBorderColor={true}
          bgImage={true}
          hoverBgColor={false}
        />
        <FlexContainer flexY="start" flexX="space-around" margin="1rem 0 0 0">
          <FlexContainer flexY="start" flexX="space-around" margin="0 0 0 1rem">
            {" "}
            <CustomTextArea placeholder="כתוב כאן את הטקסט שלך" />
          </FlexContainer>

          <FlexContainer flexDir="column" flexX="start">
            <SelectionDropDown
              setRight="628px"
              setTop="438px"
              position="unset"
            />{" "}
            <FlexContainer flexX="start" flexY="start" margin="1rem 0 0 0 ">
              <span
                onClick={onApproval}
                style={{ width: "90px", margin: "0 0 0 0.8rem" }}
              >
                <GreenWaxBtn />
              </span>
              <span
                onClick={onCencel}
                style={{ width: "90px", margin: "0 0.8rem 0 0" }}
              >
                <RedWaxBtn />{" "}
              </span>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </EditPageFormContainer>
  );
};

export default EditPageForm;
