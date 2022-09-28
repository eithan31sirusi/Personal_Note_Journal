import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
}
const portal: any = document.getElementById("edit-form-portal");
export const EditFormPortal: React.FC<Props> = ({ children }) => {
  return createPortal(children, portal);
};
