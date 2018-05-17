import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

import Resume from "./Resume";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i');
  
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }
`;

ReactDOM.render(<Resume />, document.getElementById("root"));
