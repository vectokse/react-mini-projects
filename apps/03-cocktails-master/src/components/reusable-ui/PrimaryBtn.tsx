import React from "react";
import styled from "styled-components";
import theme from "../../theme/theme";

interface PrimaryBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: (e: React.MouseEvent) => void;
  icon?: React.ComponentType;
  className?: string;
  size?: "sm" | "md";
}

export default function PrimaryBtn({
  label = "Voir plus",
  onClick,
  icon: Icon,
  className,
  size = "md",
  ...extraProps
}: PrimaryBtnProps) {
  return (
    <PrimaryBtnStyled
      className={className}
      onClick={onClick}
      $size={size}
      {...extraProps}
    >
      <span>{label}</span>
      {Icon && <Icon />}
    </PrimaryBtnStyled>
  );
}

const PrimaryBtnStyled = styled.button<{ $size: "sm" | "md" }>`
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
  cursor: pointer;

  padding: ${({ $size }) => ($size === "sm" ? "0.5rem 1rem" : "0.875rem 2rem")};
  font-size: ${({ $size }) =>
    $size === "sm" ? "0.85rem" : theme.font.size.sm};

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
    width: ${({ $size }) => ($size === "sm" ? "0.85rem" : "1rem")};
    height: ${({ $size }) => ($size === "sm" ? "0.85rem" : "1rem")};
  }
`;
