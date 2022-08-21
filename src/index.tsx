import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// consum the provider and pass it to the app
import { TextAreaContextProvider } from "./setup/context/textAreaContext";
import { ModalContextProvider } from "./setup/context/modalContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <TextAreaContextProvider>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </TextAreaContextProvider>
);
