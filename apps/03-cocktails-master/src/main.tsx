import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import GlobalStyle from "./theme/GlobalStyle";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter basename="/react-mini-projects/cocktails-master/">
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
