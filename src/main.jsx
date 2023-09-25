import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App";
import { NextUIProvider } from "@nextui-org/react";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
