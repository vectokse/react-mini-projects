import styled from "styled-components";
import { theme } from "../theme/theme";

export default function Footer() {
  return (
    <StyledFooter>
      <div className="footer-container">
        <div className="credits">
          <span>
            © 2025 Vectose | Conçu avec <strong>React</strong> &{" "}
            <strong>Styled Components</strong>
          </span>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/vectokse/react-mini-projects"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  border-top: 1px solid ${theme.colors.border};
  background-color: ${theme.colors.surface};
  font-family: ${theme.font.family};
  padding: 1.5rem 0;
  margin-top: auto;

  .footer-container {
    max-width: 75rem;
    margin: 0 auto;
    padding: 0 3.125rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .credits {
    font-size: ${theme.font.size.sm};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.text_secondary};

    strong {
      color: ${theme.colors.text_primary};
      font-weight: ${theme.font.weight.semibold};
    }
  }

  .footer-links {
    display: flex;
    gap: 1.25rem;

    a {
      font-size: ${theme.font.size.sm};
      color: ${theme.colors.text_secondary};
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        color: ${theme.colors.text_primary};
      }
    }
  }
`;
