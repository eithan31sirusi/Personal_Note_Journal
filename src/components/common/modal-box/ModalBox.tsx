// type script FC for generic popup component
import React from "react";




interface ModalBoxProps {
    title: string;
    body: any;
    footer: any;
    onClose: () => void;
    onConfirm: () => void;
    onCancel: () => void;
    isOpen: boolean;
}



const ModalBox: React.FC<ModalBoxProps> = ({ title, body, footer, onClose, onConfirm, onCancel }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const closeModal = () => {
        setIsOpen(false);
    }
    const openModal = () => {
        setIsOpen(true);
    }
    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <ModalHeader>{title}</ModalHeader>
                <ModalBody>{body}</ModalBody>
                <ModalFooter>
                    <button onClick={onClose}>Close</button>
                    <button onClick={onConfirm}>Confirm</button>
                    <button onClick={onCancel}>Cancel</button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalBox;