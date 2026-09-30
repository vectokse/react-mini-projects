import { NavLink } from "react-router";
import styled from "styled-components";
import theme from "../../theme/theme";

interface NavLinkProps {
  label: string;
  link: string;
  before?: React.ReactNode;
}

export default function NavbarLink({
  label,
  link,
  before,
  ...extraprops
}: NavLinkProps) {
  return (
    <NavbarLinkStyled>
      <NavLink to={link} {...extraprops}>
        {before}
        {label}
      </NavLink>
    </NavbarLinkStyled>
  );
}

const NavbarLinkStyled = styled.li`
  a {
    color: ${theme.colors.textSecondary};
    text-decoration: none;
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.size.sm};
    align-items: center;
    display: flex;
    padding: 29px 20px;
    gap: 5px;
    transition: color 0.2s ease;

    &:hover,
    &.active {
      color: ${theme.colors.accent};
    }
  }
`;
