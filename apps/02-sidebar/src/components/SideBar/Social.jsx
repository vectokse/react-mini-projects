import styled from "styled-components";
import theme from "../../theme/theme";
import { configSocials } from "./configSideBar";

export default function Social() {
  return (
    <StyledSocial>
      {configSocials.map((social) => (
        <a
          key={social.link}
          href={social.link}
          className="social-item"
          aria-label={social.aria_label}
        >
          <i aria-hidden="true">
            <social.icon />
          </i>
        </a>
      ))}
    </StyledSocial>
  );
}

const StyledSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 25px 0px;

  .social-item {
    padding: 7px;
    text-decoration: none;
    font-size: ${theme.font.size.md};
    color: ${theme.colors.textSecondary};
  }

  ${theme.device.isNotShort} {
    padding: 25px 0 0 0;
  }
`;
