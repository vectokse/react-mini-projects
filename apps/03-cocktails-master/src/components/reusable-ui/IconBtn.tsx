import styled from "styled-components";
import type { ReactNode, ButtonHTMLAttributes } from "react";
import theme from "../../theme/theme";

interface IconBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  variant?: "surface" | "transparent";
  size?: "sm" | "md";
}

export function IconBtn({
  icon,
  variant = "surface",
  size = "md",
  className = "",
  ...props
}: IconBtnProps) {
  return (
    <IconBtnStyled
      $variant={variant}
      $size={size}
      className={`icon-btn} ${className}`}
      {...props}
    >
      {icon}
    </IconBtnStyled>
  );
}

const IconBtnStyled = styled.button<{
  $variant: "surface" | "transparent";
  $size: "sm" | "md";
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: ${theme.radius.full};
  transition: all 0.2s ease;

  width: ${({ $size }) => ($size === "sm" ? "2rem" : "48px")};
  height: ${({ $size }) => ($size === "sm" ? "2rem" : "48px")};

  background: ${({ $variant }) =>
    $variant === "surface" ? theme.colors.surface : "none"};
  border: ${({ $variant }) =>
    $variant === "surface" ? `1.5px solid ${theme.colors.border}` : "none"};
  box-shadow: ${({ $variant }) =>
    $variant === "surface" ? theme.shadow.sm : "none"};

  color: ${theme.colors.accent};

  svg {
    width: ${({ $size }) => ($size === "sm" ? "1rem" : "1.25rem")};
    height: ${({ $size }) => ($size === "sm" ? "1rem" : "1.25rem")};
    transition: transform 0.2s ease;
  }

  &:hover {
    background: ${({ $variant }) =>
      $variant === "surface" ? theme.colors.surfaceHover : "transparent"};

    svg {
      transform: scale(1.15);
    }
  }

  &:active {
    transform: scale(0.9);
  }
`;
