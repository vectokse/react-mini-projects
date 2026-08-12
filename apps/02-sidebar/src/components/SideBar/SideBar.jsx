import styled from "styled-components";
import { useContext } from "react";
import { LuPanelLeftOpen, LuPanelRightOpen } from "react-icons/lu";
import NavMenu from "./NavMenu";
import Social from "./Social";
import Brand from "./Brand";
import ToggleButton from "../ToggleButton";
import theme from "../../theme/theme";
import { SideBarContext } from "../../context/SideBarContext";

export default function SideBar() {
  const { isOpen, setIsOpen } = useContext(SideBarContext);

  return (
    <StyledSideBar $isOpen={isOpen}>
      <div className="btn-wrapper">
        <ToggleButton
          isActive={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          icon={isOpen ? <LuPanelRightOpen /> : <LuPanelLeftOpen />}
          className="sidebar-btn"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        />
      </div>
      {/* Header */}
      <Brand />
      {/* Body */}
      <div className="sidebar-content">
        <NavMenu />
        <Social />
      </div>
    </StyledSideBar>
  );
}

const StyledSideBar = styled.aside`
  display: grid;
  grid-template-rows: 80px 1fr;
  position: fixed;
  top: 0;
  left: 0;
  width: 320px;
  height: 100dvh;
  background-color: ${theme.colors.surface};
  border-right: 0.1rem solid ${theme.colors.border};
  box-shadow: ${theme.shadow.sm};
  transform: translate(${(props) => (props.$isOpen ? 0 : "-100%")});
  transition: transform 0.2s;

  .sidebar-content {
    display: grid;
    grid-template-rows: 1fr 70px;
    overflow-y: auto;

    scrollbar-width: thin;
    scrollbar-color: ${theme.colors.border} transparent;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-button {
      display: none;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.border};
      border-radius: ${theme.radius.sm};
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: ${theme.colors.text};
    }
  }

  .btn-wrapper {
    position: absolute;
    top: 15px;
    right: -52px;

    .sidebar-btn {
      border-style: solid solid solid none;
      border-radius: 0 ${theme.radius.sm} ${theme.radius.sm} 0;
    }

    ${theme.device.isNotShort} {
      top: 30px;
    }

    ${theme.device.mobile} {
      right: ${(props) => (props.$isOpen ? "20px" : "-52px")};

      .sidebar-btn {
        border-style: solid;
        border-width: 1px;
        border-color: ${theme.colors.border};
        border-radius: ${theme.radius.sm};
      }
    }
  }

  ${theme.device.isNotShort} {
    padding: 25px;
  }

  ${theme.device.mobile} {
    width: 100%;
  }
`;
