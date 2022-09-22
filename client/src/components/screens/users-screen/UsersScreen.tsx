import { useEffect, useState } from "react";
import { useHttpClient } from "../../../hooks/http-hook";

import UsersList from "../../users/UsersList";

import LoadingFireRing from "../../common/UI-elements/loaders/fire-ring/LoadingFireRing";

const UsersScreen = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [loadedUsers, setLoadedUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:3001/api/users"
        );

        console.log(responseData);
        setLoadedUsers(responseData.users);
      } catch (err: any) {}
    };
    fetchUsers();
  }, [sendRequest]);

  return (
    <>
      <h1>{error}</h1>
      {isLoading && <LoadingFireRing />}
      {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
    </>
  );
};

export default UsersScreen;
