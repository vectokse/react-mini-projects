import styled from "styled-components";
import NavMenu from "./NavMenu";
import theme from "../../theme/theme";
import Social from "./Social";
import Brand from "./Brand";
import { LuPanelLeftOpen } from "react-icons/lu";
import { LuPanelRightOpen } from "react-icons/lu";
import { useState } from "react";
import ToggleButton from "../ToggleButton";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledSideBar $isOpen={isOpen}>
      <div className="btn-wrapper">
        <ToggleButton
          isActive={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          icon={isOpen ? <LuPanelRightOpen /> : <LuPanelLeftOpen />}
          className={"sidebar-btn"}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        />
      </div>
      <Brand />
      <NavMenu />
      <Social />
    </StyledSideBar>
  );
}

const StyledSideBar = styled.aside`
  display: grid;
  grid-template-rows: 80px 1fr 60px;
  position: absolute;
  top: 0;
  left: 0;
  width: 320px;
  min-height: 100vh;
  padding: 25px;
  background-color: ${theme.colors.surface};
  border-right: 0.1rem solid ${theme.colors.border};
  box-shadow: ${theme.shadow.sm};
  transform: translate(${(props) => (props.$isOpen ? 0 : "-100%")});
  transition: transform 0.2s;

  .btn-wrapper {
    position: absolute;
    top: 30px;
    right: -52px;

    .sidebar-btn {
      border-style: solid solid solid none;
      border-radius: 0 ${theme.radius.sm} ${theme.radius.sm} 0;
    }
  }
`;
