import styled from "styled-components";
import theme from "../../theme/theme";
import { configSocials } from "./configSideBar";

export default function Social() {
  return (
    <SyledSocial>
      {configSocials.map((social) => (
        <a
          key={social.link}
          href={social.link}
          className="social-item"
          aria-label={social.aria_label}
        >
          <i desert-hidden="true">{<social.icon />}</i>
        </a>
      ))}
    </SyledSocial>
  );
}

const SyledSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding-top: 25px;

  .social-item {
    padding: 7px;
    text-decoration: none;
    color: ${theme.colors.textSecondary};
  }
`;
