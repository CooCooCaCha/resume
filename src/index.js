import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

import Resume from "./components/Resume";

injectGlobal`
  @font-face {
    font-family: 'Roboto', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Roboto');
  }

  body {
    margin: 0;
  }
`;

ReactDOM.render(<Resume />, document.getElementById("root"));
