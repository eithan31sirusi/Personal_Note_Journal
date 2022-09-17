import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// consum the provider and pass it to the app
import { UserPageContextProvider } from "./setup/context/userPageContext";
import { ModalContextProvider } from "./setup/context/modalContext";
import { SelectDropDwonContextProvider } from "./setup/context/selectDropDwonContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ModalContextProvider>
    <SelectDropDwonContextProvider>
      <UserPageContextProvider>
        <App />
      </UserPageContextProvider>
    </SelectDropDwonContextProvider>
  </ModalContextProvider>
);
