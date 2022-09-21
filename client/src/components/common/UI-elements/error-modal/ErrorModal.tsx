import React from "react";

interface IProps {
  error: string;
  onClear: () => void;
}

const ErrorModal: React.FC<IProps> = ({ error, onClear }) => {
  return (
    <div>
      <p>{error}</p>
    </div>
  );
};

export default ErrorModal;
