import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import Resume from "./Resume";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i');
  
body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
}
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <Resume />
  </>,
  document.getElementById("root")
);
