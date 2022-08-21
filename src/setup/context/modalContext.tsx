import { createContext, useState } from "react";

// interface for context for is modal open
interface ModalContextInterface {
  isModalOpen?: any;
  setIsModalOpen?: any;
}

type ModalContextProviderProps = {
  children: React.ReactNode;
};
// state to add area content to the flip book paragraph


// function to add text area content in to the flip book paragraph


// create context for is modal open
export const ModalContext = createContext<ModalContextInterface>({
  isModalOpen: false,
  setIsModalOpen: () => {},
});

// provider for context for is modal open and exporting the value
export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState ("");

  const addAreaContent = (txtAreaVal: any) => {
    setTextAreaValue(txtAreaVal);
  }
  
  const value = {
    isModalOpen,
    setIsModalOpen,
    addAreaContent
  };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalContext;
