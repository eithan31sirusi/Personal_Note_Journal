import { useState, useContext } from "react";
import { FlexContainer } from "../../layout/FlexContainer";
import { AuthContext } from "../../../setup/context/authContext";
import LoadingSpinner from "../../common/UI-elements/loading-spinner/LoadingSpinner";

interface IFormInput {
  email?: string;
  password?: string;
  name?: string;
}

const Auth: React.FC<IFormInput> = () => {
  const { login } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState("");

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLogin(true);
      const response = await fetch("http://localhost:3001/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const responseData = await response.json();
      console.log(responseData);
      setIsLogin(false);
      login();
    } catch (err: any) {
      setError(err.message || "Something went wrong, please try again.");
      setIsLogin(false);
    }
  };

  return (
    <form onSubmit={submitHandler}>
  <LoadingSpinner asOverlay/>
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
