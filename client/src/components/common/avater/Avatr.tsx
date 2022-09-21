import React from "react";
import { AvatrWarper, AvatarImg } from "./Avatar.styled";

interface IProps {
  children?: React.ReactNode;
  id?: string;
  alt?: string;
  image?: string;
}

const Avatr: React.FC<IProps> = ({
  id,
  image,
  alt,
}) => {
  return (
    <AvatrWarper>
      <AvatarImg src={image} alt={alt} style={{ width: "100px", height: "100px" }} />
    </AvatrWarper>
  );
};

export default Avatr;
