import styled from "styled-components";
import theme from "../../theme/theme";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import SocialLink from "../../components/reusable-ui/SocialLink";
import { SOCIAL_LINKS } from "./Layout.config";

export default function Footer() {
  return (
    <FooterStyled>
      <div className="content-wrapper">
        <p>&copy; 2026 Cocktail Haven. Tous droits réservés.</p>
        <ul className="socials">
          {SOCIAL_LINKS.map(({ id, href, icon, label }) => (
            <li key={id}>
              <SocialLink href={href} icon={icon} label={label} />
            </li>
          ))}
        </ul>
      </div>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  background-color: ${theme.colors.surface};
  border-top: 1px solid ${theme.colors.border};
  padding: 24px 0;
  font-family: ${theme.font.family.primary};
  font-size: ${theme.font.size.sm};
  color: ${theme.colors.textSecondary};

  .content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 16px;

    ${theme.device.tablet} {
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    .socials {
      display: flex;
      gap: 16px;
      list-style: none;
    }
  }
`;
