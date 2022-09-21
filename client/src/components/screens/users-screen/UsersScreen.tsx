import UsersList from "../../users/UsersList";
const USERS = [
  {
    id: "u1",
    name: "Max Schwarz",
    image:
      "https://images.unsplash.com/photo-1542732270-4a23a9b8f93c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    pages: 3,
  },
];
const UsersScreen = () => {
  return <UsersList items={USERS} />;
};

export default UsersScreen;
