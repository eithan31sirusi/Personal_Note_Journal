import React from "react";
import UserItem from "./UserItem";

interface IProps {
  children?: React.ReactNode;
  items?: [] | any;
}

const UsersList: React.FC<IProps> = ({ items }) => {
  if (items && items.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }

  return (
    <ul>
      {items &&
        items.map((user: any) => (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        ))}
    </ul>
  );
};

export default UsersList;
