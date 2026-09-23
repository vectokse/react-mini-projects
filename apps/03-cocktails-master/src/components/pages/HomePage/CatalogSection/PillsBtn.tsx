import styled from "styled-components";
import theme from "../../../../theme/theme";

interface PillsBtnProps {
  label: string;
  onClick: () => void;
  isActive: boolean;
  className: string;
}

export default function PillsBtn({ label, onClick, isActive }: PillsBtnProps) {
  return (
    <PillsBtnStyled className={isActive ? "active" : ""} onClick={onClick}>
      {label}
    </PillsBtnStyled>
  );
}

const PillsBtnStyled = styled.button`
  padding: 0.5rem 1rem;
  border-radius: ${theme.radius.full};
  font-family: ${theme.font.family.primary};
  font-size: ${theme.font.size.xs};
  font-weight: ${theme.font.weight.medium};
  cursor: pointer;
  transition: all 0.2s ease;

  background-color: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  color: ${theme.colors.textPrimary};

  &:hover {
    background-color: ${theme.colors.surfaceHover};
  }

  &.active {
    background-color: ${theme.colors.accent};
    border-color: ${theme.colors.accent};
    color: ${theme.colors.surface};
    box-shadow: ${theme.shadow.sm};
  }
`;
