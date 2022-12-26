import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MailContextProvider } from "./context/mailContext";
import "./main.scss";
import RProvider from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MailContextProvider>
      <RProvider>
        <App />
      </RProvider>
    </MailContextProvider>
  </React.StrictMode>
);
