import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${theme.colors.background};
    color: ${theme.colors.textPrimary};
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.size.base};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.font.family.heading};
  }
`;

export default GlobalStyle;