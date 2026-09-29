import styled from "styled-components";
import { Link, type LinkProps } from "react-router";
import type { ReactNode } from "react";
import theme from "../../theme/theme";

interface AppTextLinkProps extends LinkProps {
  label: string;
  icon?: ReactNode;
  className?: string;
}

export function AppTextLink({
  label,
  icon,
  className = "",
  ...props
}: AppTextLinkProps) {
  return (
    <AppTextLinkStyled className={`app-link ${className}`} {...props}>
      {icon && <span className="link-icon">{icon}</span>}
      {label}
    </AppTextLinkStyled>
  );
}

const AppTextLinkStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: ${theme.colors.textSecondary};
  font-family: ${theme.font.family.primary};
  font-weight: ${theme.font.weight.medium};
  font-size: ${theme.font.size.sm};
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.colors.accent};
  }

  .link-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
  }

  &:hover .link-icon {
    transform: translateX(-3px);
  }
`;
