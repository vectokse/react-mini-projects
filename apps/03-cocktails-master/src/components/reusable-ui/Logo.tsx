import { NavLink } from "react-router";
import styled from "styled-components";
import theme from "../../theme/theme";

interface LogoProps {
  clickable?: boolean;
  className?: string;
}

export default function Logo({
  clickable = true,
  className,
  ...extraProps
}: LogoProps) {
  if (!clickable) {
    return (
      <LogoText className={className} {...extraProps}>
        Cocktails Master
      </LogoText>
    );
  }

  return (
    <LogoLink to={"/"} className={className} {...extraProps}>
      Cocktails Master
    </LogoLink>
  );
}

const logoStyles = `
	color: ${theme.colors.accent};
	font-size: ${theme.font.size.lg};
	font-weight: ${theme.font.weight.medium};
  font-family: ${theme.font.family.primary};
	text-decoration: none;
`;

const LogoLink = styled(NavLink)`
  ${logoStyles}
`;
const LogoText = styled.span`
  ${logoStyles}
`;
