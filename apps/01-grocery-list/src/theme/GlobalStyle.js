import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
 
  body {
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    background-color: ${theme.colors.background};
    font-family: ${theme.font.family.sans};
  }
`;
