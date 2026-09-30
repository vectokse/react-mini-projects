import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

export default function MainLayout() {
  return (
    <MainLayoutStyled>
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </MainLayoutStyled>
  );
}

const MainLayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .main-content {
    flex: 1;
    z-index: 1;
  }
`;
