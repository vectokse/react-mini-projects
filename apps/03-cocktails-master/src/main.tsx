import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import GlobalStyle from "./theme/GlobalStyle";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter basename="/react-mini-projects/cocktails-master/">
      <App />
    </BrowserRouter>
  </StrictMode>,
);
