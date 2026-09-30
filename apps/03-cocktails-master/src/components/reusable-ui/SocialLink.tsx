import React from "react";
import styled from "styled-components";
import theme from "../../theme/theme";

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
  className?: string;
}

export default function SocialLink({
  icon,
  href,
  label,
  className,
  ...extraProps
}: SocialLinkProps) {
  return (
    <SocialLinkStyled
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={className}
      {...extraProps}
    >
      {icon}
    </SocialLinkStyled>
  );
}

const SocialLinkStyled = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${theme.radius.full};
  background-color: ${theme.colors.background};
  color: ${theme.colors.textSecondary};
  border: 1px solid ${theme.colors.border};
  transition: all 0.2s ease;

  svg {
    font-size: ${theme.font.size.md};
  }

  &:hover {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.surface};
    border-color: ${theme.colors.accent};
    transform: translateY(-2px);
  }
`;
