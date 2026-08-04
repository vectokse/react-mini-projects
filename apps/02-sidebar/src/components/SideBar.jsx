import styled from "styled-components";
import NavMenu from "./NavMenu";
import theme from "../theme/theme";
import Social from "./Social";
import Brand from "./Brand";
import { LuPanelLeftOpen } from "react-icons/lu";
import { LuPanelRightOpen } from "react-icons/lu";
import { useState } from "react";
import ToggleButton from "./ToggleButton";

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
  grid-template-rows: 60px 1fr 80px;
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  padding: 20px 20px;
  background-color: ${theme.colors.surface};
  transform: translate(${(props) => (props.$isOpen ? 0 : "-100%")});
  transition: transform 0.2s;

  .btn-wrapper {
    position: absolute;
    top: 25px;
    right: -52px;

    .sidebar-btn {
      border-style: solid solid solid none;
      border-radius: 0 ${theme.radius.sm} ${theme.radius.sm} 0;
    }
  }
`;
