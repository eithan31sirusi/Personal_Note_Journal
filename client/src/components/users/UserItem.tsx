import React from "react";
import Avatar from "../common/avater/Avatr";

interface IProps {
  children?: React.ReactNode;
  id?: string;
  name?: string;
  image?: string;
  placeCount?: number;
}

const UserItem: React.FC<IProps> = ({ id, name, image, placeCount }) => {
  return (
    <li>
      <div>
        <div>
          <Avatar image={image} alt={name} />
        </div>
        <div>
          <h2>{name}</h2>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
