import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Helvetica", "Arial", sans-serif;
    font-size: 20px;
    color: #545b67;
    background-color: #f2f4f7;
  }
`;

export default GlobalStyle;