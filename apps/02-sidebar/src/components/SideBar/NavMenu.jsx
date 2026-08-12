import styled from "styled-components";
import { useLocation } from "react-router";
import MenuItem from "./MenuItem";
import { configMenu } from "./configSideBar";
import theme from "../../theme/theme";

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
  padding: 30px 25px;
  border-bottom: 0.15rem solid ${theme.colors.border};

  ${theme.device.isNotShort} {
    padding: 25px 0 0 0;
  }
`;
