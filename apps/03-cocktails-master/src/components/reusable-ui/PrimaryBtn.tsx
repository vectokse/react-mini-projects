import React from "react";
import styled from "styled-components";
import theme from "../../theme/theme";

interface PrimaryBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  onClick?: () => void;
  icon?: React.ComponentType;
  className?: string;
}

export default function PrimaryBtn({
  label = "Voir plus",
  onClick,
  icon: Icon,
  className,
  ...extraProps
}: PrimaryBtnProps) {
  return (
    <PrimaryBtnStyled className={className} onClick={onClick} {...extraProps}>
      <span>{label}</span>
      {Icon && <Icon />}
    </PrimaryBtnStyled>
  );
}

const PrimaryBtnStyled = styled.button`
  padding: 0.875rem 2rem;
  background-color: ${theme.colors.surface};
  border: 2px solid ${theme.colors.accent};
  color: ${theme.colors.accent};
  font-family: ${theme.font.family.primary};
  font-weight: ${theme.font.weight.medium};
  border-radius: ${theme.radius.md};
  box-shadow: ${theme.shadow.sm};
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: ${theme.font.size.sm};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.surface};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      background-color: ${theme.colors.surface};
      color: ${theme.colors.accent};
    }
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;
