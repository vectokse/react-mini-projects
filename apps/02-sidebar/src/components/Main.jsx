import { useLocation } from "react-router";
import styled from "styled-components";
import theme from "../theme/theme";
import ToggleButton from "./ToggleButton";
import { useContext } from "react";
import { SideBarContext } from "../context/SideBarContext";

function Main() {
  const location = useLocation();
  const pageName =
    location.pathname !== "/" ? location.pathname.slice(1) : "home";

  const { isOpen, setIsOpen } = useContext(SideBarContext);

  return (
    <StyledMain>
      <h2 className="page-title">{pageName}</h2>
      <ToggleButton
        isActive={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  background-color: ${theme.colors.background};
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  font-family: ${theme.font.family};

  .page-title {
    color: ${theme.colors.accent};
    font-size: ${theme.font.size.xl};
    font-weight: ${theme.font.weight.bold};
    text-transform: capitalize;
  }
`;
export default Main;
