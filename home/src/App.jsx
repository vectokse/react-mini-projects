import styled from "styled-components";
import Header from "./components/Header";
import ProjectGallery from "./components/ProjectGallery";
import { theme } from "./theme/theme";
import Footer from "./components/Footer";

export default function App() {
  return (
    <StyledApp>
      <Header />
      <ProjectGallery />
      <Footer />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: ${theme.font.family};
  background-color: ${theme.colors.background};
`;
