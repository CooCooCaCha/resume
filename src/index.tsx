import React from "react";
import ReactDOM from "react-dom/client";
import { config } from "@fortawesome/fontawesome-svg-core";
import "./index.css";

import Resume from "./Resume";

config.autoAddCss = false;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>,
);
