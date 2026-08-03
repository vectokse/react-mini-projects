import MenuItem from "./MenuItem";
import styled from "styled-components";
import { useLocation } from "react-router";
import configMenu from "./configMenu";

export default function NavMenu() {
  const { pathname } = useLocation();
  return (
    <StyledNavMenu>
      {configMenu.map((item) => (
        <MenuItem
          key={item.link}
          icon={<item.icon />}
          label={item.label}
          isActive={pathname === item.link}
          link={item.link}
        />
      ))}
    </StyledNavMenu>
  );
}

const StyledNavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
