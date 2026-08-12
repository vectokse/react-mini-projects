import styled from "styled-components";
import theme from "../../theme/theme";
import { Link } from "react-router";

export default function MenuItem({ icon, label, isActive, link }) {
  return (
    <StyledMenuItem $isActive={isActive}>
      <Link to={link} className="link">
        <i>{icon}</i>
        <span>{label}</span>
      </Link>
    </StyledMenuItem>
  );
}

const StyledMenuItem = styled.li`
  list-style-type: none;

  .link {
    display: flex;
    gap: 10px;
    background-color: ${(props) =>
      props.$isActive ? theme.colors.accentTint : "unset"};
    color: ${(props) =>
      props.$isActive ? theme.colors.accent : theme.colors.textPrimary};
    padding: 14px 10px;
    border-radius: ${theme.radius.md};
    font-family: ${theme.font.family};
    cursor: pointer;
    transition: all 0.15s;
    text-decoration: none;

    &:hover {
      background-color: ${(props) =>
        props.$isActive ? theme.colors.accentTint : theme.colors.surfaceHover};
    }
  }
`;
