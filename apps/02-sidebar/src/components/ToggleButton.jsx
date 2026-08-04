import styled from "styled-components";
import theme from "../theme/theme";

export default function ToggleButton({
  isActive,
  onClick,
  icon,
  label,
  ...extraProps
}) {
  return (
    <StyledToggle onClick={onClick} aria-pressed={isActive} {...extraProps}>
      <i>{icon}</i>
      {label && label}
    </StyledToggle>
  );
}

const StyledToggle = styled.button`
  display: flex;
  gap: 8px;
  padding: 12px 18px;
  background-color: ${theme.colors.surface};
  border-style: solid;
  border-width: 0.1rem;
  border-color: ${theme.colors.border};
  border-radius: ${theme.radius.sm};
  font-size: ${theme.font.size.base};
  cursor: pointer;
  box-shadow: ${theme.shadow.sm};
`;
