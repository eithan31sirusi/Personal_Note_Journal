import { useState, useContext } from "react";

import { useHttpClient } from "../../../hooks/http-hook";

import { FlexContainer } from "../../layout/FlexContainer";
import { AuthContext } from "../../../setup/context/authContext";
import LoadingFireRing from "../../common/UI-elements/loaders/fire-ring/LoadingFireRing";

interface IFormInput {
  email?: string;
  password?: string;
  name?: string;
}

const Auth: React.FC<IFormInput> = () => {
  const { login, isLoggedIn } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(isLoggedIn);

    if (!isLoggedIn) {
      try {
        const responseData = await sendRequest(
          "http://localhost:3001/api/users/login",
          "POST",
          JSON.stringify({
            email,
            password,
          }),
          {
            "Content-Type": "application/json",
          }
        );

        login(responseData.user.id);
      } catch (err: any) {
        console.log(err);
      }
    } else {
      try {
        const responseData = await sendRequest(
          "http://localhost:3001/api/users/signup",
          "POST",
          JSON.stringify({
            name,
            email,
            password,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        login(responseData.user.id);
      } catch (err: any) {
        console.log(err);
      }
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>{error}</h1>
      {isLoading && <LoadingFireRing />}
      <FlexContainer flexDir="column">
        <h2>Login Required</h2>
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          name="name"
          id="name"
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          name="email"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          name="password"
          id="password"
        />
        <button type="submit">Login</button>
      </FlexContainer>
    </form>
  );
};

export default Auth;
